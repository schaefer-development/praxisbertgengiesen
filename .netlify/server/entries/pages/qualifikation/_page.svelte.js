import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as HeroGemaelde } from '../../../chunks/bg_gemaelde.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Qualifiktation - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroGemaelde,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideAboutMe,
		'MenuAsideAboutMe'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'qualifikation'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Qualifikation</h1>

					<p>Studium der Psychologie und Anglistik an der Rheinischen Friedrich-Wilhelms-Universit\xE4t
						in Bonn:
					</p>
					<p>- Diplom in Psychologie</p>
					<p>- Promotion zum Dr. phil. <br><br>Anerkennung als Supervisorin durch den
						Berufsverband der Deutschen Psychologen
					</p>
					<p>Approbation zur Psychologischen Psychotherapeutin (Psychotherapeutenkammer
						Rheinland-Pfalz)
					</p>
					<p>Therapeutische Zusatzausbildungen in Verhaltenstherapie, Klienten-zentrierter
						Gespr\xE4chspsychotherapie, L\xF6sungsorientierter Kurzzeittherapie
					</p>
					<p>Anerkennung als Moderatorin Qualit\xE4tszirkel (\xC4rztekammer Nordrhein)</p>
					<h3><br><br>Mitgliedschaften und Akkreditierungen</h3>
					<p><strong>Landespsychotherapeutenkammer Rheinland-Pfalz</strong><br>Wilhelm-Theodor-R\xF6mheld-Str. 30<br>55130 Mainz<br><br><strong>\xC4rztekammer Nordrhein</strong><br>Tersteegenstra\xDFe 9<br>40474 D\xFCsseldorf<br><br><strong>Deutsche Psychotherapeutenvereinigung DPTV</strong><br>Am Karlsbad 15<br>10785 Berlin<br><br><strong>Berufsverband Deutscher Psychologen BdP</strong><br>Am K\xF6llnischen Park 2<br>10179 Berlin
					</p></div></div></div></div></div>`;
});
export { Page as default };
