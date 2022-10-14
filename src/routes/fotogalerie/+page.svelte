<script>
	import HeroRheinblick from '$lib/assets/bg_rheinblick.jpg';
	import MenuAsideAboutMe from '$lib/components/MenuAsideAboutMe/MenuAsideAboutMe.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';

	import Slideshow1 from '$lib/components/Slideshow/Slideshow1.svelte';
	import Slideshow2 from '$lib/components/Slideshow/Slideshow2.svelte';
</script>

<svelte:head>
	<title>Fotogalerie - Dr. Bertgen-Giesen</title>
</svelte:head>

<div class="hero">
	<div class="inside">
		<img src={HeroRheinblick} alt="Praxis Dr. Bertgen-Giesen" />
	</div>
</div>

<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsideAboutMe />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<h2>Praxis Remagen</h2>
			<br />
			<Slideshow1 slot="mounted" />
			<br /><br />
			<hr />
			<br /><br />
			<h2>Praxis Bonn</h2>
			<br />
			<Slideshow2 slot="mounted" />
		</div>
	</div>
</div>
