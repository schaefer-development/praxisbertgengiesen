<script>
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>
	
<svelte:head>
	<title>Praxis Dr. Bertgen-Giesen</title>
	<meta name="robots" content="index,follow">
	<meta name="description" content="Willkommen in meiner Praxis für Psychotherapie, Supervision und Coaching mit Standorten in Remagen und Bonn.">
	<meta name="keywords" content="">
	<meta name="generator" content="Contao Open Source CMS">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
	<!--[if lt IE 9]><script src="assets/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script><![endif]-->
	<style>@media print {#ghostery-tracker-tally {display:none !important}}</style>
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
				<div class="mod_article first last block" id="lebenslauf">
					
				<h1>Start</h1>
	
		
	
	
	
				</div>
			</div>
		</div>
	
	</div>