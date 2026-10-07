type GapKey = '2' | '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '64';

interface StackProps {
  gap?: GapKey;
  as?: 'div' | 'section' | 'article' | 'nav' | 'header' | 'footer';
  align?: 'start' | 'center' | 'end' | 'stretch';
  children: React.ReactNode;
  className?: string;
}

export function Stack({
  gap = '16',
  as: Component = 'div',
  align = 'stretch',
  children,
  className,
}: StackProps) {
  const combined = ['stack', className].filter(Boolean).join(' ');
  return (
    <Component className={combined} data-gap={gap} data-align={align}>
      {children}
    </Component>
  );
}
