import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, a as renderComponent, e as addAttribute, f as renderTransition } from '../chunks/astro/server_Cx1fVRid.mjs';
import 'kleur/colors';
import { a as $$Favicon, $ as $$Layout } from '../chunks/Layout_BeFq73zp.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$PadlockIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <path d="M7.56898 0.986549C7.01898 0.982174 6.45961 1.08905 5.92523 1.24905C5.14711 1.48186 4.38461 1.83874 3.83461 2.4053C3.27836 2.97249 2.97648 3.82811 3.24711 4.72499L3.97523 7.15936C4.21898 6.78124 4.50648 6.43124 4.83773 6.12186L4.32523 4.40311C4.16273 3.86561 4.29086 3.54686 4.63773 3.19061C4.98461 2.83655 5.58773 2.52405 6.24711 2.32686C6.70023 2.19124 7.15961 2.11561 7.56273 2.11561C7.74398 2.11561 7.91586 2.13155 8.06586 2.16467C8.55023 2.27061 8.83148 2.46624 8.99398 3.0053L9.50648 4.72499C9.95648 4.80311 10.3909 4.93436 10.8002 5.11874L10.0721 2.68249C9.80336 1.78436 9.08148 1.23624 8.30648 1.06686C8.06586 1.01342 7.81898 0.988737 7.56898 0.986549ZM8.63148 5.20311C8.14711 5.19999 7.65648 5.26561 7.16898 5.41249C4.57211 6.18749 3.09961 8.91561 3.87836 11.5156C4.65648 14.1125 7.38148 15.5844 9.98148 14.8062C12.5784 14.0281 14.0502 11.3031 13.2721 8.70311C12.6409 6.59061 10.7221 5.22499 8.63148 5.20311ZM8.53461 7.23436C9.78773 7.21561 10.9534 8.02811 11.3284 9.28436C11.7846 10.8031 10.9159 12.4094 9.40023 12.8625C7.88148 13.3187 6.27523 12.45 5.82211 10.9344C5.36586 9.41561 6.23461 7.80936 7.75023 7.35311C8.01273 7.27499 8.27523 7.23749 8.53461 7.23436ZM8.60336 7.79374C8.46586 7.79374 8.32523 7.80624 8.18461 7.83124L8.47211 8.78124L7.93461 8.94374L7.65023 7.99061C7.25336 8.16249 6.92523 8.43436 6.68773 8.76874L7.59711 9.25936L7.32836 9.75624L6.41898 9.26874C6.27211 9.64999 6.22211 10.0719 6.29711 10.4969L7.25648 10.2094L7.41586 10.75L6.45648 11.0375C6.90648 12.0687 8.03773 12.6344 9.14711 12.35L8.13773 10.9125L9.38148 10.5406L9.32836 12.2969C10.4096 11.925 11.044 10.825 10.8534 9.72186L9.89398 10.0062L9.73461 9.46874L10.694 9.18124C10.5221 8.78436 10.2471 8.45936 9.91273 8.22186L9.41898 9.13124L8.92523 8.86249L9.41898 7.95311C9.16273 7.85311 8.88773 7.79686 8.60336 7.79374Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/PadlockIcon.astro", undefined);

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-sgpqyurt> <section data-astro-cid-sgpqyurt> <div class="logo-container" data-astro-cid-sgpqyurt${addAttribute(renderTransition($$result2, "q7fk4qt5", "", "logo-samicel"), "data-astro-transition-scope")}> ${renderComponent($$result2, "Favicon", $$Favicon, { "data-astro-cid-sgpqyurt": true })} <h1 data-astro-cid-sgpqyurt>Samicel</h1> <p data-astro-cid-sgpqyurt>Gestión de catálogos de productos, creditos de samicel.</p> </div> <div class="form-container" data-astro-cid-sgpqyurt${addAttribute(renderTransition($$result2, "dihve7ls", "", "login-text"), "data-astro-transition-scope")}> <h2 data-astro-cid-sgpqyurt>Bienvenido de regreso</h2> <div data-astro-cid-sgpqyurt> ${renderComponent($$result2, "PadlockIcon", $$PadlockIcon, { "data-astro-cid-sgpqyurt": true })} </div> <h3 data-astro-cid-sgpqyurt>Iniciar sesión</h3> <form id="formSignIn" action="/api/auth/signin" method="get" data-astro-cid-sgpqyurt> <div data-astro-cid-sgpqyurt> <input autocomplete="off" type="text" id="email" name="email" required data-astro-cid-sgpqyurt> <label for="email" data-astro-cid-sgpqyurt>Email</label> </div> <div data-astro-cid-sgpqyurt> <input autocomplete="off" type="password" id="password" name="password" required data-astro-cid-sgpqyurt> <label for="password" data-astro-cid-sgpqyurt>Password</label> </div> <button id="toSend" type="submit" data-astro-cid-sgpqyurt>Login</button> <a href="/" data-astro-cid-sgpqyurt>Cancelar</a> </form> </div> </section> </main> <span class="shape" data-astro-cid-sgpqyurt></span> ` })} `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/pages/login.astro", "self");

const $$file = "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
