import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderScript, d as renderComponent, b as createAstro, g as renderSlot, a as addAttribute } from '../chunks/astro/server_BGds0R7D.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { h as $$CloseIcon, a as $$CameraIcon, b as $$CameraFrontIcon, c as $$HardDiskIcon, d as $$MemoryIcon, e as $$ProcessorIcon, f as $$DeviceIcon, g as $$BatteryIcon, $ as $$Header, i as $$Footer } from '../chunks/ProcessorIcon_Cg37_PKP.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DGlmUXFV.mjs';
import { a as app } from '../chunks/server_DFiT9_Sm.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { $ as $$Layout } from '../chunks/Layout_GI25vXjH.mjs';
export { renderers } from '../renderers.mjs';

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-kggsjsm4></div> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Banner.astro", void 0);

const $$Astro$9 = createAstro();
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Chip;
  const { text, query } = Astro2.props;
  return renderTemplate`${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Chip.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "chip-element", "chip-element", { "data-query": query, "class": "chip", "data-astro-cid-b4zvghpy": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<span class="chip-text" data-astro-cid-b4zvghpy>${text}</span> <span class="chip-close" data-astro-cid-b4zvghpy> ${renderComponent($$result, "CloseIcon", $$CloseIcon, { "data-astro-cid-b4zvghpy": true })} </span> ` })} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Chip.astro", void 0);

const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="21" height="12" viewBox="0 0 21 12" fill="none"> <path d="M1.93627 1.0334C1.8408 0.943181 1.7285 0.872652 1.60577 0.825836C1.48304 0.779021 1.35229 0.756836 1.22099 0.76055C1.08969 0.764265 0.960401 0.793805 0.840516 0.847484C0.72063 0.901162 0.612491 0.977929 0.522273 1.0734C0.432054 1.16887 0.361524 1.28118 0.314709 1.40391C0.267893 1.52663 0.245709 1.65738 0.249423 1.78868C0.253138 1.91999 0.282678 2.04927 0.336356 2.16916C0.390035 2.28904 0.466801 2.39718 0.562272 2.4874L9.56227 10.9874C9.74794 11.1629 9.99376 11.2607 10.2493 11.2607C10.5048 11.2607 10.7506 11.1629 10.9363 10.9874L19.9373 2.4874C20.0348 2.39778 20.1136 2.28966 20.169 2.16934C20.2245 2.04901 20.2554 1.91887 20.2601 1.78647C20.2648 1.65408 20.2432 1.52207 20.1964 1.39811C20.1497 1.27416 20.0788 1.16072 19.9878 1.0644C19.8969 0.968082 19.7877 0.890794 19.6666 0.837028C19.5455 0.783261 19.415 0.754089 19.2825 0.751204C19.1501 0.74832 19.0184 0.771781 18.8951 0.820225C18.7718 0.868669 18.6593 0.94113 18.5643 1.0334L10.2493 8.8854L1.93627 1.0334Z" fill="black"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/Arrow.astro", void 0);

const $$Astro$8 = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button" class="accordion" data-astro-cid-auxcs6au> <span data-astro-cid-auxcs6au> ${title} </span> <div id="arrow" data-astro-cid-auxcs6au> ${renderComponent($$result, "Arrow", $$Arrow, { "data-astro-cid-auxcs6au": true })} </div> </button> <div class="panel" data-astro-cid-auxcs6au> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/layouts/Accordion.astro", void 0);

const $$FilterIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-e2v6vz7o> <path d="M10.0011 9V16.88C10.0411 17.18 9.94111 17.5 9.71111 17.71C9.61859 17.8027 9.5087 17.8763 9.38773 17.9264C9.26676 17.9766 9.13708 18.0024 9.00611 18.0024C8.87514 18.0024 8.74546 17.9766 8.62448 17.9264C8.50351 17.8763 8.39362 17.8027 8.30111 17.71L6.29111 15.7C6.18211 15.5933 6.09922 15.4629 6.04892 15.319C5.99861 15.175 5.98225 15.0213 6.00111 14.87V9H5.97111L0.211108 1.62C0.0487158 1.41153 -0.0245586 1.14726 0.00729555 0.88493C0.0391497 0.622602 0.173543 0.383546 0.381108 0.22C0.571108 0.08 0.781108 0 1.00111 0H15.0011C15.2211 0 15.4311 0.08 15.6211 0.22C15.8287 0.383546 15.9631 0.622602 15.9949 0.88493C16.0268 1.14726 15.9535 1.41153 15.7911 1.62L10.0311 9H10.0011Z" data-astro-cid-e2v6vz7o></path> </svg> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/FilterIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$FilterSlideRam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FilterSlideRam;
  const { min, max, typeFilter, steper = 2, title, id, minCurrent, maxCurrent } = Astro2.props;
  return renderTemplate`<meta name="typeFilter-ram"${addAttribute(typeFilter, "content")}>${maybeRenderHead()}<div${addAttribute(`double-slider-box`, "class")} data-astro-cid-kwkgmcmq> <h3 class="range-title" data-astro-cid-kwkgmcmq>${title}</h3> <div class="range-slider" data-astro-cid-kwkgmcmq> <span class="slider-track-ram" data-astro-cid-kwkgmcmq></span> <input data-input-minram type="range" name="min_val" class="min-val-ram"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(minCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-kwkgmcmq> <input data-input-maxram type="range" name="max_val" class="max-val-ram"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(maxCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-kwkgmcmq> <div class="tooltip min-tooltip-ram" data-astro-cid-kwkgmcmq>${minCurrent} ${typeFilter}</div> <div class="tooltip max-tooltip-ram" data-astro-cid-kwkgmcmq>${maxCurrent} ${typeFilter}</div> </div> <div class="input-box" data-astro-cid-kwkgmcmq> <div class="min-box" data-astro-cid-kwkgmcmq> <div class="input-wrap" data-astro-cid-kwkgmcmq> <input type="text"${addAttribute(minCurrent, "value")} name="min_input" class="input-field min-input-ram" data-astro-cid-kwkgmcmq> <span class="input-addon" data-astro-cid-kwkgmcmq>${typeFilter}</span> </div> </div> <div class="max-box" data-astro-cid-kwkgmcmq> <div class="input-wrap" data-astro-cid-kwkgmcmq> <input type="text"${addAttribute(maxCurrent, "value")} name="max_input" class="input-field max-input-ram" data-astro-cid-kwkgmcmq> <span class="input-addon" data-astro-cid-kwkgmcmq>${typeFilter}</span> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideRam.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideRam.astro", void 0);

const $$Astro$6 = createAstro();
const $$FilterSlideRom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FilterSlideRom;
  const { min, max, typeFilter, steper = 2, title, id, maxCurrent, minCurrent } = Astro2.props;
  return renderTemplate`<meta name="typeFilter-rom"${addAttribute(typeFilter, "content")}>${maybeRenderHead()}<div${addAttribute(`double-slider-box`, "class")} data-astro-cid-oe5zida7> <h3 class="range-title" data-astro-cid-oe5zida7>${title}</h3> <div class="range-slider" data-astro-cid-oe5zida7> <span class="slider-track-rom" data-astro-cid-oe5zida7></span> <input data-input-minrom type="range" name="min_val" class="min-val-rom"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(minCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-oe5zida7> <input data-input-maxrom type="range" name="max_val" class="max-val-rom"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(maxCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-oe5zida7> <div class="tooltip min-tooltip-rom" data-astro-cid-oe5zida7>${minCurrent} ${typeFilter}</div> <div class="tooltip max-tooltip-rom" data-astro-cid-oe5zida7>${maxCurrent} ${typeFilter}</div> </div> <div class="input-box" data-astro-cid-oe5zida7> <div class="min-box" data-astro-cid-oe5zida7> <div class="input-wrap" data-astro-cid-oe5zida7> <input type="text" name="min_input"${addAttribute(maxCurrent, "value")} class="input-field min-input-rom" data-astro-cid-oe5zida7> <span class="input-addon" data-astro-cid-oe5zida7>${typeFilter}</span> </div> </div> <div class="max-box" data-astro-cid-oe5zida7> <div class="input-wrap" data-astro-cid-oe5zida7> <input type="text" name="max_input"${addAttribute(minCurrent, "value")} class="input-field max-input-rom" data-astro-cid-oe5zida7> <span class="input-addon" data-astro-cid-oe5zida7>${typeFilter}</span> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideRom.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideRom.astro", void 0);

const $$Astro$5 = createAstro();
const $$FilterSlideCamera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FilterSlideCamera;
  const { min, max, typeFilter, steper = 2, title, id, minCurrent, maxCurrent } = Astro2.props;
  return renderTemplate`<meta name="typeFilter-camera"${addAttribute(typeFilter, "content")}>${maybeRenderHead()}<div${addAttribute(`double-slider-box`, "class")} data-astro-cid-3tudvhvb> <h3 class="range-title" data-astro-cid-3tudvhvb>${title}</h3> <div class="range-slider" data-astro-cid-3tudvhvb> <span class="slider-track-camera" data-astro-cid-3tudvhvb></span> <input data-input-mincamera type="range" name="min_val" class="min-val-camera"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(minCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-3tudvhvb> <input data-input-maxcamera type="range" name="max_val" class="max-val-camera"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(maxCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-3tudvhvb> <div class="tooltip min-tooltip-camera" data-astro-cid-3tudvhvb>${minCurrent} ${typeFilter}</div> <div class="tooltip max-tooltip-camera" data-astro-cid-3tudvhvb>${maxCurrent} ${typeFilter}</div> </div> <div class="input-box" data-astro-cid-3tudvhvb> <div class="min-box" data-astro-cid-3tudvhvb> <div class="input-wrap" data-astro-cid-3tudvhvb> <input type="text" name="min_input"${addAttribute(minCurrent, "value")} class="input-field min-input-camera" data-astro-cid-3tudvhvb> <span class="input-addon" data-astro-cid-3tudvhvb>${typeFilter}</span> </div> </div> <div class="max-box" data-astro-cid-3tudvhvb> <div class="input-wrap" data-astro-cid-3tudvhvb> <input type="text" name="max_input"${addAttribute(maxCurrent, "value")} class="input-field max-input-camera" data-astro-cid-3tudvhvb> <span class="input-addon" data-astro-cid-3tudvhvb>${typeFilter}</span> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideCamera.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideCamera.astro", void 0);

const $$Astro$4 = createAstro();
const $$FilterSlideBaterry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FilterSlideBaterry;
  const { min, max, typeFilter, steper = 2, title, id, minCurrent, maxCurrent } = Astro2.props;
  return renderTemplate`<meta name="typeFilter-baterry"${addAttribute(typeFilter, "content")}>${maybeRenderHead()}<div${addAttribute(`double-slider-box`, "class")} data-astro-cid-lz7ubn5t> <h3 class="range-title" data-astro-cid-lz7ubn5t>${title}</h3> <div class="range-slider" data-astro-cid-lz7ubn5t> <span class="slider-track-baterry" data-astro-cid-lz7ubn5t></span> <input type="range" data-input-minbaterry name="min_val" class="min-val-baterry"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(minCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-lz7ubn5t> <input type="range" data-input-maxbaterry name="max_val" class="max-val-baterry"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(maxCurrent, "value")}${addAttribute(steper, "step")} id="range-slider-ram" data-astro-cid-lz7ubn5t> <div class="tooltip min-tooltip-baterry" data-astro-cid-lz7ubn5t>${minCurrent} ${typeFilter}</div> <div class="tooltip max-tooltip-baterry" data-astro-cid-lz7ubn5t>${maxCurrent} ${typeFilter}</div> </div> <div class="input-box" data-astro-cid-lz7ubn5t> <div class="min-box" data-astro-cid-lz7ubn5t> <div class="input-wrap" data-astro-cid-lz7ubn5t> <input type="text" name="min_input"${addAttribute(minCurrent, "value")} class="input-field min-input-baterry" data-astro-cid-lz7ubn5t> <span class="input-addon" data-astro-cid-lz7ubn5t>${typeFilter}</span> </div> </div> <div class="max-box" data-astro-cid-lz7ubn5t> <div class="input-wrap" data-astro-cid-lz7ubn5t> <input type="text" name="max_input"${addAttribute(maxCurrent, "value")} class="input-field max-input-baterry" data-astro-cid-lz7ubn5t> <span class="input-addon" data-astro-cid-lz7ubn5t>${typeFilter}</span> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideBaterry.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/filters/FilterSlideBaterry.astro", void 0);

const $$Astro$3 = createAstro();
const $$Filter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Filter;
  let financials = [];
  let ram = [];
  let rom = [];
  let baterry = [];
  let camera = [];
  if (Astro2.request.url) {
    const url = new URL(Astro2.request.url);
    url.searchParams.get("search") || "";
    financials = url.searchParams.get("financials")?.toLowerCase().split(",") || [];
    ram = url.searchParams.get("ram")?.split(",") || [];
    rom = url.searchParams.get("rom")?.split(",") || [];
    baterry = url.searchParams.get("battery")?.split(",") || [];
    camera = url.searchParams.get("camera")?.split(",") || [];
  }
  return renderTemplate`${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Filter.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="container" data-astro-cid-nhxjo3iv> <form data-form-filter action="" method="get" data-astro-cid-nhxjo3iv> ${renderComponent($$result, "Accordion", $$Accordion, { "title": "Financieras", "data-astro-cid-nhxjo3iv": true }, { "default": ($$result2) => renderTemplate` <label class="container_cb" data-astro-cid-nhxjo3iv>Celya
<input${addAttribute(financials.includes("celya"), "checked")} data-checkbox-celya type="checkbox" data-astro-cid-nhxjo3iv> <span class="checkmark" data-astro-cid-nhxjo3iv></span> </label> <label class="container_cb" data-astro-cid-nhxjo3iv>Krediya
<input${addAttribute(financials.includes("krediya"), "checked")} data-checkbox-krediya type="checkbox" data-astro-cid-nhxjo3iv> <span class="checkmark" data-astro-cid-nhxjo3iv></span> </label> <label class="container_cb" data-astro-cid-nhxjo3iv>Alo Cred
<input${addAttribute(financials.includes("alo cred"), "checked")} data-checkbox-alocred type="checkbox" data-astro-cid-nhxjo3iv> <span class="checkmark" data-astro-cid-nhxjo3iv></span> </label> ` })} ${renderComponent($$result, "Accordion", $$Accordion, { "title": "RAM", "data-astro-cid-nhxjo3iv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FilterSlideRam", $$FilterSlideRam, { "id": "ram", "typeFilter": "GB", "min": 2, "max": 512, "minCurrent": ram[0] ?? 2, "maxCurrent": ram[1] ?? 512, "title": "Seleccione el rango de RAM", "data-astro-cid-nhxjo3iv": true })} ` })} ${renderComponent($$result, "Accordion", $$Accordion, { "title": "Almacenamiento", "data-astro-cid-nhxjo3iv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FilterSlideRom", $$FilterSlideRom, { "id": "rom", "typeFilter": "GB", "min": 8, "max": 1024, "minCurrent": rom[0] ?? 8, "maxCurrent": rom[1] ?? 1024, "title": "Seleccione el rango de Almacenamiento", "data-astro-cid-nhxjo3iv": true })} ` })} ${renderComponent($$result, "Accordion", $$Accordion, { "title": "C\xE1mara principal", "data-astro-cid-nhxjo3iv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FilterSlideCamera", $$FilterSlideCamera, { "id": "cam-principal", "typeFilter": "MP", "min": 5, "max": 300, "minCurrent": camera[0] ?? 5, "maxCurrent": camera[1] ?? 300, "title": "Seleccione el rango de MP", "data-astro-cid-nhxjo3iv": true })} ` })} ${renderComponent($$result, "Accordion", $$Accordion, { "title": "Bater\xEDa", "data-astro-cid-nhxjo3iv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FilterSlideBaterry", $$FilterSlideBaterry, { "steper": 50, "id": "baterry", "typeFilter": "mAh", "min": 2e3, "max": 1e4, "minCurrent": baterry[0] ?? 2e3, "maxCurrent": baterry[1] ?? 1e4, "title": "Seleccione el rango de mAh", "data-astro-cid-nhxjo3iv": true })} ` })} <button data-button="filter" type="submit" class="btn-filter" data-astro-cid-nhxjo3iv> ${renderComponent($$result, "FilterIcon", $$FilterIcon, { "data-astro-cid-nhxjo3iv": true })}
Aplicar Filtros
</button> </form> </div> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Filter.astro", void 0);

const ImageSrc = new Proxy({"src":"/_astro/placeHolder.qQX1mJRC.png","width":1445,"height":1445,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/img/placeHolder.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$CardProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardProduct;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card-product" data-astro-cid-h2eev32q> <div class="card-product__header" data-astro-cid-h2eev32q> <div class="card-product__container-img" data-astro-cid-h2eev32q> ${renderComponent($$result, "Image", $$Image, { "height": "100%", "width": "100%", "src": ImageSrc, "alt": product.model, "loading": "lazy", "inferSize": true, "data-astro-cid-h2eev32q": true })} </div> <div class="card-product__content" data-astro-cid-h2eev32q> <p data-astro-cid-h2eev32q>${product.brand}</p> <h3 data-astro-cid-h2eev32q>${product.model}</h3> <div class="content__info" data-astro-cid-h2eev32q> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "CameraIcon", $$CameraIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.rear_camera_mp} MP</span> </p> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "CameraFrontIcon", $$CameraFrontIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.front_camera_mp} MP</span> </p> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "HardDiskIcon", $$HardDiskIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.rom_memory_gb} GB</span> </p> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "MemoryIcon", $$MemoryIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.ram_memory_gb} GB</span> </p> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "ProcessorIcon", $$ProcessorIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.processor}</span> </p> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "DeviceIcon", $$DeviceIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.screen_inches}''</span> </p> <p class="info__data" data-astro-cid-h2eev32q> <span data-astro-cid-h2eev32q> ${renderComponent($$result, "BatteryIcon", $$BatteryIcon, { "fill": "#a754fa", "data-astro-cid-h2eev32q": true })} </span> <span data-astro-cid-h2eev32q>${product.battery_mah} mAh</span> </p> </div> </div> </div> <div class="card-product__footer-info" data-astro-cid-h2eev32q> <h4 data-astro-cid-h2eev32q>Ahorra: $${product.savings.toLocaleString()}</h4> <div class="footer-info__data" data-astro-cid-h2eev32q> <h5 data-astro-cid-h2eev32q>Financiera</h5> <div class="footer-info__chips" data-astro-cid-h2eev32q> ${product.financials.map((financial) => renderTemplate`<span data-astro-cid-h2eev32q>${financial}</span>`)} </div> </div> </div> <div class="card-product__quotas" data-astro-cid-h2eev32q> ${product.installments.map((installment, index) => renderTemplate`<div class="quotas__chip" data-astro-cid-h2eev32q> <p data-astro-cid-h2eev32q>${index === 0 ? "Inicial" : installment.quantity + " Cuotas"}</p> <p data-astro-cid-h2eev32q>$ ${installment.price.toLocaleString()}</p> </div>`)} </div> </article> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/CardProduct.astro", void 0);

const products = [{"id":1,"brand":"Samsung","model":"Galaxy S21","rear_camera_mp":64,"front_camera_mp":10,"rom_memory_gb":128,"ram_memory_gb":8,"processor":"Exynos 2100","screen_inches":6.2,"battery_mah":4000,"financials":["Celya","Krediya"],"savings":150000,"installments":[{"quantity":1,"price":100000},{"quantity":12,"price":50000},{"quantity":24,"price":25000}]},{"id":2,"brand":"Apple","model":"iPhone 13","rear_camera_mp":12,"front_camera_mp":12,"rom_memory_gb":256,"ram_memory_gb":4,"processor":"A15 Bionic","screen_inches":6.1,"battery_mah":3240,"financials":["Alo Cred","Krediya"],"savings":200000,"installments":[{"quantity":1,"price":150000},{"quantity":12,"price":60000}]},{"id":3,"brand":"Xiaomi","model":"Mi 11","rear_camera_mp":108,"front_camera_mp":20,"rom_memory_gb":128,"ram_memory_gb":8,"processor":"Snapdragon 888","screen_inches":6.81,"battery_mah":4600,"financials":["Celya","Alo Cred"],"savings":180000,"installments":[{"quantity":1,"price":120000},{"quantity":12,"price":55000},{"quantity":24,"price":27500},{"quantity":36,"price":18500}]},{"id":4,"brand":"OnePlus","model":"9 Pro","rear_camera_mp":48,"front_camera_mp":16,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 888","screen_inches":6.7,"battery_mah":4500,"financials":["Krediya","Alo Cred"],"savings":220000,"installments":[{"quantity":1,"price":160000},{"quantity":12,"price":70000},{"quantity":24,"price":35000},{"quantity":36,"price":23000}]},{"id":5,"brand":"Google","model":"Pixel 6","rear_camera_mp":50,"front_camera_mp":8,"rom_memory_gb":128,"ram_memory_gb":8,"processor":"Google Tensor","screen_inches":6.4,"battery_mah":4614,"financials":["Celya","Krediya"],"savings":250000,"installments":[{"quantity":1,"price":180000},{"quantity":12,"price":80000}]},{"id":6,"brand":"Huawei","model":"P40 Pro","rear_camera_mp":50,"front_camera_mp":32,"rom_memory_gb":256,"ram_memory_gb":8,"processor":"Kirin 990 5G","screen_inches":6.58,"battery_mah":4200,"financials":["Alo Cred","Celya"],"savings":300000,"installments":[{"quantity":1,"price":200000},{"quantity":12,"price":90000},{"quantity":24,"price":45000},{"quantity":36,"price":30000}]},{"id":7,"brand":"Sony","model":"Xperia 1 III","rear_camera_mp":12,"front_camera_mp":8,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 888","screen_inches":6.5,"battery_mah":4500,"financials":["Krediya","Alo Cred"],"savings":270000,"installments":[{"quantity":1,"price":190000},{"quantity":12,"price":85000},{"quantity":24,"price":42500},{"quantity":36,"price":28000}]},{"id":8,"brand":"Oppo","model":"Find X3 Pro","rear_camera_mp":50,"front_camera_mp":32,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 888","screen_inches":6.7,"battery_mah":4500,"financials":["Celya","Krediya"],"savings":320000,"installments":[{"quantity":1,"price":210000},{"quantity":12,"price":100000},{"quantity":24,"price":50000},{"quantity":36,"price":33000}]},{"id":9,"brand":"Vivo","model":"X60 Pro","rear_camera_mp":48,"front_camera_mp":32,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 870","screen_inches":6.56,"battery_mah":4200,"financials":["Alo Cred","Celya"],"savings":350000,"installments":[{"quantity":1,"price":220000},{"quantity":12,"price":110000}]},{"id":10,"brand":"Realme","model":"GT","rear_camera_mp":64,"front_camera_mp":16,"rom_memory_gb":128,"ram_memory_gb":8,"processor":"Snapdragon 888","screen_inches":6.43,"battery_mah":4500,"financials":["Krediya","Alo Cred"],"savings":380000,"installments":[{"quantity":1,"price":230000},{"quantity":12,"price":120000},{"quantity":24,"price":60000}]},{"id":11,"brand":"Motorola","model":"Edge 20 Pro","rear_camera_mp":108,"front_camera_mp":32,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 870","screen_inches":6.7,"battery_mah":4500,"financials":["Celya","Krediya"],"savings":400000,"installments":[{"quantity":1,"price":240000},{"quantity":12,"price":130000},{"quantity":24,"price":65000}]},{"id":12,"brand":"Asus","model":"ROG Phone 5","rear_camera_mp":64,"front_camera_mp":24,"rom_memory_gb":256,"ram_memory_gb":16,"processor":"Snapdragon 888","screen_inches":6.78,"battery_mah":6000,"financials":["Alo Cred","Celya"],"savings":420000,"installments":[{"quantity":1,"price":250000},{"quantity":12,"price":140000},{"quantity":24,"price":70000}]},{"id":13,"brand":"Nokia","model":"8.3 5G","rear_camera_mp":64,"front_camera_mp":24,"rom_memory_gb":128,"ram_memory_gb":8,"processor":"Snapdragon 765G","screen_inches":6.81,"battery_mah":4500,"financials":["Krediya","Alo Cred"],"savings":440000,"installments":[{"quantity":1,"price":260000},{"quantity":12,"price":150000},{"quantity":24,"price":75000},{"quantity":36,"price":50000}]},{"id":14,"brand":"LG","model":"Wing","rear_camera_mp":64,"front_camera_mp":32,"rom_memory_gb":256,"ram_memory_gb":8,"processor":"Snapdragon 765G","screen_inches":6.8,"battery_mah":4000,"financials":["Celya","Krediya"],"savings":460000,"installments":[{"quantity":1,"price":270000},{"quantity":12,"price":160000},{"quantity":24,"price":80000}]},{"id":15,"brand":"ZTE","model":"Axon 30 Ultra","rear_camera_mp":64,"front_camera_mp":16,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 888","screen_inches":6.67,"battery_mah":4600,"financials":["Alo Cred","Celya"],"savings":480000,"installments":[{"quantity":1,"price":280000},{"quantity":12,"price":170000}]},{"id":16,"brand":"Lenovo","model":"Legion Phone Duel 2","rear_camera_mp":64,"front_camera_mp":44,"rom_memory_gb":512,"ram_memory_gb":16,"processor":"Snapdragon 888","screen_inches":6.92,"battery_mah":5500,"financials":["Krediya","Alo Cred"],"savings":500000,"installments":[{"quantity":1,"price":290000},{"quantity":12,"price":180000},{"quantity":24,"price":90000},{"quantity":36,"price":60000}]},{"id":17,"brand":"Meizu","model":"18 Pro","rear_camera_mp":50,"front_camera_mp":44,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 888","screen_inches":6.7,"battery_mah":4500,"financials":["Celya","Krediya"],"savings":520000,"installments":[{"quantity":1,"price":300000},{"quantity":12,"price":190000},{"quantity":24,"price":95000},{"quantity":36,"price":63000}]},{"id":18,"brand":"Honor","model":"Magic 3 Pro","rear_camera_mp":50,"front_camera_mp":13,"rom_memory_gb":256,"ram_memory_gb":12,"processor":"Snapdragon 888","screen_inches":6.76,"battery_mah":4600,"financials":["Alo Cred","Celya"],"savings":540000,"installments":[{"quantity":1,"price":310000},{"quantity":12,"price":200000},{"quantity":24,"price":100000},{"quantity":36,"price":67000}]},{"id":19,"brand":"TCL","model":"20 Pro 5G","rear_camera_mp":48,"front_camera_mp":32,"rom_memory_gb":256,"ram_memory_gb":6,"processor":"Snapdragon 750G","screen_inches":6.67,"battery_mah":4500,"financials":["Krediya","Alo Cred"],"savings":560000,"installments":[{"quantity":1,"price":320000},{"quantity":12,"price":210000},{"quantity":24,"price":105000},{"quantity":36,"price":70000}]},{"id":20,"brand":"Alcatel","model":"5V","rear_camera_mp":12,"front_camera_mp":8,"rom_memory_gb":32,"ram_memory_gb":3,"processor":"Mediatek MT6762","screen_inches":6.2,"battery_mah":4000,"financials":["Celya","Krediya"],"savings":580000,"installments":[{"quantity":1,"price":330000},{"quantity":12,"price":220000}]},{"id":21,"brand":"Motorola","model":"Magic 5 Pro","rear_camera_mp":12,"front_camera_mp":8,"rom_memory_gb":32,"ram_memory_gb":3,"processor":"Mediatek MT6762","screen_inches":6.2,"battery_mah":4000,"financials":["Celya","Krediya","Alo Cred"],"savings":580000,"installments":[{"quantity":1,"price":330000},{"quantity":12,"price":220000}]}];

const $$Astro$1 = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Products;
  let searchTerm = "";
  let financials = [];
  let ram = [];
  let rom = [];
  let battery = [];
  let camera = [];
  const db = getFirestore(app);
  const catalog = db.collection("catalog");
  const querySnapshot = await catalog.get();
  const productsDatabase = querySnapshot.docs.map((doc) => doc.data());
  console.log(productsDatabase[0]);
  if (Astro2.request.url) {
    const url = new URL(Astro2.request.url);
    searchTerm = url.searchParams.get("search") || "";
    financials = url.searchParams.get("financials")?.toLowerCase().split(",") || [];
    ram = url.searchParams.get("ram")?.split(",") || [];
    rom = url.searchParams.get("rom")?.split(",") || [];
    battery = url.searchParams.get("battery")?.split(",") || [];
    camera = url.searchParams.get("camera")?.split(",") || [];
  }
  const filteredProducts = products.filter((product) => {
    let match = true;
    if (!product.model.toLowerCase().includes(searchTerm.toLowerCase())) {
      match = false;
    }
    if (financials.length > 0) {
      if (!product.financials.some((financial) => financials.includes(financial.toLocaleLowerCase()))) {
        match = false;
      }
    }
    if (ram.length > 0) {
      if (product.ram_memory_gb < parseInt(ram[0]) || product.ram_memory_gb > parseInt(ram[1])) {
        match = false;
      }
    }
    if (rom.length > 0) {
      if (product.rom_memory_gb < parseInt(rom[0]) || product.rom_memory_gb > parseInt(rom[1])) {
        match = false;
      }
    }
    if (battery.length > 0) {
      if (product.battery_mah < parseInt(battery[0]) || product.battery_mah > parseInt(battery[1])) {
        match = false;
      }
    }
    if (camera.length > 0) {
      if (product.rear_camera_mp < parseInt(camera[0]) || product.rear_camera_mp > parseInt(camera[1])) {
        match = false;
      }
    }
    return match;
  });
  return renderTemplate`${maybeRenderHead()}<div data-container-products class="products" data-astro-cid-qnwxz4mj> ${filteredProducts.map((product) => {
    return renderTemplate`${renderComponent($$result, "CardProduct", $$CardProduct, { "product": product, "data-astro-cid-qnwxz4mj": true })}`;
  })} </div> ${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Products.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Products.astro", void 0);

const $$WhatsAppIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="80" height="80" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_97_2)"> <path d="M2.73131 63.728C2.72831 74.5665 5.56031 85.1495 10.9453 94.4775L2.21631 126.349L34.8323 117.797C43.8535 122.707 53.961 125.281 64.2323 125.282H64.2593C98.1668 125.282 125.768 97.69 125.783 63.7765C125.789 47.343 119.395 31.89 107.778 20.264C96.1633 8.639 80.7158 2.2335 64.2568 2.226C30.3453 2.226 2.74581 29.816 2.73181 63.728" fill="url(#paint0_linear_97_2)"></path> <path d="M0.535 63.708C0.5315 74.9365 3.465 85.898 9.042 95.56L0 128.574L33.7855 119.715C43.0945 124.79 53.5755 127.466 64.2405 127.47H64.268C99.392 127.47 127.985 98.8865 128 63.759C128.006 46.735 121.382 30.7265 109.35 18.684C97.3165 6.643 81.3165 0.007 64.268 0C29.138 0 0.549 28.58 0.535 63.708ZM20.6555 93.896L19.394 91.8935C14.091 83.4615 11.292 73.7175 11.296 63.712C11.307 34.5145 35.069 10.76 64.288 10.76C78.438 10.766 91.736 16.282 101.738 26.29C111.739 36.299 117.243 49.604 117.24 63.755C117.227 92.9525 93.464 116.71 64.268 116.71H64.247C54.7405 116.705 45.417 114.152 37.286 109.327L35.351 108.18L15.302 113.437L20.6555 93.896Z" fill="url(#paint1_linear_97_2)"></path> <path d="M48.3388 37.074C47.1458 34.4225 45.8903 34.369 44.7558 34.3225C43.8268 34.2825 42.7648 34.2855 41.7038 34.2855C40.6418 34.2855 38.9163 34.685 37.4578 36.2775C35.9978 37.8715 31.8838 41.7235 31.8838 49.558C31.8838 57.3925 37.5903 64.9645 38.3858 66.028C39.1823 67.0895 49.4023 83.6815 65.5883 90.0645C79.0403 95.369 81.7778 94.314 84.6973 94.048C87.6173 93.783 94.1193 90.197 95.4458 86.4785C96.7733 82.7605 96.7733 79.5735 96.3753 78.9075C95.9773 78.244 94.9153 77.8455 93.3228 77.0495C91.7303 76.2535 83.9008 72.4005 82.4413 71.869C80.9813 71.338 79.9198 71.073 78.8578 72.6675C77.7958 74.2595 74.7463 77.8455 73.8168 78.9075C72.8883 79.972 71.9588 80.1045 70.3668 79.308C68.7733 78.509 63.6448 76.8295 57.5603 71.405C52.8263 67.184 49.6303 61.9715 48.7013 60.377C47.7723 58.785 48.6018 57.922 49.4003 57.1285C50.1158 56.415 50.9933 55.269 51.7903 54.3395C52.5843 53.4095 52.8493 52.746 53.3803 51.684C53.9118 50.621 53.6458 49.691 53.2483 48.8945C52.8493 48.098 49.7548 40.2225 48.3388 37.074Z" fill="white"></path> </g> <defs> <linearGradient id="paint0_linear_97_2" x1="6180.54" y1="12414.5" x2="6180.54" y2="2.226" gradientUnits="userSpaceOnUse"> <stop stop-color="#1FAF38"></stop> <stop offset="1" stop-color="#60D669"></stop> </linearGradient> <linearGradient id="paint1_linear_97_2" x1="6400" y1="12857.4" x2="6400" y2="0" gradientUnits="userSpaceOnUse"> <stop stop-color="#F9F9F9"></stop> <stop offset="1" stop-color="white"></stop> </linearGradient> <clipPath id="clip0_97_2"> <rect width="128" height="129" fill="white"></rect> </clipPath> </defs> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/WhatsAppIcon.astro", void 0);

const $$LinkWhatsapp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/+573123006032" target="_blank" rel="noopener noreferrer" data-astro-cid-fqsayqtk> ${renderComponent($$result, "WhatsAppIcon", $$WhatsAppIcon, { "data-astro-cid-fqsayqtk": true })} </a> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/LinkWhatsapp.astro", void 0);

const $$Astro = createAstro();
const $$Content = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  const url = new URL(Astro2.request.url);
  const search = url.searchParams.get("search");
  const financials = url.searchParams.get("financials");
  const ram = url.searchParams.get("ram");
  const rom = url.searchParams.get("rom");
  const battery = url.searchParams.get("battery");
  const camera = url.searchParams.get("camera");
  const chips = [];
  if (search) {
    chips.push({ text: search, query: "search" });
  }
  if (financials) {
    chips.push({ text: "Financieras", query: "financials" });
  }
  if (ram) {
    chips.push({ text: "RAM", query: "ram" });
  }
  if (rom) {
    chips.push({ text: "ROM", query: "rom" });
  }
  if (battery) {
    chips.push({ text: "Bater\xEDa", query: "battery" });
  }
  if (camera) {
    chips.push({ text: "C\xE1mara", query: "camera" });
  }
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-kqty5qjk> <div class="filter" data-astro-cid-kqty5qjk> ${renderComponent($$result, "Filter", $$Filter, { "data-astro-cid-kqty5qjk": true })} </div> <div class="products-conteainer" data-astro-cid-kqty5qjk> <div class="chips-container" data-astro-cid-kqty5qjk> ${chips.map((chip) => renderTemplate`${renderComponent($$result, "Chip", $$Chip, { "query": chip.query, "text": chip.text, "data-astro-cid-kqty5qjk": true })}`)} </div> ${renderComponent($$result, "Products", $$Products, { "data-astro-cid-kqty5qjk": true })} <!-- <Pagination /> --> </div> </section> ${renderComponent($$result, "LinkWhatsapp", $$LinkWhatsapp, { "data-astro-cid-kqty5qjk": true })} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Content.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo de Samicel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "Content", $$Content, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
