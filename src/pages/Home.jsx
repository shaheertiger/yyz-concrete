import VolumeCalc from '../components/VolumeCalc';
import FleetCarousel from '../components/FleetCarousel';
import ServiceMap from '../components/ServiceMap';
import QuoteForm from '../components/QuoteForm';
import SEOHead, { makeFAQ } from '../components/SEOHead';
import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER, NOISE, IMAGES, CONTACTS, SERVICES, STATS } from '../constants';

const HOME_FAQS = [
  ['What areas does YYZ Concrete serve?', 'YYZ Concrete delivers ready-mix concrete across the entire Greater Toronto Area from our Etobicoke plant at 200 Rexdale Blvd. We regularly serve Toronto, Etobicoke, Mississauga, Brampton, Vaughan, North York, Scarborough, Markham, and Oakville. Same-day delivery is available on 90% of orders within this area.'],
  ['How quickly can I get concrete delivered?', 'We dispatch same-day on 90% of orders placed before 10 AM. For next-day delivery, we can typically accommodate orders placed the afternoon before. Rush orders and weekend deliveries are available — call dispatch at (647) 465-1114 for availability.'],
  ['What concrete mixes do you offer?', 'We supply CSA-certified mixes from 15 to 50 MPa including standard air-entrained, high-early-strength, fibre-reinforced, integral-colour, low-carbon LEED-spec, and flowable fill. All mixes are batched at our Etobicoke plant and delivered in our 60-truck fleet.'],
  ['Do you offer concrete pumping?', 'Yes. We provide boom pump and line pump services for pours that are not accessible by chute — basements, high floors, pools, and difficult backyard access. Pump booking is coordinated at time of order.'],
  ['How do I get a quote from YYZ Concrete?', 'Call us at (647) 465-1114, email info@yyzconcrete.com, or fill in the quote form on this page. We typically respond within 2 hours during business hours. Have your pour location, approximate volume, and desired mix strength ready for the fastest quote.'],
];

export default function Home() {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <>
      <SEOHead
        title="YYZ Concrete | Ready-Mix Concrete Delivery Toronto & GTA"
        description="YYZ Concrete delivers ready-mix concrete across Toronto & GTA from our Etobicoke plant. Same-day dispatch on 90% of orders. Free estimates. Call (647) 465-1114."
        canonical="/"
        schemas={[makeFAQ(HOME_FAQS)]}
      />
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
            ◆ <span style={{ fontWeight: 900 }}>READY-MIX</span> · PUMPING · VOLUMETRIC
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
              <a href="#calculator" style={{
                padding: mobile ? '16px 20px' : '18px 28px', background: 'transparent', color: ACCENT,
                border: `2px solid ${ACCENT}`, fontFamily: 'inherit', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                textDecoration: 'none', display: 'block', textAlign: 'center',
              }}>
                Concrete Calculator →
              </a>
            </div>
          </div>
        </div>

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
    </>
  );
}
