<script lang="ts">
	import { base } from '$app/paths';
	import FooterLogo from '$lib/components/FooterLogo/FooterLogo.svelte';
</script>

<footer id="footer">
	<div class="inside">
		<div class="row" style="margin-bottom:1em;">
			<div class="one_third one">
				<span>Praxis Dr. Bertgen-Giesen</span>
				Poppelsdorfer Allee 40b<br />
				53115 Bonn<br />
			</div>
			<div class="one_third two">
				<FooterLogo />
			</div>
			<div class="one_third three">
				<span>Praxis für Beratung, Coaching und Supervision</span>
				Gregor-Mendel-Straße 26<br />
				53115 Bonn<br />
				Telefon:
				<a
					href="callto:00492289107648"
					title="Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen">0228 . 910 76 48</a
				><br />
				E-Mail:
				<a
					href="mailto:info@dr-bertgen-giesen.de"
					title="Eine E-Mail an info@dr-bertgen-giesen.de mit Ihrem Standardprogramm schreiben"
					>info@dr-bertgen-giesen.de</a
				>
			</div>
		</div>

		<span>
			Terminvergabe nach vorheriger telefonischer Absprache | Alle Kassen und privat |
			<a href="{base}/sitemap" title="Sitemap">Sitemap</a>
			|
			<a href="{base}/datenschutz" title="Impressum">Datenschutz</a>
			|
			<a href="{base}/impressum" title="Impressum">Impressum</a></span
		>

		<!--<p>
			<br />
			<span>
				Sprechzeiten Frau Dr. Bertgen-Giesen: Donnerstag 11:00 - 12:00 Uhr
				<br />
				Sprechzeiten Frau Dr. Katzer: Mittwoch 17:00 - 18:40 Uhr</span
			>
		</p>-->
	</div>
</footer>

<style>
	/* ################################### MEDIA QUERY ########################################## */
	@media screen and (max-width: 768px) {
		.one_third.two {
			display: none !important;
		}
	}
</style>
