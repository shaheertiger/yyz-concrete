import QuoteForm from '../components/QuoteForm';
import VolumeCalc from '../components/VolumeCalc';
import AuthorCard from '../components/AuthorCard';
import SEOHead, { makeBreadcrumb, makeService, makeFAQ } from '../components/SEOHead';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const FAQS = [
  ['How thick should a concrete slab be for a garage in Toronto?', 'A residential garage slab should be a minimum of 4 inches (100 mm) thick on a properly compacted granular base. For heavier vehicles or if heavy equipment will be stored, 5 inches (125 mm) with rebar reinforcement is recommended. The base prep — typically 4–6 inches of compacted Granular A — matters as much as the slab thickness.'],
  ['How long does a concrete slab take to cure?', 'Concrete reaches about 70% of its design strength in 7 days and full strength at 28 days. You can walk on it after 24–48 hours, drive light vehicles after 7 days, and park heavy vehicles after 28 days. We apply curing compound immediately after finishing to retain moisture and optimize strength gain.'],
  ['How much does a concrete slab cost in Toronto?', 'Residential slabs (garage, shed, patio) typically run $12–$20 per square foot installed, including excavation, base, forming, pour, and finishing. Basement slabs run $8–$14 per sq ft depending on access and thickness. Commercial slabs with laser-screed and joint layout start around $15–$25 per sq ft. Get a firm quote based on your dimensions.'],
  ['What MPa concrete mix do I need for a residential slab?', 'Most residential exterior slabs (driveways, garage aprons, patios) require 32 MPa air-entrained concrete for freeze-thaw resistance. Interior garage slabs can use 25–32 MPa. Basement slabs are typically 25 MPa. Commercial and industrial floors are specified at 32–40 MPa per engineer. We supply and place the correct CSA-certified mix for each application.'],
  ['Can a concrete slab be poured in winter?', 'Yes — with proper cold-weather precautions. We use heated enclosures or insulated curing blankets below 5°C, hot water in the mix below freezing, and set-accelerating admixtures where appropriate. Pours are suspended below −10°C ambient. Cold-weather pours require additional planning time; call ahead so we can schedule correctly.'],
];

const SLAB_TYPES = [
  ['Garage Slab', 'Single, double, and detached garage slabs. Proper slope to floor drain. 32 MPa, rebar-reinforced, control-jointed.'],
  ['Shed Slab', 'Small accessory structure pads from 8×8 to 20×24. Formed and poured to code depth — no shortcuts on the base prep.'],
  ['Basement Slab', 'New pours for underpinned or excavated basements, crawl-space to full-height conversions, additions. Moisture barrier below.'],
  ['Patio Slab', 'Backyard and pool-surround slabs, broom or exposed finish, sloped for drainage. Any shape including curves and steps.'],
  ['Commercial Slab', 'Warehouse floors, distribution centres, automotive, retail. Laser-screed, fibre-reinforced, joint layout specified by engineer.'],
  ['Equipment Pad', 'HVAC pads, generator pads, transformer pads, dumpster pads — isolated or integrated into existing concrete.'],
];

const SPEC_DATA = [
  ['Residential (driveway, patio)', '4" (100 mm)', '20–32 MPa air-entrained', 'Fibre mesh or rebar grid'],
  ['Garage floor', '4–5" (100–125 mm)', '32 MPa air-entrained', 'Rebar #4 @ 18" o/c'],
  ['Basement slab', '3.5–4" (90–100 mm)', '25–32 MPa', 'Wire mesh or fibre'],
  ['Commercial floor', '5–8" (125–200 mm)', '32–40 MPa', 'Rebar per engineer'],
  ['Exterior commercial', '5–6" (125–150 mm)', '35 MPa air-entrained', 'Rebar per engineer'],
];

const PROCESS = [
  ['01', 'Excavation & Grade', 'Dig to required depth. Verify subgrade bearing capacity. Remove soft spots and import fill if needed.'],
  ['02', 'Base Preparation', '4–6" granular A placed and compacted in lifts. Plate compactor or roller for large areas. No skimping — it is the most important step.'],
  ['03', 'Vapour Barrier', '10-mil poly placed under all interior slabs. Lapped seams taped. Keeps ground moisture out of the concrete.'],
  ['04', 'Reinforcement', 'Rebar or fibre mesh placed to design — chairs or dobies keep steel at proper cover. No rebar sitting on the ground.'],
  ['05', 'Forming', 'Perimeter forms set level. Screed rails or laser for large pours. Control joint locations marked.'],
  ['06', 'Pour & Finish', 'Concrete placed, vibrated for consolidation, screed, bull-float, hand edge. Broom, trowel, or exposed aggregate finish applied.'],
  ['07', 'Joints & Cure', 'Control joints saw-cut or hand-tooled while plastic. Curing compound sprayed immediately. Protect for 7+ days.'],
];

export default function ConcreteSlabToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  const url = '/concrete-slab-toronto/';
  return (
    <>
      <SEOHead
        title="Concrete Slab Toronto | Garage, Shed, Basement & Commercial | YYZ Concrete"
        description="Concrete slab installation in Toronto — garage pads, shed slabs, basement pours, patios, and commercial floors. Properly formed, reinforced, and finished. Free quote."
        canonical={url}
        schemas={[
          makeService('Concrete Slab Toronto', 'Concrete slab installation in Toronto for garages, sheds, basements, patios, and commercial applications. Full base prep, reinforcement, and finishing.', url),
          makeBreadcrumb([{ name: 'Home', href: '/' }, { name: 'Concrete Slab Toronto', href: url }]),
          makeFAQ(FAQS),
        ]}
      />
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · SLABS
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 64 : 130, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            CONCRETE<br />SLAB<br /><span style={{ color: ACCENT }}>TORONTO.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            Garage slabs, shed slabs, basement pours, commercial floors. Formed, reinforced, and finished by crews who've been placing concrete across Toronto for 58 years.
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

      <AuthorCard topic="concrete slabs, garage pads, basement & commercial floor pours" />

      {/* ── Slab Types ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / SLAB TYPES</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Garage, shed,<br />basement, commercial.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {SLAB_TYPES.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < SLAB_TYPES.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 10 }}>0{i + 1}</div>
              <h3 className="va-disp" style={{ fontSize: mobile ? 26 : 32, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Spec Table ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / TYPICAL SPECIFICATIONS</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>Right spec<br />for each slab.</h2>
          <div style={{ border: '1px solid rgba(240,238,233,0.12)', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(240,238,233,0.12)' }}>
                  {['Application', 'Thickness', 'Mix Strength', 'Reinforcement'].map((h) => (
                    <th key={h} style={{ padding: mobile ? '14px 16px' : '18px 24px', textAlign: 'left' }}>
                      <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT }}>{h.toUpperCase()}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_DATA.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < SPEC_DATA.length - 1 ? '1px solid rgba(240,238,233,0.08)' : 'none' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: mobile ? '14px 16px' : '18px 24px' }}>
                        <span className="va-body" style={{ fontSize: 13, color: j === 0 ? '#f0eee9' : 'rgba(240,238,233,0.65)', fontWeight: j === 0 ? 600 : 400 }}>{cell}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Install Process ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / INSTALLATION</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>How we build<br />your slab.</h2>
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

      {/* ── Calculator ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 04 / CONCRETE CALCULATOR</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 20px', color: '#f0eee9' }}>How much concrete<br />for your slab?</h2>
          <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 32 }}>
            Enter your slab dimensions below. Waste factored in at 10%. Result in m³, yards, and truck count.
          </p>
          <VolumeCalc accent={ACCENT} dark />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: mobile ? 40 : 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ FREE QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Price your<br />slab today.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Tell us dimensions, application, and any access constraints. Quote back in under 2 hours.
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
