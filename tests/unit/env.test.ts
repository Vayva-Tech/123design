import { describe, it, expect } from 'vitest';
import { envSchema } from '@/lib/env/schema';

describe('Environment Validation', () => {
  describe('NEXT_PUBLIC_SITE_URL', () => {
    it('accepts valid URL', () => {
      const result = envSchema.safeParse({
        NEXT_PUBLIC_SITE_URL: 'https://123.design',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.NEXT_PUBLIC_SITE_URL).toBe('https://123.design');
      }
    });

    it('accepts localhost URL', () => {
      const result = envSchema.safeParse({
        NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.NEXT_PUBLIC_SITE_URL).toBe('http://localhost:3000');
      }
    });

    it('defaults to localhost when not provided', () => {
      const result = envSchema.safeParse({});
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.NEXT_PUBLIC_SITE_URL).toBe('http://localhost:3000');
      }
    });

    it('rejects malformed URL', () => {
      const result = envSchema.safeParse({
        NEXT_PUBLIC_SITE_URL: 'not-a-url',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0]?.message).toContain('valid URL');
      }
    });

    it('rejects empty string', () => {
      const result = envSchema.safeParse({
        NEXT_PUBLIC_SITE_URL: '',
      });
      expect(result.success).toBe(false);
    });

    it('rejects URL without protocol', () => {
      const result = envSchema.safeParse({
        NEXT_PUBLIC_SITE_URL: '123.design',
      });
      expect(result.success).toBe(false);
    });
  });
});
