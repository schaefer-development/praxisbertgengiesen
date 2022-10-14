<script>
	import Hero2RoteSessel from '$lib/assets/bg_zweirotesessel.jpg';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>

<svelte:head>
	<title>Privatkassen - Dr. Bertgen-Giesen</title>
</svelte:head>

<div class="hero">
	<div class="inside">
		<span class="label_praxis">Praxis Bonn</span>
		<img src={Hero2RoteSessel} alt="Praxis Dr. Bertgen-Giesen" />
	</div>
</div>

<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsidePsychotherapie />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="privatkassen">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Privatkassen</h1>

					<p>
						Privat-Versicherte sollten sich bei Ihrer Versicherung darüber informieren, ob im
						versicherten Tarif die Leistungen für ambulante Psychotherapie enthalten sind. Meistens
						ist dies der Fall.
					</p>
					<p>
						<br />Es gibt einige Besonderheiten, die von Krankenkasse zu Krankenkasse und von Tarif
						zu Tarif variieren:<br />Manche Krankenkassen zahlen 20 Sitzungen Einzelpsychotherapie
						im Jahr ohne gesonderten, ausführlichen Antrag. <br /><br />Manche Krankenkassen fordern
						jedoch einen ausführlichen Antrag. Hier müssen zunächst Formulare bei der Krankenkasse
						durch den Versicherten beantragt werden. Diese Formulare werden von mir und dem
						Versicherten ausgefüllt und der Krankenkasse wieder zugesandt. Die Bearbeitung bei der
						Krankenkasse kann einige Wochen dauern. Wenn die Kostenübernahme-Zusage von der
						Privatkasse vorliegt, kann mit der Behandlung begonnen werden. Je nach Krankenkasse
						können verschiedene Sitzungskontingente bewilligt werden. Auch hier sind in der Regel
						maximal 80 Sitzungen möglich. Gegebenenfalls müssen unterschiedliche Sitzungskontingente
						immer wieder neu beantragt werden. Das mache ich dann für Sie. <br /><br />Meine
						Rechnungen werden nach der Gebührenordnung für Ärzte GOÄ bzw. nach der Gebührenordnung
						für Psychotherapeuten GOP ausgestellt. Die Rechnungsstellung erfolgt meistens einmal im
						Quartal, also etwa alle drei Monate.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
