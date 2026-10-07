import { PUBLIC_INDUSTRY_FILTER } from './public-filters';
import { CAPABILITY_CARD_FIELDS, MEDIA_FRAGMENT, SEO_FRAGMENT } from './fragments';

export const publishedIndustriesQuery = `
*[
  ${PUBLIC_INDUSTRY_FILTER}
] {
  "slug": slug.current,
  title,
  shortDescription
} | order(title asc)
`;

export const publishedIndustryBySlugQuery = `
*[
  ${PUBLIC_INDUSTRY_FILTER}
  && slug.current == $slug
][0] {
  "slug": slug.current,
  title,
  shortDescription,
  "intro": pt::text(intro),
  typicalChallenges,
  developmentConsiderations,
  "relatedCapabilities": relatedCapabilities[] {
    ${CAPABILITY_CARD_FIELDS}
  },
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  ${SEO_FRAGMENT}
}
`;

export const previewIndustryBySlugQuery = `
*[
  _type == "industry"
  && publicationState != "ARCHIVED"
  && defined(slug.current)
  && !(_id in path("drafts.**"))
  && slug.current == $slug
][0] {
  "slug": slug.current,
  title,
  shortDescription,
  "intro": pt::text(intro),
  typicalChallenges,
  developmentConsiderations,
  "relatedCapabilities": relatedCapabilities[] {
    ${CAPABILITY_CARD_FIELDS}
  },
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  ${SEO_FRAGMENT}
}
`;
