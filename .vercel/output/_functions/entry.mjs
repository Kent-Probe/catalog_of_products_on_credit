import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CX6LIlmB.mjs';
import { manifest } from './manifest_BA5Vx75e.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/signin.astro.mjs');
const _page2 = () => import('./pages/api/auth/signout.astro.mjs');
const _page3 = () => import('./pages/api/catalog.astro.mjs');
const _page4 = () => import('./pages/create-credit.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/signin.ts", _page1],
    ["src/pages/api/auth/signout.ts", _page2],
    ["src/pages/api/catalog/index.ts", _page3],
    ["src/pages/create-credit.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c36978ec-a169-4025-b7d2-2452cf9093d6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };