import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const ACCENT = '#FF6A00';

function Lbl({ children, muted }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: 8 }}>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = 'text', fg, border }) {
  return (
    <input
      type={type} value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%', padding: '14px 16px', border: `1px solid ${border}`,
        background: 'transparent', color: fg, fontFamily: 'inherit', fontSize: 16,
        fontWeight: 500, outline: 'none', boxSizing: 'border-box',
      }}
    />
  );
}

function Choice({ value, current, onChange, label, accent, border, fg }) {
  const active = current === value;
  return (
    <button
      onClick={() => onChange(value)}
      style={{
        padding: '14px 16px',
        border: `1px solid ${active ? accent : border}`,
        background: active ? accent : 'transparent',
        color: active ? '#0a0a0a' : fg,
        fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', textAlign: 'left',
      }}>
      {label}
    </button>
  );
}

export default function QuoteForm({ accent = ACCENT, dark = false }) {
  const mobile = useIsMobile();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    project: 'driveway', psi: '32', volume: '15', date: '', addr: '', name: '', phone: '', notes: '',
  });
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const fg = dark ? '#f0eee9' : '#1a1a1a';
  const muted = dark ? 'rgba(240,238,233,0.55)' : 'rgba(26,26,26,0.55)';
  const border = dark ? 'rgba(240,238,233,0.15)' : 'rgba(26,26,26,0.12)';

  const submit = () => {
    setSubmitting(true);
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@yyzconcrete.com';
    const fields = {
      '_subject':   `Quote Request — ${data.project} — ${data.name || 'YYZ Web'}`,
      '_captcha':   'false',
      '_template':  'table',
      '_next':      window.location.href,
      'Project':    data.project,
      'Mix (MPa)':  data.psi,
      'Volume (m³)': data.volume,
      'Pour date':  data.date || 'TBD',
      'Site address': data.addr || '—',
      'Name':       data.name,
      'Phone':      data.phone,
      'Notes':      data.notes || '—',
    };
    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
  };

  const steps = ['Project', 'Mix & volume', 'Site & schedule', 'Contact'];

  if (step === 4) {
    return (
      <div style={{ padding: '40px 32px', background: accent, color: '#0a0a0a', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em' }}>
          QUOTE #YYZ-{String(Date.now()).slice(-6)}
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', margin: '12px 0', lineHeight: 1.1 }}>
          Quote sent. We'll call within 2 hours.
        </div>
        <div style={{ fontSize: 14 }}>Office hours 6am–6pm Mon–Sat. After hours: dispatch line.</div>
        <button
          onClick={() => setStep(0)}
          style={{
            marginTop: 24, padding: '12px 22px', background: '#0a0a0a', color: accent,
            border: 'none', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', fontSize: 12, cursor: 'pointer',
          }}>
          Start another
        </button>
      </div>
    );
  }

  return (
    <div style={{ color: fg }}>
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
          <Lbl muted={muted}>What are you pouring?</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              ['driveway', 'Driveway / Walkway'],
              ['foundation', 'Foundation / Footings'],
              ['slab', 'Slab on grade'],
              ['commercial', 'Commercial / Industrial'],
              ['other', 'Something else'],
            ].map(([v, l]) => (
              <Choice key={v} value={v} current={data.project} onChange={(x) => set('project', x)} label={l} accent={accent} border={border} fg={fg} />
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <Lbl muted={muted}>Mix strength (PSI / MPa)</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 8, marginBottom: 24 }}>
            {[['25', '25 MPa'], ['32', '32 MPa'], ['35', '35 MPa'], ['40', '40 MPa']].map(([v, l]) => (
              <Choice key={v} value={v} current={data.psi} onChange={(x) => set('psi', x)} label={l} accent={accent} border={border} fg={fg} />
            ))}
          </div>
          <Lbl muted={muted}>Volume (m³)</Lbl>
          <Input value={data.volume} onChange={(v) => set('volume', v)} type="number" placeholder="15" fg={fg} border={border} />
        </>
      )}

      {step === 2 && (
        <>
          <Lbl muted={muted}>Job site address</Lbl>
          <div style={{ marginBottom: 16 }}>
            <Input value={data.addr} onChange={(v) => set('addr', v)} placeholder="123 Main St, Toronto, ON" fg={fg} border={border} />
          </div>
          <Lbl muted={muted}>Pour date</Lbl>
          <Input value={data.date} onChange={(v) => set('date', v)} type="date" fg={fg} border={border} />
        </>
      )}

      {step === 3 && (
        <>
          <Lbl muted={muted}>Your name & company</Lbl>
          <div style={{ marginBottom: 16 }}>
            <Input value={data.name} onChange={(v) => set('name', v)} placeholder="J. Smith — Smith Construction Ltd." fg={fg} border={border} />
          </div>
          <Lbl muted={muted}>Phone</Lbl>
          <div style={{ marginBottom: 16 }}>
            <Input value={data.phone} onChange={(v) => set('phone', v)} placeholder="416-555-0199" fg={fg} border={border} />
          </div>
          <Lbl muted={muted}>Notes (access, pump, time window)</Lbl>
          <Input value={data.notes} onChange={(v) => set('notes', v)} placeholder="Tight rear access, prefer 7am pour" fg={fg} border={border} />
        </>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0 || submitting}
          style={{
            padding: '14px 22px', background: 'transparent', border: `1px solid ${border}`,
            color: step === 0 ? muted : fg, fontFamily: 'inherit', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', cursor: step === 0 ? 'not-allowed' : 'pointer',
          }}>
          ← Back
        </button>
        <button
          onClick={step === 3 ? submit : () => setStep(step + 1)}
          disabled={submitting}
          style={{
            padding: '14px 28px', background: accent, border: 'none', color: '#0a0a0a',
            fontFamily: 'inherit', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em',
            textTransform: 'uppercase', cursor: submitting ? 'wait' : 'pointer',
            opacity: submitting ? 0.7 : 1,
          }}>
          {step === 3 ? (submitting ? 'Sending…' : 'Submit quote →') : 'Continue →'}
        </button>
      </div>
    </div>
  );
}
