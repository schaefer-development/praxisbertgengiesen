<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';	
	
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div id="wrapper" class="app">

	<Header />


	<div class="custom">
		<div id="custom_bg" class="{$page.url.pathname.substr($page.url.pathname.lastIndexOf('/'))}">
			<div class="inside"></div>
		</div>
	</div>
	<main>
		<slot />
	</main>


	<Footer />


</div>


