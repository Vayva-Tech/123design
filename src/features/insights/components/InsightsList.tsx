import { Container } from '@/components/layout';
import type { ArticleCardModel } from '@/types/domain';
import { ArticleCard } from './ArticleCard';

interface InsightsListProps {
  articles: ArticleCardModel[];
}

export function InsightsList({ articles }: InsightsListProps) {
  return (
    <section className="insights-list" aria-label="Articles">
      <Container variant="content">
        <div className="insights-list__grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
