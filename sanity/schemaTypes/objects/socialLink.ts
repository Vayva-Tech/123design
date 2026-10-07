import { defineField, defineType } from 'sanity';
import { isSafeHttpsUrl, isUnsafeProtocol } from '../../lib/validation';

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return 'URL is required.';
          if (isUnsafeProtocol(value)) return 'Unsafe protocol. Use https://.';
          if (!isSafeHttpsUrl(value)) return 'Must be a valid https:// URL.';
          return true;
        }),
    }),
  ],
});
