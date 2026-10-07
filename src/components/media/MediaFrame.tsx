type MediaFrameVariant = 'fullBleed' | 'containedStage' | 'documentFrame';
type AspectRatio = 'auto' | 'square' | '4:3' | '16:10' | '16:9';

const variantAttrMap: Record<MediaFrameVariant, string> = {
  fullBleed: 'full-bleed',
  containedStage: 'contained-stage',
  documentFrame: 'document-frame',
};

interface MediaFrameProps {
  variant?: MediaFrameVariant;
  aspect?: AspectRatio;
  caption?: string;
  children: React.ReactNode;
  className?: string;
}

export function MediaFrame({
  variant = 'containedStage',
  aspect = 'auto',
  caption,
  children,
  className,
}: MediaFrameProps) {
  const combined = ['media-frame', className].filter(Boolean).join(' ');
  return (
    <figure className={combined}>
      <div
        className="media-frame-inner"
        data-variant={variantAttrMap[variant]}
        data-aspect={aspect !== 'auto' ? aspect : undefined}
      >
        {children}
      </div>
      {caption && <figcaption className="media-frame-caption type-small">{caption}</figcaption>}
    </figure>
  );
}
