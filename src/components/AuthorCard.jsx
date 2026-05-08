import { useIsMobile } from '../hooks/useIsMobile';
import { ACCENT, FG, BG, MUTED, BORDER } from '../constants';

export default function AuthorCard({ topic }) {
  const mobile = useIsMobile();
  const p = mobile ? '20px' : '64px';

  return (
    <div style={{ borderBottom: `1px solid ${BORDER}`, background: '#fff' }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: `${mobile ? '20px' : '28px'} ${p}`,
        display: 'flex',
        alignItems: 'center',
        gap: mobile ? 14 : 24,
        flexWrap: 'wrap',
      }}>
        {/* Avatar — initials only */}
        <div style={{
          width: mobile ? 44 : 56,
          height: mobile ? 44 : 56,
          borderRadius: '50%',
          flexShrink: 0,
          border: `2px solid ${ACCENT}`,
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: mobile ? 16 : 20, fontWeight: 800, color: ACCENT }}>AA</span>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="va-disp" style={{ fontSize: mobile ? 16 : 18, fontWeight: 700, color: FG }}>
              AlAA
            </span>
            <span className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: ACCENT, background: 'rgba(255,106,0,0.1)', padding: '3px 8px' }}>
              AUTHOR
            </span>
          </div>
          <p className="va-body" style={{ fontSize: mobile ? 12 : 13, color: MUTED, margin: '3px 0 0', lineHeight: 1.5 }}>
            Construction writer & concrete industry enthusiast based in Toronto.{topic ? ` Covering ${topic} and the GTA concrete trade.` : ' Covering the GTA concrete trade since 2019.'}
          </p>
        </div>

        {/* Meta */}
        {!mobile && (
          <div style={{ display: 'flex', gap: 24, flexShrink: 0 }}>
            <div style={{ textAlign: 'right' }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: MUTED }}>LOCATION</div>
              <div className="va-body" style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>Toronto, ON</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="va-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: MUTED }}>EXPERTISE</div>
              <div className="va-body" style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>Concrete & Construction</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
