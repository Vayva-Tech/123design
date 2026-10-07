import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { RELATED_PROJECTS_HEADING } from '../content';
import { ProjectCard } from '@/features/home/components/ProjectCard';
import type { ProjectCardModel } from '@/types/domain';

interface IndustryRelatedProjectsProps {
  projects: ProjectCardModel[];
}

export function IndustryRelatedProjects({ projects }: IndustryRelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="industry-related-projects" aria-label="Related projects">
      <Container variant="reading">
        <Eyebrow>Work</Eyebrow>
        <Heading variant="h3" className="industry-related-projects__heading">
          {RELATED_PROJECTS_HEADING}
        </Heading>
        <div className="industry-related-projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
