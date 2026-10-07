import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { PROCESS_PRINCIPLES } from '../content';

export function ProcessPrinciples() {
  return (
    <section className="process-principles" aria-label="Process principles">
      <Container variant="reading">
        <Heading variant="h2" className="process-principles__heading">
          HOW WE WORK
        </Heading>
        <div className="process-principles__grid">
          {PROCESS_PRINCIPLES.map((principle) => (
            <div key={principle.code} className="process-principles__item">
              <Heading variant="h4" className="process-principles__title">
                {principle.title}
              </Heading>
              <Text variant="body" className="process-principles__description">
                {principle.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
