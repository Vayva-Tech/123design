import { defineField, defineType } from 'sanity';

export const projectTestimonialSection = defineType({
  name: 'projectTestimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
      validation: (Rule) => Rule.required(),
      description:
        'Only testimonial documents with approval state APPROVED will render publicly. The public query layer enforces this independently.',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      testimonialTitle: 'testimonial.title',
    },
    prepare({ heading, testimonialTitle }) {
      return {
        title: heading || 'Testimonial',
        subtitle: testimonialTitle || 'No testimonial selected',
      };
    },
  },
});
