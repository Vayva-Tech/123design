'use client';

import { useCallback, useRef, useState } from 'react';
import type { MediaModel } from '@/types/domain';

interface ProjectCardPreviewMediaProps {
  previewVideo?: MediaModel;
}

const HOVER_DELAY_MS = 250;

function canPlayPreview(): boolean {
  if (typeof window === 'undefined') return false;
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!mq.matches) return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

export function ProjectCardPreviewMedia({ previewVideo }: ProjectCardPreviewMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);

  const startPreview = useCallback(() => {
    if (!previewVideo || previewVideo.kind !== 'VIDEO' || !canPlayPreview()) return;

    timerRef.current = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;

      setVisible(true);
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          setVisible(false);
        });
      }
    }, HOVER_DELAY_MS);
  }, [previewVideo]);

  const stopPreview = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setVisible(false);
  }, []);

  if (!previewVideo || previewVideo.kind !== 'VIDEO') return null;

  return (
    <div
      className="project-card__preview"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="project-card__preview-video"
        src={previewVideo.url}
        muted
        playsInline
        loop
        preload="none"
        data-visible={visible ? 'true' : undefined}
      />
    </div>
  );
}
