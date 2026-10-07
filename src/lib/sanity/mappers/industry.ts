import type { IndustryPageModel } from '@/types/domain';
import type { IndustryPageRecord } from '../validation';
import { mapOptionalMedia } from './media';
import { mapCapabilityCard } from './capability';

export function mapIndustryPage(record: IndustryPageRecord): IndustryPageModel {
  return {
    slug: record.slug,
    title: record.title,
    shortDescription: record.shortDescription,
    intro: record.intro,
    typicalChallenges: record.typicalChallenges,
    developmentConsiderations: record.developmentConsiderations,
    relatedCapabilities: record.relatedCapabilities.map(mapCapabilityCard),
    heroMedia: mapOptionalMedia(record.heroMedia),
    seo: record.seo
      ? {
          title: record.seo.title,
          description: record.seo.description,
          noIndex: record.seo.noIndex,
        }
      : undefined,
  };
}
