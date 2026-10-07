import Image from 'next/image';
import { Container } from '@/components/layout';
import { Eyebrow, Heading, Text } from '@/components/ui';
import {
  LIFECYCLE_EYEBROW,
  LIFECYCLE_HEADING_LINES,
  LIFECYCLE_DESCRIPTION,
  LIFECYCLE_STAGES,
} from '../content';
import { processStages } from '../launch-media';

const STAGE_IMAGE_MAP: Record<string, (typeof processStages)[number]> = {
  CON: processStages[0]!,
  EVT: processStages[1]!,
  DVT: processStages[2]!,
  PVT: processStages[3]!,
  PRODUCTION: processStages[4]!,
};

export function HomeLifecycle() {
  return (
    <section className="home-lifecycle" data-page-overlay="dark" aria-label="Our process">
      <Container variant="content">
        <div className="home-lifecycle__header">
          <div className="home-lifecycle__header-text">
            <Eyebrow>{LIFECYCLE_EYEBROW}</Eyebrow>
            <Heading variant="h2" className="heading-lines">
              {LIFECYCLE_HEADING_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Heading>
          </div>
          <div className="home-lifecycle__header-desc">
            <Text variant="body">{LIFECYCLE_DESCRIPTION}</Text>
          </div>
        </div>
        <div className="home-lifecycle__timeline">
          <div className="home-lifecycle__rail" aria-hidden="true" />
          {LIFECYCLE_STAGES.map((stage) => {
            const stageImage = STAGE_IMAGE_MAP[stage.code];
            return (
              <div key={stage.code} className="home-lifecycle__stage">
                {stageImage && (
                  <div className="home-lifecycle__media">
                    <Image
                      src={stageImage.publicUrl}
                      alt={stageImage.alt}
                      width={stageImage.width}
                      height={stageImage.height}
                      loading="lazy"
                      className="home-lifecycle__image"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                )}
                <div className="home-lifecycle__node">
                  <span className="home-lifecycle__code">{stage.code}</span>
                  <span className="home-lifecycle__connector" aria-hidden="true" />
                </div>
                <div className="home-lifecycle__content">
                  <Heading variant="h4" as="h3">
                    {stage.label}
                  </Heading>
                  <Text variant="body" className="home-lifecycle__description">
                    {stage.description}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
