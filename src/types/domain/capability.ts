import type { MediaModel } from './media';
import type { SeoFields, CtaModel } from './common';
import type { LifecycleStage } from './project';

export interface CapabilityCardModel {
  slug: string;
  title: string;
  shortDescription: string;
  lifecycleStages: LifecycleStage[];
  heroMedia?: MediaModel;
}

export interface CapabilityPageModel {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  deliverables: string[];
  lifecycleStages: LifecycleStage[];
  methods: string[];
  body: string;
  relatedCapabilities: CapabilityCardModel[];
  relatedProjects: import('./project').ProjectCardModel[];
  heroMedia?: MediaModel;
  supportMedia?: MediaModel[];
  cta?: CtaModel;
  seo?: SeoFields;
}
