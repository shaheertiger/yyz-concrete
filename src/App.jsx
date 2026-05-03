import VolumeCalc from './components/VolumeCalc';
import FleetCarousel from './components/FleetCarousel';
import ServiceMap from './components/ServiceMap';
import QuoteForm from './components/QuoteForm';
import { useIsMobile } from './hooks/useIsMobile';

const ACCENT = '#FF6A00';
const FG = '#1a1a1a';
const BG = '#f0eee9';
const MUTED = 'rgba(26,26,26,0.55)';
const BORDER = 'rgba(26,26,26,0.12)';

const NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>")`;

const IMAGES = {
  mixer: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=2400&q=85',
  slab:  'https://images.unsplash.com/photo-1564013434775-f71db0030976?w=900&q=80',
  pump:  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
  concreteLevel: 'https://images.unsplash.com/photo-1673978483810-ad14e573eece?w=900&q=80',
  detailLevel:   'https://images.unsplash.com/photo-1685464196339-46a985b2049b?w=900&q=80',
  heavyWork:     'https://plus.unsplash.com/premium_photo-1683121530725-e9ddd6c74ef1?w=900&q=80',
  road:          'https://images.unsplash.com/photo-1773432114391-f85c1674b233?w=900&q=80',
};

const NAV_LINKS = ['Services', 'Fleet', 'Calculator', 'Yards', 'Contact'];

const STATS = [
  ['58',   'YEARS POURING',    'GTA'],
  ['01',   'PLANT',            'ETOBICOKE'],
  ['9 m³', 'PER MIXER',        '60-TRUCK FLEET'],
  ['<2 H', 'QUOTE TURNAROUND', 'OFFICE HOURS'],
];

const SERVICES = [
  {
    n: '01', title: 'Ready-Mix Delivery',
    specs: ['15 – 50 MPa', 'Same-day dispatch', 'Onsite slump test'],
    img: IMAGES.concreteLevel,
  },
  {
    n: '02', title: 'Concrete Pumping',
    specs: ['32 m + 38 m boom', 'Line pumps to 200 m', 'High-rise rated'],
    img: IMAGES.pump,
  },
  {
    n: '03', title: 'Road Reconstruction & Concrete',
    specs: ['Municipal & highway grade', 'Full-depth reclamation', 'Curb, gutter & sidewalk'],
    img: IMAGES.road,
  },
];

const CONTACTS = [
  ['Direct dispatch', '(647) 465-1114'],
  ['Quote desk',      'info@yyzconcrete.com'],
  ['After hours',     '(647) 465-1114'],
];

const FOOTER_COLS = [
  ['Services',  ['Ready-Mix', 'Pumping', 'Road Reconstruction', 'Specialty Mixes']],
  ['Company',   ['About', 'Fleet', 'Plants', 'Careers']],
  ['Resources', ['Calculator', 'Spec Sheets', 'Safety']],
];

export default function App() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <div style={{ background: BG, color: FG, fontFamily: '"Barlow Condensed", "Oswald", "Arial Narrow", sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Top utility bar ─────────────────────────────────── */}
      <div className="va-mono" style={{
        background: '#0a0a0a', color: '#f0eee9', fontSize: 11,
        padding: `8px ${mobile ? '16px' : '32px'}`,
        display: 'flex', justifyContent: 'space-between',
        letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
      }}>
        <span>YYZ · (647) 465-1114 · 6:00 — 18:00</span>
        {!mobile && (
          <span style={{ display: 'flex', gap: 24 }}>
            <span>Mon Apr 27 · GTA · 8°C — pour conditions: <span style={{ color: ACCENT }}>GOOD</span></span>
            <span>EN · FR</span>
          </span>
        )}
      </div>

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `0 ${mobile ? '16px' : '32px'}`,
        borderBottom: `1px solid ${BORDER}`,
        background: '#fff',
        minHeight: mobile ? 72 : 88,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/header-logo-cropped.png" alt="YYZ Concrete" style={{ height: mobile ? 64 : 76, width: 'auto', display: 'block' }} />
        </a>
        {!mobile && (
          <nav className="va-body" style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {NAV_LINKS.map((x) => (
              <a key={x} href={`#${x.toLowerCase()}`} className="va-link" style={{ color: FG, textDecoration: 'none' }}>{x}</a>
            ))}
          </nav>
        )}
        <a href={mobile ? 'tel:6474651114' : '#contact'} style={{
          padding: mobile ? '10px 14px' : '12px 22px',
          background: ACCENT, color: '#0a0a0a',
          border: 'none', fontFamily: 'inherit', fontSize: mobile ? 11 : 12, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
          textDecoration: 'none', display: 'inline-block', whiteSpace: 'nowrap',
        }}>
          {mobile ? 'Call Now' : 'Order Concrete →'}
        </a>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: mobile ? 580 : 720, overflow: 'hidden', background: '#0a0a0a' }}>
        <img
          src={IMAGES.mixer}
          alt="Concrete mixer truck on job site"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, rgba(10,10,10,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: NOISE, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none' }} />

        {[
          { top: mobile ? 16 : 32, left: mobile ? 16 : 32, borderTop: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` },
          { top: mobile ? 16 : 32, right: mobile ? 16 : 32, borderTop: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` },
          { bottom: mobile ? 16 : 32, left: mobile ? 16 : 32, borderBottom: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` },
          { bottom: mobile ? 16 : 32, right: mobile ? 16 : 32, borderBottom: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` },
        ].map((s, i) => (
          <div key={i} style={{ position: 'absolute', width: mobile ? 16 : 24, height: mobile ? 16 : 24, ...s }} />
        ))}

        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '44px' : '120px'} ${p} 0`, color: '#f0eee9' }}>
          <div className="va-mono" style={{ fontSize: mobile ? 10 : 12, fontWeight: 600, letterSpacing: '0.25em', color: ACCENT, marginBottom: mobile ? 12 : 20 }}>
            ◆ READY-MIX · PUMPING · VOLUMETRIC
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 72 : 168, margin: 0, color: '#f0eee9', lineHeight: 0.9 }}>
            POUR<br />WHEN<br /><span style={{ color: ACCENT }}>YOU</span> SAY.
          </h1>
          <div style={{ marginTop: mobile ? 24 : 40, display: 'flex', flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'stretch' : 'flex-end', gap: mobile ? 12 : 60 }}>
            {!mobile && (
              <h2 className="va-body" style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.5, maxWidth: 460, margin: 0, color: 'rgba(240,238,233,0.85)' }}>
                YYZ Concrete: Etobicoke plant at 200 Rexdale Blvd. Same-day delivery on 90% of orders. Ready-mix concrete delivery across Toronto & GTA.
              </h2>
            )}
            <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12 }}>
              <a href="#contact" style={{
                padding: mobile ? '16px 20px' : '18px 28px', background: ACCENT, color: '#0a0a0a', border: 'none',
                fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none',
                display: 'block', textAlign: 'center',
              }}>
                Get Quote →
              </a>
              <a href="tel:6474651114" style={{
                padding: mobile ? '16px 20px' : '18px 28px', background: 'transparent', color: '#f0eee9',
                border: '2px solid rgba(240,238,233,0.6)', fontFamily: 'inherit', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                textDecoration: 'none', display: 'block', textAlign: 'center',
              }}>
                Call Dispatch
              </a>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          background: 'rgba(10,10,10,0.85)', borderTop: `2px solid ${ACCENT}`, color: '#f0eee9',
        }}>
          {STATS.map(([n, l, s], i) => (
            <div key={i} style={{
              padding: mobile ? '14px 16px' : '24px 28px',
              borderRight: (mobile ? i % 2 === 0 : i < 3) ? 'solid 1px rgba(240,238,233,0.15)' : 'none',
              borderTop: (mobile && i >= 2) ? 'solid 1px rgba(240,238,233,0.15)' : 'none',
            }}>
              <div className="va-disp" style={{ fontSize: mobile ? 36 : 56, color: ACCENT, lineHeight: 1 }}>{n}</div>
              <div className="va-mono" style={{ fontSize: mobile ? 9 : 11, fontWeight: 700, letterSpacing: '0.15em', marginTop: 4 }}>{l}</div>
              {!mobile && <div className="va-mono" style={{ fontSize: 10, color: 'rgba(240,238,233,0.5)', letterSpacing: '0.15em', marginTop: 2 }}>{s}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────── */}
      <section id="services" style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '120px'} ${p} ${mobile ? '40px' : '80px'}` }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'flex-end', marginBottom: mobile ? 32 : 60, gap: mobile ? 12 : 60 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>◆ 01 / SERVICES</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 52 : 96, margin: 0 }}>What we<br />pour.</h2>
          </div>
          {!mobile && (
            <p className="va-body" style={{ fontSize: 16, color: MUTED, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
              CSA-certified mixes from 15 to 50 MPa. Specialty placements, integral colour, fibre-reinforced, and low-carbon LEED-spec mixes available at every plant.
            </p>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.n} style={{
              borderRight: (!mobile && i < 2) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (mobile && i < 2) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div style={{ aspectRatio: mobile ? '16/9' : '4/3', overflow: 'hidden', background: '#222' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(0.3)' }} />
              </div>
              <div style={{ padding: mobile ? '20px' : '24px 28px' }}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 10 }}>
                  SERVICE / {s.n}
                </div>
                <h3 className="va-disp" style={{ fontSize: mobile ? 28 : 36, margin: '0 0 14px' }}>{s.title}</h3>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.specs.map((x) => (
                    <li key={x} style={{ fontSize: 13, padding: '8px 0', borderTop: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
                      <span>{x}</span>
                      <span className="va-mono" style={{ color: MUTED }}>✓</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="va-mono va-link" style={{ display: 'inline-block', marginTop: 16, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: FG, textDecoration: 'none' }}>
                  SPEC SHEET →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calculator + Map ────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div id="calculator" style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 48 : 80 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / VOLUME CALCULATOR</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px', color: '#f0eee9' }}>How much<br />do you need?</h2>
            <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 24 }}>
              Punch in dimensions. We'll give you cubic metres, yardage, and exact truck count. 10% waste already factored in.
            </p>
            <VolumeCalc accent={ACCENT} dark />
          </div>
          <div id="yards">
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / SERVICE AREA</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px', color: '#f0eee9' }}>One plant.<br />All GTA.</h2>
            <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 24 }}>
              Etobicoke plant at 200 Rexdale Blvd. Serving the entire GTA — wherever you're pouring, we've got a mixer on the way.
            </p>
            <ServiceMap accent={ACCENT} dark />
          </div>
        </div>
      </section>

      {/* ── Fleet ───────────────────────────────────────────── */}
      <section id="fleet" style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '120px'} ${p}` }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'flex-end', marginBottom: mobile ? 28 : 48, gap: mobile ? 12 : 60 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>◆ 04 / FLEET</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 52 : 96, margin: 0 }}>Right truck.<br />Right pour.</h2>
          </div>
          {!mobile && (
            <p className="va-body" style={{ fontSize: 16, color: MUTED, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
              Mixers, pumps, volumetrics — all owned, all maintained in-house. Operators are full-time YYZ employees, not contractors.
            </p>
          )}
        </div>
        <FleetCarousel accent={ACCENT} />
      </section>

      {/* ── Quote ───────────────────────────────────────────── */}
      <section id="contact" style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: mobile ? 40 : 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 05 / GET A QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 52 : 88, margin: '0 0 20px' }}>
              {mobile ? <>Get a<br />quote.</> : <>Four steps.<br />Two hours.<br />Your truck.</>}
            </h2>
            {!mobile && (
              <p className="va-body" style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, marginBottom: 32 }}>
                Skip the back-and-forth. Tell us what you're pouring and we'll come back with mix, price, and a delivery slot before lunch.
              </p>
            )}
            <div className="va-body" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20 }}>
              {CONTACTS.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: `1px solid ${BORDER}`, gap: 12 }}>
                  <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: MUTED }}>{k}</span>
                  <span style={{ fontSize: mobile ? 13 : 15, fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: BG, border: `1px solid ${BORDER}`, padding: mobile ? '28px 20px' : '40px 44px' }}>
            <QuoteForm accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer style={{ background: '#0a0a0a', color: '#f0eee9', padding: mobile ? '40px 20px 24px' : '80px 64px 40px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <img src="/footer-logo-transparent.png" alt="YYZ Concrete" style={{ width: mobile ? '100%' : '320px', height: 'auto', display: 'block', marginBottom: mobile ? 32 : 48 }} />
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: mobile ? 28 : 60, paddingTop: 32, borderTop: 'solid 1px rgba(240,238,233,0.15)' }}>
            <div style={{ gridColumn: mobile ? 'span 2' : 'auto' }}>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>HQ — ETOBICOKE</div>
              <p className="va-body" style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(240,238,233,0.7)', margin: 0 }}>
                200 Rexdale Blvd, Etobicoke, ON M9W 1R2<br />
                Mon–Sat 6:00–18:00 · Sun by appointment
              </p>
            </div>
            {FOOTER_COLS.map(([h, items]) => (
              <div key={h}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>{h.toUpperCase()}</div>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((x) => (
                    <li key={x} style={{ fontSize: 13, padding: '4px 0' }}>
                      <a 
                        href={`#${x.toLowerCase().replace(/\s+/g, '-')}`} 
                        style={{ color: 'rgba(240,238,233,0.7)', textDecoration: 'none' }}
                        className="va-link"
                      >
                        {x}
                      </a>
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
