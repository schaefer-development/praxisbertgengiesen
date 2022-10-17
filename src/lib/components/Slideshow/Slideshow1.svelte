<script>
	// TODO: remove once this issue is resolved https://github.com/beyonk-adventures/svelte-carousel/issues/68
	import Carousel from '$lib/components/Slideshow/Carousel.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { base } from '$app/paths';

	import gallerie01 from '$lib/assets/villa_caraciolla.jpg';
	import gallerie02 from '$lib/assets/drei_orange_sessel.jpg';
	import gallerie03 from '$lib/assets/galerie_rheinblick.jpg';
</script>

<div class="slideshow relative">
	<Carousel perPage="1" autoplay="10000" easing="ease-in-out">
		<span class="control" slot="left-control">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="relative w-10 h-10 p-2 text-white rounded-full"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</span>

		<!-- single slide item -->
		<div class="slide-content relative flex items-center">
			<img src={gallerie01} alt="Praxis Dr. Bertgen-Giesen" />
		</div>
		<!-- -->

		<!-- single slide item -->
		<div class="slide-content relative flex items-center">
			<img src={gallerie02} alt="Praxis Dr. Bertgen-Giesen" />
		</div>
		<!-- -->

		<!-- single slide item -->
		<div class="slide-content relative flex items-center">
			<img src={gallerie03} alt="Praxis Dr. Bertgen-Giesen" />
		</div>
		<!-- -->

		<span class="control" slot="right-control">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="relative w-10 h-10 p-2 text-white rounded-full"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</span>
	</Carousel>
</div>

<style>
	.slide-content {
		width: 100%;
		min-height: 300px;
		max-height: 60vh;
	}

	.control svg {
		width: 25px;
		height: 32px;
	}
</style>
