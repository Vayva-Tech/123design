import type { TestimonialModel } from '@/types/domain';
import type { TestimonialRecord } from '../validation';
import { mapOptionalMedia } from './media';

export function mapTestimonial(record: TestimonialRecord): TestimonialModel {
  return {
    quote: record.quote,
    name: record.name,
    role: record.role,
    company: record.company,
    video: mapOptionalMedia(record.video),
  };
}
