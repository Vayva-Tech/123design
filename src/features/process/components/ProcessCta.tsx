import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { FINAL_CTA_HEADING, FINAL_CTA_BODY, FINAL_CTA_BUTTON } from '../content';

export function ProcessCta() {
  return (
    <section className="process-cta" aria-label="Start your project">
      <Container variant="reading">
        <div className="process-cta__inner">
          <Heading variant="h2" className="process-cta__heading">
            {FINAL_CTA_HEADING}
          </Heading>
          <Text variant="body" className="process-cta__text">
            {FINAL_CTA_BODY}
          </Text>
          <div className="process-cta__actions">
            <Button variant="primary" href={FINAL_CTA_BUTTON.href} size="large">
              {FINAL_CTA_BUTTON.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
