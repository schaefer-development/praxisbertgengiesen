<script>
	import Hero2GraueSessel from '$lib/assets/bg_grausesessel.jpg';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>

<svelte:head>
	<title>Selbstzahler - Dr. Bertgen-Giesen</title>
</svelte:head>

<div class="hero">
	<div class="inside">
		<span class="label_praxis">Praxis Bonn</span>
		<img src={Hero2GraueSessel} alt="Praxis Dr. Bertgen-Giesen" />
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
			<div class="mod_article first last block" id="selbstzahler">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Selbstzahler</h1>

					<p>
						Wenn Sie sich entschließen, die Behandlung nicht mit Ihrer Krankenkasse abzurechnen,
						stelle ich Ihnen eine gesonderte Rechnung aus.<br /> Meine Rechnungen werden nach der Gebührenordnung
						für Ärzte GOÄ bzw. nach der Gebührenordnung für Psychotherapeuten GOP ausgestellt.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
