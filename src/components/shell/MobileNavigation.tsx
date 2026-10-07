'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { primaryNavigation, startProjectLink, mobileUtilityLinks } from '@/lib/navigation';

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function MobileNavigation() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.setAttribute('data-mobile-menu-open', 'true');
  }, []);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
    document.body.removeAttribute('data-mobile-menu-open');
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      closeMenu();
    }
  }, [pathname, closeMenu]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function onClose() {
      document.body.removeAttribute('data-mobile-menu-open');
    }

    dialog.addEventListener('close', onClose);
    return () => {
      dialog.removeEventListener('close', onClose);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function onCancel(event: Event) {
      event.preventDefault();
      closeMenu();
    }

    dialog.addEventListener('cancel', onCancel);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
    };
  }, [closeMenu]);

  function handleBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (clickedOutside) {
      closeMenu();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger"
        onClick={openMenu}
        aria-label="Open navigation menu"
      >
        Menu
      </button>
      <dialog
        ref={dialogRef}
        className="mobile-nav"
        aria-label="Mobile navigation"
        onClick={handleBackdropClick}
      >
        <div className="mobile-nav-header">
          <Link href="/" className="mobile-nav-brand" onClick={closeMenu}>
            <Image
              src="/logo-light.svg"
              alt="123 Design"
              width={120}
              height={120}
              className="brand-mark__logo"
              priority
            />
          </Link>
          <div className="mobile-nav-header__actions">
            <button
              type="button"
              className="mobile-nav-close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>
        </div>
        <div className="mobile-nav-body">
          <nav aria-label="Mobile">
            <ul className="mobile-nav-list">
              {primaryNavigation.map((item) => {
                const active = isActiveRoute(pathname, item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="mobile-nav-link"
                      data-active={active ? 'true' : undefined}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mobile-nav-cta">
            <Link
              href={startProjectLink.href}
              className="btn"
              data-variant="primary"
              data-size="large"
            >
              {startProjectLink.label}
            </Link>
          </div>
          <ul className="mobile-nav-utility">
            {mobileUtilityLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="mobile-nav-utility-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
