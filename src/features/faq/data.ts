import { hasSanityConfig } from '@/lib/sanity/config';
import { fetchFaq } from '@/lib/sanity/fetch/data-access';
import { mapFaqItem } from '@/lib/sanity/mappers/faq';
import type { FaqPageData } from './types';
import { STATIC_FAQ_ITEMS } from './content';

const STATIC_FALLBACK: FaqPageData = {
  items: STATIC_FAQ_ITEMS,
  hasItems: true,
};

export async function getFaqPageData(): Promise<FaqPageData> {
  if (!hasSanityConfig()) {
    return STATIC_FALLBACK;
  }

  try {
    const records = await fetchFaq();
    const items = records.map(mapFaqItem);

    if (items.length === 0) {
      return STATIC_FALLBACK;
    }

    return {
      items,
      hasItems: true,
    };
  } catch {
    return STATIC_FALLBACK;
  }
}
