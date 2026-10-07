import type { PersonModel } from '@/types/domain';
import type { PersonRecord } from '../validation';
import { mapImage } from './media';

export function mapPerson(record: PersonRecord): PersonModel {
  return {
    name: record.name,
    role: record.role,
    avatar: record.avatar ? mapImage(record.avatar) : undefined,
  };
}
