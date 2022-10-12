<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<header id="header">
	<div class="inside">
		<div id="logo">
			<a href="#" />
		</div>

		<!-- indexer::stop -->
		<nav id="nav" class="mod_navigation block">
			<div class="menu_default">
				<a href="/lebenslauf.html#skipNavigation1" class="invisible">Navigation überspringen</a>

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
			<div class="menu_mobil">
				<button
					on:click={toggleMenu}
					class="text-white hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-darkblue ease-in-out transition-all duration-300"
				>
					<span class="font-semibold mt-0.5 uppercase tracking-widest inline-block align-middle"
						>Menu</span
					>
				</button>
			</div>
		</nav>
		<!-- indexer::continue -->
	</div>
</header>

<aside
	id="drawer"
	style="opacity:1; z-index:999;"
	on:click={toggleMenu}
	class="{open
		? 'translate-x-0 menuclosed' // translate-x-0
		: 'translate-x-full menuopen'} transform fixed lg:hidden top-0 left-0 w-full h-full overflow-auto ease-in-out transition-all duration-300 "
>
	<!-- styling drawer starts here -->
	<div class="drawer_outer h-screen grid content-center bg-darkblue">
		<div class="drawer_inner mx-12 text-center">
			<button
				class="text-white hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-darkblue ease-in-out transition-all duration-300"
			>
				<span class="font-semibold mt-0.5 uppercase tracking-widest inline-block align-middle"
					>Schließen</span
				>
			</button>

			sdflnskdf
		</div>
	</div>
</aside>

<style>
	.menuopen {
		border: 1px solid blue;
	}

	.menuclosed {
		border: 1px solid red;
	}

	#header .inside {
		display: flex;
		flex-direction: column;
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
			padding: 0 0 0 68px;
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

		.menu_mobil button {
			width: 60px;
			height: 60px;

			background-image: url('../mobil_menu_closed.svg');
			background-position: center center;
			background-repeat: no-repeat;
		}
	}
</style>
