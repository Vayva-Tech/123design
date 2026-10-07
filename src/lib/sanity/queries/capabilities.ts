import { PUBLIC_CAPABILITY_FILTER } from './public-filters';
import { CAPABILITY_CARD_FIELDS, MEDIA_FRAGMENT, SEO_FRAGMENT } from './fragments';

export const publishedCapabilitiesQuery = `
*[
  ${PUBLIC_CAPABILITY_FILTER}
] {
  ${CAPABILITY_CARD_FIELDS}
} | order(title asc)
`;

export const publishedCapabilityBySlugQuery = `
*[
  ${PUBLIC_CAPABILITY_FILTER}
  && slug.current == $slug
][0] {
  "slug": slug.current,
  title,
  shortDescription,
  "intro": pt::text(intro),
  deliverables,
  lifecycleStages,
  methods,
  "body": pt::text(body),
  "relatedCapabilities": relatedCapabilities[] {
    ${CAPABILITY_CARD_FIELDS}
  },
  "relatedProjectIds": relatedProjects[]._ref,
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  "supportMedia": supportMedia[] {
    ${MEDIA_FRAGMENT}
  },
  cta {
    label,
    href,
    variant
  },
  ${SEO_FRAGMENT}
}
`;

export const previewCapabilityBySlugQuery = `
*[
  _type == "capability"
  && publicationState != "ARCHIVED"
  && defined(slug.current)
  && !(_id in path("drafts.**"))
  && slug.current == $slug
][0] {
  "slug": slug.current,
  title,
  shortDescription,
  "intro": pt::text(intro),
  deliverables,
  lifecycleStages,
  methods,
  "body": pt::text(body),
  "relatedCapabilities": relatedCapabilities[] {
    ${CAPABILITY_CARD_FIELDS}
  },
  "relatedProjectIds": relatedProjects[]._ref,
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  "supportMedia": supportMedia[] {
    ${MEDIA_FRAGMENT}
  },
  cta {
    label,
    href,
    variant
  },
  ${SEO_FRAGMENT}
}
`;
