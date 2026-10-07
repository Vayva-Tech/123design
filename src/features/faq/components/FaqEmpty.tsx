import { Container } from '@/components/layout';
import { Text } from '@/components/ui/Text';
import { FAQ_EMPTY_STATE } from '../content';

export function FaqEmpty() {
  return (
    <section className="faq-empty" aria-label="No questions available">
      <Container variant="reading">
        <div className="faq-empty__inner">
          <Text variant="bodyLarge">{FAQ_EMPTY_STATE}</Text>
        </div>
      </Container>
    </section>
  );
}
