type GapKey = '2' | '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '64';

interface ClusterProps {
  gap?: GapKey;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Cluster({
  gap = '12',
  align = 'center',
  justify = 'start',
  wrap = true,
  children,
  className,
}: ClusterProps) {
  const combined = ['cluster', className].filter(Boolean).join(' ');
  return (
    <div
      className={combined}
      data-gap={gap}
      data-align={align}
      data-justify={justify}
      data-wrap={wrap ? 'wrap' : 'nowrap'}
    >
      {children}
    </div>
  );
}
