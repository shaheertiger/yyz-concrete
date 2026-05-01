const ACCENT = '#FF6A00';

const NEWS = [
  {
    date: '2026-04-22',
    tag: 'Operations',
    title: 'Markham plant now running extended Saturday hours',
    body: 'Saturday pours expanded to 6am–2pm through pour season at all four GTA plants.',
  },
  {
    date: '2026-04-08',
    tag: 'Spec',
    title: 'New low-carbon mix: YYZ-LC32 cuts embodied CO₂ by 30%',
    body: 'Available at all plants. Maintains 32 MPa at 28 days; LEED v4.1 compliant.',
  },
  {
    date: '2026-03-15',
    tag: 'Fleet',
    title: 'Two new Putzmeister 38m pumps added to Etobicoke yard',
    body: 'Five-section Z-fold booms join the fleet. Pre-book pumps via dispatch.',
  },
  {
    date: '2026-02-28',
    tag: 'Industry',
    title: 'OPS-MUTCD revision: what GTA contractors need to know',
    body: 'Notes from our compliance team on the updated traffic-control specifications.',
  },
];

export default function NewsList({ accent = ACCENT, dark = false }) {
  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.55)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';

  return (
    <div style={{ borderTop: `1px solid ${border}`, color: fg }}>
      {NEWS.map((n, i) => (
        <article key={i} style={{
          display: 'grid',
          gridTemplateColumns: '140px 100px 1fr auto',
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
          }}>
            {n.tag}
          </span>
          <div>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{n.title}</h3>
            <p style={{ fontSize: 14, color: muted, margin: '6px 0 0', lineHeight: 1.5 }}>{n.body}</p>
          </div>
          <a href="#" style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: fg, textDecoration: 'none', borderBottom: `2px solid ${accent}`, paddingBottom: 2,
          }}>
            Read →
          </a>
        </article>
      ))}
    </div>
  );
}
