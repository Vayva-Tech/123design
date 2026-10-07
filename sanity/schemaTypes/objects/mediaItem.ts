import { defineField, defineType } from 'sanity';

export const mediaItem = defineType({
  name: 'mediaItem',
  title: 'Media Item',
  type: 'object',
  fields: [
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'IMAGE' },
          { title: 'Video', value: 'VIDEO' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mediaImage',
      hidden: ({ parent }) => parent?.kind !== 'IMAGE',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mediaVideo',
      hidden: ({ parent }) => parent?.kind !== 'VIDEO',
    }),
  ],
  preview: {
    select: {
      kind: 'kind',
      imageTitle: 'image.alt',
      imageMedia: 'image.image',
      videoTitle: 'video.caption',
    },
    prepare(select) {
      if (select.kind === 'IMAGE') {
        return { title: select.imageTitle || 'Image', media: select.imageMedia };
      }
      return { title: select.videoTitle || 'Video' };
    },
  },
});
