import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/site';

const FloatingButtons = () => (
  <a
    href={SITE.whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    title="Chat on WhatsApp"
    aria-label="Chat with RanCoTech on WhatsApp"
    className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform duration-200 hover:scale-105"
  >
    <FaWhatsapp size={28} aria-hidden="true" />
  </a>
);

export default FloatingButtons;
