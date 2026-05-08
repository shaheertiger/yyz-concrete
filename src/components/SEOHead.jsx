import { Helmet } from 'react-helmet-async';

const SITE = 'https://yyzconcrete.com';

export function makeBreadcrumb(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(({ name, href }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE}${href}`,
    })),
  };
}

export function makeService(name, description, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': SITE,
      name: 'YYZ Concrete',
      telephone: '647-465-1114',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '200 Rexdale Blvd',
        addressLocality: 'Etobicoke',
        addressRegion: 'ON',
        postalCode: 'M9W 1R2',
        addressCountry: 'CA',
      },
    },
    areaServed: { '@type': 'City', name: 'Toronto' },
  };
}

export function makeFAQ(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export default function SEOHead({ title, description, canonical, ogImage, schemas = [] }) {
  const url = `${SITE}${canonical}`;
  const image = ogImage || `${SITE}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="YYZ Concrete" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
