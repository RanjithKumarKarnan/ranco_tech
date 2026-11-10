import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const SHOW_AFTER_MS = 20000; // show 20s after the visitor arrives
const HIDE_AFTER_MS = 10000; // auto-hide after 10s
const SEEN_KEY = 'rancotech:adSeen';

// Storage can throw in private mode or when site data is blocked
const hasSeenAd = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

const markAdSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    // ignore
  }
};

const AdBanner = () => {
  const { pathname } = useLocation();
  const [isDue, setIsDue] = useState(false);
  const [isDone, setIsDone] = useState(hasSeenAd);

  useEffect(() => {
    if (isDone) return;
    const timer = setTimeout(() => setIsDue(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, [isDone]);

  // Never interrupt someone who is filling in the contact form
  const showAd = isDue && !isDone && pathname !== '/contact';

  useEffect(() => {
    if (!showAd) return;
    markAdSeen();
    const timer = setTimeout(() => setIsDone(true), HIDE_AFTER_MS);
    const onKeyDown = (e) => e.key === 'Escape' && setIsDone(true);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showAd]);

  if (!showAd) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={() => setIsDone(true)}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Image */}
        <img
          src="/RancoBanner.png"
          alt="RanCoTech — web and app development services"
          className="w-full h-auto object-cover rounded-2xl"
        />

        {/* Close Button */}
        <button
          onClick={() => setIsDone(true)}
          className="absolute top-4 right-4 bg-black/70 text-white hover:bg-red-600 p-2 rounded-full transition duration-300"
          aria-label="Close advertisement"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
