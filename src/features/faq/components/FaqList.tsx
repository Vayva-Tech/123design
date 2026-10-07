import { Container } from '@/components/layout';
import type { FaqItemModel } from '@/types/domain';

interface FaqListProps {
  items: FaqItemModel[];
}

export function FaqList({ items }: FaqListProps) {
  return (
    <section className="faq-list" aria-label="Questions and answers">
      <Container variant="reading">
        <div className="faq-list__items">
          {items.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-item__question">
                <span>{item.question}</span>
              </summary>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
