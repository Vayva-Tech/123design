import { defineField, defineType } from 'sanity';

export const projectGallerySection = defineType({
  name: 'projectGallerySection',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'string',
      description: 'Optional introductory text for the gallery.',
    }),
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [{ type: 'galleryItem' }],
      validation: (Rule) => Rule.unique().error('Duplicate gallery items are not allowed.'),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      itemCount: 'items',
    },
    prepare({ heading, itemCount }) {
      return {
        title: heading || 'Gallery',
        subtitle: `${itemCount?.length ?? 0} item${itemCount?.length === 1 ? '' : 's'}`,
      };
    },
  },
});
