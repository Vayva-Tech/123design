import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { hasSanityConfig } from '@/lib/sanity/config';
import {
  fetchPublishedArticles,
  fetchArticleBySlug,
  fetchPreviewArticleBySlug,
  fetchArticleCategories,
} from '@/lib/sanity/fetch/data-access';
import { mapArticleCard, mapArticlePage } from '@/lib/sanity/mappers/article';
import { selectRelatedArticles } from './presentation';
import type { InsightsIndexData, ArticlePageData, ArticleCategory } from './types';
import { STATIC_ARTICLES, STATIC_ARTICLE_PAGES } from './static-articles';

const STATIC_CATEGORIES: ArticleCategory[] = [
  { title: 'Engineering', slug: 'engineering' },
  { title: 'Design', slug: 'design' },
  { title: 'Process', slug: 'process' },
];

export async function getInsightsIndexData(): Promise<InsightsIndexData> {
  if (!hasSanityConfig()) {
    return {
      articles: STATIC_ARTICLES,
      categories: STATIC_CATEGORIES,
      hasArticles: true,
    };
  }

  try {
    const [articleRecords, categories] = await Promise.all([
      fetchPublishedArticles(),
      fetchArticleCategories(),
    ]);

    const articles = articleRecords.map(mapArticleCard);

    if (articles.length === 0) {
      return {
        articles: STATIC_ARTICLES,
        categories: categories.length > 0 ? categories : STATIC_CATEGORIES,
        hasArticles: true,
      };
    }

    return {
      articles,
      categories,
      hasArticles: articles.length > 0,
    };
  } catch {
    return {
      articles: STATIC_ARTICLES,
      categories: STATIC_CATEGORIES,
      hasArticles: true,
    };
  }
}

export async function getArticlePageData(slug: string): Promise<ArticlePageData | null> {
  if (!hasSanityConfig()) {
    const staticArticle = STATIC_ARTICLE_PAGES[slug];
    if (!staticArticle) {
      return null;
    }

    const allArticles = STATIC_ARTICLES;
    const relatedArticles = selectRelatedArticles(
      staticArticle.slug,
      staticArticle.category,
      allArticles,
    );

    return {
      article: staticArticle,
      relatedArticles,
      hasRelated: relatedArticles.length > 0,
      isPreview: false,
    };
  }

  const draft = await draftMode();
  const isPreview = draft.isEnabled;

  try {
    let record;
    if (isPreview) {
      record = await fetchPreviewArticleBySlug(slug);
      if (!record) {
        notFound();
      }
    } else {
      record = await fetchArticleBySlug(slug);
      if (!record) {
        const staticArticle = STATIC_ARTICLE_PAGES[slug];
        if (!staticArticle) {
          return null;
        }

        const allArticles = STATIC_ARTICLES;
        const relatedArticles = selectRelatedArticles(
          staticArticle.slug,
          staticArticle.category,
          allArticles,
        );

        return {
          article: staticArticle,
          relatedArticles,
          hasRelated: relatedArticles.length > 0,
          isPreview: false,
        };
      }
    }

    const article = mapArticlePage(record);

    const allArticleRecords = await fetchPublishedArticles();
    const allArticles = allArticleRecords.map(mapArticleCard);

    const relatedArticles = selectRelatedArticles(article.slug, article.category, allArticles);

    return {
      article,
      relatedArticles,
      hasRelated: relatedArticles.length > 0,
      isPreview,
    };
  } catch {
    const staticArticle = STATIC_ARTICLE_PAGES[slug];
    if (!staticArticle) {
      return null;
    }

    const allArticles = STATIC_ARTICLES;
    const relatedArticles = selectRelatedArticles(
      staticArticle.slug,
      staticArticle.category,
      allArticles,
    );

    return {
      article: staticArticle,
      relatedArticles,
      hasRelated: relatedArticles.length > 0,
      isPreview: false,
    };
  }
}
