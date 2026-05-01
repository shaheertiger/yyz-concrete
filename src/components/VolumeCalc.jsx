import { useState, useMemo } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const ACCENT = '#FF6A00';

export default function VolumeCalc({ accent = ACCENT, dark = false }) {
  const mobile = useIsMobile();
  const [shape, setShape] = useState('slab');
  const [units, setUnits] = useState('ft');
  const [dims, setDims] = useState({ length: 20, width: 10, depth: 4, dia: 12, height: 8 });

  const set = (k, v) => setDims((d) => ({ ...d, [k]: Number(v) || 0 }));

  const cubic = useMemo(() => {
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

  const trucks = Math.ceil(cubic.m3 / 9);
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

  const lengthUnit = units === 'ft' ? 'FT' : 'M';
  const smallUnit = units === 'ft' ? 'IN' : 'CM';

  function Field({ label, value, onChange, suffix }) {
    return (
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
  }

  return (
    <div style={{ color: fg, fontFamily: 'inherit' }}>
      {/* shape tabs */}
      <div style={{ display: 'flex', border: `1px solid ${border}`, borderRight: 'none', marginBottom: 24 }}>
        {[['slab', 'Slab / Pad'], ['footing', 'Footing'], ['column', 'Column']].map(([k, l]) => (
          <button key={k} onClick={() => setShape(k)} style={segBtn(shape === k)}>{l}</button>
        ))}
      </div>

      {/* fields */}
      <div style={{ display: 'grid', gridTemplateColumns: shape === 'column' ? '1fr 1fr' : (mobile ? '1fr 1fr' : '1fr 1fr 1fr'), gap: 14, marginBottom: 24 }}>
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
