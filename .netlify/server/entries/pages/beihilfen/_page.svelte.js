import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as Hero2RoteSessel } from '../../../chunks/bg_zweirotesessel.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { M as MenuAsidePsychotherapie } from '../../../chunks/MenuAsidePsychotherapie.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Beihilfen - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><span class="${'label_praxis'}">Praxis Bonn</span>
		<img${add_attribute('src', Hero2RoteSessel, 0)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsidePsychotherapie,
		'MenuAsidePsychotherapie'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'beihilfen'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Beihilfen</h1>
					<p>Viele Beamte des \xF6ffentlichen Dienstes sind bei einer Beihilfestelle und zus\xE4tzlich bei
						einer Privatkasse versichert. In diesen F\xE4llen ist es nach meiner Erfahrung sinnvoll,
						mit der zust\xE4ndigen Beihilfestelle Kontakt auf zu nehmen und dort die Antragsformulare
						zu beantragen. Gleichzeitig sollte man mit der Privatkasse sprechen, wie hier das
						Vorgehen ist. Meistens schlie\xDFt sich die Privatkasse den Vorgaben der Beihilfestelle an.
					</p>
					<p>In diesen F\xE4llen k\xF6nnen zun\xE4chst f\xFCnf probatorische Sitzungen zum Kennenlernen
						durchgef\xFChrt werden. Ergibt sich in diesen Sitzungen die Notwendigkeit der Aufnahme
						einer ambulanten Psychotherapie, kann ich den entsprechenden Antrag mit den o.a.
						Formularen bei der Beihilfestelle einreichen, sofern gew\xFCnscht kann man eine Kopie
						dieses Antrages auch bei der Privatkasse zus\xE4tzlich einreichen.
					</p>
					<p>Nach der Bearbeitung durch Beihilfestelle und Privatkasse erh\xE4lt der Versicherungsnehmer
						die Mitteilung, ob und wie viele Sitzungen Psychotherapie bewilligt worden sind.\xA0
						Die Bearbeitung kann einige Wochen dauern, in der Regel erfolgt jedoch eine vollst\xE4ndige
						Kosten\xFCbernahme. Dann kann mit der Behandlung begonnen werden. Meine Rechnungen werden
						nach der Geb\xFChrenordnung f\xFCr \xC4rzte GO\xC4 bzw. nach der Geb\xFChrenordnung f\xFCr
						Psychotherapeuten GOP ausgestellt. <br>Die Rechnungsstellung erfolgt meistens einmal
						im Quartal, also etwa alle drei Monate.
					</p></div></div></div></div></div>`;
});
export { Page as default };
