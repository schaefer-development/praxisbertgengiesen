import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as Hero2GraueSessel } from '../../../chunks/bg_grausesessel.js';
import { M as MenuAsideCoaching } from '../../../chunks/MenuAsideCoaching.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Beratung - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><span class="${'label_praxis'}">Praxis Bonn</span>
		<img${add_attribute('src', Hero2GraueSessel, 0)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideCoaching,
		'MenuAsideCoaching'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'beratung'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Beratung</h1>

					<p>Mein Beratungsangebot richtet sich an</p>
					<ul><li>Menschen, bei denen eine Psychotherapie nicht notwendig ist, die aber trotzdem zu
							bestimmten Themen eine Beratung aus dem psychosozialen Bereich w\xFCnschen.
						</li>
						<li>Patienten, die keine Psychotherapie nach den Richtlinien der gesetzlichen oder
							privaten Krankenkassen machen m\xF6chten, aber dennoch eine professionelle Beratung
							w\xFCnschen.
						</li></ul></div></div></div></div></div>`;
});
export { Page as default };
