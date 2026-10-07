import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, getSanityDataset, getSanityProjectId, hasSanityConfig } from './config';

let client: SanityClient | null = null;

export function getSanityClient(): SanityClient {
  if (!hasSanityConfig()) {
    throw new Error(
      'Sanity client configuration is missing. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET environment variables.',
    );
  }

  if (client) {
    return client;
  }

  client = createClient({
    projectId: getSanityProjectId(),
    dataset: getSanityDataset(),
    apiVersion,
    useCdn: true,
  });

  return client;
}
