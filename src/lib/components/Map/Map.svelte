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
	export let zoom = 12;
	export let coordinate1 = [50.71571944342756, 7.102766811824819]; // Gregor-Mendel-Straße 26, 53115 Bonn
	export let coordinate2 = [50.57786526283833, 7.232729528867138]; // Seelenstraße 8, 53424 Remagen
	export let coordinate3 = [50.579969420507744, 7.2261527559490055]; // Deichweg 6, 53424 Remagen
	export let coordinate4 = [50.72961653679769, 7.097153861761266]; // Poppelsdorfer Allee 40B
	export let setView = [50.72471775495108, 7.104558634645793]; // center of map
	export let mapAttributes = {
		style: 'width: 100%; height: 300px;'
	};

	onMount(async () => {
		const L = await import('leaflet');
		const icon = L.icon(iconOptions);
		const map = L.map('map', { scrollWheelZoom: false }).setView(setView, zoom);
		L.tileLayer.apply(null, layerOptions).addTo(map);
		L.marker(coordinate1, { icon }).addTo(map);
		L.marker(coordinate4, { icon }).addTo(map);

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
