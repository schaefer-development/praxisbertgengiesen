<script>
	import HeroRheinblick from '$lib/assets/bg_rheinblick.jpg';
	import MenuAsideAboutMe from '$lib/components/MenuAsideAboutMe/MenuAsideAboutMe.svelte';
	import ContactAside from '$lib/components/ContactAside/ContactAside.svelte';
</script>

<svelte:head>
	<title>Fotogalerie - Dr. Bertgen-Giesen</title>
</svelte:head>

<div class="hero">
	<div class="inside">
		<img src={HeroRheinblick} alt="Praxis Dr. Bertgen-Giesen" />
	</div>
</div>

<div id="container">
	<aside id="left">
		<div class="inside">
			<MenuAsideAboutMe />
			<ContactAside />
		</div>
	</aside>

	<div id="main">
		<div class="inside">
			<!--
			<div class="mod_article first last block" id="fotogalerie">
				<div class="ce_sliderStart first block" id="remagen" style="margin-bottom:30px;">
					<h2>Praxis Remagen</h2>



					<div class="content-slider" data-config="0,300,0,1" style="visibility: visible;">
						<div class="slider-wrapper" style="width: 2175px;">
							<div
								class="ce_image block"
								style="width: 725px; left: 0px; transition-duration: 0ms; transform: translateX(0px);"
								data-index="0"
							>
								<figure class="image_container">
									<img
										src="files/data/images/slideshow/remagen/villa_caraciolla.jpg"
										alt=""
										width="1024"
										height="768"
									/>
								</figure>
							</div>

							<div
								class="ce_image block"
								style="width: 725px; left: -725px; transition-duration: 0ms; transform: translateX(725px);"
								data-index="1"
							>
								<figure class="image_container">
									<img
										src="files/data/images/slideshow/remagen/drei_orange_sessel.jpg"
										alt=""
										width="1024"
										height="768"
									/>
								</figure>
							</div>

							<div
								class="ce_image block"
								style="width: 725px; left: -1450px; transition-duration: 0ms; transform: translateX(-725px);"
								data-index="2"
							>
								<figure class="image_container">
									<img
										src="files/data/images/slideshow/remagen/galerie_rheinblick.jpg"
										alt=""
										width="1024"
										height="768"
									/>
								</figure>
							</div>
						</div>
					</div>

					<nav class="slider-control">
						<a href="#" class="slider-prev">Zurück</a>
						<span class="slider-menu"
							><b data-index="0" class="active">•</b><b data-index="1">•</b><b data-index="2">•</b
							></span
						>
						<a href="#" class="slider-next">Vorwärts</a>
					</nav>
				</div>

				<br />
				<hr />
				<br />
				<div class="ce_sliderStart block" id="bonn" style="margin-top:20px;">
					<h2>Praxis Bonn</h2>

					<div class="content-slider" data-config="0,300,0,1" style="visibility: visible;">
						<div class="slider-wrapper" style="width: 2175px;">
							<div
								class="ce_image block"
								style="width: 725px; left: 0px; transition-duration: 0ms; transform: translateX(0px);"
								data-index="0"
							>
								<figure class="image_container">
									<img
										src="files/data/images/slideshow/bonn/tiny/grauer_sessel.jpg"
										alt=""
										width="1024"
										height="768"
									/>
								</figure>
							</div>

							<div
								class="ce_image block"
								style="width: 725px; left: -725px; transition-duration: 0ms; transform: translateX(725px);"
								data-index="1"
							>
								<figure class="image_container">
									<img
										src="files/data/images/slideshow/bonn/tiny/rhododendron.jpg"
										alt=""
										width="1024"
										height="768"
									/>
								</figure>
							</div>

							<div
								class="ce_image block"
								style="width: 725px; left: -1450px; transition-duration: 0ms; transform: translateX(-725px);"
								data-index="2"
							>
								<figure class="image_container">
									<img
										src="files/data/images/slideshow/bonn/tiny/zwei_rote_sessel.jpg"
										alt=""
										width="1024"
										height="768"
									/>
								</figure>
							</div>
						</div>
					</div>

					<nav class="slider-control">
						<a href="#" class="slider-prev">Zurück</a>
						<span class="slider-menu"
							><b data-index="0" class="active">•</b><b data-index="1">•</b><b data-index="2">•</b
							></span
						>
						<a href="#" class="slider-next">Vorwärts</a>
					</nav>
				</div>


			</div>
			-->
		</div>
	</div>
</div>
