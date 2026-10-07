import { defineField, defineType } from 'sanity';
import { LINK_TYPES } from '../../lib/constants';
import { isSafeHttpsUrl, isUnsafeProtocol, isValidInternalPath } from '../../lib/validation';

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: LINK_TYPES.map((t) => ({ title: t, value: t })),
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalPath',
      title: 'Internal Path',
      type: 'string',
      description: 'Path starting with / (e.g. /capabilities/industrial-design)',
      hidden: ({ parent }) => parent?.linkType !== 'INTERNAL',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string };
          if (parent?.linkType !== 'INTERNAL') return true;
          if (!value) return 'Internal link requires a path.';
          if (!isValidInternalPath(value))
            return 'Path must start with / and not contain a domain.';
          return true;
        }),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'EXTERNAL',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string };
          if (parent?.linkType !== 'EXTERNAL') return true;
          if (!value) return 'External link requires a URL.';
          if (isUnsafeProtocol(value)) return 'Unsafe protocol. Use https://.';
          if (!isSafeHttpsUrl(value)) return 'External URL must be a valid https:// URL.';
          return true;
        }),
    }),
    defineField({
      name: 'newWindow',
      title: 'Open in New Window',
      type: 'boolean',
      description: 'Only applies to external links.',
      hidden: ({ parent }) => parent?.linkType !== 'EXTERNAL',
      initialValue: false,
    }),
  ],
});
