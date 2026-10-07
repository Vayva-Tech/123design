import Link from 'next/link';
import type { ArticleCardModel } from '@/types/domain';
import { Heading, Text } from '@/components/ui';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';

interface ArticleCardProps {
  article: ArticleCardModel;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ArticleCard({ article }: ArticleCardProps) {
  const heroImage =
    article.heroMedia && article.heroMedia.kind === 'IMAGE' ? article.heroMedia : null;

  return (
    <Link href={`/insights/${article.slug}`} className="article-card">
      <div className="article-card__media">
        {heroImage && (
          <ResponsiveImage
            media={heroImage}
            className="article-card__image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="article-card__content">
        <Heading as="h3" variant="h4">
          {article.title}
        </Heading>
        <Text variant="small" className="article-card__excerpt">
          {article.excerpt}
        </Text>
        <div className="article-card__meta">
          <Text variant="micro" as="span" className="article-card__date">
            {formatDate(article.publicationDate)}
          </Text>
          {article.category && (
            <Text variant="micro" as="span" className="article-card__category">
              {article.category}
            </Text>
          )}
        </div>
      </div>
    </Link>
  );
}
