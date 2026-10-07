import { createClient, type SanityClient } from 'next-sanity';
import { apiVersion, getSanityDataset, getSanityProjectId } from '../config';
import { SanityConfigError } from '../errors';

let previewClient: SanityClient | null = null;

export function getPreviewClient(): SanityClient {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!token) {
    throw new SanityConfigError('SANITY_API_READ_TOKEN is required for preview access.');
  }

  if (!getSanityProjectId() || !getSanityDataset()) {
    throw new SanityConfigError('Sanity project ID and dataset are required for preview.');
  }

  if (previewClient) {
    return previewClient;
  }

  previewClient = createClient({
    projectId: getSanityProjectId(),
    dataset: getSanityDataset(),
    apiVersion,
    useCdn: false,
    token,
    perspective: 'drafts',
  });

  return previewClient;
}
