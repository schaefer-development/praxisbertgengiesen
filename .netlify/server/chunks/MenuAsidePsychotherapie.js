import { c as create_ssr_component, e as escape } from './index.js';
import { b as base } from './paths.js';
const MenuAsidePsychotherapie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<nav class="${'mod_navigation block'}" id="${'subnav'}"><a href="${'/lebenslauf'}" class="${'invisible'}">Navigation \xFCberspringen</a>
	<ul class="${'level_1'}"><li class="${'sibling first'}"><a href="${
		escape(base, true) + '/'
	}" title="${'Startseite'}" class="${'sibling'}">Startseite</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/allgemeines'
	}" title="${'Allgemeines'}" class="${'sibling'}">Allgemeines</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/schwerpunkte'
	}" title="${'Schwerpunkte'}" class="${'sibling'}">Schwerpunkte</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/gesetzliche_krankenkassen'
	}" title="${'Gesetzliche Krankenkassen'}" class="${'sibling'}">Gesetzliche Krankenkassen</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/privatkassen'
	}" title="${'Privatkassen'}" class="${'sibling'}">Privatkassen</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/selbstzahler'
	}" title="${'Selbstzahler'}" class="${'sibling'}">Selbstzahler</a></li>
		<li class="${'sibling last'}"><a href="${
		escape(base, true) + '/beihilfen'
	}" title="${'Beihilfen'}" class="${'sibling last'}">Beihilfen</a></li></ul>
	<a id="${'skipNavigation2'}" class="${'invisible'}">\xA0</a></nav>`;
});
export { MenuAsidePsychotherapie as M };
