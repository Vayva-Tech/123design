import type { ProjectModuleModel } from '@/types/domain';
import type { PresentationMode } from './types';

export function isRenderableProjectModule(module: ProjectModuleModel): boolean {
  switch (module.kind) {
    case 'narrative':
      return Boolean(module.heading || module.body || module.media);
    case 'discipline':
      return Boolean(module.heading || module.body || module.media);
    case 'gallery':
      return module.items.length > 0;
    case 'video':
      return Boolean(module.media);
    case 'technical':
      return Boolean(module.heading || module.details || module.media);
    case 'testimonial':
      return Boolean(module.quote && module.name);
  }
}

export function getProjectPresentationMode(modules: ProjectModuleModel[]): PresentationMode {
  const renderable = modules.filter(isRenderableProjectModule);
  return renderable.length > 0 ? 'FULL' : 'LIGHT';
}
