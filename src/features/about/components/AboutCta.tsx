import { Container } from '@/components/layout';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { ABOUT_CTA_HEADING, ABOUT_CTA_BODY, ABOUT_CTA_BUTTON } from '../content';

export function AboutCta() {
  return (
    <section className="about-cta" aria-label="Start a project">
      <Container variant="reading">
        <div className="about-cta__inner">
          <Heading as="h2" variant="h2">
            {ABOUT_CTA_HEADING}
          </Heading>
          <Text variant="bodyLarge">{ABOUT_CTA_BODY}</Text>
          <div className="about-cta__actions">
            <Button variant="primary" size="large" href="/start-project">
              {ABOUT_CTA_BUTTON}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
