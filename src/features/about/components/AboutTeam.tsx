import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { ResponsiveImage } from '@/components/system/ResponsiveImage';
import type { PersonModel } from '@/types/domain';
import { TEAM_EYEBROW, TEAM_HEADING, TEAM_SUPPORTING } from '../content';

interface AboutTeamProps {
  people: PersonModel[];
  hasPeople: boolean;
}

export function AboutTeam({ people, hasPeople }: AboutTeamProps) {
  if (!hasPeople) return null;

  return (
    <section className="about-team" aria-label="Our team">
      <Container variant="content">
        <div className="about-team__header">
          <Eyebrow marker>{TEAM_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="h2">
            {TEAM_HEADING}
          </Heading>
          <Text variant="bodyLarge">{TEAM_SUPPORTING}</Text>
        </div>
        <div className="about-team__grid">
          {people.map((person) => (
            <div key={person.name} className="about-team__member">
              {person.avatar && person.avatar.kind === 'IMAGE' ? (
                <div className="about-team__avatar">
                  <ResponsiveImage media={person.avatar} sizes="(max-width: 768px) 120px, 160px" />
                </div>
              ) : (
                <div className="about-team__avatar about-team__avatar--placeholder">
                  <span aria-hidden="true">{person.name.charAt(0).toUpperCase()}</span>
                </div>
              )}
              <div className="about-team__info">
                <Heading as="h3" variant="h4">
                  {person.name}
                </Heading>
                {person.role ? (
                  <Text variant="small" as="span">
                    {person.role}
                  </Text>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
