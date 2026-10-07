import type { VideoMediaModel } from '@/types/domain';

interface VideoPlayerProps {
  media: VideoMediaModel;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
}

export function VideoPlayer({
  media,
  className,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
}: VideoPlayerProps) {
  const combined = ['video-player', className].filter(Boolean).join(' ');

  return (
    <video
      className={combined}
      src={media.url}
      poster={media.poster?.url}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      preload="metadata"
      aria-label={media.caption || 'Project video'}
    >
      {media.transcript && (
        <track kind="captions" src={media.transcript} srcLang="en" label="English" />
      )}
    </video>
  );
}
