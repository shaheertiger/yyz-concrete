import QuoteForm from '../components/QuoteForm';
import AuthorCard from '../components/AuthorCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const REPAIR_TYPES = [
  ['Cracked Concrete', 'Hairline to structural cracks — routed, cleaned, and filled with polyurethane or epoxy injection. Control joint re-cutting where needed.'],
  ['Spalling Concrete', 'Surface scaling and delamination repaired with bonded overlays or partial-depth patch using high-strength concrete repair mortar.'],
  ['Uneven Concrete', 'Slab lifting with polyurethane foam injection (mudjacking alternative) or full panel replacement for severely settled sections.'],
  ['Steps & Edges', 'Broken step noses, crumbling edges, and damaged risers rebuilt with formed concrete repair — matched finish where possible.'],
  ['Sidewalks & Walkways', 'City standard compliance repairs, trip-hazard elimination, panel replacement. We handle permit requirements for boulevard work.'],
  ['Patios & Slabs', 'Garage floor pitting, basement slab cracks, outdoor patio spalling — diagnosed and repaired to extend slab life by decades.'],
];

const REPAIR_VS_REPLACE = [
  ['Repair is right when', [
    'Cracks are isolated and under 3 mm wide',
    'Spalling affects less than 20–25% of the surface',
    'The sub-base is still solid with no voids',
    'Slab is less than 20 years old',
    'Heaving is from a removable cause (tree root, drainage fix)',
  ]],
  ['Replace instead when', [
    'Cracks run through multiple panels or are structural',
    'Spalling or scaling covers more than 30% of surface area',
    'Slab has settled due to a failed sub-base',
    'There is corrosion or ASR (alkali-silica reaction)',
    'Cost of repair exceeds 50–60% of replacement cost',
  ]],
];

const APPLICATIONS = [
  { label: 'Driveways', desc: 'Crack repair, spall patching, full-panel replacement' },
  { label: 'Garage Floors', desc: 'Pitting, dusting, joint repair, overlay systems' },
  { label: 'Basement Slabs', desc: 'Crack injection, re-leveling, moisture barrier repairs' },
  { label: 'Front Steps', desc: 'Broken noses, crumbling risers, surface scaling' },
  { label: 'Sidewalks', desc: 'Trip hazard repair, panel replacement, city compliance' },
  { label: 'Patios', desc: 'Surface repair, slab lifting, expansion joint replacement' },
  { label: 'Retaining Walls', desc: 'Crack sealing, cap replacement, drainage improvements' },
  { label: 'Parking Lots', desc: 'Joint sealing, partial-depth patching, full-section replacement' },
];

export default function ConcreteRepairToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · REPAIR
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 64 : 130, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            CONCRETE<br />REPAIR<br /><span style={{ color: ACCENT }}>TORONTO.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            Cracked concrete, spalling surfaces, uneven slabs — diagnosed and repaired by experienced crews. We fix it right the first time or tell you honestly when replacement is the better call.
          </p>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12 }}>
            <a href="#quote" style={{ padding: '16px 28px', background: ACCENT, color: '#0a0a0a', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              Free Quote →
            </a>
            <a href="tel:6474651114" style={{ padding: '16px 28px', background: 'transparent', color: '#f0eee9', border: '2px solid rgba(240,238,233,0.5)', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              (647) 465-1114
            </a>
          </div>
        </div>
      </section>

      <AuthorCard topic="concrete repair, crack & spall remediation in Toronto" />

      {/* ── Repair Types ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / WHAT WE REPAIR</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Cracked. Spalled.<br />Uneven. Fixed.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {REPAIR_TYPES.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < REPAIR_TYPES.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 24 : 30, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Applications ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / WHERE WE WORK</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>Steps, slabs,<br />sidewalks, patios.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 0, border: '1px solid rgba(240,238,233,0.12)' }}>
            {APPLICATIONS.map(({ label, desc }, i) => (
              <div key={label} style={{
                padding: mobile ? '20px 16px' : '28px 28px',
                borderRight: (mobile ? i % 2 === 0 : i % 4 < 3) ? '1px solid rgba(240,238,233,0.12)' : 'none',
                borderBottom: (mobile ? i < APPLICATIONS.length - 2 : i < 4) ? '1px solid rgba(240,238,233,0.12)' : 'none',
              }}>
                <h3 className="va-disp" style={{ fontSize: mobile ? 18 : 22, margin: '0 0 8px', color: '#f0eee9' }}>{label}</h3>
                <p className="va-body" style={{ fontSize: 12, color: 'rgba(240,238,233,0.55)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Repair vs Replace ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / REPAIR VS REPLACEMENT</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Honest advice,<br />not upselling.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 0, border: `1px solid ${BORDER}` }}>
          {REPAIR_VS_REPLACE.map(([title, points], i) => (
            <div key={title} style={{ padding: mobile ? '28px 20px' : '40px 44px', borderRight: (!mobile && i === 0) ? `1px solid ${BORDER}` : 'none' }}>
              <h3 className="va-disp" style={{ fontSize: mobile ? 24 : 32, margin: '0 0 20px' }}>{title}</h3>
              <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {points.map((pt) => (
                  <li key={pt} style={{ fontSize: 14, padding: '10px 0', borderBottom: `1px solid ${BORDER}`, display: 'flex', gap: 12, alignItems: 'flex-start', color: MUTED, lineHeight: 1.5 }}>
                    <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Free Quote CTA ── */}
      <section id="quote" style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: mobile ? 40 : 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ FREE ASSESSMENT</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Send us photos.<br />We'll advise.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Describe what you're seeing — cracking pattern, surface damage, any movement. Photos help. We'll tell you repair vs. replace and what it costs. No obligation.
            </p>
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
    </>
  );
}
