import { z } from 'zod';
import { envSchema, type Env } from './schema';

function validateEnv(): Env {
  try {
    const parsed = envSchema.parse(process.env);
    return parsed;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formatted = error.format();
      console.error('❌ Invalid environment variables:', JSON.stringify(formatted, null, 2));
      throw new Error('Environment validation failed');
    }
    throw error;
  }
}

export const env = validateEnv();
