import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use React Router Link for page navigation
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Globe,
  Smartphone,
  Layers,
  Code2,
  Brush,
  Figma,
  PenTool,
  Server,
  ShieldCheck,
  Mail,
  ShoppingCart,
  Settings,
  Search,
  LineChart,
  LifeBuoy,
  Zap,
} from "lucide-react";

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'Projects', to: '/projects' },
  // { label: 'Our Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Testimonial', to: '/testimonial' },
  { label: 'Contact', to: '/contact', isButton: true },
];

const menuData = [
  {
    title: "Website Development",
    items: [
      { icon: <Globe color="#FF6F00" />, label: "Custom Business Websites", desc: "Tailored websites for your business", to: "/servicespage#basic-website" },
      { icon: <ShoppingCart color="#FF6F00" />, label: "E-commerce Websites", desc: "Shopify, WooCommerce, etc.", to: "/servicespage#ecommerce" },
      { icon: <PenTool color="#FF6F00" />, label: "Portfolio Websites", desc: "Showcase your work", to: "/servicespage#basic-website" },
      { icon: <Layers color="#FF6F00" />, label: "Landing Pages", desc: "High-converting pages", to: "/servicespage#basic-website" },
      { icon: <Brush color="#FF6F00" />, label: "Redesign & UI Upgrades", desc: "Modernize old designs", to: "/servicespage#ui-ux" },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      { icon: <Smartphone color="#FF6F00" />, label: "Cross-Platform Apps", desc: "iOS & Android", to: "/servicespage#mobile-apps" },
      { icon: <Code2 color="#FF6F00" />, label: "Custom App Solutions", desc: "Tailored builds", to: "/servicespage#mobile-apps" },
      { icon: <Figma color="#FF6F00" />, label: "UI/UX Design", desc: "Clean interfaces", to: "/servicespage#ui-ux" },
      { icon: <Zap color="#FF6F00" />, label: "Performance Optimization", desc: "Speed & smooth UX", to: "/servicespage#performance" },
    ],
  },
  {
    title: "IT & Software Solutions",
    items: [
      { icon: <Settings color="#FF6F00" />, label: "Enterprise Development", desc: "Scalable apps", to: "/servicespage#enterprise" },
      { icon: <Code2 color="#FF6F00" />, label: "Custom Software", desc: "Fully customized", to: "/servicespage#custom-web-app" },
      { icon: <Layers color="#FF6F00" />, label: "Admin Dashboards", desc: "Modern tools", to: "/servicespage#custom-web-app" },
      { icon: <Server color="#FF6F00" />, label: "CRM & ERP Systems", desc: "Manage better", to: "/servicespage#enterprise" },
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      { icon: <Figma color="#FF6F00" />, label: "Prototyping", desc: "Figma flows", to: "/servicespage#ui-ux" },
      { icon: <Brush color="#FF6F00" />, label: "Web & App UI/UX", desc: "User-friendly", to: "/servicespage#ui-ux" },
      { icon: <PenTool color="#FF6F00" />, label: "Branding & Logo", desc: "Visual identity", to: "/servicespage#logo" },
    ],
  },
  {
    title: "Hosting & Domain Services",
    items: [
      { icon: <Globe color="#FF6F00" />, label: "Domain Management", desc: "Domain registration & renewal", to: "/servicespage#domain-hosting" },
      { icon: <Server color="#FF6F00" />, label: "Web Hosting", desc: "Shared, VPS, Dedicated", to: "/servicespage#domain-hosting" },
      { icon: <ShieldCheck color="#FF6F00" />, label: "SSL Setup", desc: "Secure your site", to: "/servicespage#ssl" },
      { icon: <Mail color="#FF6F00" />, label: "Email Hosting", desc: "Business emails", to: "/servicespage#domain-hosting" },
      { icon: <Layers color="#FF6F00" />, label: "Website Migration", desc: "Seamless transfers", to: "/servicespage#domain-hosting" },
    ],
  },
  {
    title: "Digital Marketing & SEO",
    items: [
      { icon: <Search color="#FF6F00" />, label: "SEO", desc: "Improve rankings", to: "/servicespage#seo" },
      { icon: <LineChart color="#FF6F00" />, label: "Performance Optimization", desc: "Better insights", to: "/servicespage#analytics" },
      { icon: <Zap color="#FF6F00" />, label: "Speed & Core Web Vitals", desc: "Faster load times", to: "/servicespage#performance" },
    ],
  },
  {
    title: "Consulting & IT Support",
    items: [
      { icon: <LifeBuoy color="#FF6F00" />, label: "IT Consulting", desc: "Expert advice", to: "/servicespage#consulting" },
      { icon: <Settings color="#FF6F00" />, label: "Maintenance", desc: "Web & App upkeep", to: "/servicespage#maintenance" },
      { icon: <ShieldCheck color="#FF6F00" />, label: "Troubleshooting", desc: "Fix software issues", to: "/servicespage#consulting" },
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  // Function to handle closing the dropdown when a menu item is clicked
  const handleItemClick = () => {
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
    setMenuOpen(false); // Close the main menu when an item is clicked in mobile view
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-[#FF6F00]">RanCo</span>
          <span className="text-[#0D5F53]">Tech</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 font-medium text-[#0D5F53] text-sm relative">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <div className="px-2 h-[72px] flex items-center cursor-pointer">
                  <button className="hover:text-[#FF6F00]">Services</button>
                </div>
                {desktopDropdownOpen && (
                  <div className="fixed top-[72px] left-1/2 transform -translate-x-1/2 w-[min(1300px,calc(100vw-2rem))] z-50">
                    <div className="absolute -top-4 left-0 w-full h-4"></div>
                    <div className="bg-white shadow-2xl rounded-xl p-6 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-h-[calc(100vh-88px)] overflow-y-auto">
                      {menuData.map((section, i) => (
                        <DropdownSection key={i} title={section.title} items={section.items} onItemClick={handleItemClick} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : item.isButton ? (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="ml-4 bg-[#FF6F00] text-white rounded-full px-4 py-2 hover:bg-[#e55f00] transition"
              >
                {item.label} →
              </Link>
            ) : (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="hover:text-[#FF6F00] cursor-pointer"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-[#0D5F53]" /> : <Menu size={28} className="text-[#0D5F53]" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-3 font-medium text-[#0D5F53] text-sm max-h-[90vh] overflow-y-auto">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full py-2 cursor-pointer"
                >
                  <span>{item.label}</span>
                  {mobileDropdownOpen ? (
                    <ChevronUp size={16} className="text-[#0D5F53]" />
                  ) : (
                    <ChevronDown size={16} className="text-[#0D5F53]" />
                  )}
                </button>
                {mobileDropdownOpen && (
                  <div className="mt-2 pl-3 border-l border-orange-300 space-y-2">
                    {menuData.map((section, i) => (
                      <div key={i}>
                        <span className="text-xs text-gray-500 uppercase mt-3 block">{section.title}</span>
                        {section.items.map((item, j) => (
                          <Link
                            key={j}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="block text-[#0D5F53] hover:text-[#FF6F00] cursor-pointer"
                            onClick={handleItemClick}
                          >
                            • {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : item.isButton ? (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={handleItemClick}
                className="inline-block mt-2 bg-[#FF6F00] text-white rounded-full px-4 py-2 hover:bg-[#ffa733] transition"
              >
                {item.label} →
              </Link>
            ) : (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-1 cursor-pointer"
                onClick={handleItemClick}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

const DropdownSection = ({ title, items, onItemClick }) => (
  <div>
    <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">{title}</h4>
    {items.map(({ icon, label, desc, to }, i) => (
      <DropdownItem key={i} icon={icon} label={label} desc={desc} to={to} onItemClick={onItemClick} />
    ))}
  </div>
);

const DropdownItem = ({ icon, label, desc, to, onItemClick }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="flex items-start space-x-3 py-2 hover:bg-gray-50 rounded-md px-2 transition cursor-pointer"
    onClick={onItemClick}
  >
    <div className="p-2 bg-orange-100 rounded-md text-[#FF6F00]">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-[#0D5F53]">{label}</p>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </Link>
);

export default Header;

