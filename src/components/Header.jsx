import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { Button, Container } from './ui';

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' },
];

export const Logo = ({ light = false }) => (
  <Link to="/" className="text-xl font-extrabold tracking-tight" aria-label="RanCoTech home">
    <span className="text-accent-500">RanCo</span>
    <span className={light ? 'text-white' : 'text-brand-700'}>Tech</span>
  </Link>
);

const navLinkClass = ({ isActive }) =>
  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? 'text-brand-700' : 'text-ink-700 hover:text-brand-700'}`;

const Header = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);

  // Close menus whenever the page changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e) => {
      if (!servicesRef.current?.contains(e.target)) setServicesOpen(false);
    };
    const onKeyDown = (e) => e.key === 'Escape' && setServicesOpen(false);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen ? 'border-ink-100 bg-white/90 backdrop-blur-lg' : 'border-transparent bg-white/0'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isServicesActive ? 'text-brand-700' : 'text-ink-700 hover:text-brand-700'
              }`}
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            <div
              id="services-menu"
              className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition duration-200 ${
                servicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <div className="rounded-2xl border border-ink-100 bg-white p-3 shadow-[0_24px_48px_-16px_rgb(15_31_28/0.18)]">
                <ul className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                          <service.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink-900">{service.name}</span>
                          <span className="mt-0.5 block text-xs leading-snug text-ink-500">{service.summary}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/services"
                      className="flex h-full items-center justify-center gap-2 rounded-xl bg-ink-50 p-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                    >
                      All services <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button to="/contact" variant="accent" size="md">
              Get a free quote
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-50 lg:hidden"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div id="mobile-menu" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
          <Container className="py-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Services</p>
            <ul className="mb-6 grid gap-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-[15px] font-medium text-ink-900 hover:bg-ink-50">
                    <service.icon size={18} className="text-brand-700" aria-hidden="true" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mb-8 grid gap-1 border-t border-ink-100 pt-6">
              {[{ label: 'All services', to: '/services' }, ...navLinks, { label: 'Contact', to: '/contact' }].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="block rounded-xl px-2 py-2.5 text-[15px] font-medium text-ink-900 hover:bg-ink-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="accent" className="w-full">
              Get a free quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
