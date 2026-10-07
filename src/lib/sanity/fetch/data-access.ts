import { z } from 'zod';
import { cacheTags } from '../cache-tags';
import { fetchPublicQuery, fetchPublicQueryMany } from './public';
import { fetchPreviewQuery } from '../preview/fetch';
import {
  publishedProjectsQuery,
  publishedProjectBySlugQuery,
  previewProjectBySlugQuery,
  featuredProjectsQuery,
  relatedProjectsQuery,
  projectsByIndustrySlugQuery,
  projectsByCapabilitySlugQuery,
  publishedCapabilityBySlugQuery,
  previewCapabilityBySlugQuery,
  publishedCapabilitiesQuery,
  publishedIndustryBySlugQuery,
  previewIndustryBySlugQuery,
  publishedIndustriesQuery,
  publishedArticlesQuery,
  publishedArticleBySlugQuery,
  previewArticleBySlugQuery,
  publishedTestimonialsQuery,
  siteSettingsQuery,
  leadFormSettingsQuery,
  seoDefaultsQuery,
  publishedFaqQuery,
  verifiedOfficesQuery,
  activePeopleQuery,
  verifiedRedirectsQuery,
  publishedArticleCategoriesQuery,
} from '../queries';
import {
  projectCardRecordSchema,
  projectPageRecordSchema,
  capabilityCardRecordSchema,
  capabilityPageRecordSchema,
  industryPageRecordSchema,
  articleCardRecordSchema,
  articlePageRecordSchema,
  faqRecordSchema,
  officeRecordSchema,
  personRecordSchema,
  testimonialRecordSchema,
  siteSettingsRecordSchema,
  leadFormSettingsRecordSchema,
  seoDefaultsRecordSchema,
} from '../validation';
import type {
  ProjectCardRecord,
  ProjectPageRecord,
  CapabilityCardRecord,
  CapabilityPageRecord,
  IndustryPageRecord,
  ArticleCardRecord,
  ArticlePageRecord,
  FaqRecord,
  OfficeRecord,
  PersonRecord,
  TestimonialRecord,
  SiteSettingsRecord,
  LeadFormSettingsRecord,
  SeoDefaultsRecord,
} from '../validation';

export async function fetchPublishedProjects(): Promise<ProjectCardRecord[]> {
  return fetchPublicQueryMany(
    publishedProjectsQuery,
    {},
    projectCardRecordSchema,
    'publishedProjects',
    { tags: [cacheTags.projects] },
  );
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectPageRecord | null> {
  const result = await fetchPublicQuery(
    publishedProjectBySlugQuery,
    { slug },
    projectPageRecordSchema.nullable(),
    'projectBySlug',
    { tags: [cacheTags.projects, cacheTags.project(slug)].filter(Boolean) as string[] },
  );
  return result;
}

export async function fetchPreviewProjectBySlug(slug: string): Promise<ProjectPageRecord | null> {
  const result = await fetchPreviewQuery(
    previewProjectBySlugQuery,
    { slug },
    projectPageRecordSchema.nullable(),
    'previewProjectBySlug',
  );
  return result;
}

export async function fetchFeaturedProjects(): Promise<ProjectCardRecord[]> {
  return fetchPublicQueryMany(
    featuredProjectsQuery,
    {},
    projectCardRecordSchema,
    'featuredProjects',
    { tags: [cacheTags.projects] },
  );
}

export async function fetchRelatedProjects(projectIds: string[]): Promise<ProjectCardRecord[]> {
  return fetchPublicQueryMany(
    relatedProjectsQuery,
    { projectIds },
    projectCardRecordSchema,
    'relatedProjects',
    { tags: [cacheTags.projects] },
  );
}

export async function fetchProjectsByIndustrySlug(
  industrySlug: string,
): Promise<ProjectCardRecord[]> {
  return fetchPublicQueryMany(
    projectsByIndustrySlugQuery,
    { industrySlug },
    projectCardRecordSchema,
    'projectsByIndustrySlug',
    { tags: [cacheTags.projects, cacheTags.industries] },
  );
}

export async function fetchProjectsByCapabilitySlug(
  capabilitySlug: string,
): Promise<ProjectCardRecord[]> {
  return fetchPublicQueryMany(
    projectsByCapabilitySlugQuery,
    { capabilitySlug },
    projectCardRecordSchema,
    'projectsByCapabilitySlug',
    { tags: [cacheTags.projects, cacheTags.capabilities] },
  );
}

export async function fetchPublishedCapabilities(): Promise<CapabilityCardRecord[]> {
  return fetchPublicQueryMany(
    publishedCapabilitiesQuery,
    {},
    capabilityCardRecordSchema,
    'publishedCapabilities',
    { tags: [cacheTags.capabilities] },
  );
}

export async function fetchCapabilityBySlug(slug: string): Promise<CapabilityPageRecord | null> {
  const result = await fetchPublicQuery(
    publishedCapabilityBySlugQuery,
    { slug },
    capabilityPageRecordSchema.nullable(),
    'capabilityBySlug',
    { tags: [cacheTags.capabilities, cacheTags.capability(slug)].filter(Boolean) as string[] },
  );
  return result;
}

export async function fetchPreviewCapabilityBySlug(
  slug: string,
): Promise<CapabilityPageRecord | null> {
  const result = await fetchPreviewQuery(
    previewCapabilityBySlugQuery,
    { slug },
    capabilityPageRecordSchema.nullable(),
    'previewCapabilityBySlug',
  );
  return result;
}

export async function fetchPublishedIndustries(): Promise<IndustryPageRecord[]> {
  return fetchPublicQueryMany(
    publishedIndustriesQuery,
    {},
    industryPageRecordSchema,
    'publishedIndustries',
    { tags: [cacheTags.industries] },
  );
}

export async function fetchIndustryBySlug(slug: string): Promise<IndustryPageRecord | null> {
  const result = await fetchPublicQuery(
    publishedIndustryBySlugQuery,
    { slug },
    industryPageRecordSchema.nullable(),
    'industryBySlug',
    { tags: [cacheTags.industries, cacheTags.industry(slug)].filter(Boolean) as string[] },
  );
  return result;
}

export async function fetchPreviewIndustryBySlug(slug: string): Promise<IndustryPageRecord | null> {
  const result = await fetchPreviewQuery(
    previewIndustryBySlugQuery,
    { slug },
    industryPageRecordSchema.nullable(),
    'previewIndustryBySlug',
  );
  return result;
}

export async function fetchPublishedArticles(): Promise<ArticleCardRecord[]> {
  return fetchPublicQueryMany(
    publishedArticlesQuery,
    {},
    articleCardRecordSchema,
    'publishedArticles',
    { tags: [cacheTags.articles] },
  );
}

export async function fetchArticleBySlug(slug: string): Promise<ArticlePageRecord | null> {
  const result = await fetchPublicQuery(
    publishedArticleBySlugQuery,
    { slug },
    articlePageRecordSchema.nullable(),
    'articleBySlug',
    { tags: [cacheTags.articles, cacheTags.article(slug)].filter(Boolean) as string[] },
  );
  return result;
}

export async function fetchPreviewArticleBySlug(slug: string): Promise<ArticlePageRecord | null> {
  const result = await fetchPreviewQuery(
    previewArticleBySlugQuery,
    { slug },
    articlePageRecordSchema.nullable(),
    'previewArticleBySlug',
  );
  return result;
}

export async function fetchPublishedTestimonials(): Promise<TestimonialRecord[]> {
  return fetchPublicQueryMany(
    publishedTestimonialsQuery,
    {},
    testimonialRecordSchema,
    'publishedTestimonials',
    { tags: [cacheTags.testimonials] },
  );
}

export async function fetchSiteSettings(): Promise<SiteSettingsRecord | null> {
  return fetchPublicQuery(
    siteSettingsQuery,
    {},
    siteSettingsRecordSchema.nullable(),
    'siteSettings',
    { tags: [cacheTags.siteSettings] },
  );
}

export async function fetchLeadFormSettings(): Promise<LeadFormSettingsRecord | null> {
  return fetchPublicQuery(
    leadFormSettingsQuery,
    {},
    leadFormSettingsRecordSchema.nullable(),
    'leadFormSettings',
    { tags: [cacheTags.leadFormSettings] },
  );
}

export async function fetchSeoDefaults(): Promise<SeoDefaultsRecord | null> {
  return fetchPublicQuery(seoDefaultsQuery, {}, seoDefaultsRecordSchema.nullable(), 'seoDefaults', {
    tags: [cacheTags.seoDefaults],
  });
}

export async function fetchFaq(): Promise<FaqRecord[]> {
  return fetchPublicQueryMany(publishedFaqQuery, {}, faqRecordSchema, 'faq', {
    tags: [cacheTags.faq],
  });
}

export async function fetchOffices(): Promise<OfficeRecord[]> {
  return fetchPublicQueryMany(verifiedOfficesQuery, {}, officeRecordSchema, 'offices', {
    tags: [cacheTags.offices],
  });
}

export async function fetchPeople(): Promise<PersonRecord[]> {
  return fetchPublicQueryMany(activePeopleQuery, {}, personRecordSchema, 'people', {
    tags: [cacheTags.people],
  });
}

export async function fetchRedirects() {
  return fetchPublicQueryMany(
    verifiedRedirectsQuery,
    {},
    z.object({ source: z.string(), destination: z.string() }),
    'redirects',
    { tags: [cacheTags.redirects] },
  );
}

export async function fetchArticleCategories() {
  return fetchPublicQueryMany(
    publishedArticleCategoriesQuery,
    {},
    z.object({ title: z.string(), slug: z.string() }),
    'articleCategories',
    { tags: [cacheTags.articleCategories] },
  );
}
