import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as Hero2RoteSessel } from '../../../chunks/bg_zweirotesessel.js';
import { M as MenuAsideCoaching } from '../../../chunks/MenuAsideCoaching.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Coaching mit System - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><span class="${'label_praxis'}">Praxis Bonn</span>
		<img${add_attribute('src', Hero2RoteSessel, 0)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideCoaching,
		'MenuAsideCoaching'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'coaching_mit_system'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Coaching mit System (Co-Sy)</h1>

					<p>Co-Sy ist ein neuartiges Coaching, welches sich an den Prinzipien der Denkpsychologie,
						der Systemtheorie sowie an den psychodynamischen, tiefenpsychologischen Theorien
						orientiert.
					</p>
					<p>\xA0</p>
					<h3>Verlauf des Coaching mit System</h3>
					<p>Die Teilnehmer definieren ihr individuelles Anliegen und legen fest, welchen von den
						folgenden L\xF6sungswegen sie als Herangehensweise ausprobieren m\xF6chten:
					</p>
					<ul><li>Co-Sy denk-kognitionspsychologisch</li>
						<li>Co-Sy l\xF6sungsorientiert-systemisch</li>
						<li>Co-Sy psychodynamisch-tiefenpsychologisch</li></ul>
					<p>\xA0</p>
					<h3>Sitzungsdauer</h3>
					<p>Unabh\xE4ngig von der Wahl des L\xF6sungswegs, werden zwei Einheiten \xE0 100 Minuten Dauer
						angeboten. Diese Einheiten sind nur als Komplettblock buchbar.
					</p>
					<p>\xA0</p>
					<h3>Kosten des Coaching mit System</h3>
					<p>Pro Komplettblock \xE0 2 Einheiten von jeweils 100 Minuten: 500 Euro zzgl. Mwst.<br>Die
						Buchung einer der drei oben genannten Co-Sy Bl\xF6cke schlie\xDFt nicht aus, andere Co-Sy
						Bl\xF6cke sp\xE4ter dazu zu buchen oder einen der Co-Sy Bl\xF6cke noch einmal zu buchen.
					</p>
					<p>\xA0</p>
					<h3>Co-Sy Beratung zu individuellen Themen</h3>
					<p>Wenn eine Beratung, Information zu einem bestimmten Thema gew\xFCnscht wird, so sind bei
						Co-Sy auch Einzelberatungen buchbar.
					</p>
					<p>Zum Beispiel bei allgemeiner Beratung zu Themen wie</p>
					<ul><li>Immobilienanfragen</li>
						<li>Fragen zum Kauf von Immobilien</li>
						<li>Fragen zum Verkauf von Immobilien</li></ul>
					<p>Oder zum Beispiel auch bei Beratung speziell f\xFCr Psychotherapeuten zu Themen wie</p>
					<ul><li>Praxisgr\xFCndung</li>
						<li>Praxisabgabe</li>
						<li>Abrechnung f\xFCr Psychotherapeuten</li></ul>
					<p>\xA0</p>
					<h3>Kosten der Co-Sy Beratung zu individuellen Themen</h3>
					<p>Die Preise richten sich dabei nach Komplexit\xE4t des Beratungsanliegens und der
						tats\xE4chlichen Dauer des Beratungsprozesses. Die Preise werden nach Stunden abgerechnet.
					</p></div></div></div></div></div>`;
});
export { Page as default };
