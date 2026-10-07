import { hasSanityConfig } from '@/lib/sanity/config';
import {
  fetchFeaturedProjects,
  fetchPublishedTestimonials,
  fetchLeadFormSettings,
} from '@/lib/sanity/fetch/data-access';
import { mapProjectCard } from '@/lib/sanity/mappers/project';
import { mapMedia } from '@/lib/sanity/mappers/media';
import type { HomepageData } from './types';
import type { ProjectCardModel } from '@/types/domain';
import { STATIC_FEATURED_PROJECTS } from '@/features/work/static-projects';

const HOMEPAGE_FEATURED_COUNT = 8;

function diverseFeaturedSlice() {
  const step = Math.floor(STATIC_FEATURED_PROJECTS.length / HOMEPAGE_FEATURED_COUNT);
  return Array.from({ length: HOMEPAGE_FEATURED_COUNT }, (_, i) => STATIC_FEATURED_PROJECTS[i * step]).filter(
    (p): p is ProjectCardModel => p !== undefined,
  );
}

export async function getHomepageData(): Promise<HomepageData> {
  if (!hasSanityConfig()) {
    return {
      featuredProjects: diverseFeaturedSlice(),
      testimonials: [],
      scheduleCallUrl: undefined,
      cmsConnected: false,
    };
  }

  try {
    const [projectRecords, testimonialRecords, leadFormSettings] = await Promise.all([
      fetchFeaturedProjects(),
      fetchPublishedTestimonials(),
      fetchLeadFormSettings(),
    ]);

    const featuredProjects = projectRecords.slice(0, HOMEPAGE_FEATURED_COUNT).map(mapProjectCard);

    const testimonials = testimonialRecords.map((record) => ({
      quote: record.quote,
      name: record.name,
      role: record.role,
      company: record.company,
      video: record.video ? mapMedia(record.video) : undefined,
    }));

    return {
      featuredProjects,
      testimonials,
      scheduleCallUrl: leadFormSettings?.scheduleCallUrl ?? undefined,
      cmsConnected: true,
    };
  } catch {
    return {
      featuredProjects: diverseFeaturedSlice(),
      testimonials: [],
      scheduleCallUrl: undefined,
      cmsConnected: false,
    };
  }
}
