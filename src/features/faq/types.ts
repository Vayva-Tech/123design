import type { FaqItemModel } from '@/types/domain';

export interface FaqPageData {
  items: FaqItemModel[];
  hasItems: boolean;
}
