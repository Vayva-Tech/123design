import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { hasSanityConfig } from '@/lib/sanity/config';
import { fetchProjectBySlug, fetchPreviewProjectBySlug } from '@/lib/sanity/fetch/data-access';
import { mapProjectPage } from '@/lib/sanity/mappers/project';
import { fetchPublishedProjects } from '@/lib/sanity/fetch/data-access';
import { mapProjectCard } from '@/lib/sanity/mappers/project';
import { getProjectPresentationMode } from './presentation';
import { getStaticProjectPage, getStaticRelatedProjects } from './static-project-pages';
import { STATIC_FEATURED_PROJECTS } from '@/features/work/static-projects';
import type { ProjectPageData } from './types';
import type { ProjectCardModel } from '@/types/domain';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isValidProjectSlug(slug: string): boolean {
  return slug.length > 0 && slug.length <= 200 && SLUG_PATTERN.test(slug);
}

function resolveNextProject(
  currentSlug: string,
  allProjects: ProjectCardModel[],
): ProjectCardModel | null {
  if (allProjects.length === 0) return null;
  const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % allProjects.length;
  return allProjects[nextIndex] ?? null;
}

export async function getProjectPageData(slug: string): Promise<ProjectPageData> {
  if (!isValidProjectSlug(slug)) {
    notFound();
  }

  const draft = await draftMode();
  const isPreview = draft.isEnabled;

  if (!hasSanityConfig()) {
    const staticProject = getStaticProjectPage(slug);
    if (staticProject) {
      const relatedCards = getStaticRelatedProjects(slug).map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        industries: p.industries.map((ind) => ({ slug: ind.toLowerCase().replace(/\s+/g, '-'), title: ind })),
        capabilities: p.capabilities.map((cap) => ({ slug: cap.toLowerCase().replace(/\s+/g, '-'), title: cap })),
        lifecycleStages: p.lifecycleStages,
        heroMedia: p.heroMedia,
        year: p.year,
        publicationState: 'PUBLISHED' as const,
      }));
      const presentationMode = getProjectPresentationMode(staticProject.modules);
      const projectWithRelated = {
        ...staticProject,
        relatedProjects: relatedCards.length > 0 ? relatedCards : staticProject.relatedProjects,
      };
      const nextProject = resolveNextProject(slug, [
        ...relatedCards,
        ...STATIC_FEATURED_PROJECTS.filter((p) => p.slug !== slug),
      ]);
      return {
        project: projectWithRelated,
        presentationMode,
        isPreview: false,
        nextProject,
      };
    }
    notFound();
  }

  let record;

  if (isPreview) {
    record = await fetchPreviewProjectBySlug(slug);
    if (!record) {
      notFound();
    }
  } else {
    record = await fetchProjectBySlug(slug);
    if (!record) {
      notFound();
    }
  }

  const project = mapProjectPage(record!);
  const presentationMode = getProjectPresentationMode(project.modules);

  let nextProject: ProjectCardModel | null = null;
  if (!isPreview) {
    try {
      const allProjects = await fetchPublishedProjects();
      const cards = allProjects.map(mapProjectCard);
      nextProject = resolveNextProject(slug, cards);
    } catch {
      nextProject = null;
    }
  }

  return {
    project,
    presentationMode,
    isPreview,
    nextProject,
  };
}
