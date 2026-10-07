import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'brand', title: 'Brand' },
    { name: 'contact', title: 'Contact' },
  ],
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      group: 'general',
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary CTA',
      type: 'cta',
      description: 'Editorial primary call-to-action.',
      group: 'general',
    }),
    defineField({
      name: 'defaultShareImage',
      title: 'Default Share Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Default Open Graph share image when a page does not specify its own.',
      group: 'brand',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'brand',
    }),
    defineField({
      name: 'approvedClientLogos',
      title: 'Approved Client Logos',
      type: 'array',
      of: [{ type: 'approvedClientLogo' }],
      description: 'Only entries with approval state APPROVED will render publicly.',
      group: 'brand',
    }),
    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'footerBrandStatement',
      title: 'Footer Brand Statement',
      type: 'text',
      rows: 2,
      group: 'brand',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
    },
    prepare({ title }) {
      return { title: title || 'Site Settings' };
    },
  },
});
