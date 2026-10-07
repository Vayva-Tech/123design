import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { processStages } from '@/features/home/launch-media';
import type { ProcessStageDetail } from '../content';

const STAGE_IMAGE_MAP: Record<string, (typeof processStages)[number]> = {
  CON: processStages[0]!,
  EVT: processStages[1]!,
  DVT: processStages[2]!,
  PVT: processStages[3]!,
  PRODUCTION: processStages[4]!,
};

interface ProcessStageSectionProps {
  stage: ProcessStageDetail;
}

export function ProcessStageSection({ stage }: ProcessStageSectionProps) {
  const stageImage = STAGE_IMAGE_MAP[stage.code];

  return (
    <section
      className="process-stage"
      aria-label={`${stage.code} — ${stage.label}`}
      data-stage={stage.code}
    >
      <Container variant="reading">
        <div className="process-stage__header">
          <span className="process-stage__code">{stage.code}</span>
          <Heading variant="h2" className="process-stage__label">
            {stage.label}
          </Heading>
        </div>
        <div className="process-stage__content">
          {stageImage && (
            <div className="process-stage__media">
              <Image
                src={stageImage.publicUrl}
                alt={stageImage.alt}
                width={stageImage.width}
                height={stageImage.height}
                loading="lazy"
                className="process-stage__image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          <ul className="process-stage__activities">
            {stage.activities.map((activity) => (
              <li key={activity} className="process-stage__activity">
                <Text variant="body">{activity}</Text>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
