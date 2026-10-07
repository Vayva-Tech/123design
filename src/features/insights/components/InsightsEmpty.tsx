import { Container } from '@/components/layout';
import { Text } from '@/components/ui/Text';
import { INSIGHTS_EMPTY_STATE } from '../content';

export function InsightsEmpty() {
  return (
    <section className="insights-empty" aria-label="No articles available">
      <Container variant="content">
        <div className="insights-empty__inner">
          <Text variant="bodyLarge">{INSIGHTS_EMPTY_STATE}</Text>
        </div>
      </Container>
    </section>
  );
}
