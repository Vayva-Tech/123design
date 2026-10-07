import { PUBLIC_TESTIMONIAL_FILTER } from './public-filters';
import { VIDEO_FRAGMENT } from './fragments';

export const publishedTestimonialsQuery = `
*[
  ${PUBLIC_TESTIMONIAL_FILTER}
] {
  quote,
  name,
  role,
  company,
  video {
    ${VIDEO_FRAGMENT}
  }
} | order(name asc)
`;
