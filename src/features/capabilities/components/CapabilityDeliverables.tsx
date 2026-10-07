import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';

interface CapabilityDeliverablesProps {
  items: string[];
}

export function CapabilityDeliverables({ items }: CapabilityDeliverablesProps) {
  if (items.length === 0) return null;

  return (
    <section className="capability-deliverables" aria-label="Deliverables">
      <Container variant="reading">
        <Eyebrow>Deliverables</Eyebrow>
        <Heading variant="h3" className="capability-deliverables__heading">
          What we deliver
        </Heading>
        <ul className="capability-deliverables__list">
          {items.map((item) => (
            <li key={item} className="capability-deliverables__item">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
