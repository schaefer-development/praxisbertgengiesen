import { c as create_ssr_component, e as escape } from './index.js';
import { b as base } from './paths.js';
const MenuAsideAboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<nav class="${'mod_navigation block'}" id="${'subnav'}"><a href="${
		escape(base, true) + '/lebenslauf'
	}" class="${'invisible'}">Navigation \xFCberspringen</a>
	<ul class="${'level_1'}"><li class="${'sibling first'}"><a href="${
		escape(base, true) + '/lebenslauf'
	}" title="${'Lebenslauf'}" class="${'sibling'}">Lebenslauf</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/qualifikation'
	}" title="${'Qualifikation'}" class="${'sibling'}">Qualifikation</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/kontakt'
	}" title="${'Kontakt & Anfahrt'}" class="${'sibling'}">Kontakt &amp; Anfahrt</a></li>
		<li class="${'sibling last'}"><a href="${
		escape(base, true) + '/fotogalerie'
	}" title="${'Fotogalerie'}" class="${'sibling last'}">Fotogalerie</a></li></ul>
	<a id="${'skipNavigation2'}" class="${'invisible'}">\xA0</a></nav>`;
});
export { MenuAsideAboutMe as M };
