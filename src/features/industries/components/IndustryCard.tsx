import Link from 'next/link';
import { Text } from '@/components/ui/Text';
import type { IndustryIndexEntry } from '../types';

interface IndustryCardProps {
  entry: IndustryIndexEntry;
}

export function IndustryCard({ entry }: IndustryCardProps) {
  return (
    <Link href={`/industries/${entry.slug}`} className="industry-card">
      <Text variant="bodyLarge" as="span" className="industry-card__title">
        {entry.title}
      </Text>
      <Text variant="small" as="span" className="industry-card__description">
        {entry.shortDescription}
      </Text>
    </Link>
  );
}
