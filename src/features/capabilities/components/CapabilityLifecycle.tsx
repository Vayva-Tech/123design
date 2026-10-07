import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Tag } from '@/components/ui/Tag';
import type { LifecycleStage } from '@/types/domain';

const STAGE_LABELS: Record<string, string> = {
  CON: 'Concept',
  EVT: 'Engineering Validation',
  DVT: 'Design Validation',
  PVT: 'Production Validation',
  PRODUCTION: 'Production',
};

interface CapabilityLifecycleProps {
  stages: LifecycleStage[];
}

export function CapabilityLifecycle({ stages }: CapabilityLifecycleProps) {
  if (stages.length === 0) return null;

  return (
    <section className="capability-lifecycle" aria-label="Lifecycle stages">
      <Container variant="reading">
        <Eyebrow>Active at Stage</Eyebrow>
        <div className="capability-lifecycle__tags">
          {stages.map((stage) => (
            <Tag key={stage}>{STAGE_LABELS[stage] ?? stage}</Tag>
          ))}
        </div>
      </Container>
    </section>
  );
}
