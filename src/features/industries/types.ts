export interface StaticIndustryDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  userNeed: string;
  relatedCapabilitySlugs: string[];
}

export interface IndustryIndexEntry {
  slug: string;
  title: string;
  shortDescription: string;
}

export interface IndustriesIndexData {
  industries: IndustryIndexEntry[];
  cmsAvailable: boolean;
}

export interface IndustryPageData {
  slug: string;
  title: string;
  shortDescription: string;
  intro?: string;
  typicalChallenges: string[];
  developmentConsiderations: string[];
  relatedCapabilities: import('@/types/domain').CapabilityCardModel[];
  relatedProjects: import('@/types/domain').ProjectCardModel[];
  heroMedia?: import('@/types/domain').MediaModel;
  isPreview: boolean;
  cmsAvailable: boolean;
}
