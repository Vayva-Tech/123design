type SectionSpacing = 'standard' | 'compact' | 'large' | 'none';

interface SectionProps {
  spacing?: SectionSpacing;
  children: React.ReactNode;
  className?: string;
}

export function Section({ spacing = 'standard', children, className }: SectionProps) {
  const combined = ['section', className].filter(Boolean).join(' ');
  return (
    <section className={combined} data-spacing={spacing}>
      {children}
    </section>
  );
}
