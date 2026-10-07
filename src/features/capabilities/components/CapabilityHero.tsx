import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { VideoPlayer } from '@/components/system/VideoPlayer';
import { CAPABILITY_EYEBROW } from '../content';
import type { CapabilityPageData } from '../types';
import type { MediaModel } from '@/types/domain';

interface CapabilityHeroProps {
  data: CapabilityPageData;
  priority?: boolean;
}

function HeroMedia({ media, priority }: { media?: MediaModel; priority?: boolean }) {
  if (!media) return null;

  if (media.kind === 'VIDEO') {
    return (
      <div className="capability-hero__media">
        <VideoPlayer media={media} autoPlay muted loop controls={false} />
      </div>
    );
  }

  return (
    <div className="capability-hero__media">
      <ResponsiveImage media={media} priority={priority} sizes="100vw" />
    </div>
  );
}

export function CapabilityHero({ data, priority = false }: CapabilityHeroProps) {
  return (
    <section className="capability-hero" aria-label="Capability hero">
      <HeroMedia media={data.heroMedia} priority={priority} />
      <Container variant="shell" className="capability-hero__content">
        <Eyebrow marker>
          {CAPABILITY_EYEBROW} &mdash; {data.group}
        </Eyebrow>
        <Heading variant="displayXL" className="capability-hero__title">
          {data.title}
        </Heading>
        {data.shortDescription && (
          <Text variant="lead" className="capability-hero__summary">
            {data.shortDescription}
          </Text>
        )}
      </Container>
    </section>
  );
}
