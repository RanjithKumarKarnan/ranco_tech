import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../data/site';
import { getPageMeta } from './meta';

// Find a <meta>/<link> by its identifying attribute (creating it if missing) and set its value
const upsert = (tagName, keyAttr, key, valueAttr, value) => {
  let el = document.head.querySelector(`${tagName}[${keyAttr}="${key}"]`);
  if (!el) {
    el = document.createElement(tagName);
    el.setAttribute(keyAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
};

// Pre-rendered pages already ship the right tags; this keeps them correct during in-app navigation.
const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageMeta(pathname);
    const url = `${SITE.url}${page.path === '/' ? '/' : page.path}`;

    document.title = page.title;
    upsert('meta', 'name', 'description', 'content', page.description);
    upsert('meta', 'name', 'robots', 'content', page.noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large');
    upsert('meta', 'property', 'og:title', 'content', page.title);
    upsert('meta', 'property', 'og:description', 'content', page.description);
    upsert('meta', 'property', 'og:url', 'content', url);
    upsert('link', 'rel', 'canonical', 'href', url);
  }, [pathname]);
};

export default usePageMeta;
