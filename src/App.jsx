import VolumeCalc from './components/VolumeCalc';
import FleetCarousel from './components/FleetCarousel';
import ServiceMap from './components/ServiceMap';
import QuoteForm from './components/QuoteForm';
import NewsList from './components/NewsList';

const ACCENT = '#FF6A00';
const FG = '#1a1a1a';
const BG = '#f0eee9';
const MUTED = 'rgba(26,26,26,0.55)';
const BORDER = 'rgba(26,26,26,0.12)';

const NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>")`;

const IMAGES = {
  // Hero — mixer truck on site
  mixer: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=2400&q=85',
  // Services
  slab:  'https://images.unsplash.com/photo-1564013434775-f71db0030976?w=900&q=80', // concrete slab pour
  pump:  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',  // concrete pump
  // TODO: replace with CDN URL from → unsplash.com/photos/a-man-is-standing-on-a-slab-of-concrete-rnqRdfYyywM
  concreteLevel: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
  // TODO: replace with CDN URL from → unsplash.com/photos/a-construction-worker-is-working-on-the-side-of-a-building-B220pPYoDAg
  detailLevel:   'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80',
  // TODO: replace with CDN URL from → unsplash.com/photos/heavy-work-for-a-construction-worker-on-the-site-kgo0BoAB4qY
  heavyWork:     'https://images.unsplash.com/photo-1590536874543-7cc1e5ef80a4?w=900&q=80',
  road:          'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=900&q=80',
};

const NAV_LINKS = ['Services', 'Fleet', 'Calculator', 'Yards', 'News', 'Contact'];

const STATS = [
  ['58',   'YEARS POURING',    'GTA'],
  ['04',   'PLANTS',           'ETO · MIS · VAU · SCA'],
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
  ['Direct dispatch', '647-926-5914'],
  ['Quote desk',      'info@yyzconcrete.com'],
  ['After hours',     '647-926-5914'],
];

const FOOTER_COLS = [
  ['Services',  ['Ready-Mix', 'Pumping', 'Road Reconstruction', 'Specialty Mixes']],
  ['Company',   ['About', 'Fleet', 'Plants', 'Careers']],
  ['Resources', ['Calculator', 'Spec Sheets', 'Safety', 'News']],
];

export default function App() {
  return (
    <div style={{ background: BG, color: FG, fontFamily: '"Barlow Condensed", "Oswald", "Arial Narrow", sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Top utility bar ─────────────────────────────────── */}
      <div
        className="va-mono"
        style={{
          background: '#0a0a0a', color: '#f0eee9', fontSize: 11,
          padding: '8px 32px', display: 'flex', justifyContent: 'space-between',
          letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
        }}>
        <span>YYZ-DISPATCH · 647-926-5914 · Open 6:00 — 18:00</span>
        <span style={{ display: 'flex', gap: 24 }}>
          <span>
            Mon Apr 27 · GTA · 8°C — pour conditions:{' '}
            <span style={{ color: ACCENT }}>GOOD</span>
          </span>
          <span>EN · FR</span>
        </span>
      </div>

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 32px', borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 40, height: 40, background: '#0a0a0a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 18, height: 18, background: ACCENT, transform: 'rotate(45deg)' }} />
          </div>
          <div>
            <div className="va-disp" style={{ fontSize: 22, lineHeight: 1 }}>YYZ Concrete</div>
            <div className="va-mono" style={{ fontSize: 9, color: MUTED, letterSpacing: '0.2em', marginTop: 2 }}>
              READY-MIX · GTA · EST. 1968
            </div>
          </div>
        </div>
        <nav className="va-body" style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {NAV_LINKS.map((x) => (
            <a key={x} href={`#${x.toLowerCase()}`} className="va-link" style={{ color: FG, textDecoration: 'none' }}>{x}</a>
          ))}
        </nav>
        <a href="#contact" style={{
          padding: '12px 22px', background: ACCENT, color: '#0a0a0a',
          border: 'none', fontFamily: 'inherit', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
          textDecoration: 'none', display: 'inline-block',
        }}>
          Order Concrete →
        </a>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: 720, overflow: 'hidden', background: '#0a0a0a' }}>
        <img
          src={IMAGES.mixer}
          alt="Concrete mixer truck on job site"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
        />
        {/* gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, rgba(10,10,10,0.7) 100%)' }} />
        {/* noise texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: NOISE, opacity: 0.15, mixBlendMode: 'overlay', pointerEvents: 'none' }} />

        {/* corner crops */}
        {[
          { top: 32, left: 32, borderTop: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` },
          { top: 32, right: 32, borderTop: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` },
          { bottom: 32, left: 32, borderBottom: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` },
          { bottom: 32, right: 32, borderBottom: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` },
        ].map((s, i) => (
          <div key={i} style={{ position: 'absolute', width: 24, height: 24, ...s }} />
        ))}

        {/* headline */}
        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto', padding: '120px 64px 0', color: '#f0eee9' }}>
          <div className="va-mono" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.25em', color: ACCENT, marginBottom: 20 }}>
            ◆ READY-MIX · PUMPING · VOLUMETRIC
          </div>
          <h1 className="va-disp" style={{ fontSize: 168, margin: 0, color: '#f0eee9' }}>
            POUR<br />WHEN<br /><span style={{ color: ACCENT }}>YOU</span> SAY.
          </h1>
          <div style={{ marginTop: 40, display: 'flex', alignItems: 'flex-end', gap: 60 }}>
            <p className="va-body" style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.5, maxWidth: 460, margin: 0, color: 'rgba(240,238,233,0.85)' }}>
              Four GTA plants. 60-truck fleet. Same-day delivery on 90% of orders. Built for contractors who run on a clock, not a calendar.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#contact" style={{
                padding: '18px 28px', background: ACCENT, color: '#0a0a0a', border: 'none',
                fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
              }}>
                Get Quote →
              </a>
              <a href="tel:6479265914" style={{
                padding: '18px 28px', background: 'transparent', color: '#f0eee9',
                border: '2px solid #f0eee9', fontFamily: 'inherit', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                textDecoration: 'none', display: 'inline-block',
              }}>
                Call Dispatch
              </a>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: 'rgba(10,10,10,0.85)', borderTop: `2px solid ${ACCENT}`, color: '#f0eee9',
        }}>
          {STATS.map(([n, l, s], i) => (
            <div key={i} style={{ padding: '24px 28px', borderRight: i < 3 ? 'solid 1px rgba(240,238,233,0.15)' : 'none' }}>
              <div className="va-disp" style={{ fontSize: 56, color: ACCENT, lineHeight: 1 }}>{n}</div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginTop: 6 }}>{l}</div>
              <div className="va-mono" style={{ fontSize: 10, color: 'rgba(240,238,233,0.5)', letterSpacing: '0.15em', marginTop: 2 }}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────── */}
      <section id="services" style={{ maxWidth: 1400, margin: '0 auto', padding: '120px 64px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 60 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>◆ 01 / SERVICES</div>
            <h2 className="va-disp" style={{ fontSize: 96, margin: 0 }}>What we<br />pour.</h2>
          </div>
          <p className="va-body" style={{ fontSize: 16, color: MUTED, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
            CSA-certified mixes from 15 to 50 MPa. Specialty placements, integral colour, fibre-reinforced, and low-carbon LEED-spec mixes available at every plant.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {SERVICES.map((s, i) => (
            <div key={s.n} style={{ borderRight: i < 2 ? `1px solid ${BORDER}` : 'none' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#222' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(0.3)' }} />
              </div>
              <div style={{ padding: '24px 28px' }}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 12 }}>
                  SERVICE / {s.n}
                </div>
                <h3 className="va-disp" style={{ fontSize: 36, margin: '0 0 16px' }}>{s.title}</h3>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.specs.map((x) => (
                    <li key={x} style={{ fontSize: 13, padding: '8px 0', borderTop: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
                      <span>{x}</span>
                      <span className="va-mono" style={{ color: MUTED }}>✓</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="va-mono va-link" style={{ display: 'inline-block', marginTop: 18, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: FG, textDecoration: 'none' }}>
                  SPEC SHEET →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calculator + Map ────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div id="calculator" style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>◆ 02 / VOLUME CALCULATOR</div>
            <h2 className="va-disp" style={{ fontSize: 72, margin: '0 0 24px', color: '#f0eee9' }}>How much<br />do you need?</h2>
            <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 28 }}>
              Punch in dimensions. We'll give you cubic metres, yardage, and exact truck count. 10% waste already factored in.
            </p>
            <VolumeCalc accent={ACCENT} dark />
          </div>
          <div id="yards">
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>◆ 03 / SERVICE AREA</div>
            <h2 className="va-disp" style={{ fontSize: 72, margin: '0 0 24px', color: '#f0eee9' }}>Four plants.<br />One GTA.</h2>
            <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 28 }}>
              Etobicoke HQ plus three satellite plants. Whatever your zip code, we've got a mixer that's already on the way.
            </p>
            <ServiceMap accent={ACCENT} dark />
          </div>
        </div>
      </section>

      {/* ── Fleet ───────────────────────────────────────────── */}
      <section id="fleet" style={{ maxWidth: 1400, margin: '0 auto', padding: '120px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 60 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>◆ 04 / FLEET</div>
            <h2 className="va-disp" style={{ fontSize: 96, margin: 0 }}>Right truck.<br />Right pour.</h2>
          </div>
          <p className="va-body" style={{ fontSize: 16, color: MUTED, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
            Mixers, pumps, volumetrics — all owned, all maintained in-house. Operators are full-time YYZ employees, not contractors.
          </p>
        </div>
        <FleetCarousel accent={ACCENT} />
      </section>

      {/* ── Quote ───────────────────────────────────────────── */}
      <section id="contact" style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 64px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>◆ 05 / GET A QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: 88, margin: '0 0 24px' }}>Four steps.<br />Two hours.<br />Your truck.</h2>
            <p className="va-body" style={{ fontSize: 16, color: MUTED, lineHeight: 1.6, marginBottom: 32 }}>
              Skip the back-and-forth. Tell us what you're pouring and we'll come back with mix, price, and a delivery slot before lunch.
            </p>
            <div className="va-body" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}>
              {CONTACTS.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${BORDER}` }}>
                  <span className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: MUTED }}>{k}</span>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: BG, border: `1px solid ${BORDER}`, padding: '40px 44px' }}>
            <QuoteForm accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* ── News / Dispatch Log ──────────────────────────────── */}
      <section id="news" style={{ maxWidth: 1400, margin: '0 auto', padding: '120px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>◆ 06 / DISPATCH LOG</div>
            <h2 className="va-disp" style={{ fontSize: 96, margin: 0 }}>From the yard.</h2>
          </div>
          <a href="#" className="va-mono va-link" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: FG, textDecoration: 'none' }}>
            All Updates →
          </a>
        </div>
        <NewsList accent={ACCENT} />
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer style={{ background: '#0a0a0a', color: '#f0eee9', padding: '80px 64px 40px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-disp" style={{ fontSize: 200, lineHeight: 0.9, color: ACCENT, marginBottom: 60 }}>YYZ.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingTop: 40, borderTop: 'solid 1px rgba(240,238,233,0.15)' }}>
            <div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>HQ — ETOBICOKE</div>
              <p className="va-body" style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,238,233,0.7)', margin: 0 }}>
                200 Rexdale Blvd, Etobicoke, ON M9W 1R2<br />
                Mon–Sat 6:00–18:00 · Sun by appointment
              </p>
            </div>
            {FOOTER_COLS.map(([h, items]) => (
              <div key={h}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>{h.toUpperCase()}</div>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((x) => <li key={x} style={{ fontSize: 13, padding: '4px 0', color: 'rgba(240,238,233,0.7)' }}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="va-mono" style={{ marginTop: 60, paddingTop: 24, borderTop: 'solid 1px rgba(240,238,233,0.15)', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(240,238,233,0.5)', letterSpacing: '0.1em' }}>
            <span>© 2026 YYZ CONCRETE LTD · GTA · CSA A23.1/A23.2</span>
            <span>BUILT TO POUR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
