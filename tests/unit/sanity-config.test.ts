import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  apiVersion,
  getSanityProjectId,
  getSanityDataset,
  hasSanityConfig,
} from '../../src/lib/sanity/config';
import { envSchema } from '../../src/lib/env/schema';

describe('Sanity Config', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('apiVersion', () => {
    it('exports apiVersion constant', () => {
      expect(apiVersion).toBeDefined();
      expect(typeof apiVersion).toBe('string');
      expect(apiVersion).toBe('2026-09-26');
    });
  });

  describe('getSanityProjectId', () => {
    it('returns undefined when env var is not set', () => {
      delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      expect(getSanityProjectId()).toBeUndefined();
    });

    it('returns project ID when env var is set', () => {
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'abc123';
      expect(getSanityProjectId()).toBe('abc123');
    });

    it('returns empty string when env var is empty', () => {
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = '';
      expect(getSanityProjectId()).toBe('');
    });
  });

  describe('getSanityDataset', () => {
    it('returns undefined when env var is not set', () => {
      delete process.env.NEXT_PUBLIC_SANITY_DATASET;
      expect(getSanityDataset()).toBeUndefined();
    });

    it('returns dataset when env var is set', () => {
      process.env.NEXT_PUBLIC_SANITY_DATASET = 'production';
      expect(getSanityDataset()).toBe('production');
    });

    it('returns empty string when env var is empty', () => {
      process.env.NEXT_PUBLIC_SANITY_DATASET = '';
      expect(getSanityDataset()).toBe('');
    });
  });

  describe('hasSanityConfig', () => {
    it('returns false when both env vars are missing', () => {
      delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      delete process.env.NEXT_PUBLIC_SANITY_DATASET;
      expect(hasSanityConfig()).toBe(false);
    });

    it('returns false when only project ID is set', () => {
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'abc123';
      delete process.env.NEXT_PUBLIC_SANITY_DATASET;
      expect(hasSanityConfig()).toBe(false);
    });

    it('returns false when only dataset is set', () => {
      delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      process.env.NEXT_PUBLIC_SANITY_DATASET = 'production';
      expect(hasSanityConfig()).toBe(false);
    });

    it('returns false when project ID is empty', () => {
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = '';
      process.env.NEXT_PUBLIC_SANITY_DATASET = 'production';
      expect(hasSanityConfig()).toBe(false);
    });

    it('returns false when dataset is empty', () => {
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'abc123';
      process.env.NEXT_PUBLIC_SANITY_DATASET = '';
      expect(hasSanityConfig()).toBe(false);
    });

    it('returns true when both env vars are set', () => {
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'abc123';
      process.env.NEXT_PUBLIC_SANITY_DATASET = 'production';
      expect(hasSanityConfig()).toBe(true);
    });
  });
});

describe('Environment Contract', () => {
  it('accepts SANITY_API_READ_TOKEN as optional', () => {
    const result = envSchema.safeParse({
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      SANITY_API_READ_TOKEN: 'test-token',
    });
    expect(result.success).toBe(true);
  });

  it('accepts SANITY_REVALIDATE_SECRET as optional', () => {
    const result = envSchema.safeParse({
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      SANITY_REVALIDATE_SECRET: 'test-secret',
    });
    expect(result.success).toBe(true);
  });

  it('accepts both server-only env vars together', () => {
    const result = envSchema.safeParse({
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      SANITY_API_READ_TOKEN: 'test-token',
      SANITY_REVALIDATE_SECRET: 'test-secret',
    });
    expect(result.success).toBe(true);
  });

  it('does not define SANITY_API_TOKEN', () => {
    const shape = envSchema.shape;
    expect(shape).not.toHaveProperty('SANITY_API_TOKEN');
  });

  it('defines NEXT_PUBLIC_SANITY_PROJECT_ID as public', () => {
    const shape = envSchema.shape;
    expect(shape).toHaveProperty('NEXT_PUBLIC_SANITY_PROJECT_ID');
  });

  it('defines NEXT_PUBLIC_SANITY_DATASET as public', () => {
    const shape = envSchema.shape;
    expect(shape).toHaveProperty('NEXT_PUBLIC_SANITY_DATASET');
  });
});

describe('Deprecated SANITY_API_TOKEN absence', () => {
  it('SANITY_API_TOKEN is not in env schema', () => {
    const shape = envSchema.shape;
    expect(shape).not.toHaveProperty('SANITY_API_TOKEN');
  });
});
