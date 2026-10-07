import Link from 'next/link';
import { isInternalLink } from '@/lib/navigation';

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'dark' | 'danger';
type ButtonSize = 'large' | 'default' | 'compact';

type ButtonAsButton = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: undefined;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonAsLink = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
  className?: string;
  children: React.ReactNode;
  disabled?: undefined;
  loading?: undefined;
  type?: undefined;
  onClick?: undefined;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === 'string';
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'default', className } = props;
  const combined = ['btn', className].filter(Boolean).join(' ');

  if (isLinkButton(props)) {
    if (isInternalLink(props.href)) {
      return (
        <Link
          href={props.href}
          className={combined}
          data-variant={variant}
          data-size={variant === 'text' ? undefined : size}
        >
          {props.children}
        </Link>
      );
    }
    return (
      <a
        href={props.href}
        className={combined}
        data-variant={variant}
        data-size={variant === 'text' ? undefined : size}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={combined}
      data-variant={variant}
      data-size={variant === 'text' ? undefined : size}
      data-disabled={props.disabled ? 'true' : undefined}
      data-loading={props.loading ? 'true' : undefined}
      disabled={props.disabled || props.loading}
      aria-busy={props.loading || undefined}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
