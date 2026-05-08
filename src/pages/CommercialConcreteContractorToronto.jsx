import QuoteForm from '../components/QuoteForm';
import AuthorCard from '../components/AuthorCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const SERVICES = [
  ['Warehouse & Industrial Floors', 'Laser-screed flatwork to FF/FL specifications. Fibre-reinforced or post-tensioned slabs. Joint layout by engineer. Sealer and hardener systems on request.'],
  ['Parking Lots & Decks', 'Heavy-duty reinforced slabs for commercial vehicle loads. Expansion joints, catch basins, and grade design included. Curb and gutter poured monolithic.'],
  ['Concrete Floor Contractor', 'New slab pours, overlay systems, and polished concrete for retail, restaurant, and office applications. All surface prep and placement self-performed.'],
  ['Tilt-Up & Structural', 'Grade beams, pile caps, tilt-up wall panels — concrete supply and placement for commercial building structure from foundation to above-grade.'],
  ['Curbs, Gutters & Sidewalks', 'Municipal-standard formed curb and gutter. Machine-placed or hand-formed. Accessible ramp construction. Boulevard and private property.'],
  ['Concrete Repair & Maintenance', 'Joint sealing programs, partial-depth patching, overlay systems — extend the life of existing commercial concrete without full replacement.'],
];

const SECTORS = [
  { label: 'Retail & Mixed-Use', specs: ['Polished concrete', 'Slab-on-grade', 'Parking structure'] },
  { label: 'Industrial & Logistics', specs: ['Heavy-duty floors', 'Loading dock pads', 'Truck courts'] },
  { label: 'Automotive', specs: ['Service pit structures', 'High-durability slabs', 'Concrete barriers'] },
  { label: 'Municipal', specs: ['Curb & gutter', 'Sidewalk replacement', 'Road reconstruction'] },
];

const WHY = [
  ['Self-perform only', 'No subcontracting. Our crews, our equipment, our accountability from mobilization to final cleanup.'],
  ['Own ready-mix supply', 'Etobicoke plant means we control the mix, the delivery schedule, and the quality — no third-party supplier delays.'],
  ['Commercial fleet', "32 m and 38 m boom pumps, line pumps to 200 m, 60 mixers. We can place where others can't reach."],
  ['CSA certified', 'All mixes CSA A23.1/A23.2 certified. Delivery tickets, batch reports, and LEED documentation available.'],
  ['Schedule adherence', 'Commercial projects run on critical paths. We show up with the right truck count at the committed time.'],
  ['Responsive pricing', 'Commercial quotes within 4 business hours. Scope changes handled in writing, not verbal agreements.'],
];

const FAQS = [
  ['What size commercial projects do you take?', 'We work from single-pour commercial pads up to large industrial floor placements. Call the desk with your scope — if it requires concrete, we can handle it.'],
  ['Do you work with general contractors?', 'Yes. Most of our commercial work is as a concrete subcontractor to a GC. We work to specified mix designs, placement sequences, and schedule requirements.'],
  ['Can you provide LEED documentation?', 'Yes. EPDs, material declarations, and CSA batch certification are available for all mixes. Supplementary cementitious materials (fly ash, slag) available on request.'],
  ['What is your minimum commercial project size?', 'No enforced minimum, but smaller projects (under ~20 m³) may be better suited through our residential dispatch. Call and describe the scope.'],
  ['Do you supply ready-mix to other contractors?', 'Yes. We supply ready-mix to contractors who self-perform placement. Truck scheduling, mix design, and pricing discussed with the batch plant.'],
  ['What floor flatness specifications can you achieve?', 'We routinely achieve FF35/FL25 on warehouse and distribution floors. Laser-screed and superflat work to higher F-numbers available on specific projects.'],
];

export default function CommercialConcreteContractorToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · COMMERCIAL
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 52 : 110, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            COMMERCIAL<br />CONCRETE<br /><span style={{ color: ACCENT }}>CONTRACTOR.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            Industrial floors, parking lots, tilt-up structures, concrete supply. YYZ operates as a commercial concrete subcontractor and ready-mix supplier across Toronto and the GTA.
          </p>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12 }}>
            <a href="#quote" style={{ padding: '16px 28px', background: ACCENT, color: '#0a0a0a', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              Get a Commercial Quote →
            </a>
            <a href="tel:6474651114" style={{ padding: '16px 28px', background: 'transparent', color: '#f0eee9', border: '2px solid rgba(240,238,233,0.5)', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              (647) 465-1114
            </a>
          </div>
        </div>
      </section>

      <AuthorCard topic="commercial concrete contracting, industrial floors & parking structures" />

      {/* ── Services ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / COMMERCIAL SERVICES</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Industrial floors.<br />Parking lots.<br />Structural.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {SERVICES.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < SERVICES.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 24 : 30, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sectors ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / SECTORS SERVED</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>Retail. Industrial.<br />Automotive. Municipal.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 0, border: '1px solid rgba(240,238,233,0.12)' }}>
            {SECTORS.map(({ label, specs }, i) => (
              <div key={label} style={{
                padding: mobile ? '20px 16px' : '32px 28px',
                borderRight: (mobile ? i % 2 === 0 : i < 3) ? '1px solid rgba(240,238,233,0.12)' : 'none',
              }}>
                <h3 className="va-disp" style={{ fontSize: mobile ? 18 : 22, margin: '0 0 14px', color: '#f0eee9' }}>{label}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {specs.map((s) => (
                    <li key={s} className="va-body" style={{ fontSize: 13, padding: '6px 0', borderTop: '1px solid rgba(240,238,233,0.08)', color: 'rgba(240,238,233,0.6)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: ACCENT, fontWeight: 700 }}>→</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why YYZ ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / WHY YYZ</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Why commercial<br />contractors choose us.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {WHY.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < WHY.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <h3 className="va-disp" style={{ fontSize: mobile ? 22 : 28, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 04 / FAQ</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>Commercial FAQs.</h2>
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
            <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ COMMERCIAL QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Start your<br />commercial project.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Scope, location, timeline, and mix requirements. We respond within 4 business hours with availability and preliminary pricing.
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
