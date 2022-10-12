<script lang="ts">
	import { base } from '$app/paths';
	import MenuAsideAboutMe from '$lib/components/MenuAsideAboutMe/MenuAsideAboutMe.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
</script>

<svelte:head>
	<title>Sitemap - Dr. Bertgen-Giesen</title>
</svelte:head>

<!--- 
				<picture>
					<source srcset={welcome} type="image/webp" />
					<img src={welcome_fallback} alt="Welcome" />
				</picture>
	-->
<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsideAboutMe />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<div class="mod_article first last block" id="sitemap">
				<!-- indexer::stop -->
				<nav class="mod_navigation col-xs-12 col-sm-12 col-md-12 block">
					<h1>Sitemap</h1>

					<a href="{base}/sitemap#skipNavigation7" class="invisible">Navigation überspringen</a>

					<ul class="level_1">
						<li class="submenu sibling first">
							<a
								href="{base}/"
								title="Psychotherapie"
								class="submenu sibling first"
								aria-haspopup="true">Psychotherapie</a
							>
							<ul class="level_2">
								<li class="first">
									<a href="{base}/" title="Startseite" class="first">Startseite</a>
								</li>
								<li><a href="{base}/allgemeines" title="Allgemeines">Allgemeines</a></li>
								<li><a href="{base}/schwerpunkte" title="Schwerpunkte">Schwerpunkte</a></li>
								<li>
									<a href="{base}/gesetzliche_krankenkassen" title="Gesetzliche Krankenkassen"
										>Gesetzliche Krankenkassen</a
									>
								</li>
								<li><a href="{base}/privatkassen" title="Privatkassen">Privatkassen</a></li>
								<li><a href="{base}/selbstzahler" title="Selbstzahler">Selbstzahler</a></li>
								<li class="last">
									<a href="{base}/beihilfen" title="Beihilfen" class="last">Beihilfen</a>
								</li>
							</ul>
						</li>
						<li class="submenu sibling">
							<a
								href="{base}/cognitive_coaching"
								title="Coaching, Supervision &amp; Beratung"
								class="submenu sibling"
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
								<li><a href="{base}/supervision" title="Supervision">Supervision</a></li>
								<li class="last">
									<a href="{base}/beratung" title="Beratung" class="last">Beratung</a>
								</li>
							</ul>
						</li>
						<li class="submenu sibling last">
							<a
								href="{base}/lebenslauf"
								title="Über mich"
								class="submenu sibling last"
								aria-haspopup="true">Über mich</a
							>
							<ul class="level_2">
								<li class="first">
									<a href="{base}/lebenslauf" title="Lebenslauf" class="first">Lebenslauf</a>
								</li>
								<li><a href="{base}/qualifikation" title="Qualifikation">Qualifikation</a></li>
								<li>
									<a href="{base}/kontakt" title="Kontakt &amp; Anfahrt">Kontakt &amp; Anfahrt</a>
								</li>
								<li class="last">
									<a href="{base}/fotogalerie" title="Fotogalerie" class="last">Fotogalerie</a>
								</li>
							</ul>
						</li>
					</ul>

					<a id="skipNavigation7" class="invisible">&nbsp;</a>
				</nav>
				<!-- indexer::continue -->
			</div>
		</div>
	</div>
</div>
