import { defineField, defineType } from 'sanity';

export const quote = defineType({
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
    defineField({ name: 'context', title: 'Context', type: 'string' }),
  ],
});
