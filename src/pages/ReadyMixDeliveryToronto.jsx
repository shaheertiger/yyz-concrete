import QuoteForm from '../components/QuoteForm';
import VolumeCalc from '../components/VolumeCalc';
import ServiceMap from '../components/ServiceMap';
import AuthorCard from '../components/AuthorCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, CONTACTS } from '../constants';

const MIXES = [
  ['15 MPa', 'Lightly loaded slabs, fill concrete, non-structural applications.'],
  ['20 MPa', 'Standard residential — driveways, patios, garage floors, foundations.'],
  ['25 MPa', 'Heavier residential loads, lightly loaded commercial slabs.'],
  ['32 MPa', 'Commercial floors, structural slabs, parking decks. Air-entrained for exterior.'],
  ['35 MPa', 'High-strength commercial and industrial — distribution centres, heavy loads.'],
  ['40–50 MPa', "Engineered structural applications, columns, precast elements. Engineer's spec."],
];

const APPLICATIONS = [
  ['Slabs & Footings', 'Basement slabs, garage floors, grade beams, isolated footings — any residential or commercial slab application.'],
  ['Driveways', 'Air-entrained 32 MPa standard for exposed driveways. Delivered and ready for your finishers.'],
  ['Curbs & Sidewalks', 'Municipal standard mixes for curb, gutter, and sidewalk placements. We supply to city contractors and homeowners.'],
  ['Structural', 'High-strength mixes for columns, beams, and engineered elements. Certified delivery tickets and batch reports available.'],
];

const HOW_TO_ORDER = [
  ['01', 'Estimate your volume', 'Use our calculator or call the desk. We factor in waste — usually 10% for slabs.'],
  ['02', 'Tell us the mix', "Residential driveway? 32 MPa air. Garage slab? 25 or 32 MPa. Not sure? We'll advise."],
  ['03', 'Give us the site address', 'We confirm access for the mixer — low wires, tight lanes, soft ground all affect which truck we send.'],
  ['04', 'Set the pour time', 'Same-day on most GTA orders before 10 AM. Next-day for anything outside standard hours.'],
];

const DELIVERY_AREAS = [
  'Toronto', 'Etobicoke', 'North York', 'Scarborough', 'Mississauga',
  'Brampton', 'Vaughan', 'Markham', 'Richmond Hill', 'Oakville',
  'Burlington', 'Ajax', 'Pickering', 'Newmarket', 'Aurora',
];

const FAQS = [
  ['How much concrete do I need?', 'Multiply length × width × thickness (in metres) to get cubic metres. A 4" slab is 0.1 m thick. Add 10% for waste. Our calculator on the home page does this automatically.'],
  ['What is the minimum order?', 'Our mixers hold up to 9 m³. We deliver partial loads — there may be a short-load fee for loads under a threshold. Call the desk for current minimums.'],
  ['Can I get same-day delivery?', 'Yes, on most GTA addresses if you call before 10 AM. We dispatch same-day on 90% of orders received before the cutoff.'],
  ['Do you supply to homeowners or only contractors?', "Both. Homeowners ordering concrete for DIY projects are welcome. Tell us your finisher is on-site and ready — concrete won't wait."],
  ['What strength concrete do I need for a driveway?', '32 MPa air-entrained is the Toronto standard for driveways exposed to freeze-thaw and deicers. Not 20 MPa — the air entrainment matters.'],
  ['Do you offer fibre-reinforced concrete?', 'Yes. Polypropylene or steel fibre added to the mix at the plant. Common for industrial floors, slab-on-grade, and anywhere rebar placement is difficult.'],
];

export default function ReadyMixDeliveryToronto() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: '#0a0a0a', padding: `${mobile ? '60px' : '100px'} ${p}`, borderBottom: `2px solid ${ACCENT}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 16 }}>
            ◆ YYZ CONCRETE · READY-MIX DELIVERY
          </div>
          <h1 className="va-disp" style={{ fontSize: mobile ? 56 : 120, margin: '0 0 24px', color: '#f0eee9', lineHeight: 0.92 }}>
            READY-MIX<br />CONCRETE<br /><span style={{ color: ACCENT }}>DELIVERY.</span>
          </h1>
          <p className="va-body" style={{ fontSize: mobile ? 16 : 20, color: 'rgba(240,238,233,0.75)', maxWidth: 600, lineHeight: 1.6, margin: '0 0 36px' }}>
            CSA-certified ready-mix concrete delivered across Toronto and the GTA from our Etobicoke plant. 15–50 MPa. Same-day dispatch on 90% of orders. Residential, commercial, municipal, and industrial supply.
          </p>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12 }}>
            <a href="#quote" style={{ padding: '16px 28px', background: ACCENT, color: '#0a0a0a', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              Order Concrete →
            </a>
            <a href="tel:6474651114" style={{ padding: '16px 28px', background: 'transparent', color: '#f0eee9', border: '2px solid rgba(240,238,233,0.5)', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              Call Dispatch: (647) 465-1114
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, auto)', gap: mobile ? 16 : 40, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(240,238,233,0.15)' }}>
            {[['Same-day', 'Dispatch 90% of orders'], ['15–50 MPa', 'Full strength range'], ['9 m³', 'Per mixer load'], ['GTA-wide', 'All Toronto areas']].map(([n, l]) => (
              <div key={n}>
                <div className="va-disp" style={{ fontSize: mobile ? 28 : 40, color: ACCENT, lineHeight: 1 }}>{n}</div>
                <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(240,238,233,0.6)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthorCard topic="ready-mix concrete delivery, batch plant operations & concrete supply" />

      {/* ── Delivery Overview ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 01 / READY-MIX DELIVERY</div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80, alignItems: 'start' }}>
          <div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Mixed fresh.<br />Delivered direct.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.7 }}>
              Ready-mix concrete is batched at our Etobicoke plant and delivered in rotating drum mixers that keep the concrete agitating during transit. Every load arrives fresh, at the design slump, with a CSA-compliant delivery ticket. Onsite slump tests available on request.
            </p>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginTop: 16 }}>
              We serve residential homeowners ordering a few cubic metres for a driveway repair, and commercial contractors ordering 50+ loads for a slab pour. Same plant, same mix quality, same fleet.
            </p>
          </div>
          <div style={{ border: `1px solid ${BORDER}`, padding: mobile ? '24px 20px' : '36px' }}>
            <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, marginBottom: 16 }}>DELIVERY SPECS</div>
            {[
              ['Plant Location', 'Etobicoke — 200 Rexdale Blvd'],
              ['Mixer Capacity', 'Up to 9 m³ per truck'],
              ['Fleet Size', '60 mixer trucks + pumps'],
              ['Dispatch', 'Same-day cutoff 10 AM'],
              ['Delivery Ticket', 'CSA A23.1 compliant — time, batch, mix design'],
              ['Slump Test', 'Available onsite on request'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${BORDER}`, gap: 16 }}>
                <span className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: MUTED, textTransform: 'uppercase' }}>{k}</span>
                <span className="va-body" style={{ fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mix Strengths ── */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 02 / MIX STRENGTHS</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px', color: '#f0eee9' }}>15 to 50 MPa.<br />All in stock.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: '1px solid rgba(240,238,233,0.12)' }}>
            {MIXES.map(([strength, desc], i) => (
              <div key={strength} style={{
                padding: mobile ? '24px 20px' : '28px 32px',
                borderRight: (!mobile && i % 3 < 2) ? '1px solid rgba(240,238,233,0.12)' : 'none',
                borderBottom: (mobile ? i < MIXES.length - 1 : i < 3) ? '1px solid rgba(240,238,233,0.12)' : 'none',
              }}>
                <div className="va-disp" style={{ fontSize: mobile ? 32 : 44, color: ACCENT, margin: '0 0 8px', lineHeight: 1 }}>{strength}</div>
                <p className="va-body" style={{ fontSize: 13, color: 'rgba(240,238,233,0.6)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 03 / APPLICATIONS</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Slabs, footings,<br />curbs, driveways.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: 0, border: `1px solid ${BORDER}` }}>
          {APPLICATIONS.map(([title, desc], i) => (
            <div key={title} style={{
              padding: mobile ? '24px 20px' : '32px 36px',
              borderRight: (!mobile && i % 2 === 0) ? `1px solid ${BORDER}` : 'none',
              borderBottom: (i < APPLICATIONS.length - (mobile ? 1 : 2)) ? `1px solid ${BORDER}` : 'none',
            }}>
              <h3 className="va-disp" style={{ fontSize: mobile ? 26 : 32, margin: '0 0 10px' }}>{title}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Delivery Areas ── */}
      <section style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 04 / DELIVERY AREAS</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 32px' }}>GTA-wide delivery.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, border: `1px solid ${BORDER}`, marginBottom: 24 }}>
            {DELIVERY_AREAS.map((area) => (
              <div key={area} style={{ padding: '14px 24px', borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
                <span className="va-body" style={{ fontSize: 15, fontWeight: 600 }}>{area}</span>
              </div>
            ))}
          </div>
          <ServiceMap accent={ACCENT} />
        </div>
      </section>

      {/* ── How to Order ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 05 / HOW TO ORDER</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Four steps<br />to your pour.</h2>
        <div style={{ border: `1px solid ${BORDER}` }}>
          {HOW_TO_ORDER.map(([num, title, desc], i) => (
            <div key={num} style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '80px 280px 1fr', gap: mobile ? 8 : 0, padding: mobile ? '24px 20px' : '28px 36px', borderBottom: i < HOW_TO_ORDER.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'start' }}>
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
          <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 06 / CONCRETE CALCULATOR</div>
          <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 20px', color: '#f0eee9' }}>How much do<br />you need?</h2>
          <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 32 }}>
            Enter dimensions below. Waste factored in. Result in cubic metres, cubic yards, and truck count.
          </p>
          <VolumeCalc accent={ACCENT} dark />
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}` }}>
        <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ 07 / FAQ</div>
        <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 80, margin: '0 0 40px' }}>Common questions.</h2>
        <div style={{ border: `1px solid ${BORDER}` }}>
          {FAQS.map(([q, a], i) => (
            <div key={i} style={{ padding: mobile ? '24px 20px' : '28px 36px', borderBottom: i < FAQS.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
              <h3 className="va-disp" style={{ fontSize: mobile ? 20 : 26, margin: '0 0 10px' }}>{q}</h3>
              <p className="va-body" style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: `${mobile ? '60px' : '100px'} ${p}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '0.9fr 1.1fr', gap: mobile ? 40 : 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: ACCENT, marginBottom: 14 }}>◆ ORDER CONCRETE</div>
            <h2 className="va-disp" style={{ fontSize: mobile ? 48 : 72, margin: '0 0 20px' }}>Order your<br />delivery.</h2>
            <p className="va-body" style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, marginBottom: 28 }}>
              Volume, mix, address, and pour time. We'll confirm availability and dispatch in under 2 hours during business hours.
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
