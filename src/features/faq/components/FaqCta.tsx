import { Container } from '@/components/layout';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { FAQ_CTA_HEADING, FAQ_CTA_BODY, FAQ_CTA_BUTTON } from '../content';

export function FaqCta() {
  return (
    <section className="faq-cta" aria-label="Get in touch">
      <Container variant="reading">
        <div className="faq-cta__inner">
          <Heading as="h2" variant="h2">
            {FAQ_CTA_HEADING}
          </Heading>
          <Text variant="bodyLarge">{FAQ_CTA_BODY}</Text>
          <div className="faq-cta__actions">
            <Button variant="primary" size="large" href="/contact">
              {FAQ_CTA_BUTTON}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
