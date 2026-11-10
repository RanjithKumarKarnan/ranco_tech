import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getPageMeta, prerenderRoutes, renderHeadTags } from './seo/meta';
import { SITE } from './data/site';

// Used only at build time by scripts/prerender.mjs
export const render = (url) => {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: renderHeadTags(getPageMeta(url)) };
};

export { prerenderRoutes, SITE };
