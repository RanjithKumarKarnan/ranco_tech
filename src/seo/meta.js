import { SITE } from '../data/site';
import { services, getService } from '../data/services';
import { faqs } from '../data/content';

const OG_IMAGE = `${SITE.url}/og-image.png`;

const organization = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/favicon.png`,
  image: OG_IMAGE,
  description: 'RanCoTech is a web, mobile app and software development company in Trichy, India, serving businesses worldwide.',
  email: SITE.email,
  telephone: SITE.phone.replace(/\s/g, ''),
  foundingDate: String(SITE.foundingYear),
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: Object.values(SITE.socials),
};

const breadcrumbs = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE.url}${item.path === '/' ? '' : item.path}`,
  })),
});

const faqPage = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

const pages = {
  '/': {
    title: 'Web & App Development Company in India | RanCoTech',
    description:
      'RanCoTech builds fast, SEO-ready websites, mobile apps and custom software for businesses in India and worldwide. 50+ projects, 5.0 client rating. Get a free quote.',
    schema: [
      organization,
      { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { '@id': `${SITE.url}/#organization` } },
    ],
  },
  '/services': {
    title: 'Web, App & Software Development Services | RanCoTech',
    description:
      'Website development, mobile apps, e-commerce, custom software, UI/UX design, SEO and hosting — every digital service your business needs, from one team.',
    trail: [{ name: 'Services', path: '/services' }],
  },
  '/projects': {
    title: 'Our Work — Website & App Projects | RanCoTech',
    description:
      'See websites RanCoTech has designed and built for healthcare institutions, schools, research organisations and businesses in India and Europe.',
    trail: [{ name: 'Projects', path: '/projects' }],
  },
  '/about': {
    title: 'About RanCoTech — Software Company in Trichy, India',
    description:
      'RanCoTech is a web and app development company based in Trichy, Tamil Nadu, delivering digital products to 50+ clients across 11+ countries since 2022.',
    trail: [{ name: 'About', path: '/about' }],
  },
  '/testimonials': {
    title: 'Client Reviews & Testimonials | RanCoTech',
    description:
      'Read what clients in the US, UK, Germany, the Netherlands, Singapore and beyond say about working with RanCoTech. 5.0 average rating across 50+ projects.',
    trail: [{ name: 'Reviews', path: '/testimonials' }],
  },
  '/faq': {
    title: 'FAQ — Website & App Development Questions | RanCoTech',
    description:
      'Answers to common questions about website and app development costs, timelines, technologies, SEO and support at RanCoTech.',
    trail: [{ name: 'FAQ', path: '/faq' }],
    schema: [faqPage(faqs)],
  },
  '/contact': {
    title: 'Contact RanCoTech — Get a Free Quote',
    description:
      'Tell us about your website, app or software project and get a free quote. We reply within 2 hours on business days. Call or WhatsApp +91 93616 60714.',
    trail: [{ name: 'Contact', path: '/contact' }],
    schema: [organization],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | RanCoTech',
    description: 'How RanCoTech collects, uses and protects the personal information you share through our website.',
    trail: [{ name: 'Privacy Policy', path: '/privacy-policy' }],
  },
  '/terms': {
    title: 'Terms of Service | RanCoTech',
    description: 'The terms that apply to your use of the RanCoTech website.',
    trail: [{ name: 'Terms of Service', path: '/terms' }],
  },
};

const notFound = {
  title: 'Page Not Found | RanCoTech',
  description: 'The page you are looking for does not exist.',
  noindex: true,
};

export const getPageMeta = (pathname) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = getService(serviceMatch[1]);
    if (!service) return { ...notFound, path };
    return {
      path,
      title: service.metaTitle,
      description: service.metaDescription,
      schema: [
        {
          '@type': 'Service',
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${SITE.url}${path}`,
          provider: { '@id': `${SITE.url}/#organization`, '@type': 'ProfessionalService', name: SITE.name },
          areaServed: 'Worldwide',
        },
        breadcrumbs([{ name: 'Services', path: '/services' }, { name: service.name, path }]),
        faqPage(service.faqs),
      ],
    };
  }

  const page = pages[path];
  if (!page) return { ...notFound, path };
  return {
    path,
    title: page.title,
    description: page.description,
    schema: [...(page.schema || []), ...(page.trail ? [breadcrumbs(page.trail)] : [])],
  };
};

export const prerenderRoutes = [...Object.keys(pages), ...services.map((s) => `/services/${s.slug}`)];

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Server-side: the full set of <head> tags for a page, injected by scripts/prerender.mjs
export const renderHeadTags = (meta) => {
  const url = `${SITE.url}${meta.path === '/' ? '/' : meta.path}`;
  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    meta.noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />',
  ];
  if (!meta.noindex) tags.push(`<link rel="canonical" href="${url}" />`);
  tags.push(
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:site_name" content="${SITE.name}" />`,
    '<meta property="og:locale" content="en_US" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  );
  if (meta.schema?.length) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': meta.schema }).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join('\n    ');
};
