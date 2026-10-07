import type { NarrativeSectionType, DisciplineSectionType } from '@/types/domain';

export const NARRATIVE_DEFAULT_HEADINGS: Record<NarrativeSectionType, string> = {
  overview: 'Overview',
  challenge: 'The Challenge',
  insight: 'Our Insight',
  result: 'The Result',
  howWeSolvedIt: 'How We Solved It',
};

export const DISCIPLINE_DEFAULT_HEADINGS: Record<DisciplineSectionType, string> = {
  industrialDesign: 'Industrial Design',
  mechanicalEngineering: 'Mechanical Engineering',
  electricalEngineering: 'Electrical Engineering',
  prototype: 'Prototyping',
  testingValidation: 'Testing & Validation',
  tooling: 'Tooling',
  manufacturing: 'Manufacturing',
};

export function resolveNarrativeHeading(
  sectionType: NarrativeSectionType,
  heading?: string,
): string {
  return heading || NARRATIVE_DEFAULT_HEADINGS[sectionType];
}

export function resolveDisciplineHeading(
  sectionType: DisciplineSectionType,
  heading?: string,
): string {
  return heading || DISCIPLINE_DEFAULT_HEADINGS[sectionType];
}
