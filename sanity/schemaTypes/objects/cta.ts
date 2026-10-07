import { defineField, defineType } from 'sanity';
import { CTA_VARIANTS } from '../../lib/constants';

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: CTA_VARIANTS.map((v) => ({ title: v, value: v })),
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
  ],
});
