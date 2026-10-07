import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import type { ArticlePageModel } from '@/types/domain';

interface ArticleHeroProps {
  article: ArticlePageModel;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ArticleHero({ article }: ArticleHeroProps) {
  const heroImage =
    article.heroMedia && article.heroMedia.kind === 'IMAGE' ? article.heroMedia : null;

  return (
    <section className="article-hero" aria-label="Article header">
      <Container variant="shell">
        <div className="article-hero__content">
          {article.category && <Eyebrow marker>{article.category}</Eyebrow>}
          <Heading as="h1" variant="displayXL">
            {article.title}
          </Heading>
          <Text variant="lead">{article.excerpt}</Text>
          <div className="article-hero__meta">
            <div className="article-hero__author-block">
              <Text variant="small" as="span" className="article-hero__author">
                {article.author.name}
              </Text>
              {(article.author.title || article.author.credentials) && (
                <Text variant="micro" as="span" className="article-hero__author-details">
                  {[article.author.title, article.author.credentials]
                    .filter(Boolean)
                    .join(' · ')}
                </Text>
              )}
            </div>
            <Text variant="micro" as="span" className="article-hero__date">
              {formatDate(article.publicationDate)}
            </Text>
          </div>
          {article.author.bio && (
            <Text variant="small" className="article-hero__author-bio">
              {article.author.bio}
            </Text>
          )}
        </div>
      </Container>
      {heroImage && (
        <div className="article-hero__media">
          <Container variant="content">
            <div className="article-hero__media-wrapper">
              <ResponsiveImage
                media={heroImage}
                className="article-hero__image"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
              />
              {heroImage.caption && (
                <div className="article-hero__caption">
                  <span className="article-hero__caption-text">{heroImage.caption}</span>
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
