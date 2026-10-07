import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { PAGE_EYEBROW, PAGE_HEADING, PAGE_SUPPORTING } from '../content';

export function ProcessHero() {
  return (
    <section className="process-hero" aria-label="Process overview">
      <Container variant="shell" className="process-hero__content">
        <Eyebrow marker>{PAGE_EYEBROW}</Eyebrow>
        <Heading variant="displayXL" className="process-hero__title">
          {PAGE_HEADING}
        </Heading>
        <Text variant="lead" className="process-hero__summary">
          {PAGE_SUPPORTING}
        </Text>
      </Container>
    </section>
  );
}
