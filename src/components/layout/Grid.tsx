type GapKey = '2' | '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '64';

interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: GapKey;
  children: React.ReactNode;
  className?: string;
}

export function Grid({ columns = 2, gap = '24', children, className }: GridProps) {
  const combined = ['grid', className].filter(Boolean).join(' ');
  return (
    <div className={combined} data-columns={columns} data-gap={gap}>
      {children}
    </div>
  );
}
