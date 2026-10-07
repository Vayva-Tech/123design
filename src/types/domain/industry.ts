import type { MediaModel } from './media';
import type { SeoFields } from './common';
import type { CapabilityCardModel } from './capability';

export interface IndustryPageModel {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  typicalChallenges: string[];
  developmentConsiderations: string[];
  relatedCapabilities: CapabilityCardModel[];
  heroMedia?: MediaModel;
  seo?: SeoFields;
}
