import { defineField, defineType } from 'sanity';

export const projectVideoSection = defineType({
  name: 'projectVideoSection',
  title: 'Video Section',
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
      description: 'Optional introductory text.',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mediaVideo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'Video',
      };
    },
  },
});
