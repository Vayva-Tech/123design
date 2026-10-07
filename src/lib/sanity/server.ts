import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, getSanityDataset, getSanityProjectId } from './config';
import { SanityConfigError } from './errors';

let serverClient: SanityClient | null = null;

export function getSanityServerClient(): SanityClient {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!token) {
    throw new SanityConfigError('SANITY_API_READ_TOKEN is required for server-side Sanity access.');
  }

  if (!getSanityProjectId() || !getSanityDataset()) {
    throw new SanityConfigError(
      'Sanity project ID and dataset are required. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.',
    );
  }

  if (serverClient) {
    return serverClient;
  }

  serverClient = createClient({
    projectId: getSanityProjectId(),
    dataset: getSanityDataset(),
    apiVersion,
    useCdn: false,
    token,
  });

  return serverClient;
}
