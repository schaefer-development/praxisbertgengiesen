<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import LogoMobil from '$lib/components/LogoMobil/LogoMobil.svelte';
	import DrawerAccordion from '$lib/components/Drawer/DrawerAccordion.svelte';
	import { base } from '$app/paths';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<header id="header" class="relative">
	<div class="inside">
		<div id="logo">
			<a title="Praxis Dr. Bertgen-Giesen" href="{base}/">
				<div class="desktop">
					<Logo />
				</div>
				<div class="mobil">
					<LogoMobil />
				</div>
			</a>
		</div>

		<!-- indexer::stop -->
		<nav id="nav" class="mod_navigation block">
			<div class="menu_default">
				<a href="{base}/lebenslauf" class="invisible">Navigation überspringen</a>

				<ul class="level_1">
					<li class="submenu first">
						<a href="{base}/" title="Psychotherapie" class="submenu first" aria-haspopup="true"
							>Psychotherapie</a
						>
						<ul class="level_2">
							<li class="first">
								<a href="{base}/" title="Startseite" class="first">Startseite</a>
							</li>
							<li>
								<a href="{base}/allgemeines" title="Allgemeines">Allgemeines</a>
							</li>
							<li>
								<a href="{base}/schwerpunkte" title="Schwerpunkte">Schwerpunkte</a>
							</li>
							<li>
								<a href="{base}/gesetzliche_krankenkassen" title="Gesetzliche Krankenkassen"
									>Gesetzliche Krankenkassen</a
								>
							</li>
							<li>
								<a href="{base}/privatkassen" title="Privatkassen">Privatkassen</a>
							</li>
							<li>
								<a href="/{base}selbstzahler" title="Selbstzahler">Selbstzahler</a>
							</li>
							<li class="last">
								<a href="{base}/beihilfen" title="Beihilfen" class="last">Beihilfen</a>
							</li>
						</ul>
					</li>
					<li class="submenu">
						<a
							href="{base}/cognitive_coaching"
							title="Coaching, Supervision &amp; Beratung"
							class="submenu"
							aria-haspopup="true">Coaching, Supervision &amp; Beratung</a
						>
						<ul class="level_2">
							<li class="first">
								<a href="{base}/cognitive_coaching" title="Cognitive Coaching" class="first"
									>Cognitive Coaching</a
								>
							</li>
							<li>
								<a href="{base}/coaching_mit_system" title="Coaching mit System"
									>Coaching mit System</a
								>
							</li>
							<li>
								<a href="{base}/supervision" title="Supervision">Supervision</a>
							</li>
							<li class="last">
								<a href="{base}/beratung" title="Beratung" class="last">Beratung</a>
							</li>
						</ul>
					</li>
					<li class="submenu last">
						<span class=" trail submenu last" aria-haspopup="true">Über mich</span>
						<ul class="level_2">
							<li class="first">
								<a href="{base}/lebenslauf" title="Lebenslauf" class="first">Lebenslauf</a>
							</li>
							<li class="sibling">
								<a href="{base}/qualifikation" title="Qualifikation" class="sibling"
									>Qualifikation</a
								>
							</li>
							<li class="sibling">
								<a href="{base}/kontakt" title="Kontakt &amp; Anfahrt" class="sibling"
									>Kontakt &amp; Anfahrt</a
								>
							</li>
							<li class="sibling last">
								<a href="{base}/fotogalerie" title="Fotogalerie" class="sibling last">Fotogalerie</a
								>
							</li>
						</ul>
					</li>
				</ul>

				<a id="skipNavigation1" class="invisible">&nbsp;</a>
			</div>
			<div class="menu_mobil open">
				<button on:click={toggleMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="iconstyle"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</nav>
		<!-- indexer::continue -->
	</div>
</header>
<!--
<aside
	id="drawer"
	on:click={toggleMenu}
	class={open
		? 'menuopen' //
		: 'menuclosed'}
>
	-->
<aside
	id="drawer"
	on:click={toggleMenu}
	class={open
		? 'menuopen' //
		: 'menuclosed'}
>
	<div class="inside">
		<div class="menu_mobil close">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="iconstyle"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>

				<span>Menu schliessen</span>
			</button>
		</div>
		<DrawerAccordion id="psychotherapie">
			<span slot="headline">Psychotherapie</span>
			<div slot="content">
				<a href="{base}/" title="Startseite" class="first mobil_link_submenu">Startseite</a>

				<a href="{base}/allgemeines" title="Allgemeines" class="mobil_link_submenu">Allgemeines</a>

				<a href="{base}/schwerpunkte" title="Schwerpunkte" class="mobil_link_submenu"
					>Schwerpunkte</a
				>

				<a
					href="{base}/gesetzliche_krankenkassen"
					title="Gesetzliche Krankenkassen"
					class="mobil_link_submenu">Gesetzliche Krankenkassen</a
				>

				<a href="{base}/privatkassen" title="Privatkassen" class="mobil_link_submenu"
					>Privatkassen</a
				>

				<a href="/{base}selbstzahler" title="Selbstzahler" class="mobil_link_submenu"
					>Selbstzahler</a
				>

				<a href="{base}/beihilfen" title="Beihilfen" class="last mobil_link_submenu">Beihilfen</a>
			</div>
		</DrawerAccordion>

		<DrawerAccordion id="coachings">
			<span slot="headline">Coaching, Supervision &amp; Beratung</span>
			<div slot="content">
				<a
					href="{base}/cognitive_coaching"
					title="Cognitive Coaching"
					class="first mobil_link_submenu">Cognitive Coaching</a
				>

				<a href="{base}/coaching_mit_system" title="Coaching mit System" class="mobil_link_submenu"
					>Coaching mit System</a
				>

				<a href="{base}/supervision" title="Supervision" class="mobil_link_submenu">Supervision</a>

				<a href="{base}/beratung" title="Beratung" class="last mobil_link_submenu">Beratung</a>
			</div>
		</DrawerAccordion>

		<DrawerAccordion id="about">
			<span slot="headline">Über mich</span>
			<div slot="content">
				<a href="{base}/lebenslauf" class="first mobil_link_submenu" title="Lebenslauf"
					>Lebenslauf</a
				>

				<a href="{base}/qualifikation" title="Qualifikation" class="mobil_link_submenu"
					>Qualifikation</a
				>

				<a href="{base}/kontakt" title="Kontakt &amp; Anfahrt" class="mobil_link_submenu"
					>Kontakt &amp; Anfahrt</a
				>
				<a href="{base}/fotogalerie" title="Fotogalerie" class="last mobil_link_submenu"
					>Fotogalerie</a
				>
			</div>
		</DrawerAccordion>
	</div>
</aside>

<style>
	#drawer {
		display: none;
	}

	#header .inside {
		display: flex;
		flex-direction: column;
	}

	#header .inside #logo .desktop {
		display: block;
	}

	#header .inside #logo .mobil {
		display: none;
	}

	.menu_default {
		display: block;
	}
	.menu_mobil {
		display: none;
	}

	/* ################################### MEDIA QUERY ########################################## */

	@media screen and (max-width: 1024px) {
		#header .inside {
			display: flex;
			flex-direction: row;
			max-height: 68px;
			padding-left: 15px;
			padding-right: 15px;
		}

		#header .inside #logo .desktop {
			display: none;
		}

		#header .inside #logo .mobil {
			display: flex;
			position: relative;
			width: 75%;
			align-items: center;
			justify-content: center;
			padding: 15%;
		}

		.iconstyle {
			width: 30px;
			height: 30px;
			color: #4495a1;
		}

		.menu_default {
			display: none;
		}

		.menu_mobil {
			display: block;
			width: 68.75px;
			height: 68.75px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.menu_mobil.open button {
			width: 60px;
			height: 60px;
			background: none;
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.menu_mobil.close {
			width: 100%;
			display: block;
			border-bottom: 1px solid #ccc;
			margin-bottom: 20px;
			height: 50px;
		}

		.menu_mobil.close button {
			background: none;
			border: none;
			letter-spacing: 0.04em;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		.menu_mobil.close button span {
			color: #4495a1;
			font-weight: bold;
			text-transform: uppercase;
			padding-left: 10px;
		}

		#drawer {
			display: block;
			width: 100%;
			height: 100vh;
			display: flex;
			flex-direction: column;
			padding: 15px;
			background: #fff;
			transition-property: all;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 200ms;
			background-color: #fff;
		}

		#drawer.menuopen {
			position: fixed;
			top: 0;
			z-index: 99999;
		}

		#drawer.menuclosed {
			position: absolute;
			top: -200vh;
			z-index: 99999;
		}

		.mobil_link_submenu {
			color: #4495a1;
			display: block;
			padding-top: 7px;
			padding-bottom: 7px;
		}
	}

	/* ################################### MEDIA QUERY ########################################## */
	@media screen and (max-width: 768px) {
		#header .inside #logo .mobil {
			width: 70%;
			padding: 0%;
		}
	}
</style>
