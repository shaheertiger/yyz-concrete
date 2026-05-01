// Variation A — Rugged Industrial. Heavy condensed display type, concrete
// texture overlays, big photographic hero, dense info bars.

function VariationA({ accent = '#FF6A00' }) {
  const fg = '#1a1a1a';
  const bg = '#f0eee9';
  const muted = 'rgba(26,26,26,0.55)';
  const border = 'rgba(26,26,26,0.12)';

  // concrete-like noise via inline svg
  const noise = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>")`;

  return (
    <div style={{ background: bg, color: fg, fontFamily: '"Barlow Condensed", "Oswald", "Arial Narrow", sans-serif', minHeight: '100%', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        .va-body { font-family: "Barlow", system-ui, sans-serif; }
        .va-mono { font-family: "JetBrains Mono", ui-monospace, monospace; }
        .va-disp { font-family: "Barlow Condensed", "Oswald", sans-serif; font-weight: 800; letter-spacing: -0.02em; line-height: 0.92; text-transform: uppercase; }
        .va-link { position: relative; padding-bottom: 2px; }
        .va-link::after { content:''; position:absolute; left:0; right:0; bottom:0; height:2px; background: ${accent}; transform: scaleX(0); transform-origin: left; transition: transform .25s; }
        .va-link:hover::after { transform: scaleX(1); }
      `}</style>

      {/* Top utility bar */}
      <div style={{ background: '#0a0a0a', color: '#f0eee9', fontSize: 11, padding: '8px 32px', display: 'flex', justifyContent: 'space-between', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }} className="va-mono">
        <span>YYZ-DISPATCH · 416-555-7000 · Open 6:00 — 18:00</span>
        <span style={{ display: 'flex', gap: 24 }}>
          <span>Mon Apr 27 · GTA · 8°C — pour conditions: <span style={{ color: accent }}>GOOD</span></span>
          <span>EN · FR</span>
        </span>
      </div>

      {/* Nav */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: `1px solid ${border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 40, height: 40, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: 18, height: 18, background: accent, transform: 'rotate(45deg)' }} />
          </div>
          <div>
            <div className="va-disp" style={{ fontSize: 22, lineHeight: 1 }}>YYZ Concrete</div>
            <div className="va-mono" style={{ fontSize: 9, color: muted, letterSpacing: '0.2em', marginTop: 2 }}>READY-MIX · GTA · EST. 1968</div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }} className="va-body">
          {['Services', 'Fleet', 'Calculator', 'Yards', 'News', 'Contact'].map((x) => (
            <a key={x} href="#" className="va-link" style={{ color: fg, textDecoration: 'none' }}>{x}</a>
          ))}
        </nav>
        <button style={{ padding: '12px 22px', background: accent, color: '#0a0a0a', border: 'none', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
          Order Concrete →
        </button>
      </header>

      {/* HERO */}
      <section style={{ position: 'relative', height: 720, overflow: 'hidden', background: '#0a0a0a' }}>
        <img src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=2400&q=85" alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, rgba(10,10,10,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: noise, opacity: 0.15, mixBlendMode: 'overlay' }} />

        {/* corner crops */}
        <div style={{ position: 'absolute', top: 32, left: 32, width: 24, height: 24, borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }} />
        <div style={{ position: 'absolute', top: 32, right: 32, width: 24, height: 24, borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }} />
        <div style={{ position: 'absolute', bottom: 32, left: 32, width: 24, height: 24, borderBottom: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }} />
        <div style={{ position: 'absolute', bottom: 32, right: 32, width: 24, height: 24, borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }} />

        <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto', padding: '120px 64px 0', color: '#f0eee9' }}>
          <div className="va-mono" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.25em', color: accent, marginBottom: 20 }}>
            ◆ READY-MIX · PUMPING · VOLUMETRIC
          </div>
          <h1 className="va-disp" style={{ fontSize: 168, margin: 0, color: '#f0eee9' }}>
            POUR<br />WHEN<br /><span style={{ color: accent }}>YOU</span> SAY.
          </h1>
          <div style={{ marginTop: 40, display: 'flex', alignItems: 'flex-end', gap: 60 }}>
            <p className="va-body" style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.5, maxWidth: 460, margin: 0, color: 'rgba(240,238,233,0.85)' }}>
              Four GTA plants. 60-truck fleet. Same-day delivery on 90% of orders. Built for contractors who run on a clock, not a calendar.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{ padding: '18px 28px', background: accent, color: '#0a0a0a', border: 'none', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' }}>
                Get Quote →
              </button>
              <button style={{ padding: '18px 28px', background: 'transparent', color: '#f0eee9', border: '2px solid #f0eee9', fontFamily: 'inherit', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' }}>
                Call Dispatch
              </button>
            </div>
          </div>
        </div>

        {/* hero stats strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'rgba(10,10,10,0.85)', borderTop: `2px solid ${accent}`, color: '#f0eee9' }}>
          {[
            ['58', 'YEARS POURING', 'GTA'],
            ['04', 'PLANTS', 'ETO · MIS · VAU · SCA'],
            ['9 m³', 'PER MIXER', '60-TRUCK FLEET'],
            ['<2 H', 'QUOTE TURNAROUND', 'OFFICE HOURS'],
          ].map(([n, l, s], i) => (
            <div key={i} style={{ padding: '24px 28px', borderRight: i < 3 ? `1px solid rgba(240,238,233,0.15)` : 'none' }}>
              <div className="va-disp" style={{ fontSize: 56, color: accent, lineHeight: 1 }}>{n}</div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', marginTop: 6 }}>{l}</div>
              <div className="va-mono" style={{ fontSize: 10, color: 'rgba(240,238,233,0.5)', letterSpacing: '0.15em', marginTop: 2 }}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '120px 64px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 60 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>◆ 01 / SERVICES</div>
            <h2 className="va-disp" style={{ fontSize: 96, margin: 0 }}>What we<br />pour.</h2>
          </div>
          <p className="va-body" style={{ fontSize: 16, color: muted, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
            CSA-certified mixes from 15 to 50 MPa. Specialty placements, integral colour, fibre-reinforced, and low-carbon LEED-spec mixes available at every plant.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${border}` }}>
          {[
            { n: '01', title: 'Ready-Mix Delivery', specs: ['15 – 50 MPa', 'Same-day dispatch', 'Onsite slump test'], img: 'https://images.unsplash.com/photo-1564013434775-f71db0030976?w=900&q=80' },
            { n: '02', title: 'Concrete Pumping', specs: ['32 m + 38 m boom', 'Line pumps to 200 m', 'High-rise rated'], img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
            { n: '03', title: 'Volumetric / Mix-On-Site', specs: ['No short-load fee', 'Variable PSI', '4–10 m³ per truck'], img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80' },
          ].map((s, i) => (
            <div key={s.n} style={{ borderRight: i < 2 ? `1px solid ${border}` : 'none' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#222' }}>
                <img src={s.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(0.3)' }} />
              </div>
              <div style={{ padding: '24px 28px' }}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 12 }}>SERVICE / {s.n}</div>
                <h3 className="va-disp" style={{ fontSize: 36, margin: '0 0 16px' }}>{s.title}</h3>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.specs.map((x) => (
                    <li key={x} style={{ fontSize: 13, padding: '8px 0', borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
                      <span>{x}</span><span style={{ color: muted }} className="va-mono">✓</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="va-mono va-link" style={{ display: 'inline-block', marginTop: 18, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: fg, textDecoration: 'none' }}>SPEC SHEET →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR + MAP split */}
      <section style={{ background: '#0a0a0a', color: '#f0eee9' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>◆ 02 / VOLUME CALCULATOR</div>
            <h2 className="va-disp" style={{ fontSize: 72, margin: '0 0 24px', color: '#f0eee9' }}>How much<br />do you need?</h2>
            <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 28 }}>
              Punch in dimensions. We'll give you cubic metres, yardage, and exact truck count. 10% waste already factored in.
            </p>
            <VolumeCalc accent={accent} dark />
          </div>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>◆ 03 / SERVICE AREA</div>
            <h2 className="va-disp" style={{ fontSize: 72, margin: '0 0 24px', color: '#f0eee9' }}>Four plants.<br />One GTA.</h2>
            <p className="va-body" style={{ fontSize: 15, color: 'rgba(240,238,233,0.65)', lineHeight: 1.6, marginBottom: 28 }}>
              Etobicoke HQ plus three satellite plants. Whatever your zip code, we've got a mixer that's already on the way.
            </p>
            <ServiceMap accent={accent} dark />
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '120px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 60 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>◆ 04 / FLEET</div>
            <h2 className="va-disp" style={{ fontSize: 96, margin: 0 }}>Right truck.<br />Right pour.</h2>
          </div>
          <p className="va-body" style={{ fontSize: 16, color: muted, maxWidth: 380, lineHeight: 1.6, margin: 0 }}>
            Mixers, pumps, volumetrics — all owned, all maintained in-house. Operators are full-time YYZ employees, not contractors.
          </p>
        </div>
        <FleetCarousel accent={accent} />
      </section>

      {/* QUOTE */}
      <section style={{ background: bg, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 64px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>◆ 05 / GET A QUOTE</div>
            <h2 className="va-disp" style={{ fontSize: 88, margin: '0 0 24px' }}>Four steps.<br />Two hours.<br />Your truck.</h2>
            <p className="va-body" style={{ fontSize: 16, color: muted, lineHeight: 1.6, marginBottom: 32 }}>
              Skip the back-and-forth. Tell us what you're pouring and we'll come back with mix, price, and a delivery slot before lunch.
            </p>
            <div className="va-body" style={{ borderTop: `1px solid ${border}`, paddingTop: 24 }}>
              {[
                ['Direct dispatch', '416-555-7000'],
                ['Quote desk', 'quotes@yyzconcrete.ca'],
                ['After hours', '416-555-7099'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${border}` }}>
                  <span className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: muted }}>{k}</span>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: bg, border: `1px solid ${border}`, padding: '40px 44px' }}>
            <QuoteForm accent={accent} />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '120px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="va-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>◆ 06 / DISPATCH LOG</div>
            <h2 className="va-disp" style={{ fontSize: 96, margin: 0 }}>From the yard.</h2>
          </div>
          <a href="#" className="va-mono va-link" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: fg, textDecoration: 'none' }}>All Updates →</a>
        </div>
        <NewsList accent={accent} />
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a0a0a', color: '#f0eee9', padding: '80px 64px 40px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="va-disp" style={{ fontSize: 200, lineHeight: 0.9, color: accent, marginBottom: 60 }}>YYZ.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingTop: 40, borderTop: `1px solid rgba(240,238,233,0.15)` }}>
            <div>
              <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>HQ — ETOBICOKE</div>
              <p className="va-body" style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,238,233,0.7)', margin: 0 }}>
                284 Kipling Ave, Etobicoke, ON M9C 4Z3<br />
                Mon–Sat 6:00–18:00 · Sun by appointment
              </p>
            </div>
            {[
              ['Services', ['Ready-Mix', 'Pumping', 'Volumetric', 'Specialty Mixes']],
              ['Company', ['About', 'Fleet', 'Plants', 'Careers']],
              ['Resources', ['Calculator', 'Spec Sheets', 'Safety', 'News']],
            ].map(([h, items]) => (
              <div key={h}>
                <div className="va-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: accent, marginBottom: 16 }}>{h.toUpperCase()}</div>
                <ul className="va-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((x) => <li key={x} style={{ fontSize: 13, padding: '4px 0', color: 'rgba(240,238,233,0.7)' }}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="va-mono" style={{ marginTop: 60, paddingTop: 24, borderTop: `1px solid rgba(240,238,233,0.15)`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(240,238,233,0.5)', letterSpacing: '0.1em' }}>
            <span>© 2026 YYZ CONCRETE LTD · GTA · CSA A23.1/A23.2</span>
            <span>BUILT TO POUR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.VariationA = VariationA;
