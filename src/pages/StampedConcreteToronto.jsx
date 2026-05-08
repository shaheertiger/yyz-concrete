import QuoteForm from '../components/QuoteForm';
import AuthorCard from '../components/AuthorCard';
import SEOHead, { makeBreadcrumb, makeService, makeFAQ } from '../components/SEOHead';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const FAQS = [
  ['How long does stamped concrete last?', 'Properly installed and sealed stamped concrete lasts 25–30 years or more. The key factors are adequate base preparation, correct mix design (32 MPa air-entrained for Toronto climate), control joint placement to manage cracking, and re-sealing every 2–5 years to protect colour and prevent freeze-thaw damage.'],
  ['How much does stamped concrete cost compared to plain concrete in Toronto?', 'Stamped concrete typically costs $18–$30 per square foot installed, compared to $12–$18 for broom-finish concrete. The premium covers the stamps, colour (integral or release), and additional finishing labour. Multi-pattern designs or two-tone colour work run toward the higher end. It is still less expensive than natural stone or interlocking brick.'],
  ['Is stamped concrete slippery when wet?', 'The texture of a properly stamped surface provides good grip — more than a trowel-finished slab. Pool surrounds and areas prone to water benefit from a medium-broom or anti-slip sealer to further enhance traction. Avoid high-gloss solvent-based sealers in wet areas; we use water-based sealers with a slip-resistant additive for pool decks and steps.'],
  ['How do I maintain stamped concrete?', 'Reseal every 2–5 years depending on traffic and UV exposure, or when water stops beading on the surface. Clean with a mild detergent and pressure washer at 1,500–2,000 PSI. Avoid calcium chloride or rock salt deicers — use sand or kitty litter for traction in winter. Chip sealer or repairs to small cracks should be done promptly before water infiltrates and freezes.'],
  ['Can stamped concrete be poured in the fall or winter in Toronto?', 'We can pour stamped concrete until temperatures are consistently below 5°C, typically November in Toronto. Cold-weather stamping is more difficult because working time is shortened and the finishing window changes. For best results and colour accuracy, the ideal season is May through October. Call us to assess scheduling for your project.'],
];

const PATTERNS = [
  ['Ashlar Slate', 'Random rectangular pattern mimicking natural slate. The most popular stamped pattern in Toronto for driveways and patios.'],
  ['Cobblestone', 'Rounded stone look reminiscent of historic European streetscapes. Well suited to front entrances and pathway borders.'],
  ['Herringbone Brick', 'Classic interlocking brick pattern. Timeless and works with any home style from Victorian to modern.'],
  ['Flagstone', 'Irregular, natural-looking stone pattern. Ideal for patios and pool decks where organic aesthetics are desired.'],
  ['Wood Plank', 'Realistic wood grain texture with plank layout. Increasingly popular for covered patios and outdoor living spaces.'],
  ['Custom Borders', 'Contrasting pattern or colour borders around the perimeter or integrated into the main field for added visual interest.'],
];

const APPLICATIONS = [
  { title: 'Stamped Concrete Driveway', desc: 'Most impactful curb appeal upgrade available in concrete. Ashlar, cobblestone, or brick patterns with integral or release colour. Properly sealed for deicer resistance.' },
  { title: 'Stamped Concrete Patio', desc: 'Custom-shaped backyard slabs with pattern and colour. Pool surrounds, outdoor kitchen pads, firepit areas — finished to coordinate with your landscaping.' },
  { title: 'Walkways & Steps', desc: 'Coordinated patterns from driveway to front door. Steps with stamped risers and treads, landing slabs, and pathway panels in matching finish.' },
  { title: 'Pool Surrounds', desc: 'Slip-resistant texture is built into the stamped finish. Integral colour avoids painted surfaces that peel. Slopes properly for drainage away from pool coping.' },
];

const PROCESS = [
  ['01', 'Design Consultation', 'Pattern, colour, and border selection. We show samples and mock-ups before committing.'],
  ['02', 'Base & Forms', 'Proper granular base compacted. Forms set to final grade with drainage slope considered.'],
  ['03', 'Concrete Pour', '32 MPa air-entrained with integral colour mixed into the batch. Placed and screeded.'],
  ['04', 'Colour Release', 'Release agent (powder or liquid) applied to surface before stamping. Adds highlighting to pattern.'],
  ['05', 'Stamping', 'Pattern stamps pressed into fresh concrete in sequence. Borders done with appropriate border tools.'],
  ['06', 'Sawcuts & Cure', 'Control joints cut or tooled while plastic. Curing compound applied immediately after stamping.'],
  ['07', 'Sealing', 'Penetrating or film-forming sealer applied at 28 days. Essential for stamped concrete longevity.'],
];

const CARE = [
  ['Sealing', 'Reseal every 2–3 years with a quality acrylic or polyurethane sealer. This is the single most important maintenance step.'],
  ['Winter Care', 'Avoid chloride-based deicers (rock salt). Use sand for traction or magnesium/calcium chloride formulations that are concrete-safe.'],
  ['Cleaning', 'Rinse with garden hose regularly. Pressure wash at low-medium pressure annually. Avoid harsh cleaners.'],
  ['Repairs', 'Stamp patterns can be matched for small crack repairs. Colour blending is required — always test in an inconspicuous area first.'],
];

export default function StampedConcreteToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  const url = '/stamped-concrete-toronto/';
  return (
    <>
      <SEOHead
        title="Stamped Concrete Toronto | Driveways, Patios & Pool Surrounds | YYZ Concrete"
        description="Stamped concrete in Toronto — driveways, patios, walkways, and pool surrounds. Custom patterns, integral colour, professionally sealed. Free estimate from YYZ Concrete."
        canonical={url}
        schemas={[
          makeService('Stamped Concrete Toronto', 'Decorative stamped concrete installation in Toronto for driveways, patios, walkways, and pool surrounds. Custom patterns and integral colour.', url),
          makeBreadcrumb([{ name: 'Home', href: '/' }, { name: 'Stamped Concrete Toronto', href: url }]),
          makeFAQ(FAQS),
        ]}
      />
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · DECORATIVE
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 60 : 120, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            STAMPED<br />CONCRETE<br /><span style={{ color: ACCENT }}>TORONTO.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            Decorative stamped concrete for driveways, patios, walkways, and pool surrounds. Custom patterns, integral colour, and proper sealing — installed by experienced finishers across Toronto and the GTA.
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

      <AuthorCard topic="stamped & decorative concrete, patio and driveway finishes" />

      {/* ── Applications ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / APPLICATIONS</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Driveways, patios,<br />walkways, pools.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {APPLICATIONS.map(({ title, desc }, i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '36px 40px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < APPLICATIONS.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 26 : 32, margin: '0 0 12px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Patterns ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / POPULAR PATTERNS</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>Patterns & finishes.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: '1px solid rgba(240,238,233,0.12)' }}>
            {PATTERNS.map(([title, desc], i) => (
              <div key={title} style={{
                padding: mobile ? '24px 20px' : '28px 32px',
                borderRight: (!mobile && i % 3 < 2) ? '1px solid rgba(240,238,233,0.12)' : 'none',
                borderBottom: (mobile ? i < PATTERNS.length - 1 : i < 3) ? '1px solid rgba(240,238,233,0.12)' : 'none',
              }}>
                <h3 className="va-disp" style={{ fontSize: mobile ? 22 : 26, margin: '0 0 10px', color: '#f0eee9' }}>{title}</h3>
                <p className="va-body" style={{ fontSize: 13, color: 'rgba(240,238,233,0.6)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p className="va-body" style={{ fontSize: 14, color: 'rgba(240,238,233,0.5)', marginTop: 20, lineHeight: 1.6 }}>
            Colour options include standard greys and tans through to custom integral colour batches. Release colours add contrasting highlights to pattern recesses.
          </p>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / INSTALLATION PROCESS</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>How it's done.</h2>
        <div style={{ border: `1px solid ${BORDER}` }}>
          {PROCESS.map(([num, title, desc], i) => (
            <div key={num} style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '80px 240px 1fr', gap: mobile ? 8 : 0, padding: mobile ? '24px 20px' : '28px 36px', borderBottom: i < PROCESS.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'start' }}>
              <div className="va-disp" style={{ fontSize: 40, color: ACCENT, lineHeight: 1 }}>{num}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 22 : 28, margin: 0, paddingRight: mobile ? 0 : 24 }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Care & Maintenance ── */}
      <section style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 04 / CARE & MAINTENANCE</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Lasts 30 years<br />with proper care.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
            {CARE.map(([title, desc], i) => (
              <div key={title} style={{
                padding: mobile ? '24px 20px' : '32px 36px',
                borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
                borderBottom: (i < CARE.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
              }}>
                <h3 className="va-disp" style={{ fontSize: mobile ? 24 : 30, margin: '0 0 10px' }}>{title}</h3>
                <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
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
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Design your<br />stamped project.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Tell us the area, pattern preference, and location. We'll come back with pattern samples, colour options, and a firm price.
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
