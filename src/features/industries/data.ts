import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { hasSanityConfig } from '@/lib/sanity/config';
import {
  fetchPublishedIndustries,
  fetchIndustryBySlug,
  fetchPreviewIndustryBySlug,
  fetchProjectsByIndustrySlug,
} from '@/lib/sanity/fetch/data-access';
import { mapIndustryPage } from '@/lib/sanity/mappers/industry';
import { mapProjectCard } from '@/lib/sanity/mappers/project';
import { CANONICAL_INDUSTRIES, isCanonicalIndustrySlug, getCanonicalIndustry } from './registry';
import type { IndustryIndexEntry, IndustriesIndexData, IndustryPageData } from './types';
import type { CapabilityCardModel, ProjectCardModel } from '@/types/domain';

const MAX_RELATED_PROJECTS = 3;
const MAX_RELATED_CAPABILITIES = 4;

function toIndexEntry(slug: string, title: string, shortDescription: string): IndustryIndexEntry {
  return { slug, title, shortDescription };
}

function buildStaticIndex(): IndustryIndexEntry[] {
  return CANONICAL_INDUSTRIES.map((industry) =>
    toIndexEntry(industry.slug, industry.title, industry.shortDescription),
  );
}

async function resolveRelatedProjects(slug: string): Promise<ProjectCardModel[]> {
  const records = await fetchProjectsByIndustrySlug(slug);
  return records.map(mapProjectCard).slice(0, MAX_RELATED_PROJECTS);
}

function resolveRelatedCapabilities(capabilitySlugs: string[]): CapabilityCardModel[] {
  return capabilitySlugs
    .map((slug) => ({
      slug,
      title: slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      shortDescription: '',
      lifecycleStages: [],
      heroMedia: undefined,
    }))
    .slice(0, MAX_RELATED_CAPABILITIES);
}

export async function getIndustriesIndexData(): Promise<IndustriesIndexData> {
  if (!hasSanityConfig()) {
    return { industries: buildStaticIndex(), cmsAvailable: false };
  }

  try {
    const records = await fetchPublishedIndustries();
    const pages = records.map(mapIndustryPage);

    const cmsBySlug = new Map(pages.map((p) => [p.slug, p]));

    const industries: IndustryIndexEntry[] = CANONICAL_INDUSTRIES.map((industry) => {
      const cmsPage = cmsBySlug.get(industry.slug);
      if (cmsPage) {
        return toIndexEntry(cmsPage.slug, cmsPage.title, cmsPage.shortDescription);
      }
      return null;
    }).filter((entry): entry is IndustryIndexEntry => entry !== null);

    return { industries, cmsAvailable: true };
  } catch {
    return { industries: buildStaticIndex(), cmsAvailable: false };
  }
}

function buildStaticPageData(slug: string): IndustryPageData {
  const def = getCanonicalIndustry(slug);
  if (!def) notFound();

  return {
    slug: def.slug,
    title: def.title,
    shortDescription: def.shortDescription,
    typicalChallenges: [],
    developmentConsiderations: [],
    relatedCapabilities: resolveRelatedCapabilities(def.relatedCapabilitySlugs),
    relatedProjects: [],
    isPreview: false,
    cmsAvailable: false,
  };
}

export async function getIndustryPageData(slug: string): Promise<IndustryPageData> {
  if (!isCanonicalIndustrySlug(slug)) {
    notFound();
  }

  const draft = await draftMode();
  const isPreview = draft.isEnabled;

  if (!hasSanityConfig()) {
    return buildStaticPageData(slug);
  }

  const def = getCanonicalIndustry(slug)!;

  try {
    let record;
    if (isPreview) {
      record = await fetchPreviewIndustryBySlug(slug);
      if (!record) {
        notFound();
      }
    } else {
      record = await fetchIndustryBySlug(slug);
      if (!record) {
        notFound();
      }
    }

    const page = mapIndustryPage(record);

    const relatedProjects = await resolveRelatedProjects(slug);

    return {
      slug: page.slug,
      title: page.title,
      shortDescription: page.shortDescription,
      intro: page.intro || undefined,
      typicalChallenges: page.typicalChallenges.length > 0 ? page.typicalChallenges : [],
      developmentConsiderations:
        page.developmentConsiderations.length > 0 ? page.developmentConsiderations : [],
      relatedCapabilities:
        page.relatedCapabilities.length > 0
          ? page.relatedCapabilities.slice(0, MAX_RELATED_CAPABILITIES)
          : resolveRelatedCapabilities(def.relatedCapabilitySlugs),
      relatedProjects,
      heroMedia: page.heroMedia,
      isPreview,
      cmsAvailable: true,
    };
  } catch {
    return buildStaticPageData(slug);
  }
}
