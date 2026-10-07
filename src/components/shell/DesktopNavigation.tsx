'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  primaryNavigation,
  capabilityGroups,
  viewAllCapabilities,
  industries,
  viewAllIndustries,
  startProjectLink,
} from '@/lib/navigation';

const HOVER_OPEN_DELAY = 150;
const HOVER_CLOSE_DELAY = 180;

type OpenPanel = 'capabilities' | 'industries' | null;

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function DesktopNavigation() {
  const pathname = usePathname();
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openPanelWith = useCallback(
    (panel: OpenPanel) => {
      clearTimers();
      openTimer.current = setTimeout(() => setOpenPanel(panel), HOVER_OPEN_DELAY);
    },
    [clearTimers],
  );

  const closePanelWith = useCallback(
    (panel: OpenPanel) => {
      clearTimers();
      closeTimer.current = setTimeout(() => {
        setOpenPanel((current) => (current === panel ? null : current));
      }, HOVER_CLOSE_DELAY);
    },
    [clearTimers],
  );

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenPanel(null);
      }
    }

    if (openPanel) {
      document.addEventListener('pointerdown', onPointerDown);
    }
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [openPanel]);

  function handleTriggerKeyDown(event: React.KeyboardEvent, panel: OpenPanel) {
    if (event.key === 'Escape' && openPanel) {
      event.preventDefault();
      setOpenPanel(null);
    }
    if (event.key === 'Enter' || event.key === ' ') {
      if (openPanel === panel) {
        event.preventDefault();
        setOpenPanel(null);
      } else {
        event.preventDefault();
        setOpenPanel(panel);
      }
    }
  }

  function handlePanelKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpenPanel(null);
    }
  }

  return (
    <nav ref={navRef} className="desktop-nav" aria-label="Primary">
      <ul className="desktop-nav-list">
        {primaryNavigation.map((item) => {
          if (item.label === 'Capabilities') {
            return (
              <li key={item.label} className="desktop-nav-item">
                <button
                  type="button"
                  className="disclosure-trigger"
                  aria-expanded={openPanel === 'capabilities'}
                  aria-controls="mega-menu-capabilities"
                  aria-haspopup="true"
                  onMouseEnter={() => openPanelWith('capabilities')}
                  onMouseLeave={() => closePanelWith('capabilities')}
                  onFocus={() => openPanelWith('capabilities')}
                  onBlur={(event) => {
                    if (!navRef.current?.contains(event.relatedTarget as Node)) {
                      closePanelWith('capabilities');
                    }
                  }}
                  onKeyDown={(event) => handleTriggerKeyDown(event, 'capabilities')}
                >
                  {item.label}
                  <span className="disclosure-trigger-icon" aria-hidden="true" />
                </button>
                <div
                  id="mega-menu-capabilities"
                  className="mega-menu"
                  data-open={openPanel === 'capabilities' ? 'true' : undefined}
                  onMouseEnter={cancelClose}
                  onMouseLeave={() => closePanelWith('capabilities')}
                  onKeyDown={handlePanelKeyDown}
                >
                  <div className="mega-menu-inner">
                    {capabilityGroups.map((group) => (
                      <div key={group.heading}>
                        <h3 className="mega-menu-group-heading">{group.heading}</h3>
                        <ul className="mega-menu-group-list">
                          {group.items.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="mega-menu-link"
                                tabIndex={openPanel === 'capabilities' ? 0 : -1}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="mega-menu-view-all">
                      <Link
                        href={viewAllCapabilities.href}
                        className="mega-menu-link"
                        tabIndex={openPanel === 'capabilities' ? 0 : -1}
                      >
                        {viewAllCapabilities.label} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          }

          if (item.label === 'Industries') {
            return (
              <li key={item.label} className="desktop-nav-item">
                <button
                  type="button"
                  className="disclosure-trigger"
                  aria-expanded={openPanel === 'industries'}
                  aria-controls="dropdown-industries"
                  aria-haspopup="true"
                  onMouseEnter={() => openPanelWith('industries')}
                  onMouseLeave={() => closePanelWith('industries')}
                  onFocus={() => openPanelWith('industries')}
                  onBlur={(event) => {
                    if (!navRef.current?.contains(event.relatedTarget as Node)) {
                      closePanelWith('industries');
                    }
                  }}
                  onKeyDown={(event) => handleTriggerKeyDown(event, 'industries')}
                >
                  {item.label}
                  <span className="disclosure-trigger-icon" aria-hidden="true" />
                </button>
                <div
                  id="dropdown-industries"
                  className="dropdown-menu"
                  data-open={openPanel === 'industries' ? 'true' : undefined}
                  onMouseEnter={cancelClose}
                  onMouseLeave={() => closePanelWith('industries')}
                  onKeyDown={handlePanelKeyDown}
                >
                  <ul className="dropdown-menu-list">
                    {industries.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="dropdown-menu-link"
                          tabIndex={openPanel === 'industries' ? 0 : -1}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="dropdown-menu-view-all">
                      <Link
                        href={viewAllIndustries.href}
                        className="dropdown-menu-link"
                        tabIndex={openPanel === 'industries' ? 0 : -1}
                      >
                        {viewAllIndustries.label} &rarr;
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            );
          }

          const active = isActiveRoute(pathname, item.href);
          return (
            <li key={item.label} className="desktop-nav-item">
              <Link
                href={item.href}
                className="nav-link"
                data-active={active ? 'true' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={startProjectLink.href}
        className="btn header-cta"
        data-variant="primary"
        data-size="default"
      >
        {startProjectLink.label}
      </Link>
    </nav>
  );
}
