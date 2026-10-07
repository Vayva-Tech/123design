import { Eyebrow } from '@/components/ui/Eyebrow';
import { CapabilityCard } from './CapabilityCard';
import type { CapabilityGroupData } from '../types';

interface CapabilityGroupSectionProps {
  group: CapabilityGroupData;
}

export function CapabilityGroupSection({ group }: CapabilityGroupSectionProps) {
  return (
    <section className="capability-group" aria-label={group.label}>
      <Eyebrow marker>{group.label}</Eyebrow>
      <div className="capability-group__grid">
        {group.capabilities.map((entry) => (
          <CapabilityCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </section>
  );
}
