import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import {
  PHILOSOPHY_EYEBROW,
  PHILOSOPHY_HEADING,
  PHILOSOPHY_BODY,
  PHILOSOPHY_PRINCIPLES,
} from '../content';

export function AboutPhilosophy() {
  return (
    <section className="about-philosophy" aria-label="Our philosophy">
      <Container variant="content">
        <div className="about-philosophy__intro">
          <Eyebrow marker>{PHILOSOPHY_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="h2">
            {PHILOSOPHY_HEADING}
          </Heading>
          <Text variant="bodyLarge">{PHILOSOPHY_BODY}</Text>
        </div>
        <div className="about-philosophy__principles">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div key={principle.title} className="about-philosophy__principle">
              <Heading as="h3" variant="h4">
                {principle.title}
              </Heading>
              <Text variant="body">{principle.description}</Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
