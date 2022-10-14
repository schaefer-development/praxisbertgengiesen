<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';

	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div id="wrapper" class="app">
	<Header />

	<!--
	<div class="default {$page.url.pathname.replace('/', '')}">
		<div class="custom">
			<div id="custom_bg">
				<div class="inside" />
			</div>
		</div>
	</div>
-->
	<main>
		<slot />
	</main>

	<Footer />
</div>
