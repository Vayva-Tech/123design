interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  const combined = ['tag', className].filter(Boolean).join(' ');
  return <span className={combined}>{children}</span>;
}
