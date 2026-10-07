export const IMAGE_FRAGMENT = `
  _type == "sanity.image" => {
    "kind": "IMAGE",
    "url": asset->url,
    "alt": coalesce(alt, ""),
    "decorative": coalesce(decorative, false),
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "caption": caption,
    "hotspot": hotspot,
    "crop": crop
  }
`;

export const VIDEO_FRAGMENT = `
  _type == "sanity.video" => {
    "kind": "VIDEO",
    "url": asset->url,
    "width": asset->metadata?.dimensions?.width,
    "height": asset->metadata?.dimensions?.height,
    "duration": asset->metadata?.duration,
    "purpose": purpose,
    "caption": caption,
    "transcript": transcript,
    "poster": poster {
      _type == "sanity.image" => {
        "kind": "IMAGE",
        "url": asset->url,
        "alt": coalesce(alt, ""),
        "decorative": coalesce(decorative, false),
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        "aspectRatio": asset->metadata.dimensions.aspectRatio,
        "caption": caption,
        "hotspot": hotspot,
        "crop": crop
      }
    }
  }
`;

export const MEDIA_FRAGMENT = `
  _type == "media" => {
    mediaType {
      ${IMAGE_FRAGMENT},
      ${VIDEO_FRAGMENT}
    }
  }
`;

export const SEO_FRAGMENT = `
  seo {
    title,
    description,
    "shareImage": shareImage {
      ${IMAGE_FRAGMENT}
    },
    noIndex
  }
`;

export const PROJECT_CARD_FIELDS = `
  "id": _id,
  "slug": slug.current,
  title,
  shortLabel,
  "industries": industries[] { "slug": slug.current, "title": title },
  "capabilities": capabilities[] { "slug": slug.current, "title": title },
  lifecycleStages,
  heroMedia {
    ${MEDIA_FRAGMENT}
  },
  previewVideo {
    ${VIDEO_FRAGMENT}
  },
  year,
  publicationState,
  featuredVariant
`;

export const CAPABILITY_CARD_FIELDS = `
  "slug": slug.current,
  title,
  shortDescription,
  "lifecycleStages": lifecycleStages,
  heroMedia {
    ${MEDIA_FRAGMENT}
  }
`;
