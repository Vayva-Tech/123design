import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { hasSanityConfig } from '@/lib/sanity/config';
import {
  fetchPublishedCapabilities,
  fetchCapabilityBySlug,
  fetchPreviewCapabilityBySlug,
  fetchProjectsByCapabilitySlug,
} from '@/lib/sanity/fetch/data-access';
import { mapCapabilityCard, mapCapabilityPage } from '@/lib/sanity/mappers/capability';
import { mapProjectCard } from '@/lib/sanity/mappers/project';
import { CANONICAL_CAPABILITIES, isCanonicalSlug, getCanonicalCapability } from './registry';
import type {
  CapabilityGroup,
  CapabilityGroupData,
  CapabilityIndexEntry,
  CapabilitiesIndexData,
  CapabilityPageData,
} from './types';
import type { ProjectCardModel } from '@/types/domain';

const MAX_RELATED_PROJECTS = 3;
const MAX_RELATED_CAPABILITIES = 3;

const GROUP_ORDER: CapabilityGroup[] = ['DESIGN', 'ENGINEERING', 'BUILD', 'MANAGE'];

function toIndexEntry(
  slug: string,
  title: string,
  group: CapabilityGroup,
  order: number,
  shortDescription?: string,
  lifecycleStages?: string[],
): CapabilityIndexEntry {
  return {
    slug,
    title,
    group,
    order,
    shortDescription,
    lifecycleStages: lifecycleStages as CapabilityIndexEntry['lifecycleStages'],
  };
}

function buildStaticGroups(): CapabilityGroupData[] {
  const groups: CapabilityGroupData[] = [];

  for (const group of GROUP_ORDER) {
    const members = CANONICAL_CAPABILITIES.filter((c) => c.group === group)
      .sort((a, b) => a.order - b.order)
      .map((c) =>
        toIndexEntry(c.slug, c.title, c.group, c.order, c.shortDescription, c.lifecycleStages),
      );

    if (members.length > 0) {
      groups.push({ group, label: group, capabilities: members });
    }
  }

  return groups;
}

function resolveRelatedCapabilities(
  slugs: string[] | undefined,
  currentSlug: string,
): CapabilityIndexEntry[] {
  if (!slugs || slugs.length === 0) return [];

  const resolved: CapabilityIndexEntry[] = [];

  for (const slug of slugs) {
    if (slug === currentSlug) continue;
    if (!isCanonicalSlug(slug)) continue;

    const def = getCanonicalCapability(slug);
    if (!def) continue;

    resolved.push(
      toIndexEntry(
        def.slug,
        def.title,
        def.group,
        def.order,
        def.shortDescription,
        def.lifecycleStages,
      ),
    );

    if (resolved.length >= MAX_RELATED_CAPABILITIES) break;
  }

  return resolved;
}

async function resolveRelatedProjects(slug: string): Promise<ProjectCardModel[]> {
  const records = await fetchProjectsByCapabilitySlug(slug);
  return records.map(mapProjectCard).slice(0, MAX_RELATED_PROJECTS);
}

export async function getCapabilitiesIndexData(): Promise<CapabilitiesIndexData> {
  if (!hasSanityConfig()) {
    return { groups: buildStaticGroups(), cmsAvailable: false };
  }

  try {
    const records = await fetchPublishedCapabilities();
    const cards = records.map(mapCapabilityCard);

    const cmsBySlug = new Map(cards.map((c) => [c.slug, c]));

    const groups: CapabilityGroupData[] = [];

    for (const group of GROUP_ORDER) {
      const members = CANONICAL_CAPABILITIES.filter((c) => c.group === group)
        .sort((a, b) => a.order - b.order)
        .map((c) => {
          const cmsCard = cmsBySlug.get(c.slug);
          if (cmsCard) {
            return toIndexEntry(
              cmsCard.slug,
              cmsCard.title,
              c.group,
              c.order,
              cmsCard.shortDescription,
              cmsCard.lifecycleStages,
            );
          }
          return null;
        })
        .filter((entry): entry is CapabilityIndexEntry => entry !== null);

      if (members.length > 0) {
        groups.push({ group, label: group, capabilities: members });
      }
    }

    return { groups, cmsAvailable: true };
  } catch {
    return { groups: buildStaticGroups(), cmsAvailable: false };
  }
}

function buildStaticPageData(slug: string): CapabilityPageData {
  const def = getCanonicalCapability(slug);
  if (!def) notFound();

  return {
    slug: def.slug,
    title: def.title,
    group: def.group,
    shortDescription: def.shortDescription,
    intro: def.intro,
    body: def.body,
    deliverables: def.deliverables ?? [],
    lifecycleStages: def.lifecycleStages ?? [],
    methods: def.methods ?? [],
    heroMedia: def.heroMedia,
    supportMedia: def.supportMedia,
    relatedCapabilities: resolveRelatedCapabilities(def.relatedCapabilitySlugs, def.slug),
    relatedProjects: [],
    isPreview: false,
    cmsAvailable: false,
  };
}

export async function getCapabilityPageData(slug: string): Promise<CapabilityPageData> {
  if (!isCanonicalSlug(slug)) {
    notFound();
  }

  const draft = await draftMode();
  const isPreview = draft.isEnabled;

  if (!hasSanityConfig()) {
    return buildStaticPageData(slug);
  }

  const def = getCanonicalCapability(slug)!;

  try {
    let record;
    if (isPreview) {
      record = await fetchPreviewCapabilityBySlug(slug);
      if (!record) {
        notFound();
      }
    } else {
      record = await fetchCapabilityBySlug(slug);
      if (!record) {
        notFound();
      }
    }

    const page = mapCapabilityPage(record);

    const relatedCapabilities = resolveRelatedCapabilities(def.relatedCapabilitySlugs, slug);

    const relatedProjects = await resolveRelatedProjects(slug);

    return {
      slug: page.slug,
      title: page.title,
      group: def.group,
      shortDescription: page.shortDescription,
      intro: page.intro || undefined,
      deliverables: page.deliverables.length > 0 ? page.deliverables : (def.deliverables ?? []),
      lifecycleStages:
        page.lifecycleStages.length > 0 ? page.lifecycleStages : (def.lifecycleStages ?? []),
      methods: page.methods.length > 0 ? page.methods : (def.methods ?? []),
      body: page.body || undefined,
      relatedCapabilities,
      relatedProjects,
      heroMedia: page.heroMedia,
      supportMedia: page.supportMedia && page.supportMedia.length > 0 ? page.supportMedia : undefined,
      isPreview,
      cmsAvailable: true,
    };
  } catch {
    return buildStaticPageData(slug);
  }
}
