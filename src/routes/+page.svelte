<script>
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import MenuAsidePsychotherapie from '$lib/components/MenuAsidePsychotherapie/MenuAsidePsychotherapie.svelte';
	import HeroGemaelde from '$lib/assets/bg_gemaelde.jpg';
	import portrait from '$lib/assets/marion_bertgen-giesen.jpg';
</script>

<svelte:head>
	<title>Praxis Dr. Bertgen-Giesen</title>
	<meta name="robots" content="index,follow" />
	<meta
		name="description"
		content="Willkommen in meiner Praxis für Psychotherapie, Supervision und Coaching mit Standorten in Remagen und Bonn."
	/>
	<meta name="keywords" content="" />
	<meta name="generator" content="Contao Open Source CMS" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<meta name="HandheldFriendly" content="True" />
	<meta name="MobileOptimized" content="320" />
	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
	<!--[if lt IE 9]><script src="assets/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script><![endif]-->

	<!--<script src="js/jquery-1.11.3.min"></script>
	<script src="js/jquery.meanmenu.js"></script>-->

	<style>
		@media print {
			#ghostery-tracker-tally {
				display: none !important;
			}
		}
	</style>
</svelte:head>

<!--- 
				<picture>
					<source srcset={welcome} type="image/webp" />
					<img src={welcome_fallback} alt="Welcome" />
				</picture>
	-->

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
			<div class="mod_article first last block" id="startseite">
				<div class="ce_text col-xs-12 col-sm-12 col-md-12 first block">
					<h1>Hinweis</h1>

					<p>
						Seit 1. Januar 2022 wird die Praxis von Frau Dr. Bertgen-Giesen gemeinsam mit Frau Dr.
						Anna Katzer geführt.
					</p>
					<p>
						Auch in der Coronakrise bleibt die Praxis geöffnet. Wir bieten nach Absprache
						Videosprechstunden und Telefontermine an.
					</p>
				</div>

				<h1 class="ce_headline col-xs-12 col-sm-12 col-md-12">
					Herzlich Willkommen in meiner Praxis für Psychotherapie
				</h1>

				<div
					class="ce_image col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4 col-md-offset-4 col-md-4 block"
				>
					<figure class="image_container" style="margin-top:30px;margin-bottom:30px;">
						<img src={portrait} alt="" width="300" height="300" />
					</figure>
				</div>

				<div class="ce_text col-xs-12 col-sm-12 col-md-12 last block">
					<p>
						Mein therapeutisches Angebot richtet sich an Erwachsene, die bei einer gesetzlichen
						Krankenkasse, Beihilfestelle oder Privatkasse versichert sind.
					</p>
					<p>Die Praxis hat eine Kassenzulassung.</p>
					<p>Als Wahlleistungen biete ich darüber hinaus Coaching oder Beratung an.</p>
					<p>
						Zusätzlich arbeite ich als Supervisorin für ärztlich oder psychotherapeutisch tätige
						Kollegen.
					</p>
					<p>Sie finden mich an zwei Standorten: in Remagen und in Bonn.</p>
				</div>
			</div>
		</div>
	</div>
</div>
