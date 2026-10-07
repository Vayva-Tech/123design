'use client';

import { useEffect, useRef } from 'react';
import { useSearch } from '../hooks/use-search';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export function SearchDialog() {
  const { query, setQuery, results, isLoading, isOpen, close } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
      inputRef.current?.focus();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          // This will be handled by the parent component that has access to the search context
          const event = new CustomEvent('search:toggle');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      onClose={close}
      aria-label="Search site"
    >
      <div className="search-dialog__content">
        <div className="search-dialog__input-wrapper">
          <svg
            className="search-dialog__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, capabilities, insights..."
            className="search-dialog__input"
            aria-label="Search"
          />
          <button
            type="button"
            onClick={close}
            className="search-dialog__close"
            aria-label="Close search"
          >
            <kbd>ESC</kbd>
          </button>
        </div>

        <div className="search-dialog__results">
          {isLoading && (
            <Text variant="body" className="search-dialog__loading">
              Searching...
            </Text>
          )}

          {!isLoading && query && results.length === 0 && (
            <Text variant="body" className="search-dialog__no-results">
              No results found for &ldquo;{query}&rdquo;
            </Text>
          )}

          {!isLoading && results.length > 0 && (
            <ul className="search-dialog__list">
              {results.map((result, index) => (
                <li key={`${result.url}-${index}`} className="search-dialog__item">
                  <a href={result.url} onClick={close} className="search-dialog__link">
                    <Heading variant="h4" className="search-dialog__title">
                      {result.data.title || 'Untitled'}
                    </Heading>
                    {result.excerpts[0] && (
                      <Text variant="small" className="search-dialog__excerpt">
                        <span dangerouslySetInnerHTML={{ __html: result.excerpts[0].text }} />
                      </Text>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {!query && (
            <Text variant="body" className="search-dialog__hint">
              Start typing to search...
            </Text>
          )}
        </div>
      </div>
    </dialog>
  );
}
