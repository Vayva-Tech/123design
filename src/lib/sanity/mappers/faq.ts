import type { FaqItemModel } from '@/types/domain';
import type { FaqRecord } from '../validation';

export function mapFaqItem(record: FaqRecord): FaqItemModel {
  return {
    question: record.question,
    answer: record.answer,
    category: record.category,
  };
}
