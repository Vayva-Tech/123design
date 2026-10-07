import { defineField, defineType } from 'sanity';

export const technicalDetail = defineType({
  name: 'technicalDetail',
  title: 'Technical Detail',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'unit', title: 'Unit', type: 'string' }),
    defineField({ name: 'note', title: 'Note', type: 'string' }),
  ],
});
