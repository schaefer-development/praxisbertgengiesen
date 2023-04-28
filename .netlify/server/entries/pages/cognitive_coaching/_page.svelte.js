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
			(($$result.title = `<title>Cognitive Coaching - Dr. Bertgen-Giesen</title>`), '')
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

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'cognitive_coaching'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Cognitive Coaching (Co-Co)</h1>

					<p>Co-Co ist ein an den Prinzipien und Erkenntnissen der Denkpsychologie oder
						Kognitionspsychologie orientiertes Programm zur systematischen Unterst\xFCtzung bei
						Probleml\xF6seprozessen.<br>Es ist f\xFCr alle Lebens- und Arbeitsbereiche gleicherma\xDFen
						geeignet und einsetzbar.
					</p>
					<p>\xA0</p>
					<h3>Verlauf des Cognitive Coachings</h3>
					<p>Die Anwender (Coachingteilnehmer) erarbeiten sich in 10 Schritten individuelle L\xF6sungen,
						die an ihrem pers\xF6nlichen und individuellen Lebens, Arbeits- und Erfahrungsraum
						orientiert sind.
					</p>
					<p>Dabei werden zun\xE4chst ein individuelles Thema und eine Zielvorgabe definiert. In
						weiteren Schritten werden L\xF6sungsmodelle generiert, in der Praxis erprobt,
						Erfolgskontrollen durchgef\xFChrt und L\xF6sungsmodelle variiert.<br>Co-Co ist dabei
						einerseits flexibel und individuell an den Anliegen der Teilnehmer orientiert und bietet
						andererseits ein strukturiertes Vorgehen nach kognitionspsychologischen und
						wissenschaftlichen Erkenntnissen an.
					</p>
					<p>\xA0</p>
					<h3>Sitzungsdauer</h3>
					<p>F\xFCr jede der 10 Einheiten werden jeweils 90 Minuten angesetzt.</p>
					<h3><br>Kosten des Cognitive Coachings</h3>
					<p>Einmalig 2000\u20AC zzgl. Mwst. Nur als vollst\xE4ndiges Programm buchbar, d.h. 10 Einheiten \xE0
						90 Minuten.
					</p></div></div></div></div></div>`;
});
export { Page as default };
