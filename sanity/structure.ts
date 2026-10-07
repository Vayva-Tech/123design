import type { StructureResolver } from 'sanity/structure';
import { SINGLETON_IDS } from './lib/constants';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('WORK')
        .child(
          S.list()
            .title('WORK')
            .items([S.documentTypeListItem('project').title('Projects')]),
        ),

      S.listItem()
        .title('EXPERTISE')
        .child(
          S.list()
            .title('EXPERTISE')
            .items([
              S.documentTypeListItem('capability').title('Capabilities'),
              S.documentTypeListItem('industry').title('Industries'),
            ]),
        ),

      S.listItem()
        .title('INSIGHTS')
        .child(
          S.list()
            .title('INSIGHTS')
            .items([
              S.documentTypeListItem('article').title('Articles'),
              S.documentTypeListItem('articleCategory').title('Article Categories'),
              S.documentTypeListItem('faqItem').title('FAQ'),
            ]),
        ),

      S.listItem()
        .title('PROOF & PEOPLE')
        .child(
          S.list()
            .title('PROOF & PEOPLE')
            .items([
              S.documentTypeListItem('testimonial').title('Testimonials'),
              S.documentTypeListItem('person').title('People'),
              S.documentTypeListItem('office').title('Offices'),
            ]),
        ),

      S.listItem()
        .title('SYSTEM')
        .child(
          S.list()
            .title('SYSTEM')
            .items([S.documentTypeListItem('redirect').title('Redirects')]),
        ),

      S.divider(),

      S.listItem()
        .title('SETTINGS')
        .child(
          S.list()
            .title('SETTINGS')
            .items([
              S.documentListItem()
                .id(SINGLETON_IDS.siteSettings)
                .schemaType('siteSettings')
                .title('Site Settings'),
              S.documentListItem()
                .id(SINGLETON_IDS.leadFormSettings)
                .schemaType('leadFormSettings')
                .title('Lead Form Settings'),
              S.documentListItem()
                .id(SINGLETON_IDS.seoDefaults)
                .schemaType('seoDefaults')
                .title('SEO Defaults'),
            ]),
        ),
    ]);
