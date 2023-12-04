import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { M as MenuAsidePsychotherapie } from '../../../chunks/MenuAsidePsychotherapie.js';
const Hero3OrangeneSessel = '/_app/immutable/assets/bg_dreiorangenesessel-d9c0e7fa.jpg';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Gesetzliche Krankenkassen - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><span class="${'label_praxis'}">Praxis Remagen</span>
		<img${add_attribute(
			'src',
			Hero3OrangeneSessel,
			0
		)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsidePsychotherapie,
		'MenuAsidePsychotherapie'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'gesetzliche_krankenkassen'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Gesetzliche Krankenkassen</h1>
					<p>Ansprechpartnerin Frau Dr. Anna Katzer, Tel. 0177 . 600 45 56</p>
					<p>Wenn Sie bei einer gesetzlichen Krankenkasse versichert sind, gen\xFCgt es, die
						Krankenversichertenkarte mitzubringen. Seit Abschaffung der Praxisgeb\xFChr ist eine
						\xDCberweisung vom Hausarzt oder einem anderen Facharzt nicht mehr unbedingt notwendig.
						Selbstverst\xE4ndlich k\xF6nnen Sie aber neben der Krankenkassenkarte (Chipkarte) auch eine
						\xDCberweisung mitbringen. Dann wei\xDF ich schon, welche Diagnose der \xFCberweisende
						Arzt/\xC4rztin gestellt hat und bei wem Sie in Behandlung sind.
					</p>
					<p>Nach Vorlage der Chipkarte wird diese in unserem Abrechnungsprogramm gespeichert.</p>
					<p>Bei den gesetzlichen Krankenkassen k\xF6nnen wir zunn\xE4chst 3 Sprechstunden und 2
						probatorische Sitzungen vereinbaren. In diesen Sitzungen k\xF6nnen Sie Ihr Anliegen, Ihre
						Beschwerden, Ihre Erwartungen und Ihre Bef\xFCrchtungen bzgl. der Psychotherapie mit mir
						besprechen und Sie lernen mich und meine Vorgehensweise kennen.
					</p>
					<p>Sp\xE4testens nach der f\xFCnften Stunde m\xFCssen wir dann gekl\xE4rt haben, ob eine
						psychotherapeutische Behandlung durchgef\xFChrt werden soll und ob Sie diese Behandlung bei
						mir in meiner Praxis durchf\xFChren m\xF6chten. Wenn dies \xFCbereinstimmend bejaht werden kann,
						wird ein formloser Antrag bei Ihrer Krankenkasse gestellt. Dazu m\xFCssen Sie lediglich ein
						Formular unterschreiben, welches ich f\xFCr Sie bereithalte. Alles Weitere kl\xE4re ich dann
						mit der Krankenkasse.
					</p>
					<p>Die Kasse pr\xFCft lediglich noch, ob Sie in den vergangenen beiden Jahren eine
						Psychotherapie hatten und ob bei mir die Kassenzulassung vorliegt. Dies dauert bei den
						meisten gesetzlichen Krankenkassen nur wenige Werktage. Danach erhalte ich einen
						schriftlichen Bescheid von der Kasse mit der Zusage, die Kosten f\xFCr die Behandlung zu
						\xFCbernehmen. Die meisten Krankenkassen teilen ihren Versicherten ebenfalls mit, dass die
						Behandlung bewilligt wurde. Genehmigt werden dann erst einmal 12 Sitzungen. Es ist
						m\xF6glich, sp\xE4ter noch weitere Sitzungen zu beantragen. Maximal sind 80 Sitzungen m\xF6glich.
					</p></div></div></div></div></div>`;
});
export { Page as default };
