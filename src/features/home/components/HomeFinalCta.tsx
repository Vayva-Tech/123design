import Image from 'next/image';
import { Container } from '@/components/layout';
import { Heading, Text, Button, Eyebrow } from '@/components/ui';
import {
  FINAL_CTA_EYEBROW,
  FINAL_CTA_HEADING_LINES,
  FINAL_CTA_BODY,
  FINAL_CTA_BUTTON,
  SCHEDULE_CTA_LABEL,
} from '../content';
import { ctaPrimary } from '../launch-media';

interface HomeFinalCtaProps {
  scheduleCallUrl?: string;
}

export function HomeFinalCta({ scheduleCallUrl }: HomeFinalCtaProps) {
  return (
    <section className="home-final-cta" data-page-overlay="dark" aria-label="Start your project">
      <Container variant="content">
        <div className="home-final-cta__split">
          <div className="home-final-cta__copy">
            <Eyebrow marker>{FINAL_CTA_EYEBROW}</Eyebrow>
            <Heading as="h2" variant="displayL" className="heading-lines">
              {FINAL_CTA_HEADING_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Heading>
            <Text variant="lead" className="home-final-cta__body">
              {FINAL_CTA_BODY}
            </Text>
            <div className="home-final-cta__actions">
              <Button variant="primary" size="large" href={FINAL_CTA_BUTTON.href}>
                {FINAL_CTA_BUTTON.label}
              </Button>
              {scheduleCallUrl && (
                <Button variant="secondary" size="large" href={scheduleCallUrl}>
                  {SCHEDULE_CTA_LABEL}
                </Button>
              )}
            </div>
          </div>
          <div className="home-final-cta__visual">
            <Image
              src={ctaPrimary.publicUrl}
              alt={ctaPrimary.alt}
              width={ctaPrimary.width}
              height={ctaPrimary.height}
              priority
              className="home-final-cta__image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
