import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

interface ProjectFinalCtaProps {
  scheduleCallUrl?: string;
}

export function ProjectFinalCta({ scheduleCallUrl }: ProjectFinalCtaProps) {
  return (
    <section className="project-cta" aria-label="Start a conversation">
      <Container variant="reading">
        <div className="project-cta__inner">
          <Heading variant="h2" className="project-cta__heading">
            Have a project in mind?
          </Heading>
          <Text variant="body" className="project-cta__text">
            We partner with teams building physical products — from concept through production. Tell
            us about your challenge.
          </Text>
          <div className="project-cta__actions">
            <Button variant="primary" href={scheduleCallUrl ?? '/contact'} size="large">
              Start a conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
