import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../chunks/index.js';
import { C as ContactAside } from '../../chunks/ContactAside.js';
import { M as MenuAsidePsychotherapie } from '../../chunks/MenuAsidePsychotherapie.js';
import { H as HeroGemaelde } from '../../chunks/bg_gemaelde.js';
import { p as portrait } from '../../chunks/marion_bertgen-giesen.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Praxis Dr. Bertgen-Giesen</title>`), '')
		}<meta name="${'robots'}" content="${'index,follow'}" data-svelte="svelte-1p165i1"><meta name="${'description'}" content="${'Willkommen in meiner Praxis f\xFCr Psychotherapie, Supervision und Coaching mit Standorten in Remagen und Bonn.'}" data-svelte="svelte-1p165i1"><meta name="${'keywords'}" content="${'Psychologe, Psychotherapie, Bonn, Remagen, Dr. Marion Bertgen-Giesen, Bertgen-Giesen, Cognitive Coaching, Coaching mit System, Supervision, Beratung, gesetzliche Krankenkasse, Privatkasse, Selbstzahler'}" data-svelte="svelte-1p165i1"><meta name="${'viewport'}" content="${'width=device-width,initial-scale=1.0'}" data-svelte="svelte-1p165i1"><meta name="${'HandheldFriendly'}" content="${'True'}" data-svelte="svelte-1p165i1"><meta name="${'MobileOptimized'}" content="${'320'}" data-svelte="svelte-1p165i1"><meta name="${'SKYPE_TOOLBAR'}" content="${'SKYPE_TOOLBAR_PARSER_COMPATIBLE'}" data-svelte="svelte-1p165i1"><style data-svelte="svelte-1p165i1">@media print {
			#ghostery-tracker-tally {
				display: none !important;
			}
		}
	</style>`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroGemaelde,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsidePsychotherapie,
		'MenuAsidePsychotherapie'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'startseite'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first block'}"><h1>Hinweis</h1>

					<p>Seit 1. Januar 2022 wird die Praxis von Frau Dr. Bertgen-Giesen gemeinsam mit Frau Dr.
						Anna Katzer gef\xFChrt.
					</p>
					<p>Am 6. April 2023 hat Frau Dr. Anna Katzer meine Kassenzulassung \xFCbernommen. Sie ist nun
						die Ansprechpartnerin f\xFCr Gesetzlich Versicherte. Tel. Frau Dr. Katzer 0177 . 600 45 56.
					</p></div>

				<h1 class="${'ce_headline col-xs-12 col-sm-12 col-md-12'}">Herzlich Willkommen in meiner Praxis f\xFCr Psychotherapie
				</h1>

				<div class="${'ce_image col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4 col-md-offset-4 col-md-4 block'}"><figure class="${'image_container'}" style="${'margin-top:30px;margin-bottom:30px;'}"><img${add_attribute(
		'src',
		portrait,
		0
	)} alt="${''}" width="${'300'}" height="${'300'}"></figure></div>

				<div class="${'ce_text col-xs-12 col-sm-12 col-md-12 last block'}"><p>Unser therapeutisches Angebot richtet sich an Erwachsene, die bei einer gesetzlichen
						Krankenkasse, Beihilfestelle oder Privatkasse versichert sind.
						<br>Frau Dr. Anna Katzer ist die Ansprechpartnerin f\xFCr Gesetzlich Versicherte.
					</p>

					<p>Als Wahlleistungen biete ich dar\xFCber hinaus Coaching oder Beratung an.<br>
						Zus\xE4tzlich arbeite ich als Supervisorin f\xFCr \xE4rztlich oder psychotherapeutisch t\xE4tige Kollegen.
					</p>
					<p>Sie finden mich an zwei Standorten: in Remagen und in Bonn.</p></div></div></div></div></div>`;
});
export { Page as default };
