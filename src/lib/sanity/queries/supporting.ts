export const publishedFaqQuery = `
*[
  _type == "faqItem"
  && publicationState == "PUBLISHED"
  && !(_id in path("drafts.**"))
] {
  question,
  "answer": pt::text(answer),
  category
} | order(order asc, question asc)
`;

export const verifiedOfficesQuery = `
*[
  _type == "office"
  && active == true
  && verificationState == "VERIFIED"
  && !(_id in path("drafts.**"))
] {
  name,
  city,
  country
} | order(name asc)
`;

export const activePeopleQuery = `
*[
  _type == "person"
  && active == true
  && !(_id in path("drafts.**"))
] {
  name,
  role,
  "avatar": portrait {
    _type == "sanity.image" => {
      "kind": "IMAGE",
      "url": asset->url,
      "alt": coalesce(alt, ""),
      "decorative": coalesce(decorative, false)
    }
  }
} | order(name asc)
`;

export const verifiedRedirectsQuery = `
*[
  _type == "redirect"
  && active == true
  && verificationState == "VERIFIED"
  && !(_id in path("drafts.**"))
] {
  sourcePath,
  destinationPath,
  statusCode
} | order(sourcePath asc)
`;

export const publishedArticleCategoriesQuery = `
*[
  _type == "articleCategory"
  && publicationState == "PUBLISHED"
  && !(_id in path("drafts.**"))
] {
  title,
  "slug": slug.current
} | order(title asc)
`;
