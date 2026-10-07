import type { CapabilityCardModel, CapabilityPageModel } from '@/types/domain';
import type { CapabilityCardRecord, CapabilityPageRecord } from '../validation';
import { mapMedia, mapOptionalMedia } from './media';

export function mapCapabilityCard(record: CapabilityCardRecord): CapabilityCardModel {
  return {
    slug: record.slug,
    title: record.title,
    shortDescription: record.shortDescription,
    lifecycleStages: record.lifecycleStages as CapabilityCardModel['lifecycleStages'],
    heroMedia: mapOptionalMedia(record.heroMedia),
  };
}

export function mapCapabilityPage(record: CapabilityPageRecord): CapabilityPageModel {
  return {
    slug: record.slug,
    title: record.title,
    shortDescription: record.shortDescription,
    intro: record.intro,
    deliverables: record.deliverables,
    lifecycleStages: record.lifecycleStages as CapabilityPageModel['lifecycleStages'],
    methods: record.methods,
    body: record.body,
    relatedCapabilities: record.relatedCapabilities.map(mapCapabilityCard),
    relatedProjects: [],
    heroMedia: mapOptionalMedia(record.heroMedia),
    supportMedia: record.supportMedia.map(mapMedia),
    cta: record.cta
      ? { label: record.cta.label, href: record.cta.href, variant: record.cta.variant }
      : undefined,
    seo: record.seo
      ? {
          title: record.seo.title,
          description: record.seo.description,
          noIndex: record.seo.noIndex,
        }
      : undefined,
  };
}
