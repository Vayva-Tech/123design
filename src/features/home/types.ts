import type { ProjectCardModel, TestimonialModel } from '@/types/domain';

export interface HomepageData {
  featuredProjects: ProjectCardModel[];
  testimonials: TestimonialModel[];
  scheduleCallUrl: string | undefined;
  cmsConnected: boolean;
}
