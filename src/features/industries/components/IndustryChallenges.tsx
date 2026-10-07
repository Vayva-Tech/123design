import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { CHALLENGES_EYEBROW } from '../content';

interface IndustryChallengesProps {
  challenges: string[];
}

export function IndustryChallenges({ challenges }: IndustryChallengesProps) {
  if (challenges.length === 0) return null;

  return (
    <section className="industry-challenges" aria-label="Typical challenges">
      <Container variant="reading">
        <Eyebrow>{CHALLENGES_EYEBROW}</Eyebrow>
        <Heading variant="h3" className="industry-challenges__heading">
          Typical challenges in this sector
        </Heading>
        <ul className="industry-challenges__list">
          {challenges.map((challenge, index) => (
            <li key={index} className="industry-challenges__item">
              <Text variant="body">{challenge}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
