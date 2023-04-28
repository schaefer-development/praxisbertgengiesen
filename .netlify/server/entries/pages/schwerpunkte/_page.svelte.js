import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as HeroGemaelde } from '../../../chunks/bg_gemaelde.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { M as MenuAsidePsychotherapie } from '../../../chunks/MenuAsidePsychotherapie.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Schwerpunkte - Dr. Bertgen-Giesen</title>`), '')
		}`),
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

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'schwerpunkte'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Schwerpunkte</h1>

					<p>Die Schwerpunkte meiner Arbeit liegen zun\xE4chst in der Einzelpsychotherapie Erwachsener.
						In Einzelf\xE4llen k\xF6nnen auch Angeh\xF6rige in die Behandlung einbezogen werden. Das
						methodische Vorgehen richtet sich nach dem Beschwerdebild des Patienten. Eingesetzt
						werden in erster Linie Methoden der kognitiven Verhaltenstherapie. Es kommen aber auch
						Elemente anderer Verfahren wie etwa der tiefenpsychologisch fundierten Psychotherapie
						oder der l\xF6sungsorientierten Psychotherapie zum Einsatz. Ebenso greife ich auf
						Entspannungsverfahren, so z.B. das Jacobson Training, zur\xFCck.
					</p>
					<p>Grunds\xE4tzlich ist die Praxis f\xFCr alle Patienten mit psychischen oder psychosomatischen
						Krankheitsbildern ge\xF6ffnet. Die \xFCberwiegende Anzahl von Patienten, die bisher behandelt
						wurden, litten unter Angstst\xF6rungen, depressiven Beschwerden, Esst\xF6rungen und
						Schmerzst\xF6rungen.
					</p>
					<p>Jede Therapie bedeutet, die Lebenswelt eines Menschen und seine Sichtweise der Dinge
						kennenzulernen. Mein therapeutisches Vorgehen richtet und orientiert sich daher an den
						ge\xE4u\xDFerten Beschwerden und den Anliegen der Patienten.
					</p></div></div></div></div></div>`;
});
export { Page as default };
