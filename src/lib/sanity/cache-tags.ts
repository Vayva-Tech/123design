const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_SLUG_LENGTH = 200;

export function isValidSlug(slug: string): boolean {
  return slug.length > 0 && slug.length <= MAX_SLUG_LENGTH && SLUG_PATTERN.test(slug);
}

const staticTags = {
  projects: 'projects',
  capabilities: 'capabilities',
  industries: 'industries',
  articles: 'articles',
  testimonials: 'testimonials',
  siteSettings: 'site-settings',
  leadFormSettings: 'lead-form-settings',
  seoDefaults: 'seo-defaults',
  faq: 'faq',
  offices: 'offices',
  people: 'people',
  redirects: 'redirects',
  articleCategories: 'article-categories',
} as const;

function dynamicTag(prefix: string, slug: string): string | undefined {
  if (!isValidSlug(slug)) return undefined;
  return `${prefix}:${slug}`;
}

export const cacheTags = {
  projects: staticTags.projects,
  capabilities: staticTags.capabilities,
  industries: staticTags.industries,
  articles: staticTags.articles,
  testimonials: staticTags.testimonials,
  siteSettings: staticTags.siteSettings,
  leadFormSettings: staticTags.leadFormSettings,
  seoDefaults: staticTags.seoDefaults,
  faq: staticTags.faq,
  offices: staticTags.offices,
  people: staticTags.people,
  redirects: staticTags.redirects,
  articleCategories: staticTags.articleCategories,

  project(slug: string): string | undefined {
    return dynamicTag('project', slug);
  },
  capability(slug: string): string | undefined {
    return dynamicTag('capability', slug);
  },
  industry(slug: string): string | undefined {
    return dynamicTag('industry', slug);
  },
  article(slug: string): string | undefined {
    return dynamicTag('article', slug);
  },
  testimonial(id: string): string | undefined {
    if (!id || id.length > MAX_SLUG_LENGTH) return undefined;
    return `testimonial:${id}`;
  },
} as const;

export type CanonicalCacheTag =
  | 'projects'
  | 'capabilities'
  | 'industries'
  | 'articles'
  | 'testimonials'
  | 'site-settings'
  | 'lead-form-settings'
  | 'seo-defaults'
  | 'faq'
  | 'offices'
  | 'people'
  | 'redirects'
  | 'article-categories';

export type WebhookDocumentType =
  | 'project'
  | 'capability'
  | 'industry'
  | 'article'
  | 'articleCategory'
  | 'testimonial'
  | 'person'
  | 'office'
  | 'faqItem'
  | 'redirect'
  | 'siteSettings'
  | 'leadFormSettings'
  | 'seoDefaults';

export const WEBHOOK_TYPE_WHITELIST: ReadonlySet<string> = new Set<WebhookDocumentType>([
  'project',
  'capability',
  'industry',
  'article',
  'articleCategory',
  'testimonial',
  'person',
  'office',
  'faqItem',
  'redirect',
  'siteSettings',
  'leadFormSettings',
  'seoDefaults',
]);

export function getRevalidationTags(payload: { _type: string; slug?: string }): string[] {
  const { _type, slug } = payload;
  const tags: string[] = [];

  switch (_type) {
    case 'project':
      tags.push(cacheTags.projects);
      if (slug) {
        const dynamic = cacheTags.project(slug);
        if (dynamic) tags.push(dynamic);
      }
      tags.push(cacheTags.capabilities, cacheTags.industries);
      break;

    case 'capability':
      tags.push(cacheTags.capabilities);
      if (slug) {
        const dynamic = cacheTags.capability(slug);
        if (dynamic) tags.push(dynamic);
      }
      tags.push(cacheTags.projects);
      break;

    case 'industry':
      tags.push(cacheTags.industries);
      if (slug) {
        const dynamic = cacheTags.industry(slug);
        if (dynamic) tags.push(dynamic);
      }
      tags.push(cacheTags.projects);
      break;

    case 'article':
      tags.push(cacheTags.articles);
      if (slug) {
        const dynamic = cacheTags.article(slug);
        if (dynamic) tags.push(dynamic);
      }
      break;

    case 'articleCategory':
      tags.push(cacheTags.articles, cacheTags.articleCategories);
      break;

    case 'testimonial':
      tags.push(cacheTags.testimonials, cacheTags.projects);
      break;

    case 'person':
      tags.push(cacheTags.people, cacheTags.articles);
      break;

    case 'office':
      tags.push(cacheTags.offices, cacheTags.siteSettings);
      break;

    case 'faqItem':
      tags.push(cacheTags.faq);
      break;

    case 'redirect':
      tags.push(cacheTags.redirects);
      break;

    case 'siteSettings':
      tags.push(cacheTags.siteSettings);
      break;

    case 'leadFormSettings':
      tags.push(cacheTags.leadFormSettings);
      break;

    case 'seoDefaults':
      tags.push(cacheTags.seoDefaults);
      break;

    default:
      return [];
  }

  return [...new Set(tags)];
}
