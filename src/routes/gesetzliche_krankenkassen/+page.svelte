<script>
	import HeroGemaelde from '$lib/assets/bg_gemaelde.jpg';
	import Hero3OrangeneSessel from '$lib/assets/bg_dreiorangenesessel.jpg';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>

<svelte:head>
	<title>Gesetzliche Krankenkassen - Dr. Bertgen-Giesen</title>
</svelte:head>

<!--<div class="hero">
	<div class="inside">
		<span class="label_praxis">Praxis Remagen</span>
		<img src={Hero3OrangeneSessel} alt="Praxis Dr. Bertgen-Giesen" />
	</div>
</div>-->

<div class="hero">
	<div class="inside">
		<img src={HeroGemaelde} alt="Praxis Dr. Bertgen-Giesen" />
	</div>
</div>

<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsidePsychotherapie />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="gesetzliche_krankenkassen">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Gesetzliche Krankenkassen</h1>
					<p>
						Ansprechpartner für Gesetzlich Versicherte sind Frau Meike Arts 0177 . 387 39 22 und
						Frau Dr. Anna Katzer 0177 . 600 45 56.
					</p>
					<p>
						Wenn Sie bei einer gesetzlichen Krankenkasse versichert sind, genügt es, die
						Krankenversichertenkarte mitzubringen. Seit Abschaffung der Praxisgebühr ist eine
						Überweisung vom Hausarzt oder einem anderen Facharzt nicht mehr unbedingt notwendig.
						Selbstverständlich können Sie aber neben der Krankenkassenkarte (Chipkarte) auch eine
						Überweisung mitbringen. Dann weiß ich schon, welche Diagnose der überweisende
						Arzt/Ärztin gestellt hat und bei wem Sie in Behandlung sind.
					</p>
					<p>Nach Vorlage der Chipkarte wird diese in unserem Abrechnungsprogramm gespeichert.</p>
					<p>
						Bei den gesetzlichen Krankenkassen können wir zunnächst 3 Sprechstunden und 2
						probatorische Sitzungen vereinbaren. In diesen Sitzungen können Sie Ihr Anliegen, Ihre
						Beschwerden, Ihre Erwartungen und Ihre Befürchtungen bzgl. der Psychotherapie mit mir
						besprechen und Sie lernen mich und meine Vorgehensweise kennen.
					</p>
					<p>
						Spätestens nach der fünften Stunde müssen wir dann geklärt haben, ob eine
						psychotherapeutische Behandlung durchgeführt werden soll und ob Sie diese Behandlung bei
						mir in meiner Praxis durchführen möchten. Wenn dies übereinstimmend bejaht werden kann,
						wird ein formloser Antrag bei Ihrer Krankenkasse gestellt. Dazu müssen Sie lediglich ein
						Formular unterschreiben, welches ich für Sie bereithalte. Alles Weitere kläre ich dann
						mit der Krankenkasse.
					</p>
					<p>
						Die Kasse prüft lediglich noch, ob Sie in den vergangenen beiden Jahren eine
						Psychotherapie hatten und ob bei mir die Kassenzulassung vorliegt. Dies dauert bei den
						meisten gesetzlichen Krankenkassen nur wenige Werktage. Danach erhalte ich einen
						schriftlichen Bescheid von der Kasse mit der Zusage, die Kosten für die Behandlung zu
						übernehmen. Die meisten Krankenkassen teilen ihren Versicherten ebenfalls mit, dass die
						Behandlung bewilligt wurde. Genehmigt werden dann erst einmal 12 Sitzungen. Es ist
						möglich, später noch weitere Sitzungen zu beantragen. Maximal sind 80 Sitzungen möglich.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
