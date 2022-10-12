<script>
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>

<svelte:head>
	<title>Allgemeines - Dr. Bertgen-Giesen</title>
</svelte:head>

<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsidePsychotherapie />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="allgemeines">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Allgemeines zur Psychotherapie</h1>

					<p>
						In meiner Praxis kann ich unterschiedliche psychotherapeutische Verfahren anbieten und
						anwenden:<br /><br />Zunächst die Verhaltenstherapie, insbesondere
						<a href="https://de.wikipedia.org/wiki/Kognitive_Verhaltenstherapie" target="_blank"
							>kognitive Methoden</a
						>. <br />Die Verhaltenstherapie zählt zu den drei psychotherapeutischen Verfahren,
						welche von den gesetzlichen Krankenkassen anerkannt sind und deren Kosten somit
						vollständig übernommen werden.<br /><br />Darüber hinaus biete ich
						<a
							title="klientenzentrierte Psychotherapie"
							href="https://de.wikipedia.org/wiki/Klientenzentrierte_Psychotherapie"
							target="_blank">klientenzentrierte Psychotherapie</a
						>
						und
						<a
							title="lösungsorientierte Kurzzeitpsychotherapie"
							href="https://de.wikipedia.org/wiki/L%C3%B6sungsorientierte_Kurztherapie"
							target="_blank">lösungsorientierte Kurzzeitpsychotherapie</a
						>
						an. <br />Diese beiden Verfahren sind keine Kassenleistungen.
					</p>
					<h3><br />Diagnosen</h3>
					<p>
						Grundsätzlich werden in der Psychotherapie alle Patienten behandelt, deren
						Beschwerdebild in den verschiedenen Klassifikationssystemen für psychische Erkrankungen
						als krankheitswertig aufgeführt werden.<br />Klassifikationssysteme dienen zur
						Verschlüsselung von Diagnosen. Die bekanntesten dieser Systeme sind ICD (International
						Classification of Deseases) oder DSM (Diagnostic and Statistical Manual of Mental
						Disorders).
					</p>
					<p>
						Mit den Verschlüsselungen, die für alle Erkrankungen gelten (also nicht nur für
						psychische Erkrankungen), können Ärzte und Therapeuten besser beschreiben, welches
						Problem vorliegt, und auch durch Angabe der verschlüsselten Diagnose gegenüber den
						Krankenkassen besser begründen, warum eine Behandlung nötig ist. Dazu gehören z.B.
						Angststörungen, Depressionen, Essstörungen und Schmerzstörungen.
					</p>
					<p>
						Die Bezeichnungen in den Diagnosekatalogen der Weltgesundheitsorganisation (WHO) sind
						für Patienten manchmal verwirrend. So bezeichnet eine Anpassungsstörung z.B. ein
						Beschwerdebild, welches seit maximal zwei Jahren oder weniger aufgetreten und durch
						Angst und depressive Verstimmungen gekennzeichnet ist. Ein häufiges Missverständnis bei
						dieser Diagnose ist, dass man "sich nicht anpassen könne". Gemeint ist aber etwas ganz
						anderes.
					</p>
					<p>&nbsp;</p>
					<h3>Sitzungsdauer</h3>
					<p>
						Die Sitzungen dauern alle etwa 50 bis 60 Minuten. In Einzelfällen kann auch eine
						kürzere&nbsp; (25 Minuten) oder eine länger Sitzungsdauer (100 Minuten) verabredet
						werden. Dies richtet sich nach dem individuellen Anliegen.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
