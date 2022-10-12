<script>
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>

<svelte:head>
	<title>Beihilfen - Dr. Bertgen-Giesen</title>
</svelte:head>

<!--- 
				<picture>
					<source srcset={welcome} type="image/webp" />
					<img src={welcome_fallback} alt="Welcome" />
				</picture>
	-->
<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsidePsychotherapie />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="beihilfen">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Beihilfen</h1>
					<p>
						Viele Beamte des öffentlichen Dienstes sind bei einer Beihilfestelle und zusätzlich bei
						einer Privatkasse versichert. In diesen Fällen ist es nach meiner Erfahrung sinnvoll,
						mit der zuständigen Beihilfestelle Kontakt auf zu nehmen und dort die Antragsformulare
						zu beantragen. Gleichzeitig sollte man mit der Privatkasse sprechen, wie hier das
						Vorgehen ist. Meistens schließt sich die Privatkasse den Vorgaben der Beihilfestelle an.
					</p>
					<p>
						In diesen Fällen können zunächst fünf probatorische Sitzungen zum Kennenlernen
						durchgeführt werden. Ergibt sich in diesen Sitzungen die Notwendigkeit der Aufnahme
						einer ambulanten Psychotherapie, kann ich den entsprechenden Antrag mit den o.a.
						Formularen bei der Beihilfestelle einreichen, sofern gewünscht kann man eine Kopie
						dieses Antrages auch bei der Privatkasse zusätzlich einreichen.
					</p>
					<p>
						Nach der Bearbeitung durch Beihilfestelle und Privatkasse erhält der Versicherungsnehmer
						die Mitteilung, ob und wie viele Sitzungen Psychotherapie bewilligt worden sind.&nbsp;
						Die Bearbeitung kann einige Wochen dauern, in der Regel erfolgt jedoch eine vollständige
						Kostenübernahme. Dann kann mit der Behandlung begonnen werden. Meine Rechnungen werden
						nach der Gebührenordnung für Ärzte GOÄ bzw. nach der Gebührenordnung für
						Psychotherapeuten GOP ausgestellt. <br />Die Rechnungsstellung erfolgt meistens einmal
						im Quartal, also etwa alle drei Monate.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
