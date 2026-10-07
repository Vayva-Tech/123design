import { BrandMark } from './BrandMark';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { HeaderScrollState } from './HeaderScrollState';

interface SiteHeaderProps {
  overlay?: boolean;
  overlayTheme?: 'light' | 'dark';
}

export function SiteHeader({ overlay = false, overlayTheme = 'light' }: SiteHeaderProps) {
  return (
    <>
      <HeaderScrollState />
      <header
        className="site-header"
        data-header-overlay={overlay ? '' : undefined}
        data-header-overlay-theme={overlay ? overlayTheme : undefined}
      >
        <div className="container" data-variant="shell">
          <div className="site-header-inner">
            <BrandMark />
            <DesktopNavigation />
            <MobileNavigation />
          </div>
        </div>
      </header>
    </>
  );
}
