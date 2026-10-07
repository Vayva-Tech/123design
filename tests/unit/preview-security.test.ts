import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { verifyPreviewSecret } from '../../src/lib/sanity/preview/authorization';
import { getPreviewEnablePath, getPreviewDisablePath } from '../../src/lib/sanity/preview/paths';
import { PreviewAuthorizationError } from '../../src/lib/sanity/errors';

describe('Preview Security', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('verifyPreviewSecret', () => {
    it('returns true for matching secret', () => {
      process.env.SANITY_PREVIEW_SECRET = 'test-secret-value';
      expect(verifyPreviewSecret('test-secret-value')).toBe(true);
    });

    it('throws PreviewAuthorizationError when server secret not configured', () => {
      delete process.env.SANITY_PREVIEW_SECRET;
      expect(() => verifyPreviewSecret('some-secret')).toThrow(PreviewAuthorizationError);
    });

    it('throws when no secret provided (null)', () => {
      process.env.SANITY_PREVIEW_SECRET = 'test-secret-value';
      expect(() => verifyPreviewSecret(null)).toThrow(PreviewAuthorizationError);
    });

    it('throws when secrets do not match', () => {
      process.env.SANITY_PREVIEW_SECRET = 'correct-secret';
      expect(() => verifyPreviewSecret('wrong-secret')).toThrow(PreviewAuthorizationError);
    });

    it('throws when provided secret has different length', () => {
      process.env.SANITY_PREVIEW_SECRET = 'long-secret-value';
      expect(() => verifyPreviewSecret('short')).toThrow(PreviewAuthorizationError);
    });

    it('throws generic message for wrong secret (no information leakage)', () => {
      process.env.SANITY_PREVIEW_SECRET = 'correct-secret';
      try {
        verifyPreviewSecret('wrong-secret');
        expect.unreachable('should have thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(PreviewAuthorizationError);
        expect((error as Error).message).toBe('Preview authorization failed');
      }
    });

    it('throws generic message for null secret (no information leakage)', () => {
      process.env.SANITY_PREVIEW_SECRET = 'correct-secret';
      try {
        verifyPreviewSecret(null);
        expect.unreachable('should have thrown');
      } catch (error) {
        expect(error).toBeInstanceOf(PreviewAuthorizationError);
        expect((error as Error).message).toBe('No preview secret provided.');
      }
    });
  });

  describe('Preview Paths', () => {
    it('getPreviewEnablePath returns /api/draft/enable', () => {
      expect(getPreviewEnablePath()).toBe('/api/draft/enable');
    });

    it('getPreviewDisablePath returns /api/draft/disable', () => {
      expect(getPreviewDisablePath()).toBe('/api/draft/disable');
    });
  });
});

describe('Error Classes', () => {
  it('PreviewAuthorizationError has correct name', () => {
    const error = new PreviewAuthorizationError();
    expect(error.name).toBe('PreviewAuthorizationError');
    expect(error.message).toBe('Preview authorization failed');
  });

  it('PreviewAuthorizationError accepts custom message', () => {
    const error = new PreviewAuthorizationError('Custom message');
    expect(error.message).toBe('Custom message');
  });
});
