import { defineField, defineType } from 'sanity';

export const richText = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'string',
                validation: (Rule) => Rule.required(),
              }),
              defineField({
                name: 'newWindow',
                title: 'Open in new window',
                type: 'boolean',
                initialValue: false,
              }),
            ],
          },
        ],
      },
    },
    { type: 'mediaImage' },
    { type: 'mediaVideo' },
    { type: 'quote' },
    { type: 'technicalDetail' },
  ],
});
