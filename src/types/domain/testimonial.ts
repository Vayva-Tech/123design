import type { MediaModel } from './media';

export interface TestimonialModel {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  video?: MediaModel;
}
