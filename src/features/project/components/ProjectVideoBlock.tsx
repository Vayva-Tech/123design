import { Container } from '@/components/layout/Container';
import { VideoPlayer } from '@/components/system/VideoPlayer';
import { MediaFrame } from '@/components/media/MediaFrame';
import { Text } from '@/components/ui/Text';
import type { VideoModuleModel } from '@/types/domain';

interface ProjectVideoBlockProps {
  module: VideoModuleModel;
}

export function ProjectVideoBlock({ module }: ProjectVideoBlockProps) {
  if (module.media.kind !== 'VIDEO') return null;

  const hasTranscript = Boolean(module.transcript);

  return (
    <section className="project-video-block">
      <Container variant="wideMedia">
        <MediaFrame variant="fullBleed" caption={module.caption}>
          <VideoPlayer media={module.media} controls />
        </MediaFrame>
        {hasTranscript && (
          <details className="project-video-block__transcript">
            <summary className="project-video-block__transcript-toggle">
              View transcript
            </summary>
            <Text variant="small" className="project-video-block__transcript-text">
              {module.transcript}
            </Text>
          </details>
        )}
      </Container>
    </section>
  );
}
