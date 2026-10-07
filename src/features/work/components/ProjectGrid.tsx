import type { ProjectCardModel } from '@/types/domain';
import { ProjectCard } from '@/features/home/components/ProjectCard';

interface ProjectGridProps {
  projects: ProjectCardModel[];
  emptyMessage?: string;
}

export function ProjectGrid({ projects, emptyMessage }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="project-grid-empty">
        <p className="type-body">{emptyMessage ?? 'No projects match the current filters.'}</p>
      </div>
    );
  }

  return (
    <div className="project-grid" role="list">
      {projects.map((project) => (
        <div key={project.id} className="project-grid__item" role="listitem">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
