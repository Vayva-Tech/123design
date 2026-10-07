import { defineField, defineType } from 'sanity';
import { APPROVAL_STATES, VIDEO_PURPOSES } from '../../lib/constants';

export const mediaVideo = defineType({
  name: 'mediaVideo',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'width', title: 'Width', type: 'number' }),
    defineField({ name: 'height', title: 'Height', type: 'number' }),
    defineField({ name: 'duration', title: 'Duration (seconds)', type: 'number' }),
    defineField({
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
      description:
        'Determines how the application presents this video. Do not set playback controls here.',
      options: {
        list: VIDEO_PURPOSES.map((p) => ({ title: p, value: p })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'transcript', title: 'Transcript', type: 'text', rows: 5 }),
    defineField({
      name: 'sourceAssetId',
      title: 'Source Asset ID',
      type: 'string',
      description: 'Internal: tracks origin in legacy archive.',
      readOnly: true,
    }),
    defineField({
      name: 'approvalState',
      title: 'Approval State',
      type: 'string',
      description: 'Internal governance: approval status of this video asset.',
      options: {
        list: APPROVAL_STATES.map((s) => ({ title: s, value: s })),
      },
      initialValue: 'NOT_REQUIRED',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'purpose',
    },
    prepare(select) {
      return {
        title: select.title || 'Untitled video',
        subtitle: select.subtitle,
      };
    },
  },
});
