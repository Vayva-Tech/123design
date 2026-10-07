import { hasSanityConfig } from '@/lib/sanity/config';
import { fetchPublishedProjects } from '@/lib/sanity/fetch/data-access';
import { mapProjectCard } from '@/lib/sanity/mappers/project';
import type { ProjectCardModel } from '@/types/domain';
import { parseWorkFilters, deriveWorkFacets, filterProjects } from './filters';
import type { WorkFilterState, WorkIndexData } from './types';
import { STATIC_FEATURED_PROJECTS } from './static-projects';

const EMPTY_RESULT: WorkIndexData = {
  cmsAvailable: false,
  allProjects: STATIC_FEATURED_PROJECTS,
  filteredProjects: STATIC_FEATURED_PROJECTS,
  facets: deriveWorkFacets(STATIC_FEATURED_PROJECTS),
  activeFilters: { industry: null, capability: null, stage: null },
  totalResultCount: STATIC_FEATURED_PROJECTS.length,
  filteredResultCount: STATIC_FEATURED_PROJECTS.length,
};

export async function getWorkIndexData(
  searchParams: Record<string, string | string[] | undefined>,
): Promise<WorkIndexData> {
  if (!hasSanityConfig()) {
    const activeFilters = parseWorkFilters(searchParams);
    const filtered = filterProjects(STATIC_FEATURED_PROJECTS, activeFilters);
    return {
      ...EMPTY_RESULT,
      activeFilters,
      filteredProjects: filtered,
      filteredResultCount: filtered.length,
    };
  }

  try {
    const records = await fetchPublishedProjects();
    const cmsProjects: ProjectCardModel[] = records.map(mapProjectCard);
    const projects = cmsProjects.length > 0 ? cmsProjects : STATIC_FEATURED_PROJECTS;
    const activeFilters: WorkFilterState = parseWorkFilters(searchParams);
    const facets = deriveWorkFacets(projects);
    const filteredProjects = filterProjects(projects, activeFilters);

    return {
      cmsAvailable: true,
      allProjects: projects,
      filteredProjects,
      facets,
      activeFilters,
      totalResultCount: projects.length,
      filteredResultCount: filteredProjects.length,
    };
  } catch {
    const activeFilters = parseWorkFilters(searchParams);
    const filtered = filterProjects(STATIC_FEATURED_PROJECTS, activeFilters);
    return {
      ...EMPTY_RESULT,
      activeFilters,
      filteredProjects: filtered,
      filteredResultCount: filtered.length,
    };
  }
}
