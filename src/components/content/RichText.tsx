import type { ReactNode } from 'react';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlockModel } from '@/types/domain';

type PTBlock = { children?: ReactNode };
type PTLink = { value?: { href?: string }; children?: ReactNode };

interface RichTextProps {
  blocks: PortableTextBlockModel[];
}

const ALLOWED_BLOCK_STYLES = new Set(['normal', 'h2', 'h3', 'h4', 'blockquote']);
const ALLOWED_MARKS = new Set(['strong', 'em', 'code']);

function isExternalUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function sanitizeHref(href: string | undefined): string | undefined {
  if (!href) return undefined;
  if (isExternalUrl(href)) return href;
  if (href.startsWith('/')) return href;
  if (href.startsWith('#')) return href;
  if (href.startsWith('mailto:')) return href;
  return undefined;
}

export function RichText({ blocks }: RichTextProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="rich-text">
      <PortableText
        value={blocks as never}
        components={{
          block: {
            normal: ({ children }: PTBlock) => <p>{children}</p>,
            h2: ({ children }: PTBlock) => <h2>{children}</h2>,
            h3: ({ children }: PTBlock) => <h3>{children}</h3>,
            h4: ({ children }: PTBlock) => <h4>{children}</h4>,
            blockquote: ({ children }: PTBlock) => <blockquote>{children}</blockquote>,
          },
          list: {
            bullet: ({ children }: PTBlock) => <ul>{children}</ul>,
            number: ({ children }: PTBlock) => <ol>{children}</ol>,
          },
          listItem: {
            bullet: ({ children }: PTBlock) => <li>{children}</li>,
            number: ({ children }: PTBlock) => <li>{children}</li>,
          },
          marks: {
            strong: ({ children }: PTBlock) => <strong>{children}</strong>,
            em: ({ children }: PTBlock) => <em>{children}</em>,
            code: ({ children }: PTBlock) => <code>{children}</code>,
            link: ({ value, children }: PTLink) => {
              const href = sanitizeHref(value?.href);
              if (!href) return <span>{children}</span>;
              const isExternal = isExternalUrl(href);
              return (
                <a
                  href={href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {children}
                </a>
              );
            },
          },
          types: {},
          unknownType: () => null,
          unknownMark: ({ children }: PTBlock) => <span>{children}</span>,
          unknownList: () => null,
          unknownListItem: ({ children }: PTBlock) => <li>{children}</li>,
          unknownBlockStyle: ({ children }: PTBlock) => <p>{children}</p>,
        }}
      />
    </div>
  );
}

export { ALLOWED_BLOCK_STYLES, ALLOWED_MARKS };
