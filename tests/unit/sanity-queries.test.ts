import { describe, it, expect } from 'vitest';
import {
  PUBLIC_PROJECT_ELIGIBILITY_FILTER,
  NAMED_CLIENT_FILTER,
  PUBLIC_CAPABILITY_FILTER,
  PUBLIC_INDUSTRY_FILTER,
  PUBLIC_ARTICLE_FILTER,
  PUBLIC_TESTIMONIAL_FILTER,
} from '../../src/lib/sanity/queries/public-filters';
import {
  publishedProjectsQuery,
  publishedProjectBySlugQuery,
  featuredProjectsQuery,
  relatedProjectsQuery,
  projectsByIndustrySlugQuery,
  projectsByCapabilitySlugQuery,
} from '../../src/lib/sanity/queries/projects';
import {
  publishedCapabilitiesQuery,
  publishedCapabilityBySlugQuery,
} from '../../src/lib/sanity/queries/capabilities';
import {
  publishedIndustriesQuery,
  publishedIndustryBySlugQuery,
} from '../../src/lib/sanity/queries/industries';
import {
  publishedArticlesQuery,
  publishedArticleBySlugQuery,
} from '../../src/lib/sanity/queries/articles';
import { publishedTestimonialsQuery } from '../../src/lib/sanity/queries/testimonials';
import { siteSettingsQuery, leadFormSettingsQuery } from '../../src/lib/sanity/queries/settings';

describe('Public Filter Invariants', () => {
  describe('PUBLIC_PROJECT_ELIGIBILITY_FILTER', () => {
    it('requires PUBLISHED state', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('publicationState == "PUBLISHED"');
    });

    it('restricts to INDIVIDUAL_PROJECT and PROJECT_FAMILY', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('"INDIVIDUAL_PROJECT"');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('"PROJECT_FAMILY"');
    });

    it('requires content approval APPROVED or NOT_REQUIRED', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('contentApprovalState.status');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('"APPROVED"');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('"NOT_REQUIRED"');
    });

    it('requires client approval APPROVED or NOT_REQUIRED', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('clientApprovalState.status');
    });

    it('requires core content fields defined', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('defined(title)');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('defined(slug.current)');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('defined(summary)');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('defined(heroMedia)');
    });

    it('requires at least one industry or capability', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('count(industries) > 0');
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('count(capabilities) > 0');
    });

    it('excludes draft documents', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('!(_id in path("drafts.**"))');
    });

    it('requires _type == "project"', () => {
      expect(PUBLIC_PROJECT_ELIGIBILITY_FILTER).toContain('_type == "project"');
    });
  });

  describe('NAMED_CLIENT_FILTER', () => {
    it('requires NAMED display mode', () => {
      expect(NAMED_CLIENT_FILTER).toContain('clientDisplayMode == "NAMED"');
    });

    it('requires verified relationship', () => {
      expect(NAMED_CLIENT_FILTER).toContain('clientRelationshipVerified == true');
    });

    it('requires APPROVED client approval', () => {
      expect(NAMED_CLIENT_FILTER).toContain('clientApprovalState.status == "APPROVED"');
    });
  });

  describe('PUBLIC_CAPABILITY_FILTER', () => {
    it('requires capability type and PUBLISHED', () => {
      expect(PUBLIC_CAPABILITY_FILTER).toContain('_type == "capability"');
      expect(PUBLIC_CAPABILITY_FILTER).toContain('publicationState == "PUBLISHED"');
    });

    it('excludes drafts', () => {
      expect(PUBLIC_CAPABILITY_FILTER).toContain('!(_id in path("drafts.**"))');
    });
  });

  describe('PUBLIC_INDUSTRY_FILTER', () => {
    it('requires industry type and PUBLISHED', () => {
      expect(PUBLIC_INDUSTRY_FILTER).toContain('_type == "industry"');
      expect(PUBLIC_INDUSTRY_FILTER).toContain('publicationState == "PUBLISHED"');
    });

    it('excludes drafts', () => {
      expect(PUBLIC_INDUSTRY_FILTER).toContain('!(_id in path("drafts.**"))');
    });
  });

  describe('PUBLIC_ARTICLE_FILTER', () => {
    it('requires article type and PUBLISHED', () => {
      expect(PUBLIC_ARTICLE_FILTER).toContain('_type == "article"');
      expect(PUBLIC_ARTICLE_FILTER).toContain('publicationState == "PUBLISHED"');
    });

    it('requires publicationDate defined', () => {
      expect(PUBLIC_ARTICLE_FILTER).toContain('defined(publicationDate)');
    });

    it('excludes drafts', () => {
      expect(PUBLIC_ARTICLE_FILTER).toContain('!(_id in path("drafts.**"))');
    });
  });

  describe('PUBLIC_TESTIMONIAL_FILTER', () => {
    it('requires APPROVED approval state', () => {
      expect(PUBLIC_TESTIMONIAL_FILTER).toContain('approvalState.status == "APPROVED"');
    });

    it('excludes drafts', () => {
      expect(PUBLIC_TESTIMONIAL_FILTER).toContain('!(_id in path("drafts.**"))');
    });
  });
});

describe('Query String Content', () => {
  describe('Project queries', () => {
    it('publishedProjectsQuery uses public eligibility filter', () => {
      expect(publishedProjectsQuery).toContain(PUBLIC_PROJECT_ELIGIBILITY_FILTER);
    });

    it('publishedProjectBySlugQuery filters by slug', () => {
      expect(publishedProjectBySlugQuery).toContain('slug.current == $slug');
    });

    it('publishedProjectBySlugQuery projects module projections', () => {
      expect(publishedProjectBySlugQuery).toContain('"kind": "narrative"');
      expect(publishedProjectBySlugQuery).toContain('"kind": "discipline"');
      expect(publishedProjectBySlugQuery).toContain('"kind": "gallery"');
      expect(publishedProjectBySlugQuery).toContain('"kind": "video"');
      expect(publishedProjectBySlugQuery).toContain('"kind": "technical"');
      expect(publishedProjectBySlugQuery).toContain('"kind": "testimonial"');
    });

    it('publishedProjectBySlugQuery uses pt::text for body fields', () => {
      expect(publishedProjectBySlugQuery).toContain('pt::text(body)');
      expect(publishedProjectBySlugQuery).toContain('pt::text(details)');
    });

    it('publishedProjectBySlugQuery applies named client filter', () => {
      expect(publishedProjectBySlugQuery).toContain(NAMED_CLIENT_FILTER);
    });

    it('featuredProjectsQuery requires featured == true', () => {
      expect(featuredProjectsQuery).toContain('featured == true');
    });

    it('relatedProjectsQuery uses $projectIds parameter', () => {
      expect(relatedProjectsQuery).toContain('$projectIds');
    });

    it('projectsByIndustrySlugQuery uses $industrySlug', () => {
      expect(projectsByIndustrySlugQuery).toContain('$industrySlug');
    });

    it('projectsByCapabilitySlugQuery uses $capabilitySlug', () => {
      expect(projectsByCapabilitySlugQuery).toContain('$capabilitySlug');
    });
  });

  describe('Capability queries', () => {
    it('publishedCapabilitiesQuery uses public filter', () => {
      expect(publishedCapabilitiesQuery).toContain(PUBLIC_CAPABILITY_FILTER);
    });

    it('publishedCapabilityBySlugQuery filters by slug', () => {
      expect(publishedCapabilityBySlugQuery).toContain('slug.current == $slug');
    });

    it('publishedCapabilityBySlugQuery returns relatedProjectIds as refs', () => {
      expect(publishedCapabilityBySlugQuery).toContain('relatedProjects[]._ref');
    });
  });

  describe('Industry queries', () => {
    it('publishedIndustriesQuery uses public filter', () => {
      expect(publishedIndustriesQuery).toContain(PUBLIC_INDUSTRY_FILTER);
    });

    it('publishedIndustryBySlugQuery filters by slug', () => {
      expect(publishedIndustryBySlugQuery).toContain('slug.current == $slug');
    });
  });

  describe('Article queries', () => {
    it('publishedArticlesQuery uses public filter', () => {
      expect(publishedArticlesQuery).toContain(PUBLIC_ARTICLE_FILTER);
    });

    it('publishedArticleBySlugQuery filters by slug', () => {
      expect(publishedArticleBySlugQuery).toContain('slug.current == $slug');
    });
  });

  describe('Testimonial queries', () => {
    it('publishedTestimonialsQuery uses public filter', () => {
      expect(publishedTestimonialsQuery).toContain(PUBLIC_TESTIMONIAL_FILTER);
    });
  });

  describe('Settings queries', () => {
    it('siteSettingsQuery fetches site settings', () => {
      expect(siteSettingsQuery).toContain('_type == "siteSettings"');
    });

    it('leadFormSettingsQuery fetches lead form settings', () => {
      expect(leadFormSettingsQuery).toContain('_type == "leadFormSettings"');
    });
  });
});

describe('No Draft Leakage', () => {
  const allQueries = [
    { name: 'publishedProjectsQuery', query: publishedProjectsQuery },
    { name: 'publishedProjectBySlugQuery', query: publishedProjectBySlugQuery },
    { name: 'featuredProjectsQuery', query: featuredProjectsQuery },
    { name: 'publishedCapabilitiesQuery', query: publishedCapabilitiesQuery },
    { name: 'publishedCapabilityBySlugQuery', query: publishedCapabilityBySlugQuery },
    { name: 'publishedIndustriesQuery', query: publishedIndustriesQuery },
    { name: 'publishedIndustryBySlugQuery', query: publishedIndustryBySlugQuery },
    { name: 'publishedArticlesQuery', query: publishedArticlesQuery },
    { name: 'publishedArticleBySlugQuery', query: publishedArticleBySlugQuery },
    { name: 'publishedTestimonialsQuery', query: publishedTestimonialsQuery },
  ];

  for (const { name, query } of allQueries) {
    it(`${name} excludes draft documents`, () => {
      expect(query).toContain('!(_id in path("drafts.**"))');
    });
  }
});
