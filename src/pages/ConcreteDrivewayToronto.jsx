import QuoteForm from '../components/QuoteForm';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const FINISHES = [
  ['Broom Finish', 'Standard residential finish. Textured surface provides grip in wet and icy conditions. Most cost-effective option.'],
  ['Exposed Aggregate', 'Top layer of cement paste removed to reveal stone aggregate. Durable, slip-resistant, and attractive. Popular in Toronto.'],
  ['Stamped Concrete', 'Pattern pressed into fresh concrete to mimic stone, brick, or slate. Adds significant curb appeal. Requires sealing.'],
  ['Smooth Float', 'Hand-troweled smooth surface. Best for covered areas, not recommended for outdoor driveways subject to frost.'],
];

const PROCESS = [
  ['01', 'Old Concrete Removal', 'Existing slab cut and broken up with equipment, debris hauled off-site. Clean slate before we start.'],
  ['02', 'Sub-Base Preparation', '4–6" granular A or crusher run, compacted in lifts to prevent settling. Toronto frost line is 1.2 m — proper drainage matters.'],
  ['03', 'Forming & Reinforcement', 'Wood or steel forms set to grade. Rebar or fibre mesh placed for structural integrity.'],
  ['04', 'Concrete Pour', '32 MPa air-entrained mix, typically 4" thick for residential driveways. Placed and screeded to grade.'],
  ['05', 'Finishing', 'Float, edge, then broom, stamp, or expose aggregate as specified. Saw-cut control joints same day.'],
  ['06', 'Curing & Sealing', 'Curing compound applied immediately. Optional penetrating or film-forming sealer at 28 days.'],
];

const FAQS = [
  ['How thick should a concrete driveway be?', 'Residential driveways are typically 4" (100 mm) thick. For heavy vehicle access — RVs, large trucks — 5–6" is recommended.'],
  ['How long before I can drive on my new driveway?', '7 days minimum for passenger vehicles. 28 days for full design strength. Avoid parking heavy vehicles for 30 days.'],
  ['Should I repair or replace my driveway?', 'If cracks are hairline and isolated, patching works. If there is widespread cracking, heaving, or spalling over 30% of the surface, replacement is more cost-effective.'],
  ['How long does a concrete driveway last?', '30–50 years with proper installation and occasional sealing. Far longer than asphalt, which needs resurfacing every 5–10 years.'],
  ['What is exposed aggregate?', 'A finish where the top layer of cement paste is washed away while the concrete is still green, exposing the decorative stone aggregate underneath.'],
  ['How much does a concrete driveway cost in Toronto?', 'Typical range is $8–$14 per square foot for a standard broom finish. Exposed aggregate is $12–$18/sq ft. Stamped is $18–$28/sq ft. We quote per project after a site visit.'],
];

export default function ConcreteDrivewayToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · DRIVEWAYS
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 64 : 130, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            CONCRETE<br />DRIVEWAY<br /><span style={{ color: ACCENT }}>TORONTO.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            New driveway installation, full replacement, and decorative finishes. Proper base prep, CSA-certified mix, built for Toronto winters. Quote within 2 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12 }}>
            <a href="#quote" style={{ padding: '16px 28px', background: ACCENT, color: '#0a0a0a', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              Get a Free Quote →
            </a>
            <a href="tel:6474651114" style={{ padding: '16px 28px', background: 'transparent', color: '#f0eee9', border: '2px solid rgba(240,238,233,0.5)', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              (647) 465-1114
            </a>
          </div>
        </div>
      </section>

      {/* ── New Installation ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / NEW INSTALLATION</div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80, alignItems: 'start' }}>
          <div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>New concrete<br />driveway.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.7 }}>
              A new concrete driveway starts with the sub-base. We excavate to the required depth, install and compact granular fill, and set forms before a single yard of concrete arrives. The result is a driveway that won't settle, crack, or heave in the freeze-thaw cycles Toronto gets every winter.
            </p>
          </div>
          <div style={{ border: `1px solid ${BORDER}`, padding: mobile ? '24px 20px' : '36px' }}>
            <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 16 }}>STANDARD SPEC</div>
            {[
              ['Thickness', '4" (100 mm) residential · 5–6" heavy use'],
              ['Mix Strength', '32 MPa air-entrained — frost resistant'],
              ['Reinforcement', 'Rebar (#4 grid) or fibre mesh'],
              ['Base', '4–6" compacted granular A'],
              ['Control Joints', 'Saw-cut at ¼ slab thickness, day of pour'],
              ['Slope', '1–2% away from structure for drainage'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${BORDER}`, gap: 16 }}>
                <span className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: MUTED, textTransform: 'uppercase' }}>{k}</span>
                <span className="va-body" style={{ fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Replacement ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / DRIVEWAY REPLACEMENT</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px', color: '#f0eee9' }}>When to replace.</h2>
          <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', maxWidth: 700, lineHeight: 1.7, marginBottom: 32 }}>
            If your driveway has widespread cracking, significant heaving, or spalling across more than 30% of the surface, replacement costs less over 10 years than repeated patching. We handle full demolition and haul-away as part of the replacement package.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: '1px solid rgba(240,238,233,0.12)' }}>
            {[
              ['Repair makes sense', 'Isolated cracks under 3mm wide. Single heaved section from tree root. Corner or edge chips. Surface dusting on otherwise sound slab.'],
              ['Borderline', 'Multiple cracks across different panels. Moderate spalling on 20–30% of surface. Low spots causing drainage issues. Age 20–30 years.'],
              ['Replace', 'Widespread cracking and heaving. Spalling over 30% of surface. Multiple settled panels. Age over 40 years. Failed sub-base.'],
            ].map(([title, desc], i) => (
              <div key={title} style={{ padding: mobile ? '24px 20px' : '32px 36px', borderRight: (!mobile && i < 2) ? '1px solid rgba(240,238,233,0.12)' : 'none' }}>
                <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
                <h3 className="va-disp" style={{ fontSize: 24, margin: '0 0 12px', color: '#f0eee9' }}>{title}</h3>
                <p className="va-body" style={{ fontSize: 13, color: 'rgba(240,238,233,0.6)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Finishes ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / FINISHES</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 40px' }}>Broom, exposed,<br />or stamped.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {FINISHES.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < FINISHES.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
              <h3 className="va-disp" style={{ fontSize: 28, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Base & Drainage ── */}
      <section style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 04 / BASE & DRAINAGE</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 24px' }}>What's under<br />matters more.</h2>
          <p className="va-body" style={{ fontSize: 15, color: MUTED, maxWidth: 700, lineHeight: 1.7 }}>
            Most concrete driveway failures in Toronto start at the sub-base, not the surface. Poorly compacted fill settles. Clay subgrade retains water that freezes and heaves. We excavate to stable bearing soil, import granular A, and compact in 4" lifts. We also address drainage before the forms go in — water running toward the foundation is a problem that concrete makes worse, not better.
          </p>
        </div>
      </section>

      {/* ── Installation Process ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 05 / INSTALLATION PROCESS</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 40px' }}>Start to finish.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${BORDER}` }}>
          {PROCESS.map(([num, title, desc], i) => (
            <div key={num} style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '80px 240px 1fr', gap: mobile ? 8 : 0, padding: mobile ? '24px 20px' : '28px 36px', borderBottom: i < PROCESS.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'start' }}>
              <div className="va-disp" style={{ fontSize: 40, color: ACCENT, lineHeight: 1 }}>{num}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 22 : 28, margin: 0, paddingRight: mobile ? 0 : 24 }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 06 / COST FAQ</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 40px', color: '#f0eee9' }}>Pricing questions.</h2>
          <div style={{ border: '1px solid rgba(240,238,233,0.12)' }}>
            {FAQS.map(([q, a], i) => (
              <div key={i} style={{ padding: mobile ? '24px 20px' : '28px 36px', borderBottom: i < FAQS.length - 1 ? '1px solid rgba(240,238,233,0.12)' : 'none' }}>
                <h3 className="va-disp" style={{ fontSize: mobile ? 20 : 26, margin: '0 0 10px', color: '#f0eee9' }}>{q}</h3>
                <p className="va-body" style={{ fontSize: 14, color: 'rgba(240,238,233,0.65)', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: mobile ? 40 : 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ FREE QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Price your<br />driveway.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Send us dimensions and finish preference. We'll come back with a price in under 2 hours during business hours.
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
