import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { MediaFrame } from '@/components/media/MediaFrame';
import { resolveNarrativeHeading } from '../module-labels';
import type { NarrativeModuleModel } from '@/types/domain';

interface NarrativeSectionProps {
  module: NarrativeModuleModel;
}

export function NarrativeSection({ module }: NarrativeSectionProps) {
  const heading = resolveNarrativeHeading(module.sectionType, module.heading);
  const hasMedia = Boolean(module.media);

  return (
    <section className="project-narrative" data-section={module.sectionType}>
      <Container variant="reading">
        <div className="project-narrative__inner">
          <Heading variant="h2" className="project-narrative__heading">
            {heading}
          </Heading>

          {module.body && (
            <Text variant="bodyLarge" className="project-narrative__body">
              {module.body}
            </Text>
          )}

          {hasMedia && module.media && (
            <div className="project-narrative__media">
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
                    className="project-narrative__video"
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
