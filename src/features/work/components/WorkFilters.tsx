'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { WorkFacets, WorkFilterState } from '../types';
import { countActiveFilters } from '../filters';

interface WorkFiltersProps {
  facets: WorkFacets;
  activeFilters: WorkFilterState;
  filteredResultCount: number;
  totalResultCount: number;
}

const FILTER_KEYS = ['industry', 'capability', 'stage'] as const;

function buildFilterUrl(
  currentParams: URLSearchParams,
  updates: Record<string, string | null>,
): string {
  const params = new URLSearchParams(currentParams.toString());

  for (const [key, value] of Object.entries(updates)) {
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  }

  const qs = params.toString();
  return qs ? `/work?${qs}` : '/work';
}

export function WorkFilters({
  facets,
  activeFilters,
  filteredResultCount,
  totalResultCount,
}: WorkFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCount = countActiveFilters(activeFilters);

  const handleFilterChange = useCallback(
    (key: string, value: string) => {
      const update: Record<string, string | null> = {
        [key]: value || null,
      };
      router.replace(buildFilterUrl(searchParams, update), { scroll: false });
    },
    [router, searchParams],
  );

  const handleClearAll = useCallback(() => {
    const clear: Record<string, string | null> = {};
    for (const key of FILTER_KEYS) {
      clear[key] = null;
    }
    router.replace(buildFilterUrl(searchParams, clear), { scroll: false });
  }, [router, searchParams]);

  const resultLabel =
    activeCount > 0
      ? `${filteredResultCount} of ${totalResultCount} projects`
      : `${totalResultCount} projects`;

  return (
    <div className="work-filters">
      <div className="work-filters__controls">
        {facets.industries.length > 0 && (
          <div className="work-filter-field">
            <label htmlFor="filter-industry" className="work-filter-field__label">
              Industry
            </label>
            <select
              id="filter-industry"
              className="work-filter-field__select"
              value={activeFilters.industry ?? ''}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
            >
              <option value="">All Industries</option>
              {facets.industries.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.title} ({opt.count})
                </option>
              ))}
            </select>
          </div>
        )}

        {facets.capabilities.length > 0 && (
          <div className="work-filter-field">
            <label htmlFor="filter-capability" className="work-filter-field__label">
              Capability
            </label>
            <select
              id="filter-capability"
              className="work-filter-field__select"
              value={activeFilters.capability ?? ''}
              onChange={(e) => handleFilterChange('capability', e.target.value)}
            >
              <option value="">All Capabilities</option>
              {facets.capabilities.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.title} ({opt.count})
                </option>
              ))}
            </select>
          </div>
        )}

        {facets.stages.length > 0 && (
          <div className="work-filter-field">
            <label htmlFor="filter-stage" className="work-filter-field__label">
              Stage
            </label>
            <select
              id="filter-stage"
              className="work-filter-field__select"
              value={activeFilters.stage ?? ''}
              onChange={(e) => handleFilterChange('stage', e.target.value)}
            >
              <option value="">All Stages</option>
              {facets.stages.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.title} ({opt.count})
                </option>
              ))}
            </select>
          </div>
        )}

        {activeCount > 0 && (
          <button type="button" className="work-filters__clear" onClick={handleClearAll}>
            Clear filters
          </button>
        )}
      </div>
      <div className="work-filters__count" aria-live="polite" aria-atomic="true">
        {resultLabel}
      </div>
    </div>
  );
}
