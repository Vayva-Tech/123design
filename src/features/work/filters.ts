import { z } from 'zod';
import type { ProjectCardModel, LifecycleStage } from '@/types/domain';
import {
  CANONICAL_INDUSTRIES,
  CANONICAL_CAPABILITIES,
  STAGE_ORDER,
  STAGE_URL_MAP,
  PUBLIC_INDUSTRY_SLUGS,
  type WorkFilterState,
  type WorkFacets,
  type WorkFacetOption,
} from './types';

const filterParamsSchema = z.object({
  industry: z.string().optional(),
  capability: z.string().optional(),
  stage: z.string().optional(),
});

export function parseWorkFilters(
  searchParams: Record<string, string | string[] | undefined>,
): WorkFilterState {
  const parsed = filterParamsSchema.parse({
    industry: searchParams.industry,
    capability: searchParams.capability,
    stage: searchParams.stage,
  });

  const industry = parsed.industry
    ? CANONICAL_INDUSTRIES.some((i) => i.slug === parsed.industry)
      ? parsed.industry
      : null
    : null;

  const capability = parsed.capability
    ? CANONICAL_CAPABILITIES.some((c) => c.slug === parsed.capability)
      ? parsed.capability
      : null
    : null;

  const stage: LifecycleStage | null = parsed.stage ? (STAGE_URL_MAP[parsed.stage] ?? null) : null;

  return { industry, capability, stage };
}

export function isOtherIndustryProject(project: ProjectCardModel): boolean {
  if (project.industries.length === 0) return false;
  return project.industries.some((ref) => !PUBLIC_INDUSTRY_SLUGS.has(ref.slug));
}

function matchesIndustry(project: ProjectCardModel, industrySlug: string): boolean {
  if (industrySlug === 'other') {
    return isOtherIndustryProject(project);
  }
  return project.industries.some((ref) => ref.slug === industrySlug);
}

function matchesCapability(project: ProjectCardModel, capabilitySlug: string): boolean {
  return project.capabilities.some((ref) => ref.slug === capabilitySlug);
}

function matchesStage(project: ProjectCardModel, stage: LifecycleStage): boolean {
  return project.lifecycleStages.includes(stage);
}

export function filterProjects(
  projects: ProjectCardModel[],
  filters: WorkFilterState,
): ProjectCardModel[] {
  return projects.filter((project) => {
    if (filters.industry && !matchesIndustry(project, filters.industry)) return false;
    if (filters.capability && !matchesCapability(project, filters.capability)) return false;
    if (filters.stage && !matchesStage(project, filters.stage)) return false;
    return true;
  });
}

function deriveIndustryFacets(projects: ProjectCardModel[]): WorkFacetOption[] {
  const counts = new Map<string, number>();

  for (const project of projects) {
    const matchedSlugs = new Set<string>();
    for (const ref of project.industries) {
      if (PUBLIC_INDUSTRY_SLUGS.has(ref.slug)) {
        matchedSlugs.add(ref.slug);
      }
    }
    if (isOtherIndustryProject(project)) {
      matchedSlugs.add('other');
    }
    for (const slug of matchedSlugs) {
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return CANONICAL_INDUSTRIES.reduce<WorkFacetOption[]>((acc, def) => {
    const count = counts.get(def.slug) ?? 0;
    if (count > 0) {
      acc.push({ slug: def.slug, title: def.title, count });
    }
    return acc;
  }, []);
}

function deriveCapabilityFacets(projects: ProjectCardModel[]): WorkFacetOption[] {
  const counts = new Map<string, number>();

  for (const project of projects) {
    const matchedSlugs = new Set<string>();
    for (const ref of project.capabilities) {
      matchedSlugs.add(ref.slug);
    }
    for (const slug of matchedSlugs) {
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return CANONICAL_CAPABILITIES.reduce<WorkFacetOption[]>((acc, def) => {
    const count = counts.get(def.slug) ?? 0;
    if (count > 0) {
      acc.push({ slug: def.slug, title: def.title, count });
    }
    return acc;
  }, []);
}

function deriveStageFacets(projects: ProjectCardModel[]): WorkFacetOption[] {
  const counts = new Map<LifecycleStage, number>();

  for (const project of projects) {
    const seen = new Set<LifecycleStage>();
    for (const stage of project.lifecycleStages) {
      seen.add(stage);
    }
    for (const stage of seen) {
      counts.set(stage, (counts.get(stage) ?? 0) + 1);
    }
  }

  const stageTitles: Record<LifecycleStage, string> = {
    CON: 'Concept',
    EVT: 'EVT',
    DVT: 'DVT',
    PVT: 'PVT',
    PRODUCTION: 'Production',
  };

  return STAGE_ORDER.reduce<WorkFacetOption[]>((acc, stage) => {
    const count = counts.get(stage) ?? 0;
    if (count > 0) {
      acc.push({ slug: stage, title: stageTitles[stage], count });
    }
    return acc;
  }, []);
}

export function deriveWorkFacets(projects: ProjectCardModel[]): WorkFacets {
  return {
    industries: deriveIndustryFacets(projects),
    capabilities: deriveCapabilityFacets(projects),
    stages: deriveStageFacets(projects),
  };
}

export function countActiveFilters(filters: WorkFilterState): number {
  let count = 0;
  if (filters.industry) count++;
  if (filters.capability) count++;
  if (filters.stage) count++;
  return count;
}
