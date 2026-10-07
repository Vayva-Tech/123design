'use client';

import { useEffect } from 'react';

const SCROLL_THRESHOLD = 24;

export function HeaderScrollState() {
  useEffect(() => {
    const html = document.documentElement;

    function onScroll() {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      html.setAttribute('data-header-scrolled', scrolled ? 'true' : 'false');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
