import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import type { ArticleCardModel } from '@/types/domain';
import { RELATED_INSIGHTS_EYEBROW, RELATED_INSIGHTS_HEADING } from '../content';
import { ArticleCard } from './ArticleCard';

interface ArticleRelatedProps {
  articles: ArticleCardModel[];
}

export function ArticleRelated({ articles }: ArticleRelatedProps) {
  return (
    <section className="article-related" aria-label="Related articles">
      <Container variant="content">
        <div className="article-related__header">
          <Eyebrow marker>{RELATED_INSIGHTS_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="h2">
            {RELATED_INSIGHTS_HEADING}
          </Heading>
        </div>
        <div className="article-related__grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
