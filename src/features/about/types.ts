import type { PersonModel, OfficeModel } from '@/types/domain';

export interface AboutPageData {
  people: PersonModel[];
  offices: OfficeModel[];
  hasPeople: boolean;
  hasOffices: boolean;
}
