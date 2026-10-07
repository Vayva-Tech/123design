import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { FINAL_CTA_HEADING, FINAL_CTA_BODY, FINAL_CTA_BUTTON } from '../content';

export function IndustryCta() {
  return (
    <section className="industry-cta" aria-label="Get started">
      <Container variant="reading">
        <div className="industry-cta__inner">
          <Heading variant="h2" className="industry-cta__heading">
            {FINAL_CTA_HEADING}
          </Heading>
          <Text variant="body" className="industry-cta__text">
            {FINAL_CTA_BODY}
          </Text>
          <div className="industry-cta__actions">
            <Button variant="primary" href={FINAL_CTA_BUTTON.href} size="large">
              {FINAL_CTA_BUTTON.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
