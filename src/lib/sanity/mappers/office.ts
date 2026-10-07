import type { OfficeModel } from '@/types/domain';
import type { OfficeRecord } from '../validation';

export function mapOffice(record: OfficeRecord): OfficeModel {
  return {
    name: record.name,
    city: record.city,
    country: record.country,
  };
}
