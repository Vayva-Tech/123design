import type { ProjectCardModel, LifecycleStage } from '@/types/domain';

export interface WorkFilterState {
  industry: string | null;
  capability: string | null;
  stage: LifecycleStage | null;
}

export interface WorkFacetOption {
  slug: string;
  title: string;
  count: number;
}

export interface WorkFacets {
  industries: WorkFacetOption[];
  capabilities: WorkFacetOption[];
  stages: WorkFacetOption[];
}

export interface WorkIndexData {
  cmsAvailable: boolean;
  allProjects: ProjectCardModel[];
  filteredProjects: ProjectCardModel[];
  facets: WorkFacets;
  activeFilters: WorkFilterState;
  totalResultCount: number;
  filteredResultCount: number;
}

export const CANONICAL_INDUSTRIES: ReadonlyArray<{ slug: string; title: string }> = [
  { slug: 'consumer-products', title: 'Consumer Products' },
  { slug: 'medical', title: 'Medical' },
  { slug: 'defense-security', title: 'Defense & Security' },
  { slug: 'electronics', title: 'Electronics' },
  { slug: 'industrial', title: 'Industrial' },
  { slug: 'emerging-technology', title: 'Emerging Technology' },
  { slug: 'other', title: 'Other' },
] as const;

export const CANONICAL_INDUSTRY_SLUGS: ReadonlySet<string> = new Set(
  CANONICAL_INDUSTRIES.map((i) => i.slug),
);

export const PUBLIC_INDUSTRY_SLUGS: ReadonlySet<string> = new Set(
  CANONICAL_INDUSTRIES.filter((i) => i.slug !== 'other').map((i) => i.slug),
);

export const CANONICAL_CAPABILITIES: ReadonlyArray<{ slug: string; title: string }> = [
  { slug: 'industrial-design', title: 'Industrial Design' },
  { slug: 'mechanical-engineering', title: 'Mechanical Engineering' },
  { slug: 'electrical-engineering', title: 'Electrical Engineering' },
  { slug: 'prototyping', title: 'Prototyping' },
  { slug: 'tooling', title: 'Tooling' },
  { slug: 'manufacturing', title: 'Manufacturing' },
  { slug: 'program-management', title: 'Program Management' },
] as const;

export const CANONICAL_CAPABILITY_SLUGS: ReadonlySet<string> = new Set(
  CANONICAL_CAPABILITIES.map((c) => c.slug),
);

export const STAGE_ORDER: ReadonlyArray<LifecycleStage> = [
  'CON',
  'EVT',
  'DVT',
  'PVT',
  'PRODUCTION',
] as const;

export const STAGE_URL_MAP: Readonly<Record<string, LifecycleStage>> = {
  con: 'CON',
  evt: 'EVT',
  dvt: 'DVT',
  pvt: 'PVT',
  production: 'PRODUCTION',
};

export const STAGE_TO_URL: Readonly<Record<LifecycleStage, string>> = {
  CON: 'con',
  EVT: 'evt',
  DVT: 'dvt',
  PVT: 'pvt',
  PRODUCTION: 'production',
};
