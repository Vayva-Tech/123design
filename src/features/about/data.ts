import { hasSanityConfig } from '@/lib/sanity/config';
import { fetchPeople, fetchOffices } from '@/lib/sanity/fetch/data-access';
import { mapPerson } from '@/lib/sanity/mappers/person';
import { mapOffice } from '@/lib/sanity/mappers/office';
import type { AboutPageData } from './types';
import { STATIC_TEAM_MEMBERS, STATIC_OFFICES } from './content';
import type { PersonModel, OfficeModel } from '@/types/domain';

const STATIC_PEOPLE: PersonModel[] = STATIC_TEAM_MEMBERS.map((m) => ({
  name: m.name,
  role: m.role,
}));

const STATIC_OFFICE_LIST: OfficeModel[] = STATIC_OFFICES.map((o) => ({
  name: o.name,
  city: o.city,
  country: o.country,
}));

const STATIC_ABOUT_DATA: AboutPageData = {
  people: STATIC_PEOPLE,
  offices: STATIC_OFFICE_LIST,
  hasPeople: true,
  hasOffices: true,
};

export async function getAboutPageData(): Promise<AboutPageData> {
  if (!hasSanityConfig()) {
    return STATIC_ABOUT_DATA;
  }

  try {
    const [peopleRecords, officeRecords] = await Promise.all([fetchPeople(), fetchOffices()]);

    const people = peopleRecords.map(mapPerson);
    const offices = officeRecords.map(mapOffice);

    return {
      people: people.length > 0 ? people : STATIC_PEOPLE,
      offices: offices.length > 0 ? offices : STATIC_OFFICE_LIST,
      hasPeople: true,
      hasOffices: true,
    };
  } catch {
    return STATIC_ABOUT_DATA;
  }
}
