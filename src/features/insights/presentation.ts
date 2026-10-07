import type { ArticleCardModel } from '@/types/domain';

const MAX_RELATED = 3;

export function selectRelatedArticles(
  currentSlug: string,
  currentCategory: string | undefined,
  allArticles: ArticleCardModel[],
): ArticleCardModel[] {
  const others = allArticles.filter((a) => a.slug !== currentSlug);
  if (others.length === 0) return [];

  if (!currentCategory) {
    return others.slice(0, MAX_RELATED);
  }

  const sameCategory: ArticleCardModel[] = [];
  const remaining: ArticleCardModel[] = [];

  for (const article of others) {
    if (article.category === currentCategory) {
      sameCategory.push(article);
    } else {
      remaining.push(article);
    }
  }

  const combined = [...sameCategory, ...remaining];
  return combined.slice(0, MAX_RELATED);
}
