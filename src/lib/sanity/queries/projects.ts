import { PUBLIC_PROJECT_ELIGIBILITY_FILTER, NAMED_CLIENT_FILTER } from './public-filters';
import {
  PROJECT_CARD_FIELDS,
  MEDIA_FRAGMENT,
  VIDEO_FRAGMENT,
  SEO_FRAGMENT,
  IMAGE_FRAGMENT,
} from './fragments';

export const publishedProjectsQuery = `
*[
  ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
] {
  ${PROJECT_CARD_FIELDS}
} | order(year desc, title asc)
`;

export const publishedProjectBySlugQuery = `
*[
  ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
  && slug.current == $slug
][0] {
  "id": _id,
  "slug": slug.current,
  title,
  summary,
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  "industries": industries[]->title,
  "capabilities": capabilities[]->title,
  lifecycleStages,
  year,
  "clientDisplayName": ${NAMED_CLIENT_FILTER} ? clientDisplayName : null,
  "clientLogo": ${NAMED_CLIENT_FILTER} ? clientLogo {
    ${IMAGE_FRAGMENT}
  } : null,
  "modules": modules[] {
    _type == "projectNarrativeSection" => {
      "kind": "narrative",
      sectionType,
      heading,
      "body": pt::text(body),
      media { ${MEDIA_FRAGMENT} },
      caption,
      lifecycleStage
    },
    _type == "projectDisciplineSection" => {
      "kind": "discipline",
      sectionType,
      heading,
      "body": pt::text(body),
      media { ${MEDIA_FRAGMENT} },
      caption
    },
    _type == "projectGallerySection" => {
      "kind": "gallery",
      "items": items[] {
        "media": media { ${MEDIA_FRAGMENT} },
        caption
      },
      caption
    },
    _type == "projectVideoSection" => {
      "kind": "video",
      "media": video { ${VIDEO_FRAGMENT} },
      caption
    },
    _type == "projectTechnicalSection" => {
      "kind": "technical",
      heading,
      "details": pt::text(details),
      media { ${MEDIA_FRAGMENT} }
    },
    _type == "projectTestimonialSection" => {
      "kind": "testimonial",
      "quote": testimonial->quote,
      "name": testimonial->name,
      "role": testimonial->role,
      "company": testimonial->company
    }
  },
  "relatedProjects": relatedProjects[
    ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
  ] {
    ${PROJECT_CARD_FIELDS}
  },
  ${SEO_FRAGMENT}
}
`;

export const previewProjectBySlugQuery = `
*[
  _type == "project"
  && entityType in ["INDIVIDUAL_PROJECT", "PROJECT_FAMILY"]
  && publicationState != "ARCHIVED"
  && defined(title)
  && defined(slug.current)
  && slug.current == $slug
  && !(_id in path("drafts.**"))
][0] {
  "id": _id,
  "slug": slug.current,
  title,
  summary,
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  "industries": industries[]->title,
  "capabilities": capabilities[]->title,
  lifecycleStages,
  year,
  clientDisplayName,
  clientDisplayMode,
  clientRelationshipVerified,
  "clientLogo": clientLogo {
    ${IMAGE_FRAGMENT}
  },
  "modules": modules[] {
    _type == "projectNarrativeSection" => {
      "kind": "narrative",
      sectionType,
      heading,
      "body": pt::text(body),
      media { ${MEDIA_FRAGMENT} },
      caption,
      lifecycleStage
    },
    _type == "projectDisciplineSection" => {
      "kind": "discipline",
      sectionType,
      heading,
      "body": pt::text(body),
      media { ${MEDIA_FRAGMENT} },
      caption
    },
    _type == "projectGallerySection" => {
      "kind": "gallery",
      "items": items[] {
        "media": media { ${MEDIA_FRAGMENT} },
        caption
      },
      caption
    },
    _type == "projectVideoSection" => {
      "kind": "video",
      "media": video { ${VIDEO_FRAGMENT} },
      caption
    },
    _type == "projectTechnicalSection" => {
      "kind": "technical",
      heading,
      "details": pt::text(details),
      media { ${MEDIA_FRAGMENT} }
    },
    _type == "projectTestimonialSection" => {
      "kind": "testimonial",
      "quote": testimonial->quote,
      "name": testimonial->name,
      "role": testimonial->role,
      "company": testimonial->company
    }
  },
  "relatedProjects": relatedProjects[
    _type == "project"
    && defined(slug.current)
    && !(_id in path("drafts.**"))
  ] {
    ${PROJECT_CARD_FIELDS}
  },
  ${SEO_FRAGMENT}
}
`;

export const featuredProjectsQuery = `
*[
  ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
  && featured == true
] {
  ${PROJECT_CARD_FIELDS}
} | order(
  defined(sortOrder) desc,
  sortOrder asc,
  year desc,
  title asc
)
`;

export const relatedProjectsQuery = `
*[
  ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
  && _id in $projectIds
] {
  ${PROJECT_CARD_FIELDS}
} | order(year desc, title asc)
`;

export const projectsByIndustrySlugQuery = `
*[
  ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
  && $industrySlug in industries[]->slug.current
] {
  ${PROJECT_CARD_FIELDS}
} | order(year desc, title asc)
`;

export const projectsByCapabilitySlugQuery = `
*[
  ${PUBLIC_PROJECT_ELIGIBILITY_FILTER}
  && $capabilitySlug in capabilities[]->slug.current
] {
  ${PROJECT_CARD_FIELDS}
} | order(year desc, title asc)
`;
