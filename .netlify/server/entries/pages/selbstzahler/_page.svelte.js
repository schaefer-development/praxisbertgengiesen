import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as Hero2GraueSessel } from '../../../chunks/bg_grausesessel.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { M as MenuAsidePsychotherapie } from '../../../chunks/MenuAsidePsychotherapie.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Selbstzahler - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><span class="${'label_praxis'}">Praxis Bonn</span>
		<img${add_attribute('src', Hero2GraueSessel, 0)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsidePsychotherapie,
		'MenuAsidePsychotherapie'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'selbstzahler'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Selbstzahler</h1>

					<p>Wenn Sie sich entschlie\xDFen, die Behandlung nicht mit Ihrer Krankenkasse abzurechnen,
						stelle ich Ihnen eine gesonderte Rechnung aus.<br> Meine Rechnungen werden nach der Geb\xFChrenordnung
						f\xFCr \xC4rzte GO\xC4 bzw. nach der Geb\xFChrenordnung f\xFCr Psychotherapeuten GOP ausgestellt.
					</p></div></div></div></div></div>`;
});
export { Page as default };
