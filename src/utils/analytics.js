const safe = (fn) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') fn();
  } catch (_) {}
};

export const trackPhoneClick = () =>
  safe(() => window.gtag('event', 'phone_click', { event_category: 'contact', event_label: '647-465-1114' }));

export const trackEmailClick = () =>
  safe(() => window.gtag('event', 'email_click', { event_category: 'contact', event_label: 'info@yyzconcrete.com' }));

export const trackDirectionClick = () =>
  safe(() => window.gtag('event', 'direction_click', { event_category: 'contact', event_label: 'google_maps' }));

export const trackFormSubmit = (project) =>
  safe(() => window.gtag('event', 'generate_lead', { event_category: 'quote_form', event_label: project }));
