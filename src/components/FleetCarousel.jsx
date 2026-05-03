import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const ACCENT = '#FF6A00';

const FLEET = [
  {
    name: 'Standard Mixer',
    code: 'M-09',
    capacity: '9 m³',
    spec: 'Front-discharge · 6×6 chassis',
    img: '/Concrete-Pouring-101-1.jpg',
    notes: 'Workhorse. Most residential and mid-size commercial pours.',
  },
  {
    name: 'Concrete Pump',
    code: 'P-32',
    capacity: '32 m boom',
    spec: 'Truck-mounted · 5-section Z-fold',
    img: '/concrete-pump.webp',
    notes: 'High-rise pours, slab-on-deck, complex placement.',
  },
  {
    name: 'Road Paver',
    code: 'R-01',
    capacity: 'Full lane width',
    spec: 'Slip-form · highway grade',
    img: '/road-paver.jpg',
    notes: 'Municipal roads, highway reconstruction, industrial pads.',
  },
  {
    name: 'Mini Mixer',
    code: 'M-04',
    capacity: '4 m³',
    spec: 'Tight-access · 4×2 chassis',
    img: '/mini-mixer.jpg',
    notes: "Backyard, laneway, basement underpins. Fits 8' gates.",
  },
];

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

export default function FleetCarousel({ accent = ACCENT, dark = false }) {
  const mobile = useIsMobile();
  const [idx, setIdx] = useState(0);
  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.6)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';
  const item = FLEET[idx];

  const prev = () => setIdx((i) => (i - 1 + FLEET.length) % FLEET.length);
  const next = () => setIdx((i) => (i + 1) % FLEET.length);

  return (
    <div style={{ color: fg }}>
      {/* hero image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#222' }}>
        <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 10px', background: accent, color: '#0a0a0a', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em' }}>
          {item.code}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 24px 18px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))', color: '#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>
            {String(idx + 1).padStart(2, '0')} / {String(FLEET.length).padStart(2, '0')}
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>{item.name}</div>
        </div>
      </div>

      {/* spec strip */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr', borderBottom: `1px solid ${border}` }}>
        <Spec label="Capacity" value={item.capacity} border={border} muted={muted} />
        <Spec label="Spec" value={item.spec} border={border} muted={muted} />
        <Spec label="Use" value={item.notes} border="none" muted={muted} small />
      </div>

      {/* dots + nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0 0' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {FLEET.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 32 : 12, height: 6, border: 'none',
              background: i === idx ? accent : border, cursor: 'pointer', transition: 'all 0.2s',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <NavBtn dir="←" onClick={prev} fg={fg} border={border} />
          <NavBtn dir="→" onClick={next} fg={fg} border={border} />
        </div>
      </div>
    </div>
  );
}
