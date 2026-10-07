import Link from 'next/link';
import { footerGroups } from '@/lib/navigation';
import { NewsletterSignup } from '@/features/newsletter';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-newsletter">
          <NewsletterSignup />
        </div>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-name">123.design</div>
            <div className="footer-brand-tagline">From Idea to Production</div>
            <p className="footer-brand-description">
              Product development, engineering and manufacturing.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="footer-group-heading">{group.heading}</h3>
              <ul className="footer-group-list">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} 123.design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
