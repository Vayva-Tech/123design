import type { MediaModel } from './media';
import type { PublicationState, SeoFields } from './common';

export type LifecycleStage = 'CON' | 'EVT' | 'DVT' | 'PVT' | 'PRODUCTION';

export type NarrativeSectionType = 'overview' | 'challenge' | 'insight' | 'result' | 'howWeSolvedIt';

export type DisciplineSectionType =
  | 'industrialDesign'
  | 'mechanicalEngineering'
  | 'electricalEngineering'
  | 'prototype'
  | 'testingValidation'
  | 'tooling'
  | 'manufacturing';

export interface NarrativeModuleModel {
  kind: 'narrative';
  sectionType: NarrativeSectionType;
  heading?: string;
  body?: string;
  media?: MediaModel;
  caption?: string;
  lifecycleStage?: LifecycleStage;
}

export interface DisciplineModuleModel {
  kind: 'discipline';
  sectionType: DisciplineSectionType;
  heading?: string;
  body?: string;
  media?: MediaModel;
  caption?: string;
}

export interface GalleryItemModel {
  media: MediaModel;
  caption?: string;
}

export interface GalleryModuleModel {
  kind: 'gallery';
  items: GalleryItemModel[];
  caption?: string;
}

export interface VideoModuleModel {
  kind: 'video';
  media: MediaModel;
  caption?: string;
  transcript?: string;
}

export interface TechnicalModuleModel {
  kind: 'technical';
  heading?: string;
  details?: string;
  media?: MediaModel;
}

export interface TestimonialModuleModel {
  kind: 'testimonial';
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

export type ProjectModuleModel =
  | NarrativeModuleModel
  | DisciplineModuleModel
  | GalleryModuleModel
  | VideoModuleModel
  | TechnicalModuleModel
  | TestimonialModuleModel;

export interface TaxonomyRef {
  slug: string;
  title: string;
}

export interface ProjectCardModel {
  id: string;
  slug: string;
  title: string;
  shortLabel?: string;
  industries: readonly TaxonomyRef[];
  capabilities: readonly TaxonomyRef[];
  lifecycleStages: readonly LifecycleStage[];
  heroMedia: MediaModel;
  previewVideo?: MediaModel;
  year?: number;
  publicationState: PublicationState;
  featuredVariant?: string;
}

export interface ProjectMetricsModel {
  timeline?: string;
  budgetRange?: string;
  performanceSpecs?: string[];
  unitsProduced?: string;
  weightReduction?: string;
  cycleTime?: string;
  customMetrics?: { label: string; value: string }[];
}

export interface ProjectPageModel {
  id: string;
  slug: string;
  title: string;
  summary: string;
  heroMedia: MediaModel;
  industries: string[];
  capabilities: string[];
  lifecycleStages: LifecycleStage[];
  year?: number;
  clientDisplayName?: string;
  clientLogo?: MediaModel;
  modules: ProjectModuleModel[];
  relatedProjects: ProjectCardModel[];
  metrics?: ProjectMetricsModel;
  seo?: SeoFields;
}
