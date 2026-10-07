import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import type { MediaModel } from '@/types/domain';

interface CapabilitySupportMediaProps {
  media: MediaModel[];
}

export function CapabilitySupportMedia({ media }: CapabilitySupportMediaProps) {
  if (media.length === 0) return null;

  return (
    <section className="capability-support-media" aria-label="Supporting media">
      <Container variant="wideMedia">
        <Eyebrow>Gallery</Eyebrow>
        <div className="capability-support-media__grid">
          {media.map((item, index) => {
            if (item.kind === 'IMAGE') {
              return (
                <div key={index} className="capability-support-media__item">
                  <ResponsiveImage media={item} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              );
            }
            return null;
          })}
        </div>
      </Container>
    </section>
  );
}
