'use client';

import { useCallback, useRef, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { WorkFacets, WorkFilterState } from '../types';
import { countActiveFilters } from '../filters';

interface MobileFilterSheetProps {
  facets: WorkFacets;
  activeFilters: WorkFilterState;
  filteredResultCount: number;
  totalResultCount: number;
}

interface DraftState {
  industry: string;
  capability: string;
  stage: string;
}

function filtersToDraft(filters: WorkFilterState): DraftState {
  return {
    industry: filters.industry ?? '',
    capability: filters.capability ?? '',
    stage: filters.stage ?? '',
  };
}

export function MobileFilterSheet({
  facets,
  activeFilters,
  filteredResultCount,
  totalResultCount,
}: MobileFilterSheetProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeCount = countActiveFilters(activeFilters);

  const [draft, setDraft] = useState<DraftState>(() => filtersToDraft(activeFilters));

  const openSheet = useCallback(() => {
    setDraft(filtersToDraft(activeFilters));
    dialogRef.current?.showModal();
  }, [activeFilters]);

  const closeSheet = useCallback(() => {
    dialogRef.current?.close();
    triggerRef.current?.focus();
  }, []);

  const handleApply = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (draft.industry) {
      params.set('industry', draft.industry);
    } else {
      params.delete('industry');
    }

    if (draft.capability) {
      params.set('capability', draft.capability);
    } else {
      params.delete('capability');
    }

    if (draft.stage) {
      params.set('stage', draft.stage);
    } else {
      params.delete('stage');
    }

    const qs = params.toString();
    router.replace(qs ? `/work?${qs}` : '/work', { scroll: false });
    closeSheet();
  }, [draft, router, searchParams, closeSheet]);

  const handleClearAll = useCallback(() => {
    setDraft({ industry: '', capability: '', stage: '' });
  }, []);

  const handleDialogClick = useCallback(
    (event: React.MouseEvent<HTMLDialogElement>) => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const rect = dialog.getBoundingClientRect();
      const clickedOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
      if (clickedOutside) {
        closeSheet();
      }
    },
    [closeSheet],
  );

  const handleCancel = useCallback(
    (event: Event) => {
      event.preventDefault();
      closeSheet();
    },
    [closeSheet],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [handleCancel]);

  const resultLabel =
    activeCount > 0
      ? `${filteredResultCount} of ${totalResultCount} projects`
      : `${totalResultCount} projects`;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="work-mobile-filter-trigger"
        onClick={openSheet}
        aria-haspopup="dialog"
      >
        Filters
        {activeCount > 0 && (
          <span className="work-mobile-filter-badge" aria-label={`${activeCount} active`}>
            {activeCount}
          </span>
        )}
      </button>

      <dialog
        ref={dialogRef}
        className="work-filter-sheet"
        aria-label="Filter projects"
        onClick={handleDialogClick}
      >
        <div className="work-filter-sheet__header">
          <span className="type-h4">Filters</span>
          <button
            type="button"
            className="work-filter-sheet__close"
            onClick={closeSheet}
            aria-label="Close filters"
          >
            Close
          </button>
        </div>

        <div className="work-filter-sheet__body">
          {facets.industries.length > 0 && (
            <div className="work-filter-field">
              <label htmlFor="mobile-filter-industry" className="work-filter-field__label">
                Industry
              </label>
              <select
                id="mobile-filter-industry"
                className="work-filter-field__select"
                value={draft.industry}
                onChange={(e) => setDraft((d) => ({ ...d, industry: e.target.value }))}
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
              <label htmlFor="mobile-filter-capability" className="work-filter-field__label">
                Capability
              </label>
              <select
                id="mobile-filter-capability"
                className="work-filter-field__select"
                value={draft.capability}
                onChange={(e) => setDraft((d) => ({ ...d, capability: e.target.value }))}
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
              <label htmlFor="mobile-filter-stage" className="work-filter-field__label">
                Stage
              </label>
              <select
                id="mobile-filter-stage"
                className="work-filter-field__select"
                value={draft.stage}
                onChange={(e) => setDraft((d) => ({ ...d, stage: e.target.value }))}
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
        </div>

        <div className="work-filter-sheet__footer">
          <div className="work-filter-sheet__result-count" aria-live="polite" aria-atomic="true">
            {resultLabel}
          </div>
          <div className="work-filter-sheet__actions">
            <button type="button" className="work-filter-sheet__clear" onClick={handleClearAll}>
              Clear all
            </button>
            <button
              type="button"
              className="btn"
              data-variant="primary"
              data-size="compact"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
