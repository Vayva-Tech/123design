import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { timingSafeEqual } from 'node:crypto';
import { getRevalidationTags, WEBHOOK_TYPE_WHITELIST } from '../../src/lib/sanity/cache-tags';
import { webhookPayloadSchema } from '../../src/lib/sanity/validation/schemas';
import { RevalidationError } from '../../src/lib/sanity/errors';

describe('Revalidation', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('Timing-safe comparison', () => {
    it('timingSafeEqual returns true for matching buffers', () => {
      const a = Buffer.from('test-secret', 'utf-8');
      const b = Buffer.from('test-secret', 'utf-8');
      expect(timingSafeEqual(a, b)).toBe(true);
    });

    it('timingSafeEqual returns false for non-matching buffers', () => {
      const a = Buffer.from('test-secret-aa', 'utf-8');
      const b = Buffer.from('test-secret-bb', 'utf-8');
      expect(timingSafeEqual(a, b)).toBe(false);
    });

    it('timingSafeEqual throws for different-length buffers', () => {
      const a = Buffer.from('long-secret-value', 'utf-8');
      const b = Buffer.from('short', 'utf-8');
      expect(() => timingSafeEqual(a, b)).toThrow();
    });
  });

  describe('Server-side tag derivation via getRevalidationTags', () => {
    it('derives project tags from _type "project"', () => {
      const tags = getRevalidationTags({ _type: 'project' });
      expect(tags).toContain('projects');
      expect(tags).toContain('capabilities');
      expect(tags).toContain('industries');
    });

    it('derives capability tags from _type "capability"', () => {
      const tags = getRevalidationTags({ _type: 'capability' });
      expect(tags).toContain('capabilities');
      expect(tags).toContain('projects');
    });

    it('derives site-settings tag from _type "siteSettings"', () => {
      const tags = getRevalidationTags({ _type: 'siteSettings' });
      expect(tags).toEqual(['site-settings']);
    });

    it('returns empty for unknown type', () => {
      const tags = getRevalidationTags({ _type: 'unknownDocumentType' });
      expect(tags).toEqual([]);
    });

    it('includes dynamic slug tag when slug is valid', () => {
      const tags = getRevalidationTags({ _type: 'project', slug: 'my-project' });
      expect(tags).toContain('project:my-project');
    });

    it('omits dynamic slug tag when slug is invalid', () => {
      const tags = getRevalidationTags({ _type: 'project', slug: 'INVALID' });
      expect(tags).not.toContain('project:INVALID');
    });

    it('maps all whitelisted Sanity document types', () => {
      for (const type of WEBHOOK_TYPE_WHITELIST) {
        const tags = getRevalidationTags({ _type: type });
        expect(tags.length).toBeGreaterThan(0);
      }
    });

    it('deduplicates tags', () => {
      const tags = getRevalidationTags({ _type: 'project', slug: 'test' });
      const uniqueTags = [...new Set(tags)];
      expect(tags.length).toBe(uniqueTags.length);
    });
  });

  describe('Webhook payload validation', () => {
    it('accepts valid payload with _type only', () => {
      const result = webhookPayloadSchema.safeParse({
        _type: 'project',
      });
      expect(result.success).toBe(true);
    });

    it('accepts valid payload with _type and _id', () => {
      const result = webhookPayloadSchema.safeParse({
        _type: 'article',
        _id: 'article-1',
      });
      expect(result.success).toBe(true);
    });

    it('accepts valid payload with _type and slug', () => {
      const result = webhookPayloadSchema.safeParse({
        _type: 'project',
        slug: 'my-project',
      });
      expect(result.success).toBe(true);
    });

    it('accepts full payload with all fields', () => {
      const result = webhookPayloadSchema.safeParse({
        _type: 'project',
        _id: 'proj-1',
        slug: 'my-project',
      });
      expect(result.success).toBe(true);
    });

    it('rejects payload without _type field', () => {
      const result = webhookPayloadSchema.safeParse({
        _id: 'proj-1',
        slug: 'test',
      });
      expect(result.success).toBe(false);
    });

    it('strips unknown fields', () => {
      const result = webhookPayloadSchema.safeParse({
        _type: 'project',
        tags: ['malicious-tag'],
        paths: ['/malicious-path'],
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).not.toHaveProperty('tags');
        expect(result.data).not.toHaveProperty('paths');
      }
    });
  });

  describe('RevalidationError class', () => {
    it('has correct name and reason', () => {
      const error = new RevalidationError('Failed', 'invalid_secret');
      expect(error.name).toBe('RevalidationError');
      expect(error.reason).toBe('invalid_secret');
      expect(error.message).toBe('Failed');
    });
  });
});
