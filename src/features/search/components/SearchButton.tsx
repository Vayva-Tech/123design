'use client';

import { useEffect } from 'react';
import { useSearch } from '../hooks/use-search';

export function SearchButton() {
  const { isOpen, open, close } = useSearch();

  useEffect(() => {
    function handleToggle() {
      if (isOpen) {
        close();
      } else {
        open();
      }
    }

    window.addEventListener('search:toggle', handleToggle);
    return () => window.removeEventListener('search:toggle', handleToggle);
  }, [isOpen, open, close]);

  return (
    <button
      type="button"
      onClick={open}
      className="search-button"
      aria-label="Open search"
      title="Search (⌘K)"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <span className="search-button__shortcut">
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
}
