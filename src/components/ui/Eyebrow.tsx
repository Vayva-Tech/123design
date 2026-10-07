interface EyebrowProps {
  children: React.ReactNode;
  marker?: boolean;
  className?: string;
}

export function Eyebrow({ children, marker = false, className }: EyebrowProps) {
  const combined = ['eyebrow', className].filter(Boolean).join(' ');
  return (
    <div className={combined}>
      {marker && <span aria-hidden="true" className="eyebrow-marker" />}
      <span className="eyebrow-text type-small">{children}</span>
    </div>
  );
}
