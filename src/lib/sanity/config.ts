import { SANITY_API_VERSION } from '../../../sanity/lib/constants';

export const apiVersion = SANITY_API_VERSION;

export function getSanityProjectId(): string | undefined {
  return process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
}

export function getSanityDataset(): string | undefined {
  return process.env.NEXT_PUBLIC_SANITY_DATASET;
}

export function hasSanityConfig(): boolean {
  return Boolean(getSanityProjectId() && getSanityDataset());
}
