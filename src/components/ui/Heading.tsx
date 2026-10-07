type HeadingVariant = 'displayXL' | 'displayL' | 'h1' | 'h2' | 'h3' | 'h4';
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const variantClassMap: Record<HeadingVariant, string> = {
  displayXL: 'type-display-xl',
  displayL: 'type-display-l',
  h1: 'type-h1',
  h2: 'type-h2',
  h3: 'type-h3',
  h4: 'type-h4',
};

const defaultElementMap: Record<HeadingVariant, HeadingElement> = {
  displayXL: 'h1',
  displayL: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

interface HeadingProps {
  variant?: HeadingVariant;
  as?: HeadingElement;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ variant = 'h1', as, children, className }: HeadingProps) {
  const Component = as ?? defaultElementMap[variant];
  const combined = [variantClassMap[variant], className].filter(Boolean).join(' ');

  return <Component className={combined}>{children}</Component>;
}
