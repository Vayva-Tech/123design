import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProjectCard } from '@/features/home/components/ProjectCard';
import type { ProjectCardModel } from '@/types/domain';

interface RelatedWorkProps {
  projects: ProjectCardModel[];
}

export function RelatedWork({ projects }: RelatedWorkProps) {
  if (projects.length === 0) return null;

  return (
    <section className="related-work" aria-label="Related projects">
      <Container variant="shell">
        <Eyebrow marker>Related Work</Eyebrow>
        <Heading variant="h2" className="related-work__heading">
          More case studies
        </Heading>
        <div className="related-work__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
