import { defineField, defineType } from 'sanity';
import { VERIFICATION_STATES } from '../../lib/constants';

export const office = defineType({
  name: 'office',
  title: 'Office',
  type: 'document',
  groups: [
    { name: 'details', title: 'Details', default: true },
    { name: 'governance', title: 'Governance' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'string',
      description: 'Office hours in display-friendly format.',
      group: 'details',
    }),
    defineField({
      name: 'mapLink',
      title: 'Map Link',
      type: 'url',
      description: 'External URL to a map location.',
      group: 'details',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      group: 'governance',
    }),
    defineField({
      name: 'verificationState',
      title: 'Verification State',
      type: 'string',
      initialValue: 'PENDING',
      options: {
        list: VERIFICATION_STATES.map((value) => ({
          value,
          title: value.charAt(0) + value.slice(1).toLowerCase(),
        })),
        layout: 'dropdown',
      },
      description: 'Public queries require active == true AND verificationState == VERIFIED.',
      group: 'governance',
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      rows: 2,
      group: 'governance',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Office',
        subtitle: subtitle || '',
      };
    },
  },
});
