import { defineField, defineType } from 'sanity';
import { CONTENT_STATUSES } from '../../lib/constants';

export const articleCategory = defineType({
  name: 'articleCategory',
  title: 'Article Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 64,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Optional sort order for category listing.',
    }),
    defineField({
      name: 'publicationState',
      title: 'Publication State',
      type: 'string',
      initialValue: 'DRAFT',
      options: {
        list: CONTENT_STATUSES.map((s) => ({ title: s, value: s })),
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
