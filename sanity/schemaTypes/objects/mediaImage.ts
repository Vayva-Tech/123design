import { defineField, defineType } from 'sanity';
import { APPROVAL_STATES } from '../../lib/constants';

export const mediaImage = defineType({
  name: 'mediaImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Required for non-decorative images. Do not derive from filename or title.',
    }),
    defineField({
      name: 'decorative',
      title: 'Decorative',
      type: 'boolean',
      description: 'Mark as decorative to indicate alt text is intentionally empty.',
      initialValue: false,
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'credit',
      title: 'Credit',
      type: 'string',
    }),
    defineField({
      name: 'sourceAssetId',
      title: 'Source Asset ID',
      type: 'string',
      description: 'Internal: tracks origin in legacy archive. Not displayed publicly.',
      readOnly: true,
    }),
    defineField({
      name: 'displayReadiness',
      title: 'Display Readiness',
      type: 'string',
      description: 'Internal: whether this asset is ready for public display.',
      options: {
        list: ['READY', 'NEEDS_REVIEW', 'NOT_READY'],
      },
    }),
    defineField({
      name: 'approvalState',
      title: 'Approval State',
      type: 'string',
      description: 'Internal governance: approval status of this media asset.',
      options: {
        list: APPROVAL_STATES.map((s) => ({ title: s, value: s })),
      },
      initialValue: 'NOT_REQUIRED',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare(select) {
      return { title: select.title || 'Untitled image', media: select.media };
    },
  },
});
