import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

interface CapabilityMethodsProps {
  items: string[];
}

export function CapabilityMethods({ items }: CapabilityMethodsProps) {
  if (items.length === 0) return null;

  return (
    <section className="capability-methods" aria-label="Methods">
      <Container variant="reading">
        <Eyebrow>Methods</Eyebrow>
        <Heading variant="h3" className="capability-methods__heading">
          How we work
        </Heading>
        <ul className="capability-methods__list">
          {items.map((item) => (
            <li key={item} className="capability-methods__item">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
