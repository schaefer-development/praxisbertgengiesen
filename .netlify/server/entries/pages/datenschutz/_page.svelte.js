import {
	c as create_ssr_component,
	b as add_attribute,
	v as validate_component
} from '../../../chunks/index.js';
import { H as HeroRheinblick } from '../../../chunks/bg_rheinblick.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Datenschutz - Dr. Bertgen-Giesen</title>`), '')
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

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'datenschutz'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first last block'}"><h1>Datenschutz</h1>

					<h2>Datenschutzerkl\xE4rung</h2>
					<p><br>Wir freuen uns sehr \xFCber Ihr Interesse an unserem Unternehmen. Datenschutz hat
						einen besonders hohen Stellenwert f\xFCr die Gesch\xE4ftsleitung der Praxis Dr.
						Bertgen-Giesen. Eine Nutzung der Internetseiten der Praxis Dr. Bertgen-Giesen ist
						grunds\xE4tzlich ohne jede Angabe personenbezogener Daten m\xF6glich. Sofern eine betroffene
						Person besondere Services unseres Unternehmens \xFCber unsere Internetseite in Anspruch
						nehmen m\xF6chte, k\xF6nnte jedoch eine Verarbeitung personenbezogener Daten erforderlich
						werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht f\xFCr eine
						solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung
						der betroffenen Person ein.
					</p>
					<p><br>Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der
						Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im
						Einklang mit der Datenschutz-Grundverordnung und in \xDCbereinstimmung mit den f\xFCr die
						Praxis Dr. Bertgen-Giesen geltenden landesspezifischen Datenschutzbestimmungen. Mittels
						dieser Datenschutzerkl\xE4rung m\xF6chte unser Unternehmen die \xD6ffentlichkeit \xFCber Art, Umfang
						und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten
						informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerkl\xE4rung \xFCber
						die ihnen zustehenden Rechte aufgekl\xE4rt.
					</p>
					<p><br>Die Praxis Dr. Bertgen-Giesen hat als f\xFCr die Verarbeitung Verantwortlicher
						zahlreiche technische und organisatorische Ma\xDFnahmen umgesetzt, um einen m\xF6glichst
						l\xFCckenlosen Schutz der \xFCber diese Internetseite verarbeiteten personenbezogenen Daten
						sicherzustellen. Dennoch k\xF6nnen Internetbasierte Daten\xFCbertragungen grunds\xE4tzlich
						Sicherheitsl\xFCcken aufweisen, sodass ein absoluter Schutz nicht gew\xE4hrleistet werden
						kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten
						auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu \xFCbermitteln.
					</p>
					<h3><br>1. Begriffsbestimmungen</h3>
					<p>Die Datenschutzerkl\xE4rung der Praxis Dr. Bertgen-Giesen beruht auf den Begrifflichkeiten,
						die durch den Europ\xE4ischen Richtlinien- und Verordnungsgeber beim Erlass der
						Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerkl\xE4rung soll
						sowohl f\xFCr die \xD6ffentlichkeit als auch f\xFCr unsere Kunden und Gesch\xE4ftspartner einfach
						lesbar und verst\xE4ndlich sein. Um dies zu gew\xE4hrleisten, m\xF6chten wir vorab die
						verwendeten Begrifflichkeiten erl\xE4utern.
					</p>
					<p>Wir verwenden in dieser Datenschutzerkl\xE4rung unter anderem die folgenden Begriffe:</p>
					<p><strong>a) personenbezogene Daten</strong><br>Personenbezogene Daten sind alle
						Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person
						(im Folgenden \u201Ebetroffene Person\u201C) beziehen. Als identifizierbar wird eine nat\xFCrliche
						Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer
						Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
						oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen,
						physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
						Identit\xE4t dieser nat\xFCrlichen Person sind, identifiziert werden kann.
					</p>
					<p><strong>b) betroffene Person</strong><br>Betroffene Person ist jede identifizierte
						oder identifizierbare nat\xFCrliche Person, deren personenbezogene Daten von dem f\xFCr die
						Verarbeitung Verantwortlichen verarbeitet werden.
					</p>
					<p><strong>c) Verarbeitung</strong><br>Verarbeitung ist jeder mit oder ohne Hilfe
						automatisierter Verfahren ausgef\xFChrte Vorgang oder jede solche Vorgangsreihe im
						Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die
						Organisation, das Ordnen, die Speicherung, die Anpassung oder Ver\xE4nderung, das Auslesen,
						das Abfragen, die Verwendung, die Offenlegung durch \xDCbermittlung, Verbreitung oder eine
						andere Form der Bereitstellung, den Abgleich oder die Verkn\xFCpfung, die Einschr\xE4nkung,
						das L\xF6schen oder die Vernichtung.
					</p>
					<p><strong>d) Einschr\xE4nkung der Verarbeitung</strong><br>Einschr\xE4nkung der Verarbeitung
						ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre k\xFCnftige
						Verarbeitung einzuschr\xE4nken.
					</p>
					<p><strong>e) Profiling</strong><br>Profiling ist jede Art der automatisierten
						Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen
						Daten verwendet werden, um bestimmte pers\xF6nliche Aspekte, die sich auf eine nat\xFCrliche
						Person beziehen, zu bewerten, insbesondere, um Aspekte bez\xFCglich Arbeitsleistung,
						wirtschaftlicher Lage, Gesundheit, pers\xF6nlicher Vorlieben, Interessen, Zuverl\xE4ssigkeit,
						Verhalten, Aufenthaltsort oder Ortswechsel dieser nat\xFCrlichen Person zu analysieren oder
						vorherzusagen.
					</p>
					<p><strong>f) Pseudonymisierung</strong><br>Pseudonymisierung ist die Verarbeitung
						personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne
						Hinzuziehung zus\xE4tzlicher Informationen nicht mehr einer spezifischen betroffenen Person
						zugeordnet werden k\xF6nnen, sofern diese zus\xE4tzlichen Informationen gesondert aufbewahrt
						werden und technischen und organisatorischen Ma\xDFnahmen unterliegen, die gew\xE4hrleisten,
						dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren
						nat\xFCrlichen Person zugewiesen werden.
					</p>
					<p><strong>g) Verantwortlicher oder f\xFCr die Verarbeitung Verantwortlicher</strong><br>Verantwortlicher oder f\xFCr die Verarbeitung Verantwortlicher ist die nat\xFCrliche oder
						juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, die allein oder gemeinsam
						mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
						entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder
						das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise
						k\xF6nnen die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der
						Mitgliedstaaten vorgesehen werden.
					</p>
					<p><strong>h) Auftragsverarbeiter</strong><br>Auftragsverarbeiter ist eine nat\xFCrliche
						oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, die personenbezogene
						Daten im Auftrag des Verantwortlichen verarbeitet.
					</p>
					<p><strong>i) Empf\xE4nger</strong><br>Empf\xE4nger ist eine nat\xFCrliche oder juristische
						Person, Beh\xF6rde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt
						werden, unabh\xE4ngig davon, ob es sich bei ihr um einen Dritten handelt oder nicht.
						Beh\xF6rden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder
						dem Recht der Mitgliedstaaten m\xF6glicherweise personenbezogene Daten erhalten, gelten
						jedoch nicht als Empf\xE4nger.
					</p>
					<p><strong>j) Dritter</strong><br>Dritter ist eine nat\xFCrliche oder juristische Person,
						Beh\xF6rde, Einrichtung oder andere Stelle au\xDFer der betroffenen Person, dem
						Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren
						Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die
						personenbezogenen Daten zu verarbeiten.
					</p>
					<p><strong>k) Einwilligung</strong><br>Einwilligung ist jede von der betroffenen Person
						freiwillig f\xFCr den bestimmten Fall in informierter Weise und unmissverst\xE4ndlich
						abgegebene Willensbekundung in Form einer Erkl\xE4rung oder einer sonstigen eindeutigen
						best\xE4tigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit
						der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
					</p>
					<h3><br>2. Name und Anschrift des f\xFCr die Verarbeitung Verantwortlichen</h3>
					<p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den
						Mitgliedstaaten der Europ\xE4ischen Union geltenden Datenschutzgesetze und anderer
						Bestimmungen mit datenschutzrechtlichem Charakter ist die:<br>Praxis Dr.
						Bertgen-Giesen <br>Seelenstraße 8<br>53424 Remagen<br>Deutschland<br>Telefon:
						02642-210 872<br>E-Mail: info@dr-bertgen-giesen.de <br>Website:
						www.dr-bertgen-giesen.de
					</p>
					<h3><br>3. Erfassung von allgemeinen Daten und Informationen</h3>
					<p>Die Internetseite der Praxis Dr. Bertgen-Giesen erfasst mit jedem Aufruf der
						Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe
						von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen
						werden in den Logfiles des Servers gespeichert. Erfasst werden k\xF6nnen die (1)
						verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete
						Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere
						Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche \xFCber ein
						zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die
						Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse
						(IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8)
						sonstige \xE4hnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen
						auf unsere informationstechnologischen Systeme dienen.
					</p>
					<p>Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Praxis Dr.
						Bertgen-Giesen keine R\xFCckschl\xFCsse auf die betroffene Person. Diese Informationen werden
						vielmehr ben\xF6tigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2)
						die Inhalte unserer Internetseite sowie die Werbung f\xFCr diese zu optimieren, (3) die
						dauerhafte Funktionsf\xE4higkeit unserer informationstechnologischen Systeme und der
						Technik unserer Internetseite zu gew\xE4hrleisten sowie (4) um Strafverfolgungsbeh\xF6rden im
						Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen
						bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die Praxis
						Dr. Bertgen-Giesen daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den
						Datenschutz und die Datensicherheit in unserem Unternehmen zu erh\xF6hen, um letztlich ein
						optimales Schutzniveau f\xFCr die von uns verarbeiteten personenbezogenen Daten
						sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch
						eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
					</p>
					<h3><br>4. Kontaktm\xF6glichkeit \xFCber die Internetseite</h3>
					<p>Die Internetseite der Praxis Dr. Bertgen-Giesen enth\xE4lt aufgrund von gesetzlichen
						Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem
						Unternehmen sowie eine unmittelbare Kommunikation mit uns erm\xF6glichen, was ebenfalls
						eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst.
						Sofern eine betroffene Person per E-Mail oder \xFCber ein Kontaktformular den Kontakt mit
						dem f\xFCr die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen
						Person \xFCbermittelten personenbezogenen Daten automatisch gespeichert. Solche auf
						freiwilliger Basis von einer betroffenen Person an den f\xFCr die Verarbeitung
						Verantwortlichen \xFCbermittelten personenbezogenen Daten werden f\xFCr Zwecke der Bearbeitung
						oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe
						dieser personenbezogenen Daten an Dritte.
					</p>
					<h3><br>5. Routinem\xE4\xDFige L\xF6schung und Sperrung von personenbezogenen Daten</h3>
					<p>Der f\xFCr die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene
						Daten der betroffenen Person nur f\xFCr den Zeitraum, der zur Erreichung des
						Speicherungszwecks erforderlich ist oder sofern dies durch den Europ\xE4ischen Richtlinien-
						und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften,
						welchen der f\xFCr die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.
					</p>
					<p>Entf\xE4llt der Speicherungszweck oder l\xE4uft eine vom Europ\xE4ischen Richtlinien- und
						Verordnungsgeber oder einem anderen zust\xE4ndigen Gesetzgeber vorgeschriebene
						Speicherfrist ab, werden die personenbezogenen Daten routinem\xE4\xDFig und entsprechend den
						gesetzlichen Vorschriften gesperrt oder gel\xF6scht.
					</p>
					<h3><br>6. Rechte der betroffenen Person</h3>
					<p><strong>a) Recht auf Best\xE4tigung</strong><br>Jede betroffene Person hat das vom
						Europ\xE4ischen Richtlinien- und Verordnungsgeber einger\xE4umte Recht, von dem f\xFCr die
						Verarbeitung Verantwortlichen eine Best\xE4tigung dar\xFCber zu verlangen, ob sie betreffende
						personenbezogene Daten verarbeitet werden. M\xF6chte eine betroffene Person dieses
						Best\xE4tigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit direkt an Frau Dr.
						Bertgen-Giesen oder einen anderen Mitarbeiter wenden.
					</p>
					<p><strong>b) Recht auf Auskunft</strong><br>Jede von der Verarbeitung personenbezogener
						Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und Verordnungsgeber
						gew\xE4hrte Recht, jederzeit von dem f\xFCr die Verarbeitung Verantwortlichen unentgeltliche
						Auskunft \xFCber die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie
						dieser Auskunft zu erhalten. Ferner hat der Europ\xE4ische Richtlinien- und
						Verordnungsgeber der betroffenen Person Auskunft \xFCber folgende Informationen
						zugestanden:
					</p>
					<ul><li>die Verarbeitungszwecke</li>
						<li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
						<li>die Empf\xE4nger oder Kategorien von Empf\xE4ngern, gegen\xFCber denen die personenbezogenen
							Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei
							Empf\xE4ngern in Drittl\xE4ndern oder bei internationalen Organisationen
						</li>
						<li>falls m\xF6glich die geplante Dauer, f\xFCr die die personenbezogenen Daten gespeichert
							werden, oder, falls dies nicht m\xF6glich ist, die Kriterien f\xFCr die Festlegung dieser
							Dauer
						</li>
						<li>das Bestehen eines Rechts auf Berichtigung oder L\xF6schung der sie betreffenden
							personenbezogenen Daten oder auf Einschr\xE4nkung der Verarbeitung durch den
							Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung
						</li>
						<li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbeh\xF6rde</li>
						<li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle
							verf\xFCgbaren Informationen \xFCber die Herkunft der Daten
						</li>
						<li>das Bestehen einer automatisierten Entscheidungsfindung einschlie\xDFlich Profiling gem\xE4\xDF
							Artikel 22 Abs.1 und 4 DS-GVO und \u2014 zumindest in diesen F\xE4llen \u2014 aussagekr\xE4ftige
							Informationen \xFCber die involvierte Logik sowie die Tragweite und die angestrebten
							Auswirkungen einer derartigen Verarbeitung f\xFCr die betroffene Person
						</li></ul>
					<p><br>Ferner steht der betroffenen Person ein Auskunftsrecht dar\xFCber zu, ob
						personenbezogene Daten an ein Drittland oder an eine internationale Organisation
						\xFCbermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im \xDCbrigen
						das Recht zu, Auskunft \xFCber die geeigneten Garantien im Zusammenhang mit der
						\xDCbermittlung zu erhalten.<br>M\xF6chte eine betroffene Person dieses Auskunftsrecht in
						Anspruch nehmen, kann sie sich hierzu jederzeit direkt an Frau Dr. Bertgen-Giesen oder
						einen anderen Mitarbeiter wenden.
					</p>
					<p><strong>c) Recht auf Berichtigung</strong><br>Jede von der Verarbeitung
						personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und
						Verordnungsgeber gew\xE4hrte Recht, die unverz\xFCgliche Berichtigung sie betreffender
						unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person
						das Recht zu, unter Ber\xFCcksichtigung der Zwecke der Verarbeitung, die Vervollst\xE4ndigung
						unvollst\xE4ndiger personenbezogener Daten \u2014 auch mittels einer erg\xE4nzenden Erkl\xE4rung \u2014 zu
						verlangen.<br>M\xF6chte eine betroffene Person dieses Berichtigungsrecht in Anspruch
						nehmen, kann sie sich hierzu jederzeit direkt an Frau Dr. Bertgen-Giesen oder einen
						anderen Mitarbeiter wenden.
					</p>
					<p><strong>d) Recht auf L\xF6schung (Recht auf Vergessen werden)</strong><br>Jede von der
						Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen
						Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, von dem Verantwortlichen zu verlangen,
						dass die sie betreffenden personenbezogenen Daten unverz\xFCglich gel\xF6scht werden, sofern
						einer der folgenden Gr\xFCnde zutrifft und soweit die Verarbeitung nicht erforderlich ist:
					</p>
					<ul><li>Die personenbezogenen Daten wurden f\xFCr solche Zwecke erhoben oder auf sonstige Weise
							verarbeitet, f\xFCr welche sie nicht mehr notwendig sind.
						</li>
						<li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gem\xE4\xDF
							Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO st\xFCtzte, und es
							fehlt an einer anderweitigen Rechtsgrundlage f\xFCr die Verarbeitung.
						</li>
						<li>Die betroffene Person legt gem\xE4\xDF Art. 21 Abs. 1 DS-GVO Widerspruch gegen die
							Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gr\xFCnde f\xFCr die
							Verarbeitung vor, oder die betroffene Person legt gem\xE4\xDF Art. 21 Abs. 2 DS-GVO
							Widerspruch gegen die Verarbeitung ein.
						</li>
						<li>Die personenbezogenen Daten wurden unrechtm\xE4\xDFig verarbeitet.</li>
						<li>Die L\xF6schung der personenbezogenen Daten ist zur Erf\xFCllung einer rechtlichen
							Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich,
							dem der Verantwortliche unterliegt.
						</li>
						<li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
							Informationsgesellschaft gem\xE4\xDF Art. 8 Abs. 1 DS-GVO erhoben.
						</li></ul>
					<p><br>Sofern einer der oben genannten Gr\xFCnde zutrifft und eine betroffene Person die
						L\xF6schung von personenbezogenen Daten, die bei der Praxis Dr. Bertgen-Giesen gespeichert
						sind, veranlassen m\xF6chte, kann sie sich hierzu jederzeit direkt an Frau Dr.
						Bertgen-Giesen oder einen anderen Mitarbeiter wenden. Frau Dr. Bertgen-Giesen oder ein
						anderer Mitarbeiter wird veranlassen, dass dem L\xF6schverlangen unverz\xFCglich nachgekommen
						wird.
					</p>
					<p>Wurden die personenbezogenen Daten von der Praxis Dr. Bertgen-Giesen \xF6ffentlich gemacht
						und ist unser Unternehmen als Verantwortlicher gem\xE4\xDF Art. 17 Abs. 1 DS-GVO zur L\xF6schung
						der personenbezogenen Daten verpflichtet, so trifft die Praxis Dr. Bertgen-Giesen unter
						Ber\xFCcksichtigung der verf\xFCgbaren Technologie und der Implementierungskosten angemessene
						Ma\xDFnahmen, auch technischer Art, um andere f\xFCr die Datenverarbeitung Verantwortliche,
						welche die ver\xF6ffentlichten personenbezogenen Daten verarbeiten, dar\xFCber in Kenntnis zu
						setzen, dass die betroffene Person von diesen anderen f\xFCr die Datenverarbeitung
						Verantwortlichen die L\xF6schung s\xE4mtlicher Links zu diesen personenbezogenen Daten oder
						von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die
						Verarbeitung nicht erforderlich ist. Frau Dr. Bertgen-Giesen oder ein anderer
						Mitarbeiter wird im Einzelfall das Notwendige veranlassen.
					</p>
					<p><strong>e) Recht auf Einschr\xE4nkung der Verarbeitung</strong><br>Jede von der
						Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen
						Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, von dem Verantwortlichen die
						Einschr\xE4nkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen
						gegeben ist:
					</p>
					<ul><li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person
							bestritten, und zwar f\xFCr eine Dauer, die es dem Verantwortlichen erm\xF6glicht, die
							Richtigkeit der personenbezogenen Daten zu \xFCberpr\xFCfen.
						</li>
						<li>Die Verarbeitung ist unrechtm\xE4\xDFig, die betroffene Person lehnt die L\xF6schung der
							personenbezogenen Daten ab und verlangt stattdessen die Einschr\xE4nkung der Nutzung der
							personenbezogenen Daten.
						</li>
						<li>Der Verantwortliche ben\xF6tigt die personenbezogenen Daten f\xFCr die Zwecke der
							Verarbeitung nicht l\xE4nger, die betroffene Person ben\xF6tigt sie jedoch zur
							Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen.
						</li>
						<li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1
							DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gr\xFCnde des
							Verantwortlichen gegen\xFCber denen der betroffenen Person \xFCberwiegen.
						</li></ul>
					<p>Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person
						die Einschr\xE4nkung von personenbezogenen Daten, die bei der Praxis Dr. Bertgen-Giesen
						gespeichert sind, verlangen m\xF6chte, kann sie sich hierzu jederzeit direkt an Frau Dr.
						Bertgen-Giesen oder einen anderen Mitarbeiter wenden. Frau Dr. Bertgen-Giesen oder ein
						anderer Mitarbeiter wird die Einschr\xE4nkung der Verarbeitung veranlassen.
					</p>
					<p><strong>f) Recht auf Daten\xFCbertragbarkeit</strong><br>Jede von der Verarbeitung
						personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und
						Verordnungsgeber gew\xE4hrte Recht, die sie betreffenden personenbezogenen Daten, welche
						durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem
						strukturierten, g\xE4ngigen und maschinenlesbaren Format zu erhalten. Sie hat au\xDFerdem das
						Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den
						Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu \xFCbermitteln,
						sofern die Verarbeitung auf der Einwilligung gem\xE4\xDF Art. 6 Abs. 1 Buchstabe a DS-GVO oder
						Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gem\xE4\xDF Art. 6 Abs. 1 Buchstabe b
						DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern
						die Verarbeitung nicht f\xFCr die Wahrnehmung einer Aufgabe erforderlich ist, die im
						\xF6ffentlichen Interesse liegt oder in Aus\xFCbung \xF6ffentlicher Gewalt erfolgt, welche dem
						Verantwortlichen \xFCbertragen wurde.<br>Ferner hat die betroffene Person bei der
						Aus\xFCbung ihres Rechts auf Daten\xFCbertragbarkeit gem\xE4\xDF Art. 20 Abs. 1 DS-GVO das Recht, zu
						erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen
						anderen Verantwortlichen \xFCbermittelt werden, soweit dies technisch machbar ist und
						sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeintr\xE4chtigt werden.<br>Zur Geltendmachung des Rechts auf Daten\xFCbertragbarkeit kann sich die betroffene Person
						jederzeit direkt an Frau Dr. Bertgen-Giesen oder einen anderen Mitarbeiter wenden.
					</p>
					<p><strong>g) Recht auf Widerspruch</strong><br>Jede von der Verarbeitung
						personenbezogener Daten betroffene Person hat das vom Europ\xE4ischen Richtlinien- und
						Verordnungsgeber gew\xE4hrte Recht, aus Gr\xFCnden, die sich aus ihrer besonderen Situation
						ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die
						aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen.
						Dies gilt auch f\xFCr ein auf diese Bestimmungen gest\xFCtztes Profiling.<br>Die Praxis Dr.
						Bertgen-Giesen verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht
						mehr, es sei denn, wir k\xF6nnen zwingende schutzw\xFCrdige Gr\xFCnde f\xFCr die Verarbeitung
						nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person
						\xFCberwiegen, oder die Verarbeitung dient der Geltendmachung, Aus\xFCbung oder Verteidigung
						von Rechtsanspr\xFCchen.<br>Verarbeitet die Praxis Dr. Bertgen-Giesen personenbezogene
						Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit
						Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger
						Werbung einzulegen. Dies gilt auch f\xFCr das Profiling, soweit es mit solcher
						Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegen\xFCber der
						Praxis Dr. Bertgen-Giesen der Verarbeitung f\xFCr Zwecke der Direktwerbung, so wird die
						Praxis Dr. Bertgen-Giesen die personenbezogenen Daten nicht mehr f\xFCr diese Zwecke
						verarbeiten.<br>Zudem hat die betroffene Person das Recht, aus Gr\xFCnden, die sich aus
						ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung
						personenbezogener Daten, die bei der Praxis Dr. Bertgen-Giesen zu wissenschaftlichen
						oder historischen Forschungszwecken oder zu statistischen Zwecken gem\xE4\xDF Art. 89 Abs. 1
						DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur
						Erf\xFCllung einer im \xF6ffentlichen Interesse liegenden Aufgabe erforderlich.
					</p>
					<p>Zur Aus\xFCbung des Rechts auf Widerspruch kann sich die betroffene Person jederzeit direkt
						an Frau Dr. Bertgen-Giesen oder einen anderen Mitarbeiter wenden. Der betroffenen Person
						steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der
						Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht
						mittels automatisierter Verfahren auszu\xFCben, bei denen technische Spezifikationen
						verwendet werden.
					</p>
					<p><strong>h) Automatisierte Entscheidungen im Einzelfall einschlie\xDFlich Profiling</strong><br>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
						Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, nicht einer
						ausschlie\xDFlich auf einer automatisierten Verarbeitung \u2014 einschlie\xDFlich Profiling \u2014
						beruhenden Entscheidung unterworfen zu werden, die ihr gegen\xFCber rechtliche Wirkung
						entfaltet oder sie in \xE4hnlicher Weise erheblich beeintr\xE4chtigt, sofern die Entscheidung
						(1) nicht f\xFCr den Abschluss oder die Erf\xFCllung eines Vertrags zwischen der betroffenen
						Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von
						Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche
						unterliegt, zul\xE4ssig ist und diese Rechtsvorschriften angemessene Ma\xDFnahmen zur Wahrung
						der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person
						enthalten oder (3) mit ausdr\xFCcklicher Einwilligung der betroffenen Person erfolgt.<br>Ist die Entscheidung (1) f\xFCr den Abschluss oder die Erf\xFCllung eines Vertrags zwischen
						der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit
						ausdr\xFCcklicher Einwilligung der betroffenen Person, trifft die Praxis Dr. Bertgen-Giesen
						angemessene Ma\xDFnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen
						der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des
						Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen
						Standpunkts und auf Anfechtung der Entscheidung geh\xF6rt.<br>M\xF6chte die betroffene
						Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich
						hierzu jederzeit direkt an Frau Dr. Bertgen-Giesen oder einen anderen Mitarbeiter
						wenden.
					</p>
					<p><strong>i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</strong><br>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom
						Europ\xE4ischen Richtlinien- und Verordnungsgeber gew\xE4hrte Recht, eine Einwilligung zur
						Verarbeitung personenbezogener Daten jederzeit zu widerrufen.<br>M\xF6chte die betroffene
						Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu
						jederzeit direkt an Frau Dr. Bertgen-Giesen oder einen anderen Mitarbeiter wenden.
					</p>
					<h3><br>7. Rechtsgrundlage der Verarbeitung</h3>
					<p>Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage f\xFCr
						Verarbeitungsvorg\xE4nge, bei denen wir eine Einwilligung f\xFCr einen bestimmten
						Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erf\xFCllung
						eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies
						beispielsweise bei Verarbeitungsvorg\xE4ngen der Fall ist, die f\xFCr eine Lieferung von Waren
						oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so
						beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt f\xFCr solche
						Verarbeitungsvorg\xE4nge die zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich sind,
						etwa in F\xE4llen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser
						Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von
						personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erf\xFCllung steuerlicher
						Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen F\xE4llen
						k\xF6nnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um
						lebenswichtige Interessen der betroffenen Person oder einer anderen nat\xFCrlichen Person
						zu sch\xFCtzen. Dies w\xE4re beispielsweise der Fall, wenn ein Besucher in unserem Betrieb
						verletzt werden w\xFCrde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder
						sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige
						Dritte weitergegeben werden m\xFCssten. Dann w\xFCrde die Verarbeitung auf Art. 6 I lit. d
						DS-GVO beruhen. Letztlich k\xF6nnten Verarbeitungsvorg\xE4nge auf Art. 6 I lit. f DS-GVO
						beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorg\xE4nge, die von keiner der
						vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines
						berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern
						die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht \xFCberwiegen. Solche
						Verarbeitungsvorg\xE4nge sind uns insbesondere deshalb gestattet, weil sie durch den
						Europ\xE4ischen Gesetzgeber besonders erw\xE4hnt wurden. Er vertrat insoweit die Auffassung,
						dass ein berechtigtes Interesse anzunehmen sein k\xF6nnte, wenn die betroffene Person ein
						Kunde des Verantwortlichen ist (Erw\xE4gungsgrund 47 Satz 2 DS-GVO).
					</p>
					<h3><br>8. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder
						einem Dritten verfolgt werden
					</h3>
					<p>Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser
						berechtigtes Interesse die Durchf\xFChrung unserer Gesch\xE4ftst\xE4tigkeit zugunsten des
						Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.
					</p>
					<h3><br>9. Dauer, f\xFCr die die personenbezogenen Daten gespeichert werden</h3>
					<p>Das Kriterium f\xFCr die Dauer der Speicherung von personenbezogenen Daten ist die
						jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die
						entsprechenden Daten routinem\xE4\xDFig gel\xF6scht, sofern sie nicht mehr zur Vertragserf\xFCllung
						oder Vertragsanbahnung erforderlich sind.
					</p>
					<h3><br>10. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der
						personenbezogenen Daten; Erforderlichkeit f\xFCr den Vertragsabschluss; Verpflichtung der
						betroffenen Person, die personenbezogenen Daten bereitzustellen; m\xF6gliche Folgen der
						Nichtbereitstellung
					</h3>
					<p>Wir kl\xE4ren Sie dar\xFCber auf, dass die Bereitstellung personenbezogener Daten zum Teil
						gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen
						Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem
						Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene
						Daten zur Verf\xFCgung stellt, die in der Folge durch uns verarbeitet werden m\xFCssen. Die
						betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten
						bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschlie\xDFt. Eine
						Nichtbereitstellung der personenbezogenen Daten h\xE4tte zur Folge, dass der Vertrag mit
						dem Betroffenen nicht geschlossen werden k\xF6nnte. Vor einer Bereitstellung
						personenbezogener Daten durch den Betroffenen muss sich der Betroffene an Frau Dr.
						Bertgen-Giesen wenden. Frau Dr. Bertgen-Giesen kl\xE4rt den Betroffenen einzelfallbezogen
						dar\xFCber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder
						vertraglich vorgeschrieben oder f\xFCr den Vertragsabschluss erforderlich ist, ob eine
						Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen
						die Nichtbereitstellung der personenbezogenen Daten h\xE4tte.
					</p>
					<h3><br>11. Bestehen einer automatisierten Entscheidungsfindung</h3>
					<p>Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische
						Entscheidungsfindung oder ein Profiling.<br>Diese Datenschutzerkl\xE4rung wurde durch den
						Datenschutzerkl\xE4rungs-Generator von den datenschutz europa in Kooperation mit der RC
						GmbH, die gebrauchte Notebooks wiederverwertet und den Filesharing Rechtsanw\xE4lten von
						WBS-LAW erstellt.
					</p>
					<h3><br>12. Weitere Erkl\xE4rungen gem\xE4\xDF Datenschutzverordnung</h3>
					<p>Datenschutzerkl\xE4rung nach der DSGVO</p>
					<p><br><strong>I. Name und Anschrift des Verantwortlichen</strong><br>Der
						Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler
						Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher
						Bestimmungen ist die: <br>Praxis Dr. Bertgen-Giesen <br>Deichweg 6<br>53424
						Remagen<br>Deutschland<br>Telefon: 02642 . 210 872<br>E-Mail:
						info@dr-bertgen-giesen.de <br>Website: www.dr-bertgen-giesen.de
					</p>
					<p><br><strong>II. Name und Anschrift des Datenschutzbeauftragten</strong><br>Die
						Praxis Dr. Bertgen-Giesen hat keinen Datenschutzbeauftragten, da sie weniger als 10
						Angestellte hat.
					</p>
					<p><br><strong>III. Allgemeines zur Datenverarbeitung</strong></p>
					<ol><li>Umfang der Verarbeitung personenbezogener Daten<br>Wir verarbeiten personenbezogene
							Daten unserer Nutzer grunds\xE4tzlich nur, soweit dies zur Bereitstellung einer
							funktionsf\xE4higen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die
							Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelm\xE4\xDFig nur nach
							Einwilligung des Nutzers. Eine Ausnahme gilt in solchen F\xE4llen, in denen eine
							vorherige Einholung einer Einwilligung aus tats\xE4chlichen Gr\xFCnden nicht m\xF6glich ist und
							die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist<br><br></li>
						<li>Rechtsgrundlage f\xFCr die Verarbeitung personenbezogener Daten<br>Soweit wir f\xFCr
							Verarbeitungsvorg\xE4nge personenbezogener Daten eine Einwilligung der betroffenen Person
							einholen, dient Art.6 Abs.1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
							Rechtsgrundlage.<br>Bei der Verarbeitung von personenbezogenen Daten, die zur
							Erf\xFCllung eines Vertrages, dessen Vertragspartei die betroffene Person ist,
							erforderlich ist, dient Art. 6 Abs. 1 lit.b DSGVO als Rechtsgrundlage. Dies gilt auch
							f\xFCr Verarbeitungsvorg\xE4nge, die zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen
							erforderlich sind.<br>Soweit eine Verarbeitung personenbezogener Daten zur Erf\xFCllung
							einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt,
							dient Art. 6 Abs. 1 lit.c DSGVO als Rechtsgrundlage.<br>F\xFCr den Fall, dass
							lebenswichtige Interessen der betroffenen Person oder einer anderen nat\xFCrlichen Person
							eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
							lit.d DSGVO als Rechtsgrundlage.<br>Ist die Verarbeitung zur Wahrung eines
							berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und
							\xFCberwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das
							erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage
							f\xFCr die Verarbeitung.<br><br></li>
						<li>Datenl\xF6schung und Speicherdauer<br>Die personenbezogenen Daten der betroffenen
							Person werden gel\xF6scht oder gesperrt, sobald der Zweck der Speicherung entf\xE4llt. Eine
							Speicherung kann dar\xFCber hinaus erfolgen, wenn dies durch den europ\xE4ischen oder
							nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen
							Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung
							oder L\xF6schung der Daten erfolgt auch dann, wenn eine durch die genannten Normen
							vorgeschriebene Speicherfrist abl\xE4uft, es sei denn, dass eine Erforderlichkeit zur
							weiteren Speicherung der Daten f\xFCr einen Vertragsabschluss oder eine Vertragserf\xFCllung
							besteht.
						</li></ol>
					<p><br><strong>IV. Bereitstellung der Website und Erstellung von Logfiles</strong></p>
					<ol><li>Beschreibung und Umfang der Datenverarbeitung<br>Bei jedem Aufruf unserer
							Internetseite erfasst unser System automatisiert Daten und Informationen vom
							Computersystem des aufrufenden Rechners.<br>Folgende Daten werden hierbei erhoben:<br>(1) Informationen \xFCber den Browsertyp und die verwendete Version<br>(2) Das
							Betriebssystem des Nutzers<br>(3) Den Internet-Service-Provider des Nutzers<br>(4)
							Die IP-Adresse des Nutzers<br>(5) Datum und Uhrzeit des Zugriffs<br>(6) Websites,
							von denen das System des Nutzers auf unsere Internetseite gelangt<br>(7) Websites,
							die vom System des Nutzers \xFCber unsere Website aufgerufen werden<br>Die Daten werden
							ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten
							zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.<br><br></li>
						<li>Rechtsgrundlage f\xFCr die Datenverarbeitung<br>Rechtsgrundlage f\xFCr die vor\xFCbergehende
							Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit.f DSGVO.<br><br></li>
						<li>Zweck der Datenverarbeitung<br>Die vor\xFCbergehende Speicherung der IP-Adresse durch
							das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers
							zu erm\xF6glichen. Hierf\xFCr muss die IP-Adresse des Nutzers f\xFCr die Dauer der Sitzung
							gespeichert bleiben.<br>Die Speicherung in Logfiles erfolgt, um die
							Funktionsf\xE4higkeit der Website sicherzustellen. Zudem dienen uns die Daten zur
							Optimierung der Website und zur Sicherstellung der Sicherheit unserer
							informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet
							in diesem Zusammenhang nicht statt. In diesen Zwecken liegt auch unser berechtigtes
							Interesse an der Datenverarbeitung nach Art.6 Abs.1 litf DSGVO.<br><br></li>
						<li>Dauer der Speicherung<br>Die Daten werden gel\xF6scht, sobald sie f\xFCr die Erreichung
							des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der
							Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung
							beendet ist.<br>Im Falle der Speicherung der Daten in Logfiles ist dies nach
							sp\xE4testens sieben Tagen der Fall. Eine dar\xFCberhinausgehende Speicherung ist m\xF6glich.
							In diesem Fall werden die IP-Adressen der Nutzer gel\xF6scht oder verfremdet, sodass eine
							Zuordnung des aufrufenden Clients nicht mehr m\xF6glich ist.<br><br></li>
						<li>Widerspruchs- und Beseitigungsm\xF6glichkeit<br>Die Erfassung der Daten zur
							Bereitstellung der Website und die Speicherung der Daten in Logfiles ist f\xFCr den
							Betrieb der Internetseite zwingend erforderlich. Es besteht folglich seitens des
							Nutzers keine Widerspruchsm\xF6glichkeit.<br><br></li></ol>
					<p><strong>V. Verwendung von Cookies</strong><br>Unsere Webseite verwendet keine Cookies.
						Es werden daher auch keine Daten erhoben oder gespeichert.
					</p>
					<p><br><strong>VI. Newsletter</strong><br>Unsere Webseite bietet keinen Newsletter an.
						Es werden daher auch keine Daten erhoben oder gespeichert.
					</p>
					<p><br><strong>VII. Registrierung</strong><br>Auf unserer Webseite besteht keine
						M\xF6glichkeit oder Notwendigkeit zur Registrierung. Es werden daher auch keine Daten
						erhoben oder gespeichert.
					</p>
					<p><br><strong>VIII. Kontaktformular und E-Mail-Kontakt</strong><br>Auf unserer
						Internetseite ist kein Kontaktformular vorhanden, welches f\xFCr die elektronische
						Kontaktaufnahme genutzt werden kann. Es werden daher auch keine Daten erhoben oder
						gespeichert.
					</p>
					<p><br><strong>IX. Webanalyse</strong><br>Unsere Internetseite benutzt keine Webanalyse
						wie Google analyitics u.a. Es werden daher auch keine Daten erhoben, gespeichert oder
						verarbeitet.
					</p>
					<p><br><strong>X. Rechte der betroffenen Person</strong><br>Die folgende Auflistung
						umfasst alle Rechte der Betroffenen nach der DSGVO. Rechte, die f\xFCr die eigene Webseite
						keine Relevanz haben, m\xFCssen nicht genannt werden. Insoweit kann die Auflistung gek\xFCrzt
						werden.<br>Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener
						i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegen\xFCber dem Verantwortlichen zu:
					</p>
					<p><br>1. AUSKUNFTSRECHT<br>Sie k\xF6nnen von dem Verantwortlichen eine Best\xE4tigung
						dar\xFCber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet
						werden.<br>Liegt eine solche Verarbeitung vor, k\xF6nnen Sie von dem Verantwortlichen
						\xFCber folgende Informationen Auskunft verlangen:
					</p>
					<ol><li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
						<li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
						<li>die Empf\xE4nger bzw. die Kategorien von Empf\xE4ngern, gegen\xFCber denen die Sie betreffenden
							personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;
						</li>
						<li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder,
							falls konkrete Angaben hierzu nicht m\xF6glich sind, Kriterien f\xFCr die Festlegung der
							Speicherdauer;
						</li>
						<li>das Bestehen eines Rechts auf Berichtigung oder L\xF6schung der Sie betreffenden
							personenbezogenen Daten, eines Rechts auf Einschr\xE4nkung der Verarbeitung durch den
							Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;
						</li>
						<li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbeh\xF6rde;</li>
						<li>alle verf\xFCgbaren Informationen \xFCber die Herkunft der Daten, wenn die personenbezogenen
							Daten nicht bei der betroffenen Person erhoben werden;
						</li>
						<li>das Bestehen einer automatisierten Entscheidungsfindung einschlie\xDFlich Profiling gem\xE4\xDF
							Art. 22 Abs. 1 und 4 DSGVO und \u2013 zumindest in diesen F\xE4llen \u2013 aussagekr\xE4ftige
							Informationen \xFCber die involvierte Logik sowie die Tragweite und die angestrebten
							Auswirkungen einer derartigen Verarbeitung f\xFCr die betroffene Person.<br>Ihnen steht
							das Recht zu, Auskunft dar\xFCber zu verlangen, ob die Sie betreffenden personenbezogenen
							Daten in ein Drittland oder an eine internationale Organisation \xFCbermittelt werden. In
							diesem Zusammenhang k\xF6nnen Sie verlangen, \xFCber die geeigneten Garantien gem. Art.46
							DSGVO im Zusammenhang mit der \xDCbermittlung unterrichtet zu werden.
						</li></ol>
					<p><br>2. RECHT AUF BERICHTIGUNG<br>Sie haben ein Recht auf Berichtigung und/oder
						Vervollst\xE4ndigung gegen\xFCber dem Verantwortlichen, sofern die verarbeiteten
						personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollst\xE4ndig sind. Der
						Verantwortliche hat die Berichtigung unverz\xFCglich vorzunehmen.<br>3. Recht auf
						Einschr\xE4nkung der Verarbeitung<br>Unter den folgenden Voraussetzungen k\xF6nnen Sie die
						Einschr\xE4nkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:
					</p>
					<ol><li>wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen f\xFCr eine Dauer
							bestreiten, die es dem Verantwortlichen erm\xF6glicht, die Richtigkeit der
							personenbezogenen Daten zu \xFCberpr\xFCfen;
						</li>
						<li>die Verarbeitung unrechtm\xE4\xDFig ist und Sie die L\xF6schung der personenbezogenen Daten
							ablehnen und stattdessen die Einschr\xE4nkung der Nutzung der personenbezogenen Daten
							verlangen;
						</li>
						<li>der Verantwortliche die personenbezogenen Daten f\xFCr die Zwecke der Verarbeitung nicht
							l\xE4nger ben\xF6tigt, Sie diese jedoch zur Geltendmachung, Aus\xFCbung oder Verteidigung von
							Rechtsanspr\xFCchen ben\xF6tigen, oder
						</li>
						<li>wenn Sie Widerspruch gegen die Verarbeitung gem\xE4\xDF Art. 21 Abs. 1 DSGVO eingelegt haben
							und noch nicht feststeht, ob die berechtigten Gr\xFCnde des Verantwortlichen gegen\xFCber
							Ihren Gr\xFCnden \xFCberwiegen.Wurde die Verarbeitung der Sie betreffenden personenbezogenen
							Daten eingeschr\xE4nkt, d\xFCrfen diese Daten \u2013 von ihrer Speicherung abgesehen \u2013 nur mit
							Ihrer Einwilligung oder zur Geltendmachung, Aus\xFCbung oder Verteidigung von
							Rechtsanspr\xFCchen oder zum Schutz der Rechte einer anderen nat\xFCrlichen oder
							juristischen Person oder aus Gr\xFCnden eines wichtigen \xF6ffentlichen Interesses der Union
							oder eines Mitgliedstaats verarbeitet werden. Wurde die Einschr\xE4nkung der Verarbeitung
							nach den o.g. Voraussetzungen eingeschr\xE4nkt, werden Sie von dem Verantwortlichen
							unterrichtet bevor die Einschr\xE4nkung aufgehoben wird.
						</li></ol>
					<p><br>4. RECHT AUF L\xD6SCHUNG</p>
					<p>a) L\xF6schungspflicht<br>Sie k\xF6nnen von dem Verantwortlichen verlangen, dass die Sie
						betreffenden personenbezogenen Daten unverz\xFCglich gel\xF6scht werden, und der
						Verantwortliche ist verpflichtet, diese Daten unverz\xFCglich zu l\xF6schen, sofern einer der
						folgenden Gr\xFCnde zutrifft:
					</p>
					<ol><li>Die Sie betreffenden personenbezogenen Daten sind f\xFCr die Zwecke, f\xFCr die sie erhoben
							oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
						</li>
						<li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art.6 Abs.1 lit.
							a oder Art. 9 Abs. 2 lit. a DSGVO st\xFCtzte, und es fehlt an einer anderweitigen
							Rechtsgrundlage f\xFCr die Verarbeitung.
						</li>
						<li>Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es
							liegen keine vorrangigen berechtigten Gr\xFCnde f\xFCr die Verarbeitung vor, oder Sie legen
							gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
						</li>
						<li>Die Sie betreffenden personenbezogenen Daten wurden unrechtm\xE4\xDFig verarbeitet.</li>
						<li>Die L\xF6schung der Sie betreffenden personenbezogenen Daten ist zur Erf\xFCllung einer
							rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
							erforderlich, dem der Verantwortliche unterliegt.
						</li>
						<li>Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste
							der Informationsgesellschaft gem\xE4\xDF Art. 8 Abs. 1 DSGVO erhoben.
						</li></ol>
					<p>b) Information an Dritte<br>Hat der Verantwortliche die Sie betreffenden
						personenbezogenen Daten \xF6ffentlich gemacht und ist er gem. Art. 17 Abs. 1 DSGVO zu deren
						L\xF6schung verpflichtet, so trifft er unter Ber\xFCcksichtigung der verf\xFCgbaren Technologie
						und der Implementierungskosten angemessene Ma\xDFnahmen, auch technischer Art, um f\xFCr die
						Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, dar\xFCber
						zu informieren, dass Sie als betroffene Person von ihnen die L\xF6schung aller Links zu
						diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser
						personenbezogenen Daten verlangt haben.
					</p>
					<p><br>c) Ausnahmen<br>Das Recht auf L\xF6schung besteht nicht, soweit die Verarbeitung
						erforderlich ist
					</p>
					<ol><li>zur Aus\xFCbung des Rechts auf freie Meinungs\xE4u\xDFerung und Information;</li>
						<li>zur Erf\xFCllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der
							Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder
							zur Wahrnehmung einer Aufgabe, die im \xF6ffentlichen Interesse liegt oder in Aus\xFCbung
							\xF6ffentlicher Gewalt erfolgt, die dem Verantwortlichen \xFCbertragen wurde;
						</li>
						<li>aus Gr\xFCnden des \xF6ffentlichen Interesses im Bereich der \xF6ffentlichen Gesundheit gem\xE4\xDF
							Art. 9 Abs. 2 lit.h und i sowie Art. 9 Abs. 3 DSGVO;
						</li>
						<li>f\xFCr im \xF6ffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder
							historische Forschungszwecke oder f\xFCr statistische Zwecke gem. Art. 89 Abs.1 DSGVO,
							soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der
							Ziele dieser Verarbeitung unm\xF6glich macht oder ernsthaft beeintr\xE4chtigt, oder
						</li>
						<li>zur Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen.</li></ol>
					<p>5. RECHT AUF UNTERRICHTUNG<br>Haben Sie das Recht auf Berichtigung, L\xF6schung oder
						Einschr\xE4nkung der Verarbeitung gegen\xFCber dem Verantwortlichen geltend gemacht, ist
						dieser verpflichtet, allen Empf\xE4ngern, denen die Sie betreffenden personenbezogenen
						Daten offengelegt wurden, diese Berichtigung oder L\xF6schung der Daten oder Einschr\xE4nkung
						der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unm\xF6glich oder ist mit
						einem unverh\xE4ltnism\xE4\xDFigen Aufwand verbunden.<br>Ihnen steht gegen\xFCber dem
						Verantwortlichen das Recht zu, \xFCber diese Empf\xE4nger unterrichtet zu werden.
					</p>
					<p><br>6. RECHT AUF DATEN\xDCBERTRAGBARKEIT<br>Sie haben das Recht, die Sie betreffenden
						personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem
						strukturierten, g\xE4ngigen und maschinenlesbaren Format zu erhalten. Au\xDFerdem haben Sie
						das Recht diese Daten einem anderen Verantwortlichen ohne Behinderung durch den
						Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu \xFCbermitteln,
						sofern
					</p>
					<ol><li>die Verarbeitung auf einer Einwilligung gem. Art.6 Abs.1 lit.a DSGVO oder Art.9 Abs.2
							lit.a DSGVO oder auf einem Vertrag gem. Art. 6 Abs.1 lit.b DSGVO beruht und
						</li>
						<li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li></ol>
					<p>In Aus\xFCbung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die Sie
						betreffenden personenbezogenen Daten direkt von einem Verantwortlichen einem anderen
						Verantwortlichen \xFCbermittelt werden, soweit dies technisch machbar ist. Freiheiten und
						Rechte anderer Personen d\xFCrfen hierdurch nicht beeintr\xE4chtigt werden.
					</p>
					<p>Das Recht auf Daten\xFCbertragbarkeit gilt nicht f\xFCr eine Verarbeitung personenbezogener
						Daten, die f\xFCr die Wahrnehmung einer Aufgabe erforderlich ist, die im \xF6ffentlichen
						Interesse liegt oder in Aus\xFCbung \xF6ffentlicher Gewalt erfolgt, die dem Verantwortlichen
						\xFCbertragen wurde.
					</p>
					<p><br>7. WIDERSPRUCHSRECHT<br>Sie haben das Recht, aus Gr\xFCnden, die sich aus ihrer
						besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
						personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
						Widerspruch einzulegen; dies gilt auch f\xFCr ein auf diese Bestimmungen gest\xFCtztes
						Profiling.<br>Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen
						Daten nicht mehr, es sei denn, er kann zwingende schutzw\xFCrdige Gr\xFCnde f\xFCr die
						Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten \xFCberwiegen, oder die
						Verarbeitung dient der Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen.<br>Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
						betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie
						betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt
						auch f\xFCr das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.<br>Widersprechen Sie der Verarbeitung f\xFCr Zwecke der Direktwerbung, so werden die Sie
						betreffenden personenbezogenen Daten nicht mehr f\xFCr diese Zwecke verarbeitet.<br>Sie
						haben die M\xF6glichkeit, im Zusammenhang mit der Nutzung von Diensten der
						Informationsgesellschaft \u2013 ungeachtet der Richtlinie 2002/58/EG \u2013 Ihr Widerspruchsrecht
						mittels automatisierter Verfahren auszu\xFCben, bei denen technische Spezifikationen
						verwendet werden.
					</p>
					<p><br>8. RECHT AUF WIDERRUF DER DATENSCHUTZRECHTLICHEN EINWILLIGUNGSERKL\xC4RUNG<br>Sie
						haben das Recht, Ihre datenschutzrechtliche Einwilligungserkl\xE4rung jederzeit zu
						widerrufen. Durch den Widerruf der Einwilligung wird die Rechtm\xE4\xDFigkeit der aufgrund der
						Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht ber\xFChrt.
					</p>
					<p><br>9. AUTOMATISIERTE ENTSCHEIDUNG IM EINZELFALL EINSCHLIESSLICH PROFILING<br>Sie
						haben das Recht, nicht einer ausschlie\xDFlich auf einer automatisierten Verarbeitung \u2013
						einschlie\xDFlich Profiling \u2013 beruhenden Entscheidung unterworfen zu werden, die Ihnen
						gegen\xFCber rechtliche Wirkung entfaltet oder Sie in \xE4hnlicher Weise erheblich
						beeintr\xE4chtigt. Dies gilt nicht, wenn die Entscheidung
					</p>
					<ol><li>f\xFCr den Abschluss oder die Erf\xFCllung eines Vertrags zwischen Ihnen und dem
							Verantwortlichen erforderlich ist,
						</li>
						<li>aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
							Verantwortliche unterliegt, zul\xE4ssig ist und diese Rechtsvorschriften angemessene
							Ma\xDFnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen
							enthalten oder
						</li>
						<li>mit Ihrer ausdr\xFCcklichen Einwilligung erfolgt.</li></ol>
					<p><br>Allerdings d\xFCrfen diese Entscheidungen nicht auf besonderen Kategorien
						personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2
						lit. a oder g DSGVO gilt und angemessene Ma\xDFnahmen zum Schutz der Rechte und Freiheiten
						sowie Ihrer berechtigten Interessen getroffen wurden.<br>Hinsichtlich der in (1) und
						(3) genannten F\xE4lle trifft der Verantwortliche angemessene Ma\xDFnahmen, um die Rechte und
						Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf
						Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des
						eigenen Standpunkts und auf Anfechtung der Entscheidung geh\xF6rt.
					</p>
					<p><br>10. RECHT AUF BESCHWERDER BEI EINER AUFSICHTSBEH\xD6RDE<br>Unbeschadet eines
						anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das
						Recht auf Beschwerde bei einer Aufsichtsbeh\xF6rde, insbesondere in dem Mitgliedstaat ihres
						Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutma\xDFlichen Versto\xDFes, zu, wenn
						Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten
						gegen die DSGVO verst\xF6\xDFt.<br>Die Aufsichtsbeh\xF6rde, bei der die Beschwerde eingereicht
						wurde, unterrichtet den Beschwerdef\xFChrer \xFCber den Stand und die Ergebnisse der
						Beschwerde einschlie\xDFlich der M\xF6glichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78
						DSGVO.<br><br></p>
					<p><br><strong>Pflichten der betroffenen Person</strong></p>
					<p>Keine Abmahnung ohne Kontakt!<br>Im Falle der Geltendmachung von Anspr\xFCchen jeglicher
						Art aus Urheber-, wettbewerbsrechtlichen sowie markenrechtlichen und datenrechtlichen
						Angelegenheiten bitte ich, zur Vermeidung unn\xF6tiger Rechtsstreitigkeiten, Abmahnungen
						und Kosten, mich umgehend zu kontaktieren. Falls Anspr\xFCche der oben genannten Art
						reklamiert werden, sage ich bereits hier vor einer endg\xFCltigen rechtsverbindlichen
						Kl\xE4rung Abhilfe zu, durch die eine eventuelle Wiederholungsgefahr verbindlich
						ausgeschlossen ist. Eine dennoch ergehende Kostennote einer anwaltlichen Abmahnung ohne
						vorhergehende Kontaktaufnahme w\xFCrde sodann wegen Nichtbeachtung einer
						Schadensminderungspflicht zur\xFCckgewiesen. <br>Die in diesem Sinne unn\xF6tigen bzw.
						unberechtigten Abmahnungen und Folgema\xDFnahmen w\xFCrden mit einer negativen
						Feststellungsklage beantwortet. Dies gilt auch f\xFCr Abmahnungen, die unter \xA7 8 (4) UWG
						fallen.Sollte der Inhalt oder die Aufmachung dieser Seiten fremde Rechte Dritter oder
						gesetzliche Bestimmungen verletzen, so bitte ich um eine entsprechende Nachricht ohne
						Kostennote. Die Beseitigung einer m\xF6glicherweise von diesen Seiten ausgehenden
						Schutzrecht-Verletzung durch Schutzrecht-Inhaberinnen selbst darf nicht ohne meine
						Zustimmung stattfinden.
					</p>
					<p><br><strong>Salavtorische Klausel</strong></p>
					<p>Rechtswirksamkeit dieser Erkl\xE4rung<br>Sofern Teile oder einzelne Formulierungen dieses
						Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollst\xE4ndig entsprechen
						sollten, bleiben die \xFCbrigen Teile des Dokumentes in ihrem Inhalt und ihrer G\xFCltigkeit
						davon unber\xFChrt.
					</p></div></div></div></div></div>`;
});
export { Page as default };
