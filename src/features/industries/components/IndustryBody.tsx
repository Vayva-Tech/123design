import { Container } from '@/components/layout/Container';
import { Text } from '@/components/ui/Text';

interface IndustryBodyProps {
  intro?: string;
}

export function IndustryBody({ intro }: IndustryBodyProps) {
  if (!intro) return null;

  return (
    <section className="industry-body" aria-label="Overview">
      <Container variant="reading">
        <Text variant="lead" className="industry-body__intro">
          {intro}
        </Text>
      </Container>
    </section>
  );
}
