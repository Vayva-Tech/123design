import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { processStages } from '@/features/home/launch-media';
import { LIFECYCLE_HEADING_LINES, PROCESS_STAGE_DETAILS } from '../content';

const STAGE_IMAGE_MAP: Record<string, (typeof processStages)[number]> = {
  CON: processStages[0]!,
  EVT: processStages[1]!,
  DVT: processStages[2]!,
  PVT: processStages[3]!,
  PRODUCTION: processStages[4]!,
};

export function ProcessMosaic() {
  return (
    <section className="process-mosaic" aria-label="Development lifecycle stages">
      <Container variant="shell">
        <Eyebrow>LIFECYCLE</Eyebrow>
        <Heading variant="h2" className="process-mosaic__heading">
          {LIFECYCLE_HEADING_LINES.map((line) => (
            <span key={line} className="process-mosaic__heading-line">
              {line}
            </span>
          ))}
        </Heading>
        <div className="process-mosaic__grid">
          {PROCESS_STAGE_DETAILS.map((stage) => {
            const stageImage = STAGE_IMAGE_MAP[stage.code];
            return (
              <article key={stage.code} className="process-mosaic__card">
                {stageImage && (
                  <div className="process-mosaic__media">
                    <Image
                      src={stageImage.publicUrl}
                      alt={stageImage.alt}
                      width={120}
                      height={80}
                      loading="lazy"
                      className="process-mosaic__image"
                      sizes="120px"
                    />
                  </div>
                )}
                <span className="process-mosaic__code">{stage.code}</span>
                <Text variant="body" className="process-mosaic__label">
                  {stage.label}
                </Text>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
