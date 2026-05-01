import { useState } from 'react';

const ACCENT = '#FF6A00';

const PLANTS = [
  { id: 'eto', name: 'Etobicoke', x: 18, y: 56, primary: true },
  { id: 'mis', name: 'Mississauga', x: 8, y: 64 },
  { id: 'vau', name: 'Vaughan', x: 32, y: 28 },
  { id: 'sca', name: 'Scarborough', x: 64, y: 50 },
  { id: 'pic', name: 'Pickering', x: 84, y: 56 },
  { id: 'mar', name: 'Markham', x: 56, y: 22 },
];

export default function ServiceMap({ accent = ACCENT, dark = false }) {
  const [hover, setHover] = useState(null);
  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const bgFill = dark ? '#1a1a1a' : '#e8e6e0';
  const stroke = dark ? 'rgba(240,238,233,0.2)' : 'rgba(26,26,26,0.15)';
  const muted = dark ? 'rgba(240,238,233,0.5)' : 'rgba(26,26,26,0.45)';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0, border: `1px solid ${stroke}`, background: bgFill, color: fg }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', borderRight: `1px solid ${stroke}`, overflow: 'hidden' }}>
        <svg viewBox="0 0 100 75" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Lake Ontario */}
          <path d="M0 70 L100 68 L100 75 L0 75 Z" fill={dark ? '#0a0a0a' : '#d6d3cc'} />
          {/* Highways */}
          <path d="M0 56 L100 56" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 1" fill="none" />
          <path d="M0 32 L100 28" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 1" fill="none" />
          <path d="M50 0 L52 70" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 1" fill="none" />
          {/* Coverage radius */}
          <circle cx="18" cy="56" r="34" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="0.3" strokeDasharray="1 1" />
          {/* Plants */}
          {PLANTS.map((p) => (
            <g key={p.id}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: 'pointer' }}>
              <circle cx={p.x} cy={p.y} r={p.primary ? 2.4 : 1.6} fill={accent} />
              {p.primary && <circle cx={p.x} cy={p.y} r="4" fill="none" stroke={accent} strokeWidth="0.4" />}
              <text x={p.x + 3} y={p.y + 1} fontSize="2.2" fontWeight="700" fill={fg} fontFamily="inherit">
                {p.name.toUpperCase()}
              </text>
            </g>
          ))}
          {/* Labels */}
          <text x="2" y="74" fontSize="2" fill={muted} fontFamily="inherit" letterSpacing="0.15em">LAKE ONTARIO</text>
          <text x="2" y="3" fontSize="2" fill={muted} fontFamily="inherit" letterSpacing="0.15em">HWY 407</text>
          <text x="2" y="55" fontSize="2" fill={muted} fontFamily="inherit" letterSpacing="0.15em">QEW / 401</text>
        </svg>
      </div>

      <div style={{ padding: '24px 26px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, marginBottom: 12 }}>
          Plants & Yards
        </div>
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
                transition: 'background 0.15s, color 0.15s',
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
