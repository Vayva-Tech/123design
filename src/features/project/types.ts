import type { ProjectPageModel, ProjectCardModel } from '@/types/domain';

export type PresentationMode = 'LIGHT' | 'FULL';

export interface ProjectPageData {
  project: ProjectPageModel;
  presentationMode: PresentationMode;
  isPreview: boolean;
  nextProject: ProjectCardModel | null;
}
