export const PUBLIC_PROJECT_ELIGIBILITY_FILTER = `
  _type == "project"
  && publicationState == "PUBLISHED"
  && entityType in ["INDIVIDUAL_PROJECT", "PROJECT_FAMILY"]
  && (
    contentApprovalState.status in ["APPROVED", "NOT_REQUIRED"]
  )
  && (
    clientApprovalState.status in ["APPROVED", "NOT_REQUIRED"]
  )
  && defined(title)
  && defined(slug.current)
  && defined(summary)
  && defined(heroMedia)
  && (count(industries) > 0 || count(capabilities) > 0)
  && !(_id in path("drafts.**"))
`;

export const NAMED_CLIENT_FILTER = `
  clientDisplayMode == "NAMED"
  && clientRelationshipVerified == true
  && clientApprovalState.status == "APPROVED"
`;

export const PUBLIC_CAPABILITY_FILTER = `
  _type == "capability"
  && publicationState == "PUBLISHED"
  && defined(slug.current)
  && !(_id in path("drafts.**"))
`;

export const PUBLIC_INDUSTRY_FILTER = `
  _type == "industry"
  && publicationState == "PUBLISHED"
  && defined(slug.current)
  && !(_id in path("drafts.**"))
`;

export const PUBLIC_ARTICLE_FILTER = `
  _type == "article"
  && publicationState == "PUBLISHED"
  && defined(slug.current)
  && defined(publicationDate)
  && !(_id in path("drafts.**"))
`;

export const PUBLIC_TESTIMONIAL_FILTER = `
  _type == "testimonial"
  && approvalState.status == "APPROVED"
  && !(_id in path("drafts.**"))
`;
