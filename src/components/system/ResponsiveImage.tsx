import Image from 'next/image';
import type { ImageMediaModel } from '@/types/domain';

interface ResponsiveImageProps {
  media: ImageMediaModel;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}

export function ResponsiveImage({
  media,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  fill = false,
}: ResponsiveImageProps) {
  const combined = ['responsive-image', className].filter(Boolean).join(' ');
  const alt = media.decorative ? '' : media.alt;

  if (fill) {
    return (
      <Image
        src={media.url}
        alt={alt}
        fill
        className={combined}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={media.url}
      alt={alt}
      width={media.width ?? 1200}
      height={media.height ?? 800}
      className={combined}
      sizes={sizes}
      priority={priority}
    />
  );
}
