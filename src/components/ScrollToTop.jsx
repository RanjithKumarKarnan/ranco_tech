import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 96; // fixed 72px header + breathing room

// offsetTop ignores CSS transforms, so entrance animations (e.g. y: 40) don't skew the target
const getPageTop = (el) => {
  let top = 0;
  for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
  return top;
};

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Effects run after the new route is in the DOM, so the #section target can be looked up directly
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      window.scrollTo({ top: getPageTop(target) - HEADER_OFFSET, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
