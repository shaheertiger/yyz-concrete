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
      <footer style={{ background: '#0a0a0a', color: '#f0eee9', padding: mobile ? '40px 20px 24px' : '80px 64px 40px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <img src="/footer-logo-new.png" alt="YYZ Concrete" style={{ width: mobile ? '100%' : '320px', height: 'auto', display: 'block', marginBottom: mobile ? 32 : 48 }} />
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: mobile ? 28 : 60, paddingTop: 32, borderTop: 'solid 1px rgba(240,238,233,0.15)' }}>
            <div style={{ gridColumn: mobile ? 'span 2' : 'auto' }}>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>HQ — ETOBICOKE</div>
              <p className="va-body" style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(240,238,233,0.7)', margin: '0 0 16px' }}>
                200 Rexdale Blvd, Etobicoke, ON M9W 1R2<br />
                Mon–Sat 6:00–18:00 · Sun by appointment
              </p>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 8 }}>SERVICE PAGES</div>
              <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {SERVICE_PAGES.map(({ label, href }) => (
                  <li key={href} style={{ fontSize: 12, padding: '3px 0' }}>
                    <Link to={href} style={{ color: 'rgba(240,238,233,0.6)', textDecoration: 'none' }} className="va-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {FOOTER_COLS.map(([h, items]) => (
              <div key={h}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>{h.toUpperCase()}</div>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((x) => (
                    <li key={x} style={{ fontSize: 13, padding: '4px 0' }}>
                      <a href={`/#${x.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'rgba(240,238,233,0.7)', textDecoration: 'none' }} className="va-link">{x}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="va-mono" style={{ marginTop: 40, paddingTop: 20, borderTop: 'solid 1px rgba(240,238,233,0.15)', display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', gap: mobile ? 6 : 0, fontSize: 10, color: 'rgba(240,238,233,0.5)', letterSpacing: '0.1em' }}>
            <span>© 2026 YYZ CONCRETE LTD · GTA · CSA A23.1/A23.2</span>
            <span>BUILT TO POUR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
