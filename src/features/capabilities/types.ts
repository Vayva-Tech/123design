import type { LifecycleStage } from '@/types/domain';
import type { MediaModel } from '@/types/domain';

export type CapabilityGroup = 'DESIGN' | 'ENGINEERING' | 'BUILD' | 'MANAGE';

export interface StaticCapabilityDefinition {
  slug: string;
  title: string;
  group: CapabilityGroup;
  order: number;
  shortDescription?: string;
  intro?: string;
  body?: string;
  deliverables?: string[];
  methods?: string[];
  lifecycleStages?: LifecycleStage[];
  relatedCapabilitySlugs?: string[];
  heroMedia?: MediaModel;
  supportMedia?: MediaModel[];
}

export interface CapabilityIndexEntry {
  slug: string;
  title: string;
  group: CapabilityGroup;
  order: number;
  shortDescription?: string;
  lifecycleStages?: LifecycleStage[];
}

export interface CapabilityGroupData {
  group: CapabilityGroup;
  label: string;
  capabilities: CapabilityIndexEntry[];
}

export interface CapabilitiesIndexData {
  groups: CapabilityGroupData[];
  cmsAvailable: boolean;
}

export interface CapabilityPageData {
  slug: string;
  title: string;
  group: CapabilityGroup;
  shortDescription?: string;
  intro?: string;
  deliverables: string[];
  lifecycleStages: LifecycleStage[];
  methods: string[];
  body?: string;
  relatedCapabilities: CapabilityIndexEntry[];
  relatedProjects: import('@/types/domain').ProjectCardModel[];
  heroMedia?: import('@/types/domain').MediaModel;
  supportMedia?: import('@/types/domain').MediaModel[];
  isPreview: boolean;
  cmsAvailable: boolean;
}
