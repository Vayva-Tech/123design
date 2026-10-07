import { Container } from '@/components/layout/Container';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { MediaFrame } from '@/components/media/MediaFrame';
import type { GalleryModuleModel } from '@/types/domain';

interface ProjectGalleryProps {
  module: GalleryModuleModel;
}

export function ProjectGallery({ module }: ProjectGalleryProps) {
  return (
    <section className="project-gallery">
      <Container variant="wideMedia">
        <div className="project-gallery__grid">
          {module.items.map((item, index) => (
            <MediaFrame
              key={index}
              variant="containedStage"
              caption={item.caption}
              className="project-gallery__item"
            >
              {item.media.kind === 'IMAGE' ? (
                <ResponsiveImage
                  media={item.media}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              ) : (
                <video
                  src={item.media.url}
                  poster={item.media.poster?.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="project-gallery__video"
                  aria-label={item.caption || 'Gallery video'}
                />
              )}
            </MediaFrame>
          ))}
        </div>
        {module.caption && <p className="project-gallery__caption type-small">{module.caption}</p>}
      </Container>
    </section>
  );
}
