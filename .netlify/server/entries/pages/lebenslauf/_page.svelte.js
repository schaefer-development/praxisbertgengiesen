import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as HeroRheinblick } from '../../../chunks/bg_rheinblick.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { p as portrait } from '../../../chunks/marion_bertgen-giesen.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Lebenslauf - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroRheinblick,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideAboutMe,
		'MenuAsideAboutMe'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'lebenslauf'}"><h1 class="${'ce_headline col-xs-12 col-sm-12 col-md-12 first'}">Lebenslauf</h1>

				<div class="${'ce_image col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4 col-md-offset-4 col-md-4 block'}"><figure class="${'image_container'}" style="${'margin-bottom:30px;'}"><img${add_attribute(
		'src',
		portrait,
		0
	)} alt="${''}" width="${'300'}" height="${'300'}"></figure></div>

				<div class="${'ce_text col-xs-12 col-sm-12 col-md-6 block'}"><p><strong>Geboren:</strong><br>1961 in Neuwied</p>
					<p>\xA0</p>
					<p><strong>Schulbesuch und Abitur</strong><br>Kreis Mayen-Koblenz</p>
					<p>\xA0</p>
					<p><strong>Studium</strong><br>Psychologie und Anglistik an der Universit\xE4t Bonn</p>
					<p>\xA0</p>
					<p><strong>Studienschwerpunkte</strong></p>
					<ul><li>Psychologische Diagnostik, Behandlungsmethoden, Klinische Psychologie</li>
						<li>Literaturwissenschaft, Sprachwissenschaft</li>
						<li>Diplom in Psychologie 1985</li>
						<li>Promotion zum Dr. phil. an der Universit\xE4t Bonn 1991: Evaluation der Systemischen
							Familientherapie bei schizophrenen Patienten im station\xE4ren Bereich (erschienen als
							Buch im Verlag Dr. Kovac, Hamburg)
						</li></ul>
					<p>\xA0</p></div>

				<div class="${'ce_text col-xs-12 col-sm-12 col-md-6 last block'}"><p><strong>Berufst\xE4tigkeit</strong></p>
					<p>Psychotherapie station\xE4r und ambulant:<br>Forschungsprojekt zur Systemischen
						Familientherapie in den Rheinischen Kliniken Bonn (heute LVR Klinik),<br>Behandlung
						und Diagnostik von \xE4lteren Menschen (Abteilung Gerontopsychiatrie, Rheinische Kliniken
						K\xF6ln),<br>niedergelassen als Psychologische Psychotherapeutin (seit 1992, zun\xE4chst in
						Gemeinschaftspraxis in K\xF6ln, seit 1998 in Remagen)
					</p>
					<p>\xA0</p>
					<p><strong>Forschung und Lehre</strong><br>Wissenschaftliche Mitarbeiterin am Lehrstuhl
						f\xFCr Psychologische Diagnostik und Pers\xF6nlichkeitspsychologie der Universit\xE4t Bonn (Prof.
						Dr. H. J. Fisseni), Entwicklung und Evaluation von Methoden zur Auswahl von
						F\xFChrungskr\xE4ften (ITB GmbH Bonn), Lehrbeauftragte an der Katholischen Fachhochschule f\xFCr
						Sozialwesen, K\xF6ln
					</p>
					<p>\xA0</p>
					<p><strong>Weiterbildung</strong></p>
					<ul><li>Klientenzentrierte Gespr\xE4chsf\xFChrung</li>
						<li>Verhaltenstherapie</li>
						<li>L\xF6sungsorientierte Kurzzeittherapie</li></ul>
					<p>\xA0</p>
					<p><strong>Fremdsprachen</strong></p>
					<ul><li>Englisch (Studium an der Universit\xE4t Bonn)</li>
						<li>Spanisch (Diploma Espanol Lengua Extranjera, Instituto Cervantes 2007)</li></ul>
					<p>\xA0</p>
					<p><strong>Privat</strong><br>Seit 1994 verheiratet mit Dr. med. Wolfgang Giesen, lebe
						und wohne in Bonn
					</p></div></div></div></div></div>`;
});
export { Page as default };
