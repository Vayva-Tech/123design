'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface VideoCarouselProps {
  videos: { id: string; url: string; alt: string; caption?: string }[];
  autoAdvanceMs?: number;
}

export function VideoCarousel({ videos, autoAdvanceMs = 6000 }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % videos.length);
  }, [videos.length]);

  useEffect(() => {
    timerRef.current = setTimeout(advance, autoAdvanceMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, advance, autoAdvanceMs]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div ref={containerRef} className="video-carousel" aria-label="Product showcase videos">
      <div className="video-carousel__stage">
        {videos.map((video, i) => (
          <div
            key={video.id}
            className={`video-carousel__slide${i === activeIndex ? ' video-carousel__slide--active' : ''}`}
            aria-hidden={i !== activeIndex}
          >
            <div className="video-carousel__media-wrapper">
              <video
                src={video.url}
                autoPlay={i === activeIndex}
                muted
                loop={i === activeIndex}
                playsInline
                preload={i === activeIndex ? 'auto' : 'none'}
                className="video-carousel__video"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="video-carousel__dots" role="tablist" aria-label="Video navigation">
        {videos.map((video, i) => (
          <button
            key={video.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show video ${i + 1}`}
            className={`video-carousel__dot${i === activeIndex ? ' video-carousel__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
