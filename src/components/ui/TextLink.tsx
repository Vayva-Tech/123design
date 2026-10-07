import Link from 'next/link';
import { isInternalLink } from '@/lib/navigation';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  external?: boolean;
  className?: string;
}

export function TextLink({
  href,
  children,
  arrow = false,
  external = false,
  className,
}: TextLinkProps) {
  const combined = ['text-link', className].filter(Boolean).join(' ');
  const arrowContent = arrow ? (
    <span aria-hidden="true" className="text-link-arrow">
      &rarr;
    </span>
  ) : null;

  if (external) {
    return (
      <a href={href} className={combined} target="_blank" rel="noopener noreferrer">
        {children}
        {arrowContent}
      </a>
    );
  }

  if (isInternalLink(href)) {
    return (
      <Link href={href} className={combined}>
        {children}
        {arrowContent}
      </Link>
    );
  }

  return (
    <a href={href} className={combined}>
      {children}
      {arrowContent}
    </a>
  );
}
