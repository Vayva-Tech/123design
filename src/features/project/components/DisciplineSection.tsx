import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { MediaFrame } from '@/components/media/MediaFrame';
import { resolveDisciplineHeading } from '../module-labels';
import type { DisciplineModuleModel } from '@/types/domain';

interface DisciplineSectionProps {
  module: DisciplineModuleModel;
}

export function DisciplineSection({ module }: DisciplineSectionProps) {
  const heading = resolveDisciplineHeading(module.sectionType, module.heading);
  const hasMedia = Boolean(module.media);

  return (
    <section className="project-discipline" data-section={module.sectionType}>
      <Container variant="reading">
        <div className="project-discipline__inner">
          <Heading variant="h2" className="project-discipline__heading">
            {heading}
          </Heading>

          {module.body && (
            <Text variant="bodyLarge" className="project-discipline__body">
              {module.body}
            </Text>
          )}

          {hasMedia && module.media && (
            <div className="project-discipline__media">
              {module.media.kind === 'IMAGE' ? (
                <MediaFrame variant="containedStage" caption={module.caption}>
                  <ResponsiveImage media={module.media} sizes="(max-width: 768px) 100vw, 720px" />
                </MediaFrame>
              ) : (
                <MediaFrame variant="containedStage" caption={module.caption}>
                  <video
                    src={module.media.url}
                    poster={module.media.poster?.url}
                    controls
                    playsInline
                    preload="metadata"
                    className="project-discipline__video"
                    aria-label={module.caption || 'Project video'}
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
