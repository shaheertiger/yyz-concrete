import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS, FOOTER_COLS } from '../constants';

const SERVICE_PAGES = [
  { label: 'Concrete Contractor Toronto',         href: '/concrete-contractor-toronto/' },
  { label: 'Concrete Driveway Toronto',           href: '/concrete-driveway-toronto/' },
  { label: 'Concrete Repair Toronto',             href: '/concrete-repair-toronto/' },
  { label: 'Ready-Mix Concrete Delivery Toronto', href: '/ready-mix-concrete-delivery-toronto/' },
  { label: 'Concrete Slab Toronto',               href: '/concrete-slab-toronto/' },
  { label: 'Stamped Concrete Toronto',            href: '/stamped-concrete-toronto/' },
  { label: 'Commercial Concrete Contractor',      href: '/commercial-concrete-contractor-toronto/' },
];

export default function Layout() {
  const mobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div style={{ background: BG, color: FG, fontFamily: '"Barlow Condensed", "Oswald", "Arial Narrow", sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Top utility bar */}
      <div className="va-mono" style={{
        background: '#0a0a0a', color: '#f0eee9', fontSize: 11,
        padding: `8px ${mobile ? '16px' : '32px'}`,
        display: 'flex', justifyContent: 'space-between',
        letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
      }}>
        <span>YYZ · (647) 465-1114 · 6:00 — 18:00</span>
        {!mobile && (
          <span style={{ display: 'flex', gap: 24 }}>
            <span>Toronto & GTA · Pour conditions: <span style={{ color: ACCENT }}>GOOD</span></span>
            <span>EN · FR</span>
          </span>
        )}
      </div>

      {/* Nav */}
      <header style={{
        display: 'flex', alignItems: 'center',
        padding: `0 ${mobile ? '12px' : '32px'}`,
        borderBottom: `1px solid ${BORDER}`,
        background: '#fff',
        minHeight: mobile ? 80 : 88,
        gap: mobile ? 12 : 0,
        justifyContent: mobile ? 'flex-start' : 'space-between',
      }}>
        <Link to="/" style={{ display: 'block', textDecoration: 'none', flex: mobile ? 1 : 'none' }}>
          <img
            src={mobile ? '/logo-wide.png' : '/header-logo-cropped.png'}
            alt="YYZ Concrete"
            style={mobile
              ? { width: '100%', height: 'auto', display: 'block' }
              : { height: 76, width: 'auto', display: 'block' }}
          />
        </Link>
        {!mobile && (
          <nav className="va-body" style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', alignItems: 'center' }}>
            <a href="/#services" className="va-link" style={{ color: FG, textDecoration: 'none' }}>Services</a>
            <a href="/#fleet" className="va-link" style={{ color: FG, textDecoration: 'none' }}>Fleet</a>
            <a href="/#calculator" className="va-link" style={{ color: FG, textDecoration: 'none' }}>Calculator</a>
            <a href="/#yards" className="va-link" style={{ color: FG, textDecoration: 'none' }}>Yards</a>
            <a href="/#contact" className="va-link" style={{ color: FG, textDecoration: 'none' }}>Contact</a>
          </nav>
        )}
        <a href={mobile ? 'tel:6474651114' : '/#contact'} style={{
          padding: mobile ? '10px 14px' : '12px 22px',
          background: ACCENT, color: '#0a0a0a',
          border: 'none', fontFamily: 'inherit', fontSize: mobile ? 11 : 12, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
          textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap',
        }}>
          {mobile ? 'Call Now' : 'Order Concrete →'}
        </a>
      </header>

      {/* Page content */}
      <Outlet />

      {/* Footer */}
      <footer style={{ background: '#0a0a0a', color: '#f0eee9' }}>

        {/* Trust strip */}
        <div style={{ borderBottom: 'solid 1px rgba(240,238,233,0.1)' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: `16px ${mobile ? '20px' : '64px'}`, display: 'flex', flexWrap: 'wrap', gap: mobile ? 12 : 32, alignItems: 'center' }}>
            {[
              '✓ Licensed & Insured',
              '✓ Residential & Commercial',
              '✓ Serving Toronto & GTA',
              '✓ Free Estimates Available',
            ].map((item) => (
              <span key={item} className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(240,238,233,0.55)' }}>{item}</span>
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: mobile ? '48px 20px 32px' : '72px 64px 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.6fr 1fr 1fr 1fr', gap: mobile ? 40 : 60 }}>

            {/* Col 1 — Company info */}
            <div>
              <img src="/footer-logo-new.png" alt="YYZ Concrete" style={{ width: mobile ? 200 : 240, height: 'auto', display: 'block', marginBottom: 20 }} />
              <p className="va-body" style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(240,238,233,0.6)', margin: '0 0 20px', maxWidth: 300 }}>
                Toronto's concrete contractor for driveways, slabs, repairs, and ready-mix delivery. Serving the GTA from our Etobicoke plant since 1968.
              </p>
              {/* NAP */}
              <address style={{ fontStyle: 'normal' }}>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT, paddingTop: 2, flexShrink: 0 }}>ADDR</span>
                    <span style={{ fontSize: 13, color: 'rgba(240,238,233,0.7)', lineHeight: 1.5 }}>200 Rexdale Blvd, Etobicoke, ON M9W 1R2</span>
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT, flexShrink: 0 }}>TEL</span>
                    <a href="tel:6474651114" style={{ fontSize: 13, color: 'rgba(240,238,233,0.7)', textDecoration: 'none' }} className="va-link">(647) 465-1114</a>
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT, flexShrink: 0 }}>EMAIL</span>
                    <a href="mailto:info@yyzconcrete.com" style={{ fontSize: 13, color: 'rgba(240,238,233,0.7)', textDecoration: 'none' }} className="va-link">info@yyzconcrete.com</a>
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT, flexShrink: 0 }}>WEB</span>
                    <a href="https://yyzconcrete.com" style={{ fontSize: 13, color: 'rgba(240,238,233,0.7)', textDecoration: 'none' }} className="va-link">yyzconcrete.com</a>
                  </li>
                </ul>
              </address>
            </div>

            {/* Col 2 — Services */}
            <div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>SERVICES</div>
              <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Concrete Driveways',          href: '/concrete-driveway-toronto/' },
                  { label: 'Concrete Repair',              href: '/concrete-repair-toronto/' },
                  { label: 'Ready-Mix Delivery',           href: '/ready-mix-concrete-delivery-toronto/' },
                  { label: 'Concrete Slabs',               href: '/concrete-slab-toronto/' },
                  { label: 'Concrete Patios',              href: '/concrete-slab-toronto/' },
                  { label: 'Stamped Concrete',             href: '/stamped-concrete-toronto/' },
                  { label: 'Concrete Steps',               href: '/concrete-repair-toronto/' },
                  { label: 'Commercial Concrete',          href: '/commercial-concrete-contractor-toronto/' },
                ].map(({ label, href }) => (
                  <li key={label} style={{ padding: '5px 0', borderBottom: 'solid 1px rgba(240,238,233,0.06)' }}>
                    <Link to={href} style={{ fontSize: 13, color: 'rgba(240,238,233,0.65)', textDecoration: 'none' }} className="va-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Service Areas */}
            <div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>SERVICE AREAS</div>
              <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Toronto', 'Etobicoke', 'Mississauga', 'Brampton',
                  'Vaughan', 'North York', 'Scarborough', 'Markham',
                  'Oakville', 'Milton', 'GTA',
                ].map((area) => (
                  <li key={area} style={{ padding: '5px 0', borderBottom: 'solid 1px rgba(240,238,233,0.06)' }}>
                    <span style={{ fontSize: 13, color: 'rgba(240,238,233,0.65)' }}>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Quick Links */}
            <div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>QUICK LINKS</div>
              <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'About YYZ',           href: '/#services' },
                  { label: 'Projects & Gallery',   href: '/#fleet' },
                  { label: 'Reviews',              href: '/#contact' },
                  { label: 'FAQ',                  href: '/concrete-contractor-toronto/#faq' },
                  { label: 'Contact / Get Quote',  href: '/#contact' },
                  { label: 'Concrete Calculator',  href: '/#calculator' },
                  { label: 'Concrete Contractor Toronto', href: '/concrete-contractor-toronto/' },
                ].map(({ label, href }) => (
                  <li key={label} style={{ padding: '5px 0', borderBottom: 'solid 1px rgba(240,238,233,0.06)' }}>
                    <Link to={href} style={{ fontSize: 13, color: 'rgba(240,238,233,0.65)', textDecoration: 'none' }} className="va-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: 'solid 1px rgba(240,238,233,0.1)' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: `16px ${mobile ? '20px' : '64px'}`, display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'center', gap: mobile ? 10 : 0 }}>
            <span className="va-mono" style={{ fontSize: 10, color: 'rgba(240,238,233,0.4)', letterSpacing: '0.1em' }}>
              © 2026 YYZ CONCRETE LTD · 200 REXDALE BLVD, ETOBICOKE, ON M9W 1R2 · CSA A23.1/A23.2
            </span>
            <div style={{ display: 'flex', gap: 20 }}>
              {[
                { label: 'Privacy Policy', href: '/privacy-policy/' },
                { label: 'Terms of Service', href: '/terms-of-service/' },
                { label: 'Sitemap', href: '/sitemap.xml' },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="va-mono va-link" style={{ fontSize: 10, color: 'rgba(240,238,233,0.4)', letterSpacing: '0.1em', textDecoration: 'none' }}>{label.toUpperCase()}</a>
              ))}
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
