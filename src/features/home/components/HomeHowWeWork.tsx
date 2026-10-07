import { Container } from '@/components/layout';
import { Heading, Text, Eyebrow } from '@/components/ui';
import { HOW_WE_WORK_HEADING, HOW_WE_WORK_PRINCIPLES } from '../content';

export function HomeHowWeWork() {
  return (
    <section className="home-how-we-work">
      <Container variant="content">
        <div className="home-how-we-work__header">
          <Eyebrow marker>{HOW_WE_WORK_HEADING}</Eyebrow>
        </div>
        <div className="home-how-we-work__grid">
          {HOW_WE_WORK_PRINCIPLES.map((principle) => (
            <div key={principle.label} className="home-how-we-work__principle">
              <Heading variant="h4" as="h3">
                {principle.label}
              </Heading>
              <Text variant="body" className="home-how-we-work__description">
                {principle.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
