import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as HeroGarten } from '../../../chunks/bg_garten.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Impressum - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroGarten,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideAboutMe,
		'MenuAsideAboutMe'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'impressum'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Impressum</h1>

					<h3>Pflichtangaben gem\xE4\xDF \xA75 TMG</h3>
					<p>Name und Sitz der Praxis: Praxis Dr. phil. Marion Bertgen-Giesen<br>Deichweg 6<br>53424 Remagen<br>Telefon: 02642 . 210 872
					</p>
					<p><strong>Angaben zur Kontaktaufnahme und verantwortlich f\xFCr den Inhalt gem. \xA755 Abs. 2 RStV:</strong></p>
					<p>Dr. phil. Marion Bertgen-Giesen<br>Gregor-Mendel-Stra\xDFe 26<br>53115 Bonn<br>Telefon: 0228 . 230 390<br>E-Mail: m.bertgen@t-online.de
					</p>
					<p>\xA0</p>
					<p><strong>Gesetzliche Berufsbezeichnung:</strong><br>Psycholgische Psychotherapeutin,
						verliehen in der Bundesrepublik Deutschland
					</p>
					<p>LANR: 828724108</p>
					<p>Zust\xE4ndige Aufsichtsbeh\xF6rde/Berufskammer gem. \xA76 Nr. 3 TDG:</p>
					<p>Landespsychotherapeutenkammer Rheinland-Pfalz, Diether-von-Isenburg-Stra\xDFe 9 - 11, 55116
						Mainz, http://www.laek-rlp.de
					</p>
					<p>Approbation vom 4.1.1999 verliehen vom Landesamt f\xFCr Versorgung, Jugend und Soziales in
						Koblenz
					</p>
					<p>Zust\xE4ndigkeit f\xFCr Qualit\xE4tszirkel-Zertifizierung: \xC4rztekammer Nordrhein in D\xFCsseldorf
					</p>
					<p>\xA0</p>
					<p><strong>Berufsst\xE4ndische Mitgliedschaften:</strong></p>
					<p>Deutsche Psychotherapeutenvereinigung (DPTV) in Berlin</p>
					<p>Berufsverband Deutscher Psychologen (BdP) in Berlin</p>
					<hr>
					<p>\xA0</p>
					<h3>Haftung f\xFCr Inhalte</h3>
					<p>Die Inhalte unserer Seiten wurden mit gr\xF6\xDFter Sorgfalt erstellt. F\xFCr die Richtigkeit,
						Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte k\xF6nnen wir jedoch keine Gew\xE4hr \xFCbernehmen.
						Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten
						nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als
						Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde
						Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige
						T\xE4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
						Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine
						diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
						Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
						wir diese Inhalte umgehend entfernen.
					</p>
					<hr>
					<p>\xA0</p>
					<h3>Haftung f\xFCr Links</h3>
					<p>Unser Angebot enth\xE4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
						Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr
						\xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
						Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
						Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum
						Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
						verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
						zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
						entfernen.
					</p>
					<hr>
					<p>\xA0</p>
					<h3>Urheberrecht</h3>
					<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
						dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art
						der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen
						Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
						nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
						dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
						beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
						trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
						entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
						Inhalte umgehend entfernen.
					</p>
					<hr>
					<p>\xA0</p>
					<h3>Datenschutz</h3>
					<p><strong>DATENSCHUTZERKL\xC4RUNG</strong> <br>Wir freuen uns sehr \xFCber Ihr Interesse an
						unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert f\xFCr die
						Gesch\xE4ftsleitung der Praxis Dr. Bertgen-Giesen. Eine Nutzung der Internetseiten der
						Praxis Dr. Bertgen-Giesen ist grunds\xE4tzlich ohne jede Angabe personenbezogener Daten
						m\xF6glich. Sofern eine betroffene Person besondere Services unseres Unternehmens \xFCber
						unsere Internetseite in Anspruch nehmen m\xF6chte, k\xF6nnte jedoch eine Verarbeitung
						personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener
						Daten erforderlich und besteht f\xFCr eine solche Verarbeitung keine gesetzliche Grundlage,
						holen wir generell eine Einwilligung der betroffenen Person ein.
					</p>
					<p>Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift,
						E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang
						mit der Datenschutz-Grundverordnung und in \xDCbereinstimmung mit den f\xFCr die Praxis Dr.
						Bertgen-Giesen geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser
						Datenschutzerkl\xE4rung m\xF6chte unser Unternehmen die \xD6ffentlichkeit \xFCber Art, Umfang und
						Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten
						informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerkl\xE4rung \xFCber
						die ihnen zustehenden Rechte aufgekl\xE4rt.
					</p>
					<p>Die Praxis Dr. Bertgen-Giesen hat als f\xFCr die Verarbeitung Verantwortlicher zahlreiche
						technische und organisatorische Ma\xDFnahmen umgesetzt, um einen m\xF6glichst l\xFCckenlosen
						Schutz der \xFCber diese Internetseite verarbeiteten personenbezogenen Daten
						sicherzustellen. Dennoch k\xF6nnen Internetbasierte Daten\xFCbertragungen grunds\xE4tzlich
						Sicherheitsl\xFCcken aufweisen, sodass ein absoluter Schutz nicht gew\xE4hrleistet werden
						kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten
						auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu \xFCbermitteln.
					</p>
					<p><strong>1. BEGRIFFSBESTIMMUNGEN</strong><br> Die Datenschutzerkl\xE4rung der Praxis Dr. Bertgen-Giesen
						beruht auf den Begrifflichkeiten, die durch den Europ\xE4ischen Richtlinien- und Verordnungsgeber
						beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerkl\xE4rung
						soll sowohl f\xFCr die \xD6ffentlichkeit als auch f\xFCr unsere Kunden und Gesch\xE4ftspartner einfach
						lesbar und verst\xE4ndlich sein. Um dies zu gew\xE4hrleisten, m\xF6chten wir vorab die verwendeten
						Begrifflichkeiten erl\xE4utern.
					</p>
					<p>Wir verwenden in dieser Datenschutzerkl\xE4rung unter anderem die folgenden Begriffe:</p>
					<ol type="${'a'}"><li>PERSONENBEZOGENE DATEN<br> Personenbezogene Daten sind alle Informationen, die sich auf
							eine identifizierte oder identifizierbare nat\xFCrliche Person (im Folgenden \u201Ebetroffene Person\u201C)
							beziehen. Als identifizierbar wird eine nat\xFCrliche Person angesehen, die direkt oder indirekt,
							insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
							Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen,
							die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen,
							kulturellen oder sozialen Identit\xE4t dieser nat\xFCrlichen Person sind, identifiziert werden
							kann.
						</li>
						<li>BETROFFENE PERSON<br>Betroffene Person ist jede identifizierte oder identifizierbare
							nat\xFCrliche Person, deren personenbezogene Daten von dem f\xFCr die Verarbeitung
							Verantwortlichen verarbeitet werden.
						</li>
						<li>VERARBEITUNG<br>Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren
							ausgef\xFChrte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
							personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen,
							die Speicherung, die Anpassung oder Ver\xE4nderung, das Auslesen, das Abfragen, die
							Verwendung, die Offenlegung durch \xDCbermittlung, Verbreitung oder eine andere Form der
							Bereitstellung, den Abgleich oder die Verkn\xFCpfung, die Einschr\xE4nkung, das L\xF6schen oder
							die Vernichtung.
						</li>
						<li>EINSCHR\xC4NKUNG DER VERARBEITUNG<br>Einschr\xE4nkung der Verarbeitung ist die Markierung
							gespeicherter personenbezogener Daten mit dem Ziel, ihre k\xFCnftige Verarbeitung
							einzuschr\xE4nken.
						</li>
						<li>PROFILING<br> Profiling ist jede Art der automatisierten Verarbeitung personenbezogener
							Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte
							pers\xF6nliche Aspekte, die sich auf eine nat\xFCrliche Person beziehen, zu bewerten, insbesondere,
							um Aspekte bez\xFCglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, pers\xF6nlicher Vorlieben,
							Interessen, Zuverl\xE4ssigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser nat\xFCrlichen
							Person zu analysieren oder vorherzusagen.
						</li>
						<li>PSEUDOMISIERUNG<br> Pseudonymisierung ist die Verarbeitung personenbezogener Daten in
							einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zus\xE4tzlicher Informationen
							nicht mehr einer spezifischen betroffenen Person zugeordnet werden k\xF6nnen, sofern diese
							zus\xE4tzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen
							Ma\xDFnahmen unterliegen, die gew\xE4hrleisten, dass die personenbezogenen Daten nicht einer
							identifizierten oder identifizierbaren nat\xFCrlichen Person zugewiesen werden.
						</li>
						<li>VERANTWORTLICHER ODER F\xDCR DIE VERARBEITUNG VERANTWORTLICHER<br> Verantwortlicher oder
							f\xFCr die Verarbeitung Verantwortlicher ist die nat\xFCrliche oder juristische Person, Beh\xF6rde,
							Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen \xFCber die Zwecke und
							Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel
							dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben,
							so kann der Verantwortliche beziehungsweise k\xF6nnen die bestimmten Kriterien seiner Benennung
							nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
						</li>
						<li>AUFTRAGSVERABEITER<br> Auftragsverarbeiter ist eine nat\xFCrliche oder juristische Person,
							Beh\xF6rde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen
							verarbeitet.
						</li>
						<li>EMPF\xC4NGER<br> Empf\xE4nger ist eine nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung
							oder andere Stelle, der personenbezogene Daten offengelegt werden, unabh\xE4ngig davon, ob
							es sich bei ihr um einen Dritten handelt oder nicht. Beh\xF6rden, die im Rahmen eines bestimmten
							Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten m\xF6glicherweise
							personenbezogene Daten erhalten, gelten jedoch nicht als Empf\xE4nger.
						</li>
						<li>DRITTER<br> Dritter ist eine nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung
							oder andere Stelle au\xDFer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter
							und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des
							Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.
						</li>
						<li>EINWILLIGUNG<br> Einwilligung ist jede von der betroffenen Person freiwillig f\xFCr den
							bestimmten Fall in informierter Weise und unmissverst\xE4ndlich abgegebene Willensbekundung
							in Form einer Erkl\xE4rung oder einer sonstigen eindeutigen best\xE4tigenden Handlung, mit der
							die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden
							personenbezogenen Daten einverstanden ist.
						</li></ol>
					<hr>
					<p>\xA0</p>
					<h3>Pers\xF6nliche Daten</h3>
					<p>Der Betreiber dieser Seiten nimmt den Schutz Ihrer pers\xF6nlichen Daten sehr ernst. Wir
						behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
						Datenschutzvorschriften sowie dieser Datenschutzerkl\xE4rung.
					</p>
					<p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
						m\xF6glich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
						Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit m\xF6glich, stets auf
						freiwilliger Basis. Diese Daten werden ohne Ihre ausdr\xFCckliche Zustimmung nicht an
						Dritte weitergegeben.
					</p>
					<p>Ich weise darauf hin, dass die Daten\xFCbertragung im Internet (z.B. bei der Kommunikation
						per E-Mail) Sicherheitsl\xFCcken aufweisen kann. Ein l\xFCckenloser Schutz der Daten vor dem
						Zugriff durch Dritte ist nicht m\xF6glich.
					</p>
					<p>Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
						Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
						der Anfrage und f\xFCr den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe
						ich nicht ohne Ihre Einwilligung weiter.
					</p>
					<hr>
					<p>\xA0</p>
					<h3>Auskunft, L\xF6schung, Sperrung</h3>
					<p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft \xFCber Ihre gespeicherten
						personenbezogenen Daten, deren Herkunft und Empf\xE4nger und den Zweck der
						Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder L\xF6schung dieser Daten.
						Hierzu, sowie zu weiteren Fragen zum Thema personenbezogene Daten k\xF6nnen Sie sich
						jederzeit \xFCber die im Impressum angegeben Adresse an mich wenden.
					</p>
					<hr>
					<p>\xA0</p>
					<h3>Gestaltung und technische Umsetzung</h3>
					<p>Jo Sch\xE4fer | Digital Media Design<br>Web:
						<a href="${'http://www.joschaefer.com/'}" target="${'_blank'}">www.joschaefer.com</a></p></div></div></div></div></div>`;
});
export { Page as default };
