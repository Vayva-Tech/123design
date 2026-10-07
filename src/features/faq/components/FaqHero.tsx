import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { FAQ_EYEBROW, FAQ_HEADING, FAQ_SUPPORTING } from '../content';

export function FaqHero() {
  return (
    <section className="faq-hero" aria-label="Frequently asked questions">
      <Container variant="shell">
        <div className="faq-hero__content">
          <Eyebrow marker>{FAQ_EYEBROW}</Eyebrow>
          <Heading as="h1" variant="displayXL">
            {FAQ_HEADING}
          </Heading>
          <Text variant="lead">{FAQ_SUPPORTING}</Text>
        </div>
      </Container>
    </section>
  );
}
