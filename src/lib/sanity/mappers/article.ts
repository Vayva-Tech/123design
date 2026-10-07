import type { ArticleCardModel, ArticlePageModel } from '@/types/domain';
import type { ArticleCardRecord, ArticlePageRecord } from '../validation';
import { mapOptionalMedia, mapImage } from './media';
import { mapCapabilityCard } from './capability';
import { mapProjectCard } from './project';

export function mapArticleCard(record: ArticleCardRecord): ArticleCardModel {
  return {
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt,
    publicationDate: record.publicationDate,
    updatedDate: record.updatedDate,
    category: record.category,
    author: record.author
      ? {
          name: record.author.name,
          avatar: record.author.avatar ? mapImage(record.author.avatar) : undefined,
        }
      : undefined,
    heroMedia: mapOptionalMedia(record.heroMedia),
  };
}

export function mapArticlePage(record: ArticlePageRecord): ArticlePageModel {
  return {
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt,
    publicationDate: record.publicationDate,
    updatedDate: record.updatedDate,
    category: record.category,
    author: {
      name: record.author.name,
      avatar: record.author.avatar ? mapImage(record.author.avatar) : undefined,
    },
    heroMedia: mapOptionalMedia(record.heroMedia),
    body: record.body,
    relatedCapabilities: record.relatedCapabilities.map(mapCapabilityCard),
    relatedProjects: record.relatedProjects.map(mapProjectCard),
    seo: record.seo
      ? {
          title: record.seo.title,
          description: record.seo.description,
          noIndex: record.seo.noIndex,
        }
      : undefined,
  };
}
