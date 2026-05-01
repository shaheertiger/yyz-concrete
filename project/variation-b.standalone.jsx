// Variation B — Bold typographic. Image as supporting element, type-driven
// hero with massive sans-serif, more grid-driven editorial layout. Same
// content, different visual hierarchy.

function VariationB({ accent = '#FF6A00' }) {
  const fg = '#0a0a0a';
  const bg = '#ebe8e1';
  const muted = 'rgba(10,10,10,0.55)';
  const border = 'rgba(10,10,10,0.14)';

  return (
    <div style={{ background: bg, color: fg, fontFamily: '"Archivo", "Helvetica Neue", Helvetica, sans-serif', minHeight: '100%', overflow: 'hidden' }}>
      <style>{`
        /* fonts loaded via head <link> in standalone build */
        .vb-mono { font-family: "IBM Plex Mono", ui-monospace, monospace; }
        .vb-black { font-family: "Archivo Black", "Archivo", sans-serif; font-weight: 900; letter-spacing: -0.04em; line-height: 0.86; }
        .vb-marquee { display: flex; animation: vb-scroll 40s linear infinite; }
        @keyframes vb-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .vb-link::after { content: ' →'; opacity: 0; transition: all .25s; margin-left: 0; }
        .vb-link:hover::after { opacity: 1; margin-left: 4px; }
      `}</style>

      {/* Top bar */}
      <div className="vb-mono" style={{ background: fg, color: bg, fontSize: 11, padding: '10px 40px', display: 'flex', justifyContent: 'space-between', letterSpacing: '0.05em', fontWeight: 500 }}>
        <span>43.6532° N · 79.3832° W · GREATER TORONTO AREA</span>
        <span style={{ display: 'flex', gap: 32 }}>
          <span>DISPATCH 416.555.7000</span>
          <span>QUOTES @ YYZCONCRETE.CA</span>
        </span>
      </div>

      {/* Header */}
      <header style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 48, padding: '24px 40px', borderBottom: `1px solid ${border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <rect width="36" height="36" fill={fg} />
            <text x="18" y="24" fontSize="16" fontWeight="900" fontFamily="Archivo Black, sans-serif" fill={accent} textAnchor="middle">Y</text>
          </svg>
          <span className="vb-black" style={{ fontSize: 22 }}>YYZ/CONCRETE</span>
        </div>
        <nav style={{ display: 'flex', gap: 36, justifyContent: 'center', fontSize: 13, fontWeight: 600 }}>
          {['Services', 'Fleet', 'Calculator', 'Yards', 'News', 'Contact'].map((x) => (
            <a key={x} href="#" className="vb-link" style={{ color: fg, textDecoration: 'none' }}>{x}</a>
          ))}
        </nav>
        <button style={{ padding: '14px 24px', background: fg, color: bg, border: 'none', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>
          Get a Quote
        </button>
      </header>

      {/* HERO — type-led grid */}
      <section style={{ padding: '64px 40px 0', position: 'relative' }}>
        <div className="vb-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: muted, letterSpacing: '0.1em', marginBottom: 32, fontWeight: 600, textTransform: 'uppercase' }}>
          <span>Issue 058 — Spring 2026</span>
          <span>Pouring concrete in the GTA since 1968</span>
          <span>Documented</span>
        </div>

        <h1 className="vb-black" style={{ fontSize: 'clamp(120px, 14vw, 240px)', margin: 0, color: fg }}>
          Mix.<br />Pour.<br />Cure.<br /><span style={{ background: accent, padding: '0 0.06em', display: 'inline-block' }}>Repeat.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 48, marginTop: 56, paddingTop: 40, borderTop: `1px solid ${border}` }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, color: muted, letterSpacing: '0.15em', marginBottom: 12, fontWeight: 600 }}>WHAT WE DO</div>
            <p style={{ fontSize: 22, lineHeight: 1.3, fontWeight: 500, margin: 0, letterSpacing: '-0.01em' }}>
              YYZ Concrete delivers ready-mix, pumping, and volumetric service across the Greater Toronto Area — from backyard slabs to high-rise pours. <span style={{ color: muted }}>Built for contractors who run on a clock, not a calendar.</span>
            </p>
          </div>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, color: muted, letterSpacing: '0.15em', marginBottom: 12, fontWeight: 600 }}>SERVICE PROMISE</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, fontWeight: 500 }}>
              {[
                'Same-day delivery on 90% of orders',
                'Quotes returned in under 2 hours',
                'CSA A23.1 / A23.2 certified',
                'Owned fleet, employed operators',
              ].map((x) => (
                <li key={x} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', padding: '10px 0', borderBottom: `1px solid ${border}` }}>
                  <span style={{ color: accent, fontWeight: 800 }}>+</span><span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button style={{ padding: '20px 24px', background: accent, color: fg, border: 'none', fontFamily: 'inherit', fontSize: 14, fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Order concrete</span><span>→</span>
            </button>
            <button style={{ padding: '20px 24px', background: fg, color: bg, border: 'none', fontFamily: 'inherit', fontSize: 14, fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Calculate volume</span><span>→</span>
            </button>
            <button style={{ padding: '20px 24px', background: 'transparent', color: fg, border: `2px solid ${fg}`, fontFamily: 'inherit', fontSize: 14, fontWeight: 800, letterSpacing: '0.05em', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Talk to dispatch</span><span>→</span>
            </button>
          </div>
        </div>

        {/* Image strip below hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, marginTop: 56 }}>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
            <img src={window.__resources.imgMixer} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="vb-mono" style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 8px', background: bg, color: fg, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em' }}>FIG. 01 · MIXER M-09</div>
          </div>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
            <img src={window.__resources.imgPump} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="vb-mono" style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 8px', background: bg, color: fg, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em' }}>FIG. 02 · BOOM PUMP</div>
          </div>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
            <img src={window.__resources.imgSlab} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="vb-mono" style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 8px', background: bg, color: fg, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em' }}>FIG. 03 · SLAB POUR</div>
          </div>
        </div>
      </section>

      {/* MARQUEE strip */}
      <div style={{ background: accent, padding: '24px 0', overflow: 'hidden', marginTop: 80, borderTop: `2px solid ${fg}`, borderBottom: `2px solid ${fg}` }}>
        <div className="vb-marquee vb-black" style={{ fontSize: 56, color: fg, whiteSpace: 'nowrap', gap: 48 }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ paddingRight: 48 }}>READY-MIX · PUMPING · VOLUMETRIC · 60-TRUCK FLEET · 4 GTA PLANTS · CSA CERTIFIED · SAME-DAY DELIVERY · </span>
          ))}
        </div>
      </div>

      {/* SERVICES — editorial list */}
      <section style={{ padding: '120px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 60, marginBottom: 48 }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: muted, marginBottom: 12 }}>§01 SERVICES</div>
            <h2 className="vb-black" style={{ fontSize: 64, margin: 0 }}>Spec sheet.</h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 500, margin: 0, maxWidth: 640, color: muted }}>
            Three core services. CSA-certified mixes from 15 to 50 MPa. Specialty placements, integral colour, fibre-reinforced, low-carbon LEED-spec.
          </p>
        </div>

        <div style={{ borderTop: `2px solid ${fg}` }}>
          {[
            { n: '01', title: 'Ready-Mix Delivery', desc: 'Workhorse service. Standard mixes, custom designs, same-day dispatch from any of four plants.', specs: '15–50 MPa · 9 m³ standard · 4 m³ mini' },
            { n: '02', title: 'Concrete Pumping', desc: 'High-rise, deep foundation, complex placement. 32 m and 38 m boom pumps; line pumps to 200 metres.', specs: '32m · 38m boom · Line pump · Z-fold' },
            { n: '03', title: 'Volumetric / Mix-On-Site', desc: 'Mix-on-demand for staggered or small pours. Variable PSI from one truck. No short-load fees.', specs: '4–10 m³ · Variable PSI · No short-load' },
          ].map((s) => (
            <a key={s.n} href="#" style={{ display: 'grid', gridTemplateColumns: '80px 1fr 2fr 1.4fr 60px', gap: 32, padding: '36px 0', borderBottom: `1px solid ${border}`, alignItems: 'baseline', textDecoration: 'none', color: fg, transition: 'background .2s', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(10,10,10,0.03)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <span className="vb-mono" style={{ fontSize: 14, fontWeight: 700, color: muted }}>{s.n} /</span>
              <h3 className="vb-black" style={{ fontSize: 40, margin: 0 }}>{s.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: muted, margin: 0 }}>{s.desc}</p>
              <span className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: fg }}>{s.specs}</span>
              <span style={{ fontSize: 24, textAlign: 'right' }}>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ background: fg, color: bg, padding: '120px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: accent, marginBottom: 12 }}>§02 CALCULATOR</div>
            <h2 className="vb-black" style={{ fontSize: 88, margin: 0, color: bg }}>How<br />much<br />/concrete?</h2>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: 'rgba(235,232,225,0.65)', marginTop: 32, maxWidth: 360 }}>
              Type your dimensions on the right. We'll output cubic metres, yardage, truck count, and waste-adjusted order quantity.
            </p>
            <div className="vb-mono" style={{ marginTop: 40, fontSize: 11, color: 'rgba(235,232,225,0.5)', letterSpacing: '0.1em' }}>
              <div>VOLUME = L × W × D</div>
              <div>1 m³ = 1.30795 yd³</div>
              <div>STD MIXER = 9 m³</div>
            </div>
          </div>
          <div style={{ background: 'rgba(235,232,225,0.04)', padding: '40px', border: `1px solid rgba(235,232,225,0.12)` }}>
            <VolumeCalc accent={accent} dark />
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section style={{ padding: '120px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: muted, marginBottom: 12 }}>§03 FLEET</div>
            <h2 className="vb-black" style={{ fontSize: 80, margin: '0 0 24px' }}>Sixty<br />trucks.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: muted, margin: 0, maxWidth: 320 }}>
              Mixers, pumps, volumetrics. All owned, all maintained in-house, all driven by full-time YYZ operators.
            </p>
          </div>
          <FleetCarousel accent={accent} />
        </div>
      </section>

      {/* MAP */}
      <section style={{ padding: '0 40px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'start', paddingTop: 80, borderTop: `2px solid ${fg}` }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: muted, marginBottom: 12, marginTop: 40 }}>§04 SERVICE AREA</div>
            <h2 className="vb-black" style={{ fontSize: 80, margin: '0 0 24px' }}>Where<br />we pour.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: muted, margin: 0, maxWidth: 320 }}>
              Four plants spaced across the GTA. Same-day delivery within 35 km of any plant. Saturday pours by appointment.
            </p>
          </div>
          <div style={{ marginTop: 40 }}>
            <ServiceMap accent={accent} />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ background: bg, borderTop: `2px solid ${fg}` }}>
        <div style={{ padding: '100px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: muted, marginBottom: 12 }}>§05 GET A QUOTE</div>
            <h2 className="vb-black" style={{ fontSize: 96, margin: '0 0 32px' }}>Tell us<br />what.<br />When.<br />Where.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: muted, margin: 0, maxWidth: 380 }}>
              Four-step quote form. Skip it and call dispatch directly: <strong style={{ color: fg }}>416-555-7000</strong>.
            </p>
          </div>
          <div style={{ background: fg, color: bg, padding: '44px 48px' }}>
            <QuoteForm accent={accent} dark />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section style={{ padding: '120px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: muted, marginBottom: 12 }}>§06 LATEST</div>
            <h2 className="vb-black" style={{ fontSize: 80, margin: 0 }}>The log.</h2>
          </div>
          <a href="#" className="vb-link vb-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: fg, textDecoration: 'none' }}>Archive</a>
        </div>
        <NewsList accent={accent} />
      </section>

      {/* FOOTER */}
      <footer style={{ background: fg, color: bg, padding: '80px 40px 32px' }}>
        <div className="vb-black" style={{ fontSize: 'clamp(80px, 16vw, 260px)', lineHeight: 0.85, color: bg, marginBottom: 60 }}>
          YYZ/<span style={{ color: accent }}>CONCRETE</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48, paddingTop: 32, borderTop: `1px solid rgba(235,232,225,0.15)` }}>
          <div>
            <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: accent, marginBottom: 12 }}>HEAD OFFICE</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: 'rgba(235,232,225,0.7)' }}>
              284 Kipling Avenue<br />Etobicoke, ON M9C 4Z3<br />Canada
            </p>
          </div>
          {[
            ['Services', ['Ready-Mix', 'Pumping', 'Volumetric', 'Specialty']],
            ['Company', ['About', 'Fleet', 'Plants', 'Careers']],
            ['Resources', ['Calculator', 'Spec Sheets', 'Safety', 'News']],
            ['Contact', ['Dispatch', 'Quotes', 'After-hours', 'LinkedIn']],
          ].map(([h, items]) => (
            <div key={h}>
              <div className="vb-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: accent, marginBottom: 12 }}>{h.toUpperCase()}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map((x) => <li key={x} style={{ fontSize: 13, padding: '4px 0', color: 'rgba(235,232,225,0.7)' }}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="vb-mono" style={{ marginTop: 60, paddingTop: 24, borderTop: `1px solid rgba(235,232,225,0.15)`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(235,232,225,0.5)', letterSpacing: '0.1em' }}>
          <span>© 2026 YYZ CONCRETE LTD · GTA · CSA A23.1/A23.2</span>
          <span>POURED IN TORONTO</span>
        </div>
      </footer>
    </div>
  );
}

window.VariationB = VariationB;
