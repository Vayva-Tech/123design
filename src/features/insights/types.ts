import type { ArticleCardModel, ArticlePageModel } from '@/types/domain';

export interface ArticleCategory {
  title: string;
  slug: string;
}

export interface InsightsIndexData {
  articles: ArticleCardModel[];
  categories: ArticleCategory[];
  hasArticles: boolean;
}

export interface ArticlePageData {
  article: ArticlePageModel;
  relatedArticles: ArticleCardModel[];
  hasRelated: boolean;
  isPreview: boolean;
}
