import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { CONSIDERATIONS_EYEBROW } from '../content';

interface IndustryConsiderationsProps {
  considerations: string[];
}

export function IndustryConsiderations({ considerations }: IndustryConsiderationsProps) {
  if (considerations.length === 0) return null;

  return (
    <section className="industry-considerations" aria-label="Development considerations">
      <Container variant="reading">
        <Eyebrow>{CONSIDERATIONS_EYEBROW}</Eyebrow>
        <Heading variant="h3" className="industry-considerations__heading">
          Key development considerations
        </Heading>
        <ul className="industry-considerations__list">
          {considerations.map((consideration, index) => (
            <li key={index} className="industry-considerations__item">
              <Text variant="body">{consideration}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
