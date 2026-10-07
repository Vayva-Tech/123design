import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { INSIGHTS_EYEBROW, INSIGHTS_HEADING, INSIGHTS_SUPPORTING } from '../content';

export function InsightsHero() {
  return (
    <section className="insights-hero" aria-label="Insights">
      <Container variant="shell">
        <div className="insights-hero__content">
          <Eyebrow marker>{INSIGHTS_EYEBROW}</Eyebrow>
          <Heading as="h1" variant="displayXL">
            {INSIGHTS_HEADING}
          </Heading>
          <Text variant="lead">{INSIGHTS_SUPPORTING}</Text>
        </div>
      </Container>
    </section>
  );
}
