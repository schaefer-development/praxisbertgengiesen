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
			(($$result.title = `<title>Privatkassen - Dr. Bertgen-Giesen</title>`), '')
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

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'privatkassen'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Privatkassen</h1>

					<p>Privat-Versicherte sollten sich bei Ihrer Versicherung dar\xFCber informieren, ob im
						versicherten Tarif die Leistungen f\xFCr ambulante Psychotherapie enthalten sind. Meistens
						ist dies der Fall.
					</p>
					<p><br>Es gibt einige Besonderheiten, die von Krankenkasse zu Krankenkasse und von Tarif
						zu Tarif variieren:<br>Manche Krankenkassen zahlen 20 Sitzungen Einzelpsychotherapie
						im Jahr ohne gesonderten, ausf\xFChrlichen Antrag. <br><br>Manche Krankenkassen fordern
						jedoch einen ausf\xFChrlichen Antrag. Hier m\xFCssen zun\xE4chst Formulare bei der Krankenkasse
						durch den Versicherten beantragt werden. Diese Formulare werden von mir und dem
						Versicherten ausgef\xFCllt und der Krankenkasse wieder zugesandt. Die Bearbeitung bei der
						Krankenkasse kann einige Wochen dauern. Wenn die Kosten\xFCbernahme-Zusage von der
						Privatkasse vorliegt, kann mit der Behandlung begonnen werden. Je nach Krankenkasse
						k\xF6nnen verschiedene Sitzungskontingente bewilligt werden. Auch hier sind in der Regel
						maximal 80 Sitzungen m\xF6glich. Gegebenenfalls m\xFCssen unterschiedliche Sitzungskontingente
						immer wieder neu beantragt werden. Das mache ich dann f\xFCr Sie. <br><br>Meine
						Rechnungen werden nach der Geb\xFChrenordnung f\xFCr \xC4rzte GO\xC4 bzw. nach der Geb\xFChrenordnung
						f\xFCr Psychotherapeuten GOP ausgestellt. Die Rechnungsstellung erfolgt meistens einmal im
						Quartal, also etwa alle drei Monate.
					</p></div></div></div></div></div>`;
});
export { Page as default };
