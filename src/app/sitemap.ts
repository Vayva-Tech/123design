import type { MetadataRoute } from 'next';
import { STATIC_FEATURED_PROJECTS } from '@/features/work/static-projects';
import { STATIC_ARTICLES } from '@/features/insights/static-articles';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://123.design';

const STATIC_PAGES = [
  { url: '/', lastModified: new Date('2026-10-04'), changeFrequency: 'weekly' as const, priority: 1.0 },
  { url: '/work', lastModified: new Date('2026-10-04'), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: '/capabilities', lastModified: new Date('2026-10-04'), changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/process', lastModified: new Date('2026-10-04'), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/industries', lastModified: new Date('2026-10-04'), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/about', lastModified: new Date('2026-10-04'), changeFrequency: 'monthly' as const, priority: 0.6 },
  { url: '/insights', lastModified: new Date('2026-10-04'), changeFrequency: 'weekly' as const, priority: 0.7 },
  { url: '/faq', lastModified: new Date('2026-10-04'), changeFrequency: 'monthly' as const, priority: 0.5 },
  { url: '/start-project', lastModified: new Date('2026-10-04'), changeFrequency: 'yearly' as const, priority: 0.8 },
  { url: '/contact', lastModified: new Date('2026-10-04'), changeFrequency: 'yearly' as const, priority: 0.6 },
  { url: '/privacy', lastModified: new Date('2026-10-04'), changeFrequency: 'yearly' as const, priority: 0.2 },
  { url: '/terms', lastModified: new Date('2026-10-04'), changeFrequency: 'yearly' as const, priority: 0.2 },
  { url: '/accessibility', lastModified: new Date('2026-10-04'), changeFrequency: 'yearly' as const, priority: 0.2 },
];

const CAPABILITY_SLUGS = [
  'product-development',
  'industrial-design',
  'product-animation',
  'mechanical-engineering',
  'electrical-engineering',
  'testing-validation',
  'prototyping',
  'tooling',
  'manufacturing',
  'program-management',
];

const INDUSTRY_SLUGS = [
  'consumer-products',
  'medical',
  'defense-security',
  'electronics',
  'industrial',
  'emerging-technology',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const capabilityEntries: MetadataRoute.Sitemap = CAPABILITY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/capabilities/${slug}`,
    lastModified: new Date('2026-10-04'),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const industryEntries: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: new Date('2026-10-04'),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = STATIC_FEATURED_PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date('2026-10-04'),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  const articleEntries: MetadataRoute.Sitemap = STATIC_ARTICLES.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.publicationDate),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...capabilityEntries,
    ...industryEntries,
    ...projectEntries,
    ...articleEntries,
  ];
}
