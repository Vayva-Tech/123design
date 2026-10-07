import { Container } from '@/components/layout/Container';
import { Text } from '@/components/ui/Text';

interface CapabilityBodyProps {
  intro?: string;
  body?: string;
}

export function CapabilityBody({ intro, body }: CapabilityBodyProps) {
  if (!intro && !body) return null;

  return (
    <section className="capability-body" aria-label="Overview">
      <Container variant="reading">
        {intro && (
          <Text variant="lead" className="capability-body__intro">
            {intro}
          </Text>
        )}
        {body && (
          <Text variant="body" className="capability-body__text">
            {body}
          </Text>
        )}
      </Container>
    </section>
  );
}
