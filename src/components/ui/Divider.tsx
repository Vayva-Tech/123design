interface DividerProps {
  strength?: 'default' | 'strong';
  className?: string;
}

export function Divider({ strength = 'default', className }: DividerProps) {
  const combined = ['divider', className].filter(Boolean).join(' ');
  return <hr className={combined} data-strength={strength} />;
}
