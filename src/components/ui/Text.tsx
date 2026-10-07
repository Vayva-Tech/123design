type TextVariant = 'lead' | 'bodyLarge' | 'body' | 'small' | 'micro';

const variantClassMap: Record<TextVariant, string> = {
  lead: 'type-lead',
  bodyLarge: 'type-body-lg',
  body: 'type-body',
  small: 'type-small',
  micro: 'type-micro',
};

interface TextProps {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

export function Text({ variant = 'body', as: Component = 'p', children, className }: TextProps) {
  return (
    <Component className={className}>
      <span className={variantClassMap[variant]}>{children}</span>
    </Component>
  );
}
