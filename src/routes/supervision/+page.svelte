<script>
	import Hero2GraueSessel from '$lib/assets/bg_grausesessel.jpg';
	import MenuAsideCoaching from '$lib/components/MenuAsideCoaching/MenuAsideCoaching.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
</script>

<svelte:head>
	<title>Supervision - Dr. Bertgen-Giesen</title>
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
			<MenuAsideCoaching />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="supervision">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Supervision</h1>

					<p>
						Als ausgebildete Supervisorin des Berufsverbandes Deutscher Psychologen (BdP) richtet
						sich mein Angebot an Fachkolleginnen und Kollegen, aber auch an Ausbildungskandidaten in
						der Verhaltenstherapie.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
