import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ABOUT_EYEBROW, ABOUT_HEADING, ABOUT_INTRO } from '../content';

export function AboutHero() {
  return (
    <section className="about-hero" aria-label="About us">
      <Container variant="shell">
        <div className="about-hero__content">
          <Eyebrow marker>{ABOUT_EYEBROW}</Eyebrow>
          <Heading as="h1" variant="displayXL">
            {ABOUT_HEADING}
          </Heading>
          <Text variant="lead">{ABOUT_INTRO}</Text>
        </div>
      </Container>
    </section>
  );
}
