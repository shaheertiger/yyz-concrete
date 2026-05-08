import QuoteForm from '../components/QuoteForm';
import AuthorCard from '../components/AuthorCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const RESIDENTIAL = [
  ['Driveways', 'Broom finish, exposed aggregate, or stamped. Properly graded and drained.'],
  ['Patios & Slabs', 'Pool surrounds, backyard slabs, garage pads — any size, any finish.'],
  ['Steps & Walkways', 'Front entry steps, pathway slabs, curb repairs. Code-compliant and safe.'],
  ['Foundations', 'Basement footings, garage foundations, addition pads — formed and poured to spec.'],
];

const COMMERCIAL = [
  ['Parking Lots', 'Heavy-duty slabs for commercial vehicles, properly reinforced with rebar or fibre.'],
  ['Warehouse Floors', 'Flat, joint-free industrial floors with laser-screed finish, minimum F-numbers on request.'],
  ['Curbs & Gutters', 'Poured-in-place or precast curb and gutter — municipal and private.'],
  ['Concrete Repairs', 'Spall repair, joint sealing, overlay systems — extend slab life without full replacement.'],
];

const PROCESS = [
  ['01', 'Site Assessment', 'We walk the job, check grades, drainage, and access before pricing.'],
  ['02', 'Mix Design', 'Right MPa for the application — 20 MPa residential, 32–35 MPa commercial, air-entrained for exposed slabs.'],
  ['03', 'Formwork & Base', 'Formed tight and set level. Gravel base compacted. Reinforcement placed.'],
  ['04', 'Pour & Finish', 'Concrete placed, screed, bull-float, hand-float, and finished to spec.'],
  ['05', 'Cure & Strip', 'Proper curing compound applied. Forms stripped after strength gain. Site cleaned.'],
];

const AREAS = ['Toronto', 'Etobicoke', 'North York', 'Scarborough', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 'Oakville', 'Burlington'];

const FAQS = [
  ['How long does concrete take to cure?', 'Concrete reaches 70% of design strength in 7 days and full strength at 28 days. You can walk on it in 24–48 hours and drive on it in 7 days.'],
  ['What is the difference between concrete and cement?', 'Cement is an ingredient in concrete. Concrete is the finished product — a mix of cement, aggregates (gravel and sand), and water.'],
  ['Do you pull permits?', 'Yes. For work that requires a permit (driveway aprons, structural pads), we handle the paperwork.'],
  ['Can you match existing concrete?', 'We can match mix design and finish closely, though weathered existing concrete will always look different from fresh.'],
  ['How much does a concrete driveway cost in Toronto?', 'Most residential driveways run $8–$14 per square foot depending on finish, access, and site conditions. We provide firm quotes after a site visit.'],
  ['Do you offer warranties?', 'Yes. We warranty our work against defects in materials and placement. Hairline shrinkage cracks are normal and not covered; structural failures are.'],
];

export default function ConcreteContractorToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · TORONTO
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 64 : 130, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            CONCRETE<br />CONTRACTOR<br /><span style={{ color: ACCENT }}>TORONTO.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            YYZ Concrete is a licensed concrete contractor serving Toronto and the GTA. Residential driveways, commercial slabs, concrete repair — placed right, finished right, on your schedule.
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

      <AuthorCard topic="concrete contracting, residential & commercial concrete services" />

      {/* ── What we do ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / WHAT WE DO</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 24px' }}>Concrete services<br />Toronto trusts.</h2>
        <p className="va-body" style={{ fontSize: 16, color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
          From a single driveway to a multi-bay commercial pour, YYZ handles the full scope. We self-perform all concrete work — no subcontracting — with our own crews and our own ready-mix supply from our Etobicoke plant.
        </p>
      </section>

      {/* ── Residential ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / RESIDENTIAL CONCRETE</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>For homeowners.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: '1px solid rgba(240,238,233,0.12)' }}>
            {RESIDENTIAL.map(([title, desc], i) => (
              <div key={title} style={{
                padding: mobile ? '24px 20px' : '32px 36px',
                borderRight: (!mobile && i % 2 === 0) ? '1px solid rgba(240,238,233,0.12)' : 'none',
                borderBottom: (i < RESIDENTIAL.length - (mobile ? 1 : 2)) ? '1px solid rgba(240,238,233,0.12)' : 'none',
              }}>
                <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
                <h3 className="va-disp" style={{ fontSize: mobile ? 26 : 32, margin: '0 0 10px', color: '#f0eee9' }}>{title}</h3>
                <p className="va-body" style={{ fontSize: 14, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / COMMERCIAL CONCRETE</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>For businesses.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {COMMERCIAL.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < COMMERCIAL.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 26 : 32, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Process ── */}
      <section style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 04 / OUR PROCESS</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>How we work.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: `1px solid ${BORDER}` }}>
            {PROCESS.map(([num, title, desc], i) => (
              <div key={num} style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '80px 240px 1fr', gap: mobile ? 8 : 0, padding: mobile ? '24px 20px' : '28px 36px', borderBottom: i < PROCESS.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'start' }}>
                <div className="va-disp" style={{ fontSize: 40, color: ACCENT, lineHeight: 1 }}>{num}</div>
                <h3 className="va-disp" style={{ fontSize: mobile ? 22 : 28, margin: 0, paddingRight: mobile ? 0 : 24 }}>{title}</h3>
                <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas Served ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 05 / AREAS SERVED</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 32px' }}>Toronto & GTA.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: `1px solid ${BORDER}` }}>
          {AREAS.map((area, i) => (
            <div key={area} style={{ padding: '14px 24px', borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
              <span className="va-body" style={{ fontSize: 15, fontWeight: 600 }}>{area}</span>
            </div>
          ))}
        </div>
        <p className="va-body" style={{ fontSize: 14, color: MUTED, marginTop: 16, lineHeight: 1.6 }}>
          Operating out of our Etobicoke plant at 200 Rexdale Blvd. Same-day and next-day service across the GTA.
        </p>
      </section>

      {/* ── FAQs ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 06 / FAQ</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>Common questions.</h2>
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
            <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 07 / FREE QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 20px' }}>Get a quote<br />today.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Tell us about your project and we'll respond within 2 business hours with a firm price — no runaround.
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
