import type { ProjectModuleModel } from '@/types/domain';
import { isRenderableProjectModule } from '../presentation';
import { NarrativeSection } from './NarrativeSection';
import { DisciplineSection } from './DisciplineSection';
import { ProjectGallery } from './ProjectGallery';
import { ProjectVideoBlock } from './ProjectVideoBlock';
import { ProjectTechnicalDetails } from './ProjectTechnicalDetails';
import { TestimonialBlock } from './TestimonialBlock';

interface ProjectCaseStudyBodyProps {
  modules: ProjectModuleModel[];
}

function renderModule(module: ProjectModuleModel, index: number) {
  switch (module.kind) {
    case 'narrative':
      return <NarrativeSection key={index} module={module} />;
    case 'discipline':
      return <DisciplineSection key={index} module={module} />;
    case 'gallery':
      return <ProjectGallery key={index} module={module} />;
    case 'video':
      return <ProjectVideoBlock key={index} module={module} />;
    case 'technical':
      return <ProjectTechnicalDetails key={index} module={module} />;
    case 'testimonial':
      return <TestimonialBlock key={index} module={module} />;
  }
}

export function ProjectCaseStudyBody({ modules }: ProjectCaseStudyBodyProps) {
  const renderable = modules.filter(isRenderableProjectModule);

  return (
    <div className="project-case-study">
      {renderable.map((module, index) => renderModule(module, index))}
    </div>
  );
}
