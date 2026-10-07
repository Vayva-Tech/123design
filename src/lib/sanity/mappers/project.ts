import type {
  ProjectCardModel,
  ProjectPageModel,
  ProjectModuleModel,
  LifecycleStage,
} from '@/types/domain';
import type { ProjectCardRecord, ProjectPageRecord } from '../validation';
import { mapMedia, mapOptionalMedia, mapImage } from './media';

export function mapProjectCard(record: ProjectCardRecord): ProjectCardModel {
  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    shortLabel: record.shortLabel,
    industries: record.industries,
    capabilities: record.capabilities,
    lifecycleStages: record.lifecycleStages as LifecycleStage[],
    heroMedia: mapMedia(record.heroMedia),
    previewVideo: mapOptionalMedia(record.previewVideo),
    year: record.year,
    publicationState: record.publicationState as ProjectCardModel['publicationState'],
    featuredVariant: record.featuredVariant,
  };
}

export function mapProjectPage(record: ProjectPageRecord): ProjectPageModel {
  const clientAllowed =
    record.clientDisplayMode === 'NAMED' && record.clientRelationshipVerified === true;

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    summary: record.summary,
    heroMedia: mapMedia(record.heroMedia),
    industries: record.industries,
    capabilities: record.capabilities,
    lifecycleStages: record.lifecycleStages as ProjectPageModel['lifecycleStages'],
    year: record.year,
    clientDisplayName: clientAllowed ? (record.clientDisplayName ?? undefined) : undefined,
    clientLogo: clientAllowed && record.clientLogo ? mapImage(record.clientLogo) : undefined,
    modules: record.modules.map(mapModule),
    relatedProjects: record.relatedProjects.map(mapProjectCard),
    seo: record.seo
      ? {
          title: record.seo.title,
          description: record.seo.description,
          shareImage: record.seo.shareImage ? mapImage(record.seo.shareImage) : undefined,
          noIndex: record.seo.noIndex,
        }
      : undefined,
  };
}

function mapModule(module: ProjectPageRecord['modules'][number]): ProjectModuleModel {
  switch (module.kind) {
    case 'narrative':
      return {
        kind: 'narrative',
        sectionType: module.sectionType,
        heading: module.heading,
        body: module.body,
        media: mapOptionalMedia(module.media),
        caption: module.caption,
        lifecycleStage: module.lifecycleStage as ProjectModuleModel extends { kind: 'narrative' }
          ? ProjectPageModel['lifecycleStages'][number]
          : undefined,
      };
    case 'discipline':
      return {
        kind: 'discipline',
        sectionType: module.sectionType,
        heading: module.heading,
        body: module.body,
        media: mapOptionalMedia(module.media),
        caption: module.caption,
      };
    case 'gallery':
      return {
        kind: 'gallery',
        items: module.items
          .filter((item): item is { media: NonNullable<typeof item.media>; caption?: string } =>
            Boolean(item.media),
          )
          .map((item) => ({
            media: mapMedia(item.media!),
            caption: item.caption,
          })),
        caption: module.caption,
      };
    case 'video':
      return {
        kind: 'video',
        media: mapMedia(module.media),
        caption: module.caption,
      };
    case 'technical':
      return {
        kind: 'technical',
        heading: module.heading,
        details: module.details,
        media: mapOptionalMedia(module.media),
      };
    case 'testimonial':
      return {
        kind: 'testimonial',
        quote: module.quote,
        name: module.name,
        role: module.role,
        company: module.company,
      };
  }
}
