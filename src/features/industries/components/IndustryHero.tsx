import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import { INDUSTRY_EYEBROW } from '../content';
import type { IndustryPageData } from '../types';
import type { MediaModel } from '@/types/domain';

function HeroMedia({ media }: { media?: MediaModel }) {
  if (!media) return null;

  if (media.kind === 'VIDEO') return null;

  return (
    <div className="industry-hero__media">
      <ResponsiveImage media={media} priority sizes="100vw" />
    </div>
  );
}

interface IndustryHeroProps {
  data: IndustryPageData;
  priority?: boolean;
}

export function IndustryHero({ data }: IndustryHeroProps) {
  return (
    <section className="industry-hero" aria-label="Industry hero">
      <HeroMedia media={data.heroMedia} />
      <Container variant="shell" className="industry-hero__content">
        <Eyebrow marker>{INDUSTRY_EYEBROW}</Eyebrow>
        <Heading variant="displayXL" className="industry-hero__title">
          {data.title}
        </Heading>
        <Text variant="lead" className="industry-hero__summary">
          {data.shortDescription}
        </Text>
      </Container>
    </section>
  );
}
