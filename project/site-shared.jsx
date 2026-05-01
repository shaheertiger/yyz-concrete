// Shared interactive components for YYZ Concrete site variations.
// Calculator, fleet carousel, service-area map, quote form, news.
// Written so each variation can theme them via CSS vars / className wrappers.

// ── Calculator ──────────────────────────────────────────────────────────────
function VolumeCalc({ accent = '#FF6A00', dark = false }) {
  const [shape, setShape] = React.useState('slab');
  const [units, setUnits] = React.useState('ft');
  const [dims, setDims] = React.useState({ length: 20, width: 10, depth: 4, dia: 12, height: 8 });

  const set = (k, v) => setDims((d) => ({ ...d, [k]: Number(v) || 0 }));

  // depth/dia/etc are entered in inches when units==='ft', cm when 'm'
  const cubic = React.useMemo(() => {
    if (shape === 'slab') {
      if (units === 'ft') {
        const cuft = dims.length * dims.width * (dims.depth / 12);
        return { yd3: cuft / 27, m3: cuft * 0.0283168 };
      }
      const m3 = dims.length * dims.width * (dims.depth / 100);
      return { yd3: m3 * 1.30795, m3 };
    }
    if (shape === 'footing') {
      if (units === 'ft') {
        const cuft = dims.length * (dims.width / 12) * (dims.depth / 12);
        return { yd3: cuft / 27, m3: cuft * 0.0283168 };
      }
      const m3 = dims.length * (dims.width / 100) * (dims.depth / 100);
      return { yd3: m3 * 1.30795, m3 };
    }
    // column
    if (units === 'ft') {
      const r = dims.dia / 2 / 12;
      const cuft = Math.PI * r * r * dims.height;
      return { yd3: cuft / 27, m3: cuft * 0.0283168 };
    }
    const r = dims.dia / 2 / 100;
    const m3 = Math.PI * r * r * dims.height;
    return { yd3: m3 * 1.30795, m3 };
  }, [shape, units, dims]);

  const trucks = Math.ceil(cubic.m3 / 9); // 9 m³ standard mixer
  const waste = cubic.m3 * 1.1;

  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.6)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';
  const fieldBg = dark ? 'rgba(255,255,255,0.04)' : '#fff';

  const segBtn = (active) => ({
    flex: 1, padding: '10px 12px',
    border: 'none',
    background: active ? accent : 'transparent',
    color: active ? '#0a0a0a' : muted,
    fontFamily: 'inherit', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    cursor: 'pointer',
    borderRight: `1px solid ${border}`,
  });

  const Field = ({ label, value, onChange, suffix }) => (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${border}`, background: fieldBg }}>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            flex: 1, padding: '12px 14px', border: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: 18, fontWeight: 600, color: fg, outline: 'none',
            fontVariantNumeric: 'tabular-nums',
          }}
        />
        <span style={{ padding: '0 14px', fontSize: 12, fontWeight: 600, color: muted, letterSpacing: '0.06em' }}>{suffix}</span>
      </div>
    </label>
  );

  const lengthUnit = units === 'ft' ? 'FT' : 'M';
  const smallUnit = units === 'ft' ? 'IN' : 'CM';

  return (
    <div style={{ color: fg, fontFamily: 'inherit' }}>
      {/* shape tabs */}
      <div style={{ display: 'flex', border: `1px solid ${border}`, borderRight: 'none', marginBottom: 24 }}>
        {[['slab', 'Slab / Pad'], ['footing', 'Footing'], ['column', 'Column']].map(([k, l]) => (
          <button key={k} onClick={() => setShape(k)} style={segBtn(shape === k)}>{l}</button>
        ))}
      </div>

      {/* fields */}
      <div style={{ display: 'grid', gridTemplateColumns: shape === 'column' ? '1fr 1fr' : '1fr 1fr 1fr', gap: 14, marginBottom: 24 }}>
        {shape === 'slab' && (
          <>
            <Field label="Length" value={dims.length} onChange={(v) => set('length', v)} suffix={lengthUnit} />
            <Field label="Width" value={dims.width} onChange={(v) => set('width', v)} suffix={lengthUnit} />
            <Field label="Depth" value={dims.depth} onChange={(v) => set('depth', v)} suffix={smallUnit} />
          </>
        )}
        {shape === 'footing' && (
          <>
            <Field label="Length" value={dims.length} onChange={(v) => set('length', v)} suffix={lengthUnit} />
            <Field label="Width" value={dims.width} onChange={(v) => set('width', v)} suffix={smallUnit} />
            <Field label="Depth" value={dims.depth} onChange={(v) => set('depth', v)} suffix={smallUnit} />
          </>
        )}
        {shape === 'column' && (
          <>
            <Field label="Diameter" value={dims.dia} onChange={(v) => set('dia', v)} suffix={smallUnit} />
            <Field label="Height" value={dims.height} onChange={(v) => set('height', v)} suffix={lengthUnit} />
          </>
        )}
      </div>

      {/* unit toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted }}>Units</span>
        <div style={{ display: 'flex', border: `1px solid ${border}` }}>
          {['ft', 'm'].map((u) => (
            <button key={u} onClick={() => setUnits(u)} style={{
              padding: '6px 14px', border: 'none', cursor: 'pointer',
              background: units === u ? fg : 'transparent',
              color: units === u ? (dark ? '#0a0a0a' : '#fff') : muted,
              fontFamily: 'inherit', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{u === 'ft' ? 'Imperial' : 'Metric'}</button>
          ))}
        </div>
      </div>

      {/* result */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${border}` }}>
        <div style={{ padding: '20px 22px', borderRight: `1px solid ${border}` }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: 8 }}>Volume needed</div>
          <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
            {cubic.m3.toFixed(2)} <span style={{ fontSize: 16, fontWeight: 600, color: muted }}>m³</span>
          </div>
          <div style={{ fontSize: 13, color: muted, marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>
            {cubic.yd3.toFixed(2)} yd³ · order {waste.toFixed(2)} m³ with 10% waste
          </div>
        </div>
        <div style={{ padding: '20px 22px', background: accent, color: '#0a0a0a' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Trucks required</div>
          <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
            {trucks} <span style={{ fontSize: 16, fontWeight: 600 }}>×</span>
          </div>
          <div style={{ fontSize: 13, marginTop: 6, fontWeight: 600 }}>
            9 m³ standard mixer · GTA delivery
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Fleet carousel ──────────────────────────────────────────────────────────
const FLEET = [
  {
    name: 'Standard Mixer',
    code: 'M-09',
    capacity: '9 m³',
    spec: 'Front-discharge · 6×6 chassis',
    img: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1200&q=80',
    notes: 'Workhorse. Most residential and mid-size commercial pours.',
  },
  {
    name: 'Mini Mixer',
    code: 'M-04',
    capacity: '4 m³',
    spec: 'Tight-access · 4×2 chassis',
    img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80',
    notes: 'Backyard, laneway, basement underpins. Fits 8\' gates.',
  },
  {
    name: 'Concrete Pump',
    code: 'P-32',
    capacity: '32 m boom',
    spec: 'Truck-mounted · 5-section Z-fold',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    notes: 'High-rise pours, slab-on-deck, complex placement.',
  },
  {
    name: 'Volumetric Mixer',
    code: 'V-10',
    capacity: '10 m³ on-site',
    spec: 'Mix-on-demand · variable PSI',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    notes: 'Small or staggered pours. No short-load fees.',
  },
];

function FleetCarousel({ accent = '#FF6A00', dark = false }) {
  const [i, setI] = React.useState(0);
  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.6)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';
  const item = FLEET[i];

  return (
    <div style={{ color: fg }}>
      {/* hero image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#222' }}>
        <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 10px', background: accent, color: '#0a0a0a', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em' }}>
          {item.code}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 24px 18px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))', color: '#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>{String(i + 1).padStart(2, '0')} / {String(FLEET.length).padStart(2, '0')}</div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>{item.name}</div>
        </div>
      </div>

      {/* spec strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: `1px solid ${border}` }}>
        <Spec label="Capacity" value={item.capacity} border={border} muted={muted} />
        <Spec label="Spec" value={item.spec} border={border} muted={muted} />
        <Spec label="Use" value={item.notes} border="none" muted={muted} small />
      </div>

      {/* dots + nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0 0' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {FLEET.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} style={{
              width: idx === i ? 32 : 12, height: 6, border: 'none',
              background: idx === i ? accent : border, cursor: 'pointer', transition: 'all 0.2s',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <NavBtn dir="←" onClick={() => setI((i - 1 + FLEET.length) % FLEET.length)} fg={fg} border={border} />
          <NavBtn dir="→" onClick={() => setI((i + 1) % FLEET.length)} fg={fg} border={border} />
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value, border, muted, small }) {
  return (
    <div style={{ padding: '14px 18px', borderRight: border !== 'none' ? `1px solid ${border}` : 'none' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: small ? 13 : 16, fontWeight: 600, lineHeight: 1.3 }}>{value}</div>
    </div>
  );
}

function NavBtn({ dir, onClick, fg, border }) {
  return (
    <button onClick={onClick} style={{
      width: 44, height: 44, border: `1px solid ${border}`, background: 'transparent',
      color: fg, fontSize: 18, cursor: 'pointer', fontFamily: 'inherit',
    }}>{dir}</button>
  );
}

// ── Service area map ────────────────────────────────────────────────────────
const PLANTS = [
  { id: 'eto', name: 'Etobicoke', x: 18, y: 56, primary: true },
  { id: 'mis', name: 'Mississauga', x: 8, y: 64 },
  { id: 'vau', name: 'Vaughan', x: 32, y: 28 },
  { id: 'sca', name: 'Scarborough', x: 64, y: 50 },
  { id: 'pic', name: 'Pickering', x: 84, y: 56 },
  { id: 'mar', name: 'Markham', x: 56, y: 22 },
];

function ServiceMap({ accent = '#FF6A00', dark = false }) {
  const [hover, setHover] = React.useState(null);
  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const bgFill = dark ? '#1a1a1a' : '#e8e6e0';
  const stroke = dark ? 'rgba(240,238,233,0.2)' : 'rgba(26,26,26,0.15)';
  const muted = dark ? 'rgba(240,238,233,0.5)' : 'rgba(26,26,26,0.45)';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0, border: `1px solid ${stroke}`, background: bgFill, color: fg }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', borderRight: `1px solid ${stroke}`, overflow: 'hidden' }}>
        <svg viewBox="0 0 100 75" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* lake ontario */}
          <path d="M0 70 L100 68 L100 75 L0 75 Z" fill={dark ? '#0a0a0a' : '#d6d3cc'} />
          {/* highways */}
          <path d="M0 56 L100 56" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 1" fill="none" />
          <path d="M0 32 L100 28" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 1" fill="none" />
          <path d="M50 0 L52 70" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 1" fill="none" />

          {/* radius */}
          <circle cx="18" cy="56" r="34" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="0.3" strokeDasharray="1 1" />

          {/* plants */}
          {PLANTS.map((p) => (
            <g key={p.id} onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }}>
              <circle cx={p.x} cy={p.y} r={p.primary ? 2.4 : 1.6} fill={accent} />
              {p.primary && <circle cx={p.x} cy={p.y} r="4" fill="none" stroke={accent} strokeWidth="0.4" />}
              <text x={p.x + 3} y={p.y + 1} fontSize="2.2" fontWeight="700" fill={fg} style={{ fontFamily: 'inherit' }}>{p.name.toUpperCase()}</text>
            </g>
          ))}

          {/* labels */}
          <text x="2" y="74" fontSize="2" fill={muted} style={{ fontFamily: 'inherit', letterSpacing: '0.15em' }}>LAKE ONTARIO</text>
          <text x="2" y="3" fontSize="2" fill={muted} style={{ fontFamily: 'inherit', letterSpacing: '0.15em' }}>HWY 407</text>
          <text x="2" y="55" fontSize="2" fill={muted} style={{ fontFamily: 'inherit', letterSpacing: '0.15em' }}>QEW / 401</text>
        </svg>
      </div>

      <div style={{ padding: '24px 26px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, marginBottom: 12 }}>Plants & Yards</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {PLANTS.map((p) => (
            <li key={p.id}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                padding: '10px 12px',
                background: hover === p.id ? accent : 'transparent',
                color: hover === p.id ? '#0a0a0a' : fg,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer',
                borderBottom: `1px solid ${stroke}`,
              }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', opacity: hover === p.id ? 1 : 0.5 }}>
                {p.primary ? 'HQ + PLANT' : 'PLANT'}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 16, fontSize: 12, color: muted, lineHeight: 1.5 }}>
          Same-day delivery within 35 km of any plant. Saturday pours by appointment.
        </div>
      </div>
    </div>
  );
}

// ── Quote form ──────────────────────────────────────────────────────────────
function QuoteForm({ accent = '#FF6A00', dark = false }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    project: 'driveway', psi: '32', volume: '15', date: '', addr: '', name: '', phone: '', notes: '',
  });
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.55)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';

  const steps = ['Project', 'Mix & volume', 'Site & schedule', 'Contact'];

  if (step === 4) {
    return (
      <div style={{ padding: '40px 32px', background: accent, color: '#0a0a0a', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em' }}>QUOTE #YYZ-{String(Date.now()).slice(-6)}</div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', margin: '12px 0', lineHeight: 1.1 }}>
          Quote sent. We'll call within 2 hours.
        </div>
        <div style={{ fontSize: 14 }}>Office hours 6am–6pm Mon–Sat. After hours: dispatch line.</div>
        <button onClick={() => { setStep(0); }} style={{
          marginTop: 24, padding: '12px 22px', background: '#0a0a0a', color: accent,
          border: 'none', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 12, cursor: 'pointer',
        }}>Start another</button>
      </div>
    );
  }

  const Lbl = ({ children }) => (
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: 8 }}>{children}</div>
  );
  const Input = ({ value, onChange, placeholder, type = 'text' }) => (
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      style={{ width: '100%', padding: '14px 16px', border: `1px solid ${border}`, background: 'transparent', color: fg, fontFamily: 'inherit', fontSize: 16, fontWeight: 500, outline: 'none', boxSizing: 'border-box' }} />
  );
  const Choice = ({ value, current, onChange, label }) => (
    <button onClick={() => onChange(value)} style={{
      padding: '14px 16px',
      border: `1px solid ${current === value ? accent : border}`,
      background: current === value ? accent : 'transparent',
      color: current === value ? '#0a0a0a' : fg,
      fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', textAlign: 'left',
    }}>{label}</button>
  );

  return (
    <div style={{ color: fg }}>
      {/* progress */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 28 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ height: 4, background: i <= step ? accent : border }} />
            <div style={{ marginTop: 10, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === step ? fg : muted }}>
              {String(i + 1).padStart(2, '0')} · {s}
            </div>
          </div>
        ))}
      </div>

      {step === 0 && (
        <>
          <Lbl>What are you pouring?</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[['driveway', 'Driveway / Walkway'], ['foundation', 'Foundation / Footings'], ['slab', 'Slab on grade'], ['commercial', 'Commercial / Industrial'], ['other', 'Something else']].map(([v, l]) => (
              <Choice key={v} value={v} current={data.project} onChange={(x) => set('project', x)} label={l} />
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <Lbl>Mix strength (PSI / MPa)</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 24 }}>
            {[['25', '25 MPa'], ['32', '32 MPa'], ['35', '35 MPa'], ['40', '40 MPa']].map(([v, l]) => (
              <Choice key={v} value={v} current={data.psi} onChange={(x) => set('psi', x)} label={l} />
            ))}
          </div>
          <Lbl>Volume (m³)</Lbl>
          <Input value={data.volume} onChange={(v) => set('volume', v)} type="number" placeholder="15" />
        </>
      )}

      {step === 2 && (
        <>
          <Lbl>Job site address</Lbl>
          <div style={{ marginBottom: 16 }}>
            <Input value={data.addr} onChange={(v) => set('addr', v)} placeholder="123 Main St, Toronto, ON" />
          </div>
          <Lbl>Pour date</Lbl>
          <Input value={data.date} onChange={(v) => set('date', v)} type="date" />
        </>
      )}

      {step === 3 && (
        <>
          <Lbl>Your name & company</Lbl>
          <div style={{ marginBottom: 16 }}>
            <Input value={data.name} onChange={(v) => set('name', v)} placeholder="J. Smith — Smith Construction Ltd." />
          </div>
          <Lbl>Phone</Lbl>
          <div style={{ marginBottom: 16 }}>
            <Input value={data.phone} onChange={(v) => set('phone', v)} placeholder="416-555-0199" />
          </div>
          <Lbl>Notes (access, pump, time window)</Lbl>
          <Input value={data.notes} onChange={(v) => set('notes', v)} placeholder="Tight rear access, prefer 7am pour" />
        </>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
        <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} style={{
          padding: '14px 22px', background: 'transparent', border: `1px solid ${border}`, color: step === 0 ? muted : fg,
          fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: step === 0 ? 'not-allowed' : 'pointer',
        }}>← Back</button>
        <button onClick={() => setStep(step + 1)} style={{
          padding: '14px 28px', background: accent, border: 'none', color: '#0a0a0a',
          fontFamily: 'inherit', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
        }}>{step === 3 ? 'Submit quote →' : 'Continue →'}</button>
      </div>
    </div>
  );
}

// ── News ────────────────────────────────────────────────────────────────────
const NEWS = [
  { date: '2026-04-22', tag: 'Operations', title: 'Markham plant now running extended Saturday hours', body: 'Saturday pours expanded to 6am–2pm through pour season at all four GTA plants.' },
  { date: '2026-04-08', tag: 'Spec', title: 'New low-carbon mix: YYZ-LC32 cuts embodied CO₂ by 30%', body: 'Available at all plants. Maintains 32 MPa at 28 days; LEED v4.1 compliant.' },
  { date: '2026-03-15', tag: 'Fleet', title: 'Two new Putzmeister 38m pumps added to Etobicoke yard', body: 'Five-section Z-fold booms join the fleet. Pre-book pumps via dispatch.' },
  { date: '2026-02-28', tag: 'Industry', title: 'OPS-MUTCD revision: what GTA contractors need to know', body: 'Notes from our compliance team on the updated traffic-control specifications.' },
];

function NewsList({ accent = '#FF6A00', dark = false, compact = false }) {
  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.55)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';

  return (
    <div style={{ borderTop: `1px solid ${border}`, color: fg }}>
      {NEWS.map((n, i) => (
        <article key={i} style={{
          display: 'grid',
          gridTemplateColumns: compact ? '120px 90px 1fr' : '140px 100px 1fr auto',
          gap: 24,
          padding: '22px 0',
          borderBottom: `1px solid ${border}`,
          alignItems: 'baseline',
        }}>
          <time style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', color: muted, fontVariantNumeric: 'tabular-nums' }}>
            {new Date(n.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase()}
          </time>
          <span style={{
            fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '4px 8px', background: accent, color: '#0a0a0a', justifySelf: 'start',
          }}>{n.tag}</span>
          <div>
            <h3 style={{ fontSize: compact ? 16 : 19, fontWeight: 700, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{n.title}</h3>
            {!compact && <p style={{ fontSize: 14, color: muted, margin: '6px 0 0', lineHeight: 1.5 }}>{n.body}</p>}
          </div>
          {!compact && (
            <a href="#" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: fg, textDecoration: 'none', borderBottom: `2px solid ${accent}`, paddingBottom: 2 }}>Read →</a>
          )}
        </article>
      ))}
    </div>
  );
}

Object.assign(window, { VolumeCalc, FleetCarousel, ServiceMap, QuoteForm, NewsList });
