import Link from 'next/link';
import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import {
  DISCIPLINES_EYEBROW,
  DISCIPLINES_HEADING,
  DISCIPLINES_BODY,
  DISCIPLINES_LINK,
} from '../content';

export function AboutDisciplines() {
  return (
    <section className="about-disciplines" aria-label="Integrated disciplines">
      <Container variant="content">
        <div className="about-disciplines__header">
          <Eyebrow marker>{DISCIPLINES_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="h2">
            {DISCIPLINES_HEADING}
          </Heading>
          <Text variant="bodyLarge">{DISCIPLINES_BODY}</Text>
        </div>
        <div className="about-disciplines__cta">
          <Link href={DISCIPLINES_LINK.href} className="about-disciplines__link">
            {DISCIPLINES_LINK.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
