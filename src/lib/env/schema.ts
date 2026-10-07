import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url('NEXT_PUBLIC_SITE_URL must be a valid URL')
    .default('http://localhost:3000'),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).optional(),
  SANITY_API_READ_TOKEN: z.string().min(1).optional(),
  SANITY_REVALIDATE_SECRET: z.string().min(1).optional(),
  SANITY_PREVIEW_SECRET: z.string().min(1).optional(),
  NEXT_PUBLIC_ANALYTICS_DOMAIN: z.string().min(1).optional(),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().min(1).optional(),
  NEXT_PUBLIC_BING_SITE_VERIFICATION: z.string().min(1).optional(),
});

export type Env = z.infer<typeof envSchema>;
