<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import type { IconOptions } from 'leaflet';
	export let iconOptions: IconOptions = {
		iconUrl: `${base}/mapmarker.png`,
		iconSize: [40, 50],
		iconAnchor: [20, 50]
	};
	export let layerOptions = [
		'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ',
		{
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			maxZoom: 19
		}
	];
	export let zoom = 10.2;
	export let coordinate1 = [50.71197123500227, 7.109060690503333]; // Haussdorffstraße 185, 53129 Bonn
	export let coordinate2 = [50.579969420507744, 7.2261527559490055]; // Deichweg 6, 53424 Remagen
	export let setView = [50.655984700815495, 7.189006506251863]; // center of map
	export let mapAttributes = {
		style: 'width: 100%; height: 300px;'
	};

	onMount(async () => {
		const L = await import('leaflet');
		const icon = L.icon(iconOptions);
		const map = L.map('map', { scrollWheelZoom: false }).setView(setView, zoom);
		L.tileLayer.apply(null, layerOptions).addTo(map);
		L.marker(coordinate1, { icon }).addTo(map);
		L.marker(coordinate2, { icon }).addTo(map);

		return () => map && map.remove();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin=""
	/>
</svelte:head>

<div id="map" {...mapAttributes} class="mod_map z-10" />
