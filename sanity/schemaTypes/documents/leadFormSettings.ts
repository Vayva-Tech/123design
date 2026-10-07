import { defineField, defineType } from 'sanity';

export const leadFormSettings = defineType({
  name: 'leadFormSettings',
  title: 'Lead Form Settings',
  type: 'document',
  groups: [
    { name: 'options', title: 'Form Options', default: true },
    { name: 'confirmation', title: 'Confirmation' },
    { name: 'features', title: 'Features' },
  ],
  fields: [
    defineField({
      name: 'productTypes',
      title: 'Product Types',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Configurable option labels for the product type selector.',
      group: 'options',
    }),
    defineField({
      name: 'developmentStages',
      title: 'Development Stages',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Configurable option labels for the development stage selector.',
      group: 'options',
    }),
    defineField({
      name: 'needs',
      title: 'Needs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Configurable option labels for the needs selector.',
      group: 'options',
    }),
    defineField({
      name: 'timingOptions',
      title: 'Timing Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Configurable option labels for the timing selector.',
      group: 'options',
    }),
    defineField({
      name: 'budgetOptions',
      title: 'Budget Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Configurable option labels for the budget selector.',
      group: 'options',
    }),
    defineField({
      name: 'budgetEnabled',
      title: 'Budget Field Enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Whether the budget question is shown on the lead form.',
      group: 'features',
    }),
    defineField({
      name: 'uploadEnabled',
      title: 'File Upload Enabled',
      type: 'boolean',
      initialValue: false,
      description: 'Whether file upload is available on the lead form.',
      group: 'features',
    }),
    defineField({
      name: 'scheduleCallUrl',
      title: 'Schedule Call URL',
      type: 'url',
      description: 'Optional external URL for scheduling a call after form submission.',
      group: 'features',
    }),
    defineField({
      name: 'confirmationHeading',
      title: 'Confirmation Heading',
      type: 'string',
      group: 'confirmation',
    }),
    defineField({
      name: 'confirmationBody',
      title: 'Confirmation Body',
      type: 'text',
      rows: 3,
      group: 'confirmation',
    }),
  ],
  preview: {
    select: {
      title: '_id',
    },
    prepare() {
      return { title: 'Lead Form Settings' };
    },
  },
});
