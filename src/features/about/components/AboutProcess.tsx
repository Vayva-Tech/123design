import Link from 'next/link';
import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import {
  PROCESS_EYEBROW,
  PROCESS_HEADING,
  PROCESS_BODY,
  PROCESS_STAGES,
  PROCESS_LINK,
} from '../content';

export function AboutProcess() {
  return (
    <section className="about-process" aria-label="Our process overview">
      <Container variant="content">
        <div className="about-process__header">
          <Eyebrow marker>{PROCESS_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="h2">
            {PROCESS_HEADING}
          </Heading>
          <Text variant="bodyLarge">{PROCESS_BODY}</Text>
        </div>
        <div className="about-process__stages">
          {PROCESS_STAGES.map((stage, index) => (
            <div key={stage.code} className="about-process__stage">
              <span className="about-process__stage-code">{stage.code}</span>
              <span className="about-process__stage-name">{stage.name}</span>
              {index < PROCESS_STAGES.length - 1 && (
                <span className="about-process__stage-arrow" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="about-process__cta">
          <Link href={PROCESS_LINK.href} className="about-process__link">
            {PROCESS_LINK.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
