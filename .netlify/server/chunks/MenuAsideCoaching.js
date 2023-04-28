import { c as create_ssr_component, e as escape } from './index.js';
import { b as base } from './paths.js';
const MenuAsideCoaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<nav class="${'mod_navigation block'}" id="${'subnav'}"><a href="${
		escape(base, true) + '/lebenslauf'
	}" class="${'invisible'}">Navigation \xFCberspringen</a>
	<ul class="${'level_1'}"><li class="${'sibling first'}"><a href="${
		escape(base, true) + '/cognitive_coaching'
	}" title="${'Cognitive Coaching'}" class="${'sibling'}">Cognitive Coaching</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/coaching_mit_system'
	}" title="${'Coaching mit System'}" class="${'sibling'}">Coaching mit System</a></li>
		<li class="${'sibling'}"><a href="${
		escape(base, true) + '/supervision'
	}" title="${'Supervision'}" class="${'sibling'}">Supervision</a></li>
		<li class="${'sibling last'}"><a href="${
		escape(base, true) + '/beratung'
	}" title="${'Beratung'}" class="${'sibling last'}">Beratung</a></li></ul>
	<a id="${'skipNavigation2'}" class="${'invisible'}">\xA0</a></nav>`;
});
export { MenuAsideCoaching as M };
