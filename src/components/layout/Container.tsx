type ContainerVariant = 'shell' | 'content' | 'reading' | 'wideMedia';

const variantAttrMap: Record<ContainerVariant, string> = {
  shell: 'shell',
  content: 'content',
  reading: 'reading',
  wideMedia: 'wide-media',
};

interface ContainerProps {
  variant?: ContainerVariant;
  children: React.ReactNode;
  className?: string;
}

export function Container({ variant = 'content', children, className }: ContainerProps) {
  const combined = ['container', className].filter(Boolean).join(' ');
  return (
    <div className={combined} data-variant={variantAttrMap[variant]}>
      {children}
    </div>
  );
}
