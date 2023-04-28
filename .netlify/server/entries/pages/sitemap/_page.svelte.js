import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component,
	e as escape
} from '../../../chunks/index.js';
import { b as base } from '../../../chunks/paths.js';
import { H as HeroGarten } from '../../../chunks/bg_garten.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${(($$result.title = `<title>Sitemap - Dr. Bertgen-Giesen</title>`), '')}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroGarten,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideAboutMe,
		'MenuAsideAboutMe'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'sitemap'}">
				<nav class="${'mod_navigation col-xs-12 col-sm-12 col-md-12 block'}"><h1>Sitemap</h1>

					<a href="${
						escape(base, true) + '/sitemap#skipNavigation7'
					}" class="${'invisible'}">Navigation \xFCberspringen</a>

					<ul class="${'level_1'}"><li class="${'submenu sibling first'}"><a href="${
		escape(base, true) + '/'
	}" title="${'Psychotherapie'}" class="${'submenu sibling first'}" aria-haspopup="${'true'}">Psychotherapie</a>
							<ul class="${'level_2'}"><li class="${'first'}"><a href="${
		escape(base, true) + '/'
	}" title="${'Startseite'}" class="${'first'}">Startseite</a></li>
								<li><a href="${escape(base, true) + '/allgemeines'}" title="${'Allgemeines'}">Allgemeines</a></li>
								<li><a href="${
									escape(base, true) + '/schwerpunkte'
								}" title="${'Schwerpunkte'}">Schwerpunkte</a></li>
								<li><a href="${
									escape(base, true) + '/gesetzliche_krankenkassen'
								}" title="${'Gesetzliche Krankenkassen'}">Gesetzliche Krankenkassen</a></li>
								<li><a href="${
									escape(base, true) + '/privatkassen'
								}" title="${'Privatkassen'}">Privatkassen</a></li>
								<li><a href="${
									escape(base, true) + '/selbstzahler'
								}" title="${'Selbstzahler'}">Selbstzahler</a></li>
								<li class="${'last'}"><a href="${
		escape(base, true) + '/beihilfen'
	}" title="${'Beihilfen'}" class="${'last'}">Beihilfen</a></li></ul></li>
						<li class="${'submenu sibling'}"><a href="${
		escape(base, true) + '/cognitive_coaching'
	}" title="${'Coaching, Supervision & Beratung'}" class="${'submenu sibling'}" aria-haspopup="${'true'}">Coaching, Supervision &amp; Beratung</a>
							<ul class="${'level_2'}"><li class="${'first'}"><a href="${
		escape(base, true) + '/cognitive_coaching'
	}" title="${'Cognitive Coaching'}" class="${'first'}">Cognitive Coaching</a></li>
								<li><a href="${
									escape(base, true) + '/coaching_mit_system'
								}" title="${'Coaching mit System'}">Coaching mit System</a></li>
								<li><a href="${escape(base, true) + '/supervision'}" title="${'Supervision'}">Supervision</a></li>
								<li class="${'last'}"><a href="${
		escape(base, true) + '/beratung'
	}" title="${'Beratung'}" class="${'last'}">Beratung</a></li></ul></li>
						<li class="${'submenu sibling last'}"><a href="${
		escape(base, true) + '/lebenslauf'
	}" title="${'\xDCber mich'}" class="${'submenu sibling last'}" aria-haspopup="${'true'}">\xDCber mich</a>
							<ul class="${'level_2'}"><li class="${'first'}"><a href="${
		escape(base, true) + '/lebenslauf'
	}" title="${'Lebenslauf'}" class="${'first'}">Lebenslauf</a></li>
								<li><a href="${
									escape(base, true) + '/qualifikation'
								}" title="${'Qualifikation'}">Qualifikation</a></li>
								<li><a href="${
									escape(base, true) + '/kontakt'
								}" title="${'Kontakt & Anfahrt'}">Kontakt &amp; Anfahrt</a></li>
								<li class="${'last'}"><a href="${
		escape(base, true) + '/fotogalerie'
	}" title="${'Fotogalerie'}" class="${'last'}">Fotogalerie</a></li></ul></li></ul>

					<a id="${'skipNavigation7'}" class="${'invisible'}">\xA0</a></nav>
				</div></div></div></div>`;
});
export { Page as default };
