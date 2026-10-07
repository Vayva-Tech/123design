import { Container } from '@/components/layout';
import { RichText } from '@/components/content/RichText';
import type { PortableTextBlockModel } from '@/types/domain';

interface ArticleBodyProps {
  body: PortableTextBlockModel[];
}

export function ArticleBody({ body }: ArticleBodyProps) {
  return (
    <section className="article-body" aria-label="Article content">
      <Container variant="reading">
        <RichText blocks={body} />
      </Container>
    </section>
  );
}
