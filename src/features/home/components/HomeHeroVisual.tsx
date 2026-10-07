'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { heroReelFirstHalf } from '../launch-media';

const heroImages = heroReelFirstHalf.map((entry) => ({
  id: entry.id,
  posterUrl: entry.posterUrl,
  alt: entry.alt || 'Product showcase',
}));

export function HomeHeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(advance, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, advance]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="home-hero__visual" aria-label="Product showcase">
      <div className="video-carousel__stage">
        {heroImages.map((image, i) => (
          <div
            key={image.id}
            className={`video-carousel__slide${i === activeIndex ? ' video-carousel__slide--active' : ''}`}
            aria-hidden={i !== activeIndex}
          >
            <div className="video-carousel__media-wrapper">
              <img
                src={image.posterUrl}
                alt={image.alt}
                className="video-carousel__video"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="video-carousel__dots" role="tablist" aria-label="Image navigation">
        {heroImages.map((image, i) => (
          <button
            key={image.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show image ${i + 1}`}
            className={`video-carousel__dot${i === activeIndex ? ' video-carousel__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
