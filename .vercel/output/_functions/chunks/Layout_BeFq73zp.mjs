import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderScript, d as createAstro, a as renderComponent, g as renderHead, h as renderSlot } from './astro/server_Cx1fVRid.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$Favicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xml:space="preserve" version="1.1" style="clip-rule:evenodd;fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision" viewBox="0 0 224 243" id="svg3" xmlns="http://www.w3.org/2000/svg"> <defs id="defs1"> <style type="text/css" id="style1">.fil0{fill:#000;fill-rule:nonzero}</style> </defs> <g id="Capa_x0020_1" transform="translate(-12873 -9692)"> <g id="_1823881388400"> <path class="fil0" d="M12946 9830v19c0 12 10 22 22 22h34c12 0 22-10 22-22v-12h-24v10h-30v-17z" id="path1"></path> <path class="fil0" d="M13040 9769v-14c0-3-1-5-3-5h-105c-1 0-3 2-3 5v41c0 3 2 5 3 5h16v-23c0-11 9-20 20-20h33c11 0 21 9 21 20v12h-23v-9h-28v20h66c15 0 26 13 26 28v43c0 15-11 28-26 28h-105c-14 0-26-13-26-28v-39h1c12 0 22 10 22 22v17c0 3 2 5 3 5h105c2 0 3-2 3-5v-43c0-3-1-5-3-5h-105c-14 0-26-12-26-28v-41c0-16 12-28 26-28h105c15 0 26 12 26 28v37h-1c-12 0-22-10-22-22z" id="path2"></path> <path class="fil0" d="M12926 9708c-21 0-38 17-38 38v136c0 21 17 38 38 38h117c21 0 38-17 38-38v-136c0-21-17-38-38-38zm117 227h-117c-29 0-53-24-53-53v-136c0-30 24-54 53-54h117c30 0 54 24 54 54v136c0 29-24 53-54 53z" id="path3"></path> </g> </g> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/Favicon.astro", undefined);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ES"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/layouts/Layout.astro", undefined);

export { $$Layout as $, $$Favicon as a };
