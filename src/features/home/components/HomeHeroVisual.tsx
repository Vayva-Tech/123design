'use client';

import { VideoCarousel } from './VideoCarousel';
import { heroReelFirstHalf } from '../launch-media';

const heroVideos = heroReelFirstHalf.map((entry) => ({
  id: entry.id,
  url: entry.videoUrl,
  alt: entry.alt || 'Product showcase',
  caption: entry.caption,
}));

export function HomeHeroVisual() {
  return (
    <div className="home-hero__visual">
      <VideoCarousel videos={heroVideos} />
    </div>
  );
}
