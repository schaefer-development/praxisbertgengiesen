<script>
	import MenuAsideAboutMe from '$lib/components/MenuAsideAboutMe/MenuAsideAboutMe.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

	<svelte:head>
		<title>Über mich - Dr. Bertgen-Giesen</title>
		<meta name="description" content="Svelte demo app" />
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
				<MenuAsideAboutMe />
				<ContactAside />
			</div>
		</aside>
	
		<div id="main">
			<div class="inside">
				<div class="mod_article first last block" id="lebenslauf">
					
<h1>
	sitemap
	 

</h1>
	
		
	
	
	
				</div>
			</div>
		</div>
	
	</div>