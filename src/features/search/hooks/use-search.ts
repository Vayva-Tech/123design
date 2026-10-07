'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface PagefindResult {
  url: string;
  data: {
    title?: string;
    content?: string;
    excerpt?: string;
  };
  excerpts: Array<{ text: string }>;
}

interface PagefindModule {
  search: (query: string, options?: Record<string, unknown>) => Promise<{ results: PagefindResult[] }>;
  init: () => Promise<void>;
}

interface UseSearchReturn {
  query: string;
  setQuery: (q: string) => void;
  results: PagefindResult[];
  isLoading: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

declare global {
  interface Window {
    pagefind?: PagefindModule;
  }
}

export function useSearch(): UseSearchReturn {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      // Pagefind exposes itself as window.pagefind after the script loads
      const initPagefind = async () => {
        try {
          // Dynamically load the Pagefind browser bundle as a module
          const script = document.createElement('script');
          script.src = '/pagefind/pagefind.js';
          script.type = 'module';
          script.onload = async () => {
            if (window.pagefind) {
              await window.pagefind.init();
              setIsInitialized(true);
            }
          };
          document.head.appendChild(script);
        } catch {
          // Pagefind index not yet built
        }
      };
      initPagefind();
    }
  }, [isInitialized]);

  const search = useCallback(async (searchQuery: string) => {
    if (!window.pagefind || !searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults = await window.pagefind.search(searchQuery);
      setResults(searchResults.results.slice(0, 10));
    } catch {
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      search(query);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, search]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    query,
    setQuery,
    results,
    isLoading,
    isOpen,
    open,
    close,
    toggle,
  };
}
