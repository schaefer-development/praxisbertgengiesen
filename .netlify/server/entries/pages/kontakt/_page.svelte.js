import {
	c as create_ssr_component,
	j as spread,
	k as escape_object,
	v as validate_component
} from '../../../chunks/index.js';
import { b as base } from '../../../chunks/paths.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let {
		iconOptions = {
			iconUrl: `${base}/mapmarker.png`,
			iconSize: [40, 50],
			iconAnchor: [20, 50]
		}
	} = $$props;
	let {
		layerOptions = [
			'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ',
			{
				attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
				maxZoom: 19
			}
		]
	} = $$props;
	let { zoom = 10.2 } = $$props;
	let { coordinate1 = [50.71571944342756, 7.102766811824819] } = $$props;
	let { coordinate2 = [50.579969420507744, 7.2261527559490055] } = $$props;
	let { setView = [50.655984700815495, 7.189006506251863] } = $$props;
	let { mapAttributes: mapAttributes2 = { style: 'width: 100%; height: 300px;' } } = $$props;
	if ($$props.iconOptions === void 0 && $$bindings.iconOptions && iconOptions !== void 0)
		$$bindings.iconOptions(iconOptions);
	if ($$props.layerOptions === void 0 && $$bindings.layerOptions && layerOptions !== void 0)
		$$bindings.layerOptions(layerOptions);
	if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0) $$bindings.zoom(zoom);
	if ($$props.coordinate1 === void 0 && $$bindings.coordinate1 && coordinate1 !== void 0)
		$$bindings.coordinate1(coordinate1);
	if ($$props.coordinate2 === void 0 && $$bindings.coordinate2 && coordinate2 !== void 0)
		$$bindings.coordinate2(coordinate2);
	if ($$props.setView === void 0 && $$bindings.setView && setView !== void 0)
		$$bindings.setView(setView);
	if ($$props.mapAttributes === void 0 && $$bindings.mapAttributes && mapAttributes2 !== void 0)
		$$bindings.mapAttributes(mapAttributes2);
	return `${
		(($$result.head += `<link rel="${'stylesheet'}" href="${'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'}" integrity="${'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='}" crossorigin="${''}" data-svelte="svelte-vfanb7">`),
		'')
	}

<div${spread(
		[{ id: 'map' }, escape_object(mapAttributes2), { class: 'mod_map z-10' }],
		{}
	)}></div>`;
});
const mapAttributes = {
	class: 'map',
	style: 'position: relative; width: 100%; height: 100%; min-height:45vh; max-height:45vh;'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${(($$result.title = `<title>Kontakt - Dr. Bertgen-Giesen</title>`), '')}`),
		'')
	}

${validate_component(Map, 'Map').$$render($$result, { mapAttributes }, {}, {})}

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideAboutMe,
		'MenuAsideAboutMe'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><div class="${'mod_article first last block'}" id="${'kontakt_und_anfahrt'}"><div class="${'ce_text col-xs-12 col-sm-12 col-md-12 first block'}" style="${'margin-bottom:20px;'}"><h1>Kontakt und Anfahrt</h1>

					<p>Praxiszeiten: Werktags von 9:00 bis 18:00 Uhr.</p></div>

				<div class="${'ce_text col-xs-12 col-sm-6 col-md-6 block'}"><h3>Praxis Dr. Bertgen-Giesen</h3>
					<p>Seelenstraße 8<br> 53424 Remagen<br> Telefon:
						<a title="${'Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen'}" href="${'callto:00492642210872'}">02642 . 210 872</a><br> E-Mail:
						<a title="${'Eine E-Mail an info@dr-bertgen-giesen.de mit Ihrem Standardprogramm schreiben'}" href="${'mailto:info@dr-bertgen-giesen.de'}">info@dr-bertgen-giesen.de</a></p>
					<p>\xA0</p>
					<p><strong>Anfahrt mit dem Auto</strong><br>\xDCber die B9, Abzweigung Drusus-Stra\xDFe.
						Zahlreiche Parkm\xF6glichkeiten sind in fu\xDFl\xE4ufiger N\xE4he vorhanden. <br><br><strong>Anreise mit dem Zug</strong><br>Sie finden uns nur wenige Gehminuten vom Bahnhof Remagen entfernt. Der Deichweg
						ist die Verl\xE4ngerung der Rheinpromenade.
					</p></div>

				<div class="${'ce_text col-xs-12 col-sm-6 col-md-6 last block'}" style="${'margin-bottom:20px;'}"><h3>Beratung, Coaching und Supervision</h3>
					<p>Gregor-Mendel-Stra\xDFe 26<br>
						53115 Bonn<br>
						Telefon:
						<a title="${'Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen'}" href="${'callto:00492289107648'}">0228 . 910 76 48</a><br> E-Mail:
						<a title="${'Eine E-Mail an info@dr-bertgen-giesen.de mit Ihrem Standardprogramm schreiben'}" href="${'mailto:info@dr-bertgen-giesen.de'}">info@dr-bertgen-giesen.de</a></p>
					<p>\xA0</p>
					<p><strong>Anfahrt mit dem Auto </strong><br>
						Autobahnabfahrt Bonn Poppelsdorf, auf Reuterstra\xDFe bleiben bis Argelanderstra\xDFe, dort rechts
						abbiegen, an der Ampel links abbiegen Lotharstra\xDFe, weiter geradeaus ca 400m, dann rechts
						abbiegen Rosenburgweg, nach 150m scharf rechts abbiegen in die Gregor-Mendel-Stra\xDFe.
					</p>

					<p><strong>Anfahrt mit dem Auto von S\xFCden</strong><br>
						Auf B9 bleiben, \xFCber Reuterbr\xFCcke geradeaus, an der Tankstelle links abbiegen in Hausdorffstra\xDFe,
						an der 2. Ampel rechts abbiegen in Eduard Otto Stra\xDFe, im Kreisverkehr dritte Ausfahrt Graf
						Stauffenbergstra\xDFe, an der Ampel links in die Lotharstra\xDFe, an der n\xE4chsten Kreuzung rechts
						in den Rosenburgweg, nach 150 m scharf rechts in die Gregor-Mendel-Stra\xDFe.
					</p>
					<p>Parkm\xF6glichkeiten in der Stra\xDFe sind vorhanden.</p>
					<p><strong>Anfahrt mit \xD6PNV</strong><br>
						1. Ab Bonn HBF: Buslinie 600 Richtung Venusberg/ Unikliniken bis Gregor-Mendel-Stra\xDFe, dann
						2 Minuten Fu\xDFweg <br>
						2. Ab Bonn HBF. Stra\xDFenbahnlinie 61 oder 62 Richtung Dottendorf, bis Eduard Otto Stra\xDFe,
						dann 10 Minuten Fu\xDFweg.
					</p></div></div></div></div></div>`;
});
export { Page as default };
