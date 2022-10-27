<script context="module" lang="ts">
	import MenuAsideAboutMe from '$lib/components/MenuAsideAboutMe/MenuAsideAboutMe.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';

	import Map from '$lib/components/Map/Map.svelte';
	const mapAttributes = {
		class: 'map',
		style: 'position: relative; width: 100%; height: 100%; min-height:45vh; max-height:45vh;'
	};
</script>

<svelte:head>
	<title>Kontakt - Dr. Bertgen-Giesen</title>
</svelte:head>

<Map {mapAttributes} />

<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsideAboutMe />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="kontakt_und_anfahrt">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first block" style="margin-bottom:20px;">
					<h1>Kontakt und Anfahrt</h1>

					<p>Praxiszeiten: Werktags von 9:00 bis 18:00 Uhr.</p>
				</div>

				<div class="ce_text col-xs-12 col-sm-6 col-md-6 block">
					<h3>Praxis Dr. Bertgen-Giesen</h3>
					<p>
						Deichweg 6<br /> 53424 Remagen<br /> Telefon:
						<a
							title="Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen"
							href="callto:00492642210872">02642 . 210 872</a
						><br /> E-Mail:
						<a
							title="Eine E-Mail an info@dr-bertgen-giesen.de mit Ihrem Standardprogramm schreiben"
							href="mailto:info@dr-bertgen-giesen.de">info@dr-bertgen-giesen.de</a
						>
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>Anfahrt mit dem Auto</strong><br />Über die B9, Abzweigung Drusus-Straße.
						Zahlreiche Parkmöglichkeiten sind in fußläufiger Nähe vorhanden. <br /><br /><strong
							>Anreise mit dem Zug</strong
						><br />Sie finden uns nur wenige Gehminuten vom Bahnhof Remagen entfernt. Der Deichweg
						ist die Verlängerung der Rheinpromenade.
					</p>
				</div>

				<div class="ce_text col-xs-12 col-sm-6 col-md-6 last block" style="margin-bottom:20px;">
					<h3>Beratung, Coaching und Supervision</h3>
					<p>
						Haussdorffstraße 185<br /> 53129 Bonn<br /> Telefon:
						<a
							title="Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen"
							href="callto:00492289107648">0228 . 910 76 48</a
						><br /> E-Mail:
						<a
							title="Eine E-Mail an info@dr-bertgen-giesen.de mit Ihrem Standardprogramm schreiben"
							href="mailto:info@dr-bertgen-giesen.de">info@dr-bertgen-giesen.de</a
						>
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>Anfahrt mit dem dem Auto</strong><br />Über die Reuterstraße bis zum Abzweig
						Hausdorffstraße, dort noch etwa 2km geradeaus. Parkmöglichkeiten (teilweise
						kostenpflichtig oder mit Parkscheibe) sind in der Nähe vorhanden. &nbsp;
					</p>
					<p>
						<br /><strong>Anreise mit dem ÖPNV</strong><br />Sie finden uns gleich an der
						Haltestelle Pützstraße der Straßenbahnlinien 61 und 62.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
