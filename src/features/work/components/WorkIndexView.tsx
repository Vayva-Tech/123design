import { WorkHero } from './WorkHero';
import { WorkFilters } from './WorkFilters';
import { MobileFilterSheet } from './MobileFilterSheet';
import { ProjectGrid } from './ProjectGrid';
import { WorkShowcase } from './WorkShowcase';
import type { WorkIndexData } from '../types';

interface WorkIndexViewProps {
  data: WorkIndexData;
}

export function WorkIndexView({ data }: WorkIndexViewProps) {
  const { filteredProjects, facets, activeFilters, totalResultCount, filteredResultCount } = data;
  const hasActiveFilters =
    activeFilters.industry !== null ||
    activeFilters.capability !== null ||
    activeFilters.stage !== null;

  return (
    <>
      <WorkHero />
      <section className="work-filter-bar" aria-label="Filter controls">
        <div className="container" data-variant="shell">
          <div className="work-filter-bar__inner">
            <WorkFilters
              facets={facets}
              activeFilters={activeFilters}
              totalResultCount={totalResultCount}
              filteredResultCount={filteredResultCount}
            />
            <MobileFilterSheet
              facets={facets}
              activeFilters={activeFilters}
              totalResultCount={totalResultCount}
              filteredResultCount={filteredResultCount}
            />
          </div>
          <div className="work-filter-bar__count" aria-live="polite">
            <span className="type-small">
              {hasActiveFilters
                ? `${filteredResultCount} of ${totalResultCount} projects`
                : `${totalResultCount} projects`}
            </span>
          </div>
        </div>
      </section>
      <section className="work-grid-section" aria-label="Project gallery">
        <div className="container" data-variant="shell">
          <ProjectGrid
            projects={filteredProjects}
            emptyMessage="No projects match the current filters. Try adjusting your selection."
          />
        </div>
      </section>
      <WorkShowcase />
    </>
  );
}
