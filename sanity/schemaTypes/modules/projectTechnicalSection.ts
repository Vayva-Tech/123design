import { defineField, defineType } from 'sanity';

export const projectTechnicalSection = defineType({
  name: 'projectTechnicalSection',
  title: 'Technical Section',
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
      name: 'details',
      title: 'Technical Details',
      type: 'array',
      of: [{ type: 'technicalDetail' }],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      detailCount: 'details',
    },
    prepare({ heading, detailCount }) {
      return {
        title: heading || 'Technical Details',
        subtitle: `${detailCount?.length ?? 0} detail${detailCount?.length === 1 ? '' : 's'}`,
      };
    },
  },
});
