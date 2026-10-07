import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { MediaFrame } from '@/components/media/MediaFrame';
import type { TechnicalModuleModel } from '@/types/domain';

interface ProjectTechnicalDetailsProps {
  module: TechnicalModuleModel;
}

export function ProjectTechnicalDetails({ module }: ProjectTechnicalDetailsProps) {
  return (
    <section className="project-technical">
      <Container variant="reading">
        <div className="project-technical__inner">
          {module.heading && (
            <Heading variant="h2" className="project-technical__heading">
              {module.heading}
            </Heading>
          )}

          {module.details && (
            <Text variant="body" className="project-technical__details">
              {module.details}
            </Text>
          )}

          {module.media && (
            <div className="project-technical__media">
              {module.media.kind === 'IMAGE' ? (
                <MediaFrame variant="containedStage">
                  <ResponsiveImage media={module.media} sizes="(max-width: 768px) 100vw, 720px" />
                </MediaFrame>
              ) : (
                <MediaFrame variant="containedStage">
                  <video
                    src={module.media.url}
                    poster={module.media.poster?.url}
                    controls
                    playsInline
                    preload="metadata"
                    className="project-technical__video"
                    aria-label="Technical video"
                  />
                </MediaFrame>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
