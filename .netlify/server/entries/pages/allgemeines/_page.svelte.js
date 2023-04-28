import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { M as MenuAsidePsychotherapie } from '../../../chunks/MenuAsidePsychotherapie.js';
const HeroHaus = '/_app/immutable/assets/bg_haus-73b1e4e1.jpg';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Allgemeines - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroHaus,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsidePsychotherapie,
		'MenuAsidePsychotherapie'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'allgemeines'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Allgemeines zur Psychotherapie</h1>

					<p>In meiner Praxis kann ich unterschiedliche psychotherapeutische Verfahren anbieten und
						anwenden:<br><br>Zun\xE4chst die Verhaltenstherapie, insbesondere
						<a href="${'https://de.wikipedia.org/wiki/Kognitive_Verhaltenstherapie'}" target="${'_blank'}">kognitive Methoden</a>. <br>Die Verhaltenstherapie z\xE4hlt zu den drei psychotherapeutischen Verfahren,
						welche von den gesetzlichen Krankenkassen anerkannt sind und deren Kosten somit
						vollst\xE4ndig \xFCbernommen werden.<br><br>Dar\xFCber hinaus biete ich
						<a title="${'klientenzentrierte Psychotherapie'}" href="${'https://de.wikipedia.org/wiki/Klientenzentrierte_Psychotherapie'}" target="${'_blank'}">klientenzentrierte Psychotherapie</a>
						und
						<a title="${'l\xF6sungsorientierte Kurzzeitpsychotherapie'}" href="${'https://de.wikipedia.org/wiki/L%C3%B6sungsorientierte_Kurztherapie'}" target="${'_blank'}">l\xF6sungsorientierte Kurzzeitpsychotherapie</a>
						an. <br>Diese beiden Verfahren sind keine Kassenleistungen.
					</p>
					<h3><br>Diagnosen</h3>
					<p>Grunds\xE4tzlich werden in der Psychotherapie alle Patienten behandelt, deren
						Beschwerdebild in den verschiedenen Klassifikationssystemen f\xFCr psychische Erkrankungen
						als krankheitswertig aufgef\xFChrt werden.<br>Klassifikationssysteme dienen zur
						Verschl\xFCsselung von Diagnosen. Die bekanntesten dieser Systeme sind ICD (International
						Classification of Deseases) oder DSM (Diagnostic and Statistical Manual of Mental
						Disorders).
					</p>
					<p>Mit den Verschl\xFCsselungen, die f\xFCr alle Erkrankungen gelten (also nicht nur f\xFCr
						psychische Erkrankungen), k\xF6nnen \xC4rzte und Therapeuten besser beschreiben, welches
						Problem vorliegt, und auch durch Angabe der verschl\xFCsselten Diagnose gegen\xFCber den
						Krankenkassen besser begr\xFCnden, warum eine Behandlung n\xF6tig ist. Dazu geh\xF6ren z.B.
						Angstst\xF6rungen, Depressionen, Essst\xF6rungen und Schmerzst\xF6rungen.
					</p>
					<p>Die Bezeichnungen in den Diagnosekatalogen der Weltgesundheitsorganisation (WHO) sind
						f\xFCr Patienten manchmal verwirrend. So bezeichnet eine Anpassungsst\xF6rung z.B. ein
						Beschwerdebild, welches seit maximal zwei Jahren oder weniger aufgetreten und durch
						Angst und depressive Verstimmungen gekennzeichnet ist. Ein h\xE4ufiges Missverst\xE4ndnis bei
						dieser Diagnose ist, dass man &quot;sich nicht anpassen k\xF6nne&quot;. Gemeint ist aber etwas ganz
						anderes.
					</p>
					<p>\xA0</p>
					<h3>Sitzungsdauer</h3>
					<p>Die Sitzungen dauern alle etwa 50 bis 60 Minuten. In Einzelf\xE4llen kann auch eine
						k\xFCrzere\xA0 (25 Minuten) oder eine l\xE4nger Sitzungsdauer (100 Minuten) verabredet
						werden. Dies richtet sich nach dem individuellen Anliegen.
					</p></div></div></div></div></div>`;
});
export { Page as default };
