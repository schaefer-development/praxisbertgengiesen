<script>
	import HeroGemaelde from '$lib/assets/bg_gemaelde.jpg';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
</script>

<svelte:head>
	<title>Schwerpunkte - Dr. Bertgen-Giesen</title>
</svelte:head>

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
			<div class="mod_article first last block" id="schwerpunkte">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first last block">
					<h1>Schwerpunkte</h1>

					<p>
						Die Schwerpunkte meiner Arbeit liegen zunächst in der Einzelpsychotherapie Erwachsener.
						In Einzelfällen können auch Angehörige in die Behandlung einbezogen werden. Das
						methodische Vorgehen richtet sich nach dem Beschwerdebild des Patienten. Eingesetzt
						werden in erster Linie Methoden der kognitiven Verhaltenstherapie. Es kommen aber auch
						Elemente anderer Verfahren wie etwa der tiefenpsychologisch fundierten Psychotherapie
						oder der lösungsorientierten Psychotherapie zum Einsatz. Ebenso greife ich auf
						Entspannungsverfahren, so z.B. das Jacobson Training, zurück.
					</p>
					<p>
						Grundsätzlich ist die Praxis für alle Patienten mit psychischen oder psychosomatischen
						Krankheitsbildern geöffnet. Die überwiegende Anzahl von Patienten, die bisher behandelt
						wurden, litten unter Angststörungen, depressiven Beschwerden, Esstörungen und
						Schmerzstörungen.
					</p>
					<p>
						Jede Therapie bedeutet, die Lebenswelt eines Menschen und seine Sichtweise der Dinge
						kennenzulernen. Mein therapeutisches Vorgehen richtet und orientiert sich daher an den
						geäußerten Beschwerden und den Anliegen der Patienten.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
