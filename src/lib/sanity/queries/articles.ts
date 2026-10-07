import { PUBLIC_ARTICLE_FILTER } from './public-filters';
import { PROJECT_CARD_FIELDS, CAPABILITY_CARD_FIELDS, SEO_FRAGMENT } from './fragments';

export const previewArticleBySlugQuery = `
*[
  _type == "article"
  && publicationState != "ARCHIVED"
  && defined(slug.current)
  && !(_id in path("drafts.**"))
  && slug.current == $slug
][0] {
  "slug": slug.current,
  title,
  "excerpt": pt::text(excerpt),
  publicationDate,
  updatedDate,
  "category": category->title,
  "author": author->{
    name,
    "avatar": portrait {
      _type == "sanity.image" => {
        "kind": "IMAGE",
        "url": asset->url,
        "alt": coalesce(alt, ""),
        "decorative": coalesce(decorative, false)
      }
    }
  },
  heroMedia {
    _type == "sanity.image" => {
      "kind": "IMAGE",
      "url": asset->url,
      "alt": coalesce(alt, ""),
      "decorative": coalesce(decorative, false),
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  },
  body,
  "relatedCapabilities": relatedCapabilities[] {
    ${CAPABILITY_CARD_FIELDS}
  },
  "relatedProjects": relatedProjects[] {
    ${PROJECT_CARD_FIELDS}
  },
  ${SEO_FRAGMENT}
}
`;

export const publishedArticlesQuery = `
*[
  ${PUBLIC_ARTICLE_FILTER}
] {
  "slug": slug.current,
  title,
  "excerpt": pt::text(excerpt),
  publicationDate,
  updatedDate,
  "category": category->title,
  "author": author->{
    name,
    "avatar": portrait {
      _type == "sanity.image" => {
        "kind": "IMAGE",
        "url": asset->url,
        "alt": coalesce(alt, ""),
        "decorative": coalesce(decorative, false)
      }
    }
  },
  heroMedia {
    _type == "sanity.image" => {
      "kind": "IMAGE",
      "url": asset->url,
      "alt": coalesce(alt, ""),
      "decorative": coalesce(decorative, false),
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }
} | order(publicationDate desc)
`;

export const publishedArticleBySlugQuery = `
*[
  ${PUBLIC_ARTICLE_FILTER}
  && slug.current == $slug
][0] {
  "slug": slug.current,
  title,
  "excerpt": pt::text(excerpt),
  publicationDate,
  updatedDate,
  "category": category->title,
  "author": author->{
    name,
    "avatar": portrait {
      _type == "sanity.image" => {
        "kind": "IMAGE",
        "url": asset->url,
        "alt": coalesce(alt, ""),
        "decorative": coalesce(decorative, false)
      }
    }
  },
  heroMedia {
    _type == "sanity.image" => {
      "kind": "IMAGE",
      "url": asset->url,
      "alt": coalesce(alt, ""),
      "decorative": coalesce(decorative, false),
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  },
  body,
  "relatedCapabilities": relatedCapabilities[] {
    ${CAPABILITY_CARD_FIELDS}
  },
  "relatedProjects": relatedProjects[] {
    ${PROJECT_CARD_FIELDS}
  },
  ${SEO_FRAGMENT}
}
`;
