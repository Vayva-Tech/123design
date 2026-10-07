import Link from 'next/link';
import { Text } from '@/components/ui/Text';
import { Tag } from '@/components/ui/Tag';
import type { CapabilityIndexEntry } from '../types';

const STAGE_LABELS: Record<string, string> = {
  CON: 'Concept',
  EVT: 'EVT',
  DVT: 'DVT',
  PVT: 'PVT',
  PRODUCTION: 'Production',
};

interface CapabilityCardProps {
  entry: CapabilityIndexEntry;
}

export function CapabilityCard({ entry }: CapabilityCardProps) {
  return (
    <Link href={`/capabilities/${entry.slug}`} className="capability-card">
      <Text variant="bodyLarge" as="span" className="capability-card__title">
        {entry.title}
      </Text>
      {entry.shortDescription && (
        <Text variant="small" as="span" className="capability-card__description">
          {entry.shortDescription}
        </Text>
      )}
      {entry.lifecycleStages && entry.lifecycleStages.length > 0 && (
        <div className="capability-card__stages">
          {entry.lifecycleStages.map((stage) => (
            <Tag key={stage}>{STAGE_LABELS[stage] ?? stage}</Tag>
          ))}
        </div>
      )}
    </Link>
  );
}
