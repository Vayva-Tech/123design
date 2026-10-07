import { defineField, defineType } from 'sanity';

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'mediaItem',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({
      name: 'lifecycleStage',
      title: 'Lifecycle Stage',
      type: 'string',
      options: {
        list: [
          { title: 'CON', value: 'CON' },
          { title: 'EVT', value: 'EVT' },
          { title: 'DVT', value: 'DVT' },
          { title: 'PVT', value: 'PVT' },
          { title: 'PRODUCTION', value: 'PRODUCTION' },
        ],
      },
    }),
    defineField({
      name: 'internalNote',
      title: 'Internal Note',
      type: 'string',
      description: 'Internal note. Not displayed publicly.',
    }),
  ],
});
