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

				<!--	<div class="ce_text col-xs-12 col-sm-6 col-md-6 block">
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
				</div>-->
				<div class="ce_text col-xs-12 col-sm-6 col-md-6 block">
					<h3>Praxis Dr. Bertgen-Giesen</h3>
					<p>
						<strong
							>Die Praxis im Deichweg 6 in Remagen wurde am 30.11.2023 geschlossen.<br />Sie finden
							mich vorübergehend in der Seelenstrasse 8, 53424 Remagen.</strong
						>
					</p>
				</div>

				<div class="ce_text col-xs-12 col-sm-6 col-md-6 last block" style="margin-bottom:20px;">
					<h3>Beratung, Coaching und Supervision</h3>
					<p>
						Gregor-Mendel-Straße 26<br />
						53115 Bonn<br />
						Telefon:
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
						<strong>Anfahrt mit dem Auto </strong><br />
						Autobahnabfahrt Bonn Poppelsdorf, auf Reuterstraße bleiben bis Argelanderstraße, dort rechts
						abbiegen, an der Ampel links abbiegen Lotharstraße, weiter geradeaus ca 400m, dann rechts
						abbiegen Rosenburgweg, nach 150m scharf rechts abbiegen in die Gregor-Mendel-Straße.
					</p>

					<p>
						<strong>Anfahrt mit dem Auto von Süden</strong><br />
						Auf B9 bleiben, über Reuterbrücke geradeaus, an der Tankstelle links abbiegen in Hausdorffstraße,
						an der 2. Ampel rechts abbiegen in Eduard Otto Straße, im Kreisverkehr dritte Ausfahrt Graf
						Stauffenbergstraße, an der Ampel links in die Lotharstraße, an der nächsten Kreuzung rechts
						in den Rosenburgweg, nach 150 m scharf rechts in die Gregor-Mendel-Straße.
					</p>
					<p>Parkmöglichkeiten in der Straße sind vorhanden.</p>
					<p>
						<strong>Anfahrt mit ÖPNV</strong><br />
						1. Ab Bonn HBF: Buslinie 600 Richtung Venusberg/ Unikliniken bis Gregor-Mendel-Straße, dann
						2 Minuten Fußweg <br />
						2. Ab Bonn HBF. Straßenbahnlinie 61 oder 62 Richtung Dottendorf, bis Eduard Otto Straße,
						dann 10 Minuten Fußweg.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
