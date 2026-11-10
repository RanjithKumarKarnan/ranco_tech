import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export const Container = ({ className, children }) => (
  <div className={cx('mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8', className)}>{children}</div>
);

const sectionTones = {
  white: 'bg-white',
  muted: 'bg-ink-50',
  brand: 'bg-brand-950 text-brand-100',
};

export const Section = ({ tone = 'white', id, className, children }) => (
  <section id={id} className={cx('py-20 lg:py-28', sectionTones[tone], className)}>
    <Container>{children}</Container>
  </section>
);

export const Eyebrow = ({ children, className }) => (
  <p className={cx('mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600', className)}>{children}</p>
);

export const SectionHeader = ({ eyebrow, title, lead, align = 'center', as: Heading = 'h2', className }) => (
  <div className={cx('reveal mb-12 lg:mb-16', align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Heading className="text-3xl font-bold leading-tight sm:text-4xl">{title}</Heading>
    {lead && <p className="mt-4 text-lg leading-relaxed text-ink-500">{lead}</p>}
  </div>
);

const buttonVariants = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 shadow-sm',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm',
  secondary: 'bg-white text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 hover:ring-ink-300',
  light: 'bg-white text-brand-900 hover:bg-brand-50',
  ghostLight: 'text-white ring-1 ring-inset ring-white/30 hover:bg-white/10',
};

const buttonSizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
};

// Renders a router <Link> for internal paths and an <a> for external/tel/mailto links
export const Button = ({ to, href, variant = 'primary', size = 'lg', className, children, ...rest }) => {
  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200',
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
  if (to) {
    return <Link to={to} className={classes} {...rest}>{children}</Link>;
  }
  const external = href?.startsWith('http');
  return (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
};

export const IconTile = ({ icon: Icon, className }) => (
  <span className={cx('inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100', className)}>
    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
  </span>
);

export const CheckList = ({ items, className }) => (
  <ul className={cx('space-y-3', className)}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <Check size={13} strokeWidth={3} aria-hidden="true" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-500">
    <ol className="flex flex-wrap items-center gap-2">
      <li><Link to="/" className="hover:text-brand-700">Home</Link></li>
      {items.map((item, i) => (
        <li key={item.label} className="flex items-center gap-2">
          <span aria-hidden="true" className="text-ink-300">/</span>
          {i === items.length - 1 ? (
            <span aria-current="page" className="font-medium text-ink-700">{item.label}</span>
          ) : (
            <Link to={item.to} className="hover:text-brand-700">{item.label}</Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Header block for inner pages
export const PageHero = ({ breadcrumbs, eyebrow, title, lead, children }) => (
  <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50 pt-32 pb-16 lg:pt-40 lg:pb-20">
    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
    <Container className="relative">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
      {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">{lead}</p>}
      {children}
    </Container>
  </section>
);
