import { Container } from '@/components/layout';
import { Eyebrow, Heading } from '@/components/ui';
import { VideoCarousel } from './VideoCarousel';
import { SHOWREEL_EYEBROW, SHOWREEL_HEADING_LINES } from '../content';
import { heroReelSecondHalf } from '../launch-media';

const carouselVideos = heroReelSecondHalf.map((entry) => ({
  id: entry.id,
  url: entry.videoUrl,
  alt: entry.alt || 'Product showcase video',
}));

export function HomeShowreel() {
  return (
    <section className="home-showreel" aria-label="Showreel">
      <Container variant="content">
        <div className="home-showreel__header">
          <Eyebrow marker>{SHOWREEL_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="displayL" className="heading-lines">
            {SHOWREEL_HEADING_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Heading>
        </div>
        <div className="home-showreel__video">
          <VideoCarousel videos={carouselVideos} />
        </div>
      </Container>
    </section>
  );
}
