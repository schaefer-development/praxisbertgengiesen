<script>
	import Hero2GraueSessel from '$lib/assets/bg_grausesessel.jpg';
	import MenuAsideCoaching from '$lib/components/MenuAsideCoaching/MenuAsideCoaching.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
</script>

<svelte:head>
	<title>Beratung - Dr. Bertgen-Giesen</title>
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
			<div class="mod_article first last block" id="beratung">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Beratung</h1>

					<p>Mein Beratungsangebot richtet sich an</p>
					<ul>
						<li>
							Menschen, bei denen eine Psychotherapie nicht notwendig ist, die aber trotzdem zu
							bestimmten Themen eine Beratung aus dem psychosozialen Bereich wünschen.
						</li>
						<li>
							Patienten, die keine Psychotherapie nach den Richtlinien der gesetzlichen oder
							privaten Krankenkassen machen möchten, aber dennoch eine professionelle Beratung
							wünschen.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
