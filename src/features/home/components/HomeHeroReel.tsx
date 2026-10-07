'use client';

import { homepageHeroReel } from '../launch-media';

export function HomeHeroReel() {
  const entry = homepageHeroReel[0];
  if (!entry) {
    return null;
  }

  return (
    <>
      {entry.videoUrl && (
        <div className="home-hero__wrapper">
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={entry.posterUrl}
            aria-hidden={entry.decorative ? 'true' : undefined}
          >
            <source src={entry.videoUrl} type="video/mp4" />
          </video>
          {entry.caption && (
            <div className="home-hero__caption">
              <span className="home-hero__caption-text">{entry.caption}</span>
            </div>
          )}
        </div>
      )}
      {!entry.videoUrl && (
        <div className="home-hero__wrapper">
          <img
            src={entry.posterUrl}
            alt={entry.decorative ? '' : entry.alt}
            className="home-hero__poster"
          />
          {entry.caption && (
            <div className="home-hero__caption">
              <span className="home-hero__caption-text">{entry.caption}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
