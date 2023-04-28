import {
	c as create_ssr_component,
	h as createEventDispatcher,
	b as add_attribute,
	i as each,
	e as escape,
	d as null_to_empty,
	v as validate_component
} from '../../../chunks/index.js';
import { H as HeroRheinblick } from '../../../chunks/bg_rheinblick.js';
import { M as MenuAsideAboutMe } from '../../../chunks/MenuAsideAboutMe.js';
import { C as ContactAside } from '../../../chunks/ContactAside.js';
import 'siema';
const Carousel_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '.carousel.svelte-pi7tss.svelte-pi7tss{position:relative;width:100%;justify-content:center;align-items:center}button.svelte-pi7tss.svelte-pi7tss{position:absolute;width:34px;height:34px;top:50%;z-index:50;margin-top:-20px;border:none;background-color:transparent;background-color:#4495a1;color:#fff}button.svelte-pi7tss.svelte-pi7tss:focus{outline:none}.left.svelte-pi7tss.svelte-pi7tss{left:1vw}.right.svelte-pi7tss.svelte-pi7tss{right:1vw}ul.svelte-pi7tss.svelte-pi7tss{list-style-type:none;position:absolute;display:none;justify-content:center;width:100%;margin-top:-30px;padding:0}ul.svelte-pi7tss li.svelte-pi7tss{margin:4px;border-radius:100%;border:1px solid #fff;height:12px;width:12px}ul.svelte-pi7tss li.svelte-pi7tss:hover{background-color:rgba(255, 255, 255, 0.5)}ul.svelte-pi7tss li.active.svelte-pi7tss{background:rgba(198, 20, 54, 1);border:1px solid rgba(198, 20, 54, 1)}',
	map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let pips;
	let currentPerPage;
	let totalDots;
	let { perPage = 3 } = $$props;
	let { loop = true } = $$props;
	let { autoplay = 0 } = $$props;
	let { duration = 400 } = $$props;
	let { easing = 'ease-out' } = $$props;
	let { startIndex = 0 } = $$props;
	let { draggable = true } = $$props;
	let { multipleDrag = true } = $$props;
	let { dots = true } = $$props;
	let { controls = true } = $$props;
	let { threshold = 20 } = $$props;
	let { rtl = false } = $$props;
	let currentIndex = startIndex;
	let siema;
	let controller;
	let timer;
	createEventDispatcher();
	function isDotActive(currentIndex2, dotIndex) {
		if (currentIndex2 < 0) currentIndex2 = pips.length + currentIndex2;
		return (
			currentIndex2 >= dotIndex * currentPerPage &&
			currentIndex2 < dotIndex * currentPerPage + currentPerPage
		);
	}
	function left() {
		controller.prev();
	}
	function right() {
		controller.next();
	}
	function go(index) {
		controller.goTo(index);
	}
	function pause() {
		clearInterval(timer);
	}
	function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}
	if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0)
		$$bindings.perPage(perPage);
	if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0) $$bindings.loop(loop);
	if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
		$$bindings.autoplay(autoplay);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
		$$bindings.duration(duration);
	if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
		$$bindings.easing(easing);
	if ($$props.startIndex === void 0 && $$bindings.startIndex && startIndex !== void 0)
		$$bindings.startIndex(startIndex);
	if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
		$$bindings.draggable(draggable);
	if ($$props.multipleDrag === void 0 && $$bindings.multipleDrag && multipleDrag !== void 0)
		$$bindings.multipleDrag(multipleDrag);
	if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0) $$bindings.dots(dots);
	if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
		$$bindings.controls(controls);
	if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
		$$bindings.threshold(threshold);
	if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0) $$bindings.rtl(rtl);
	if ($$props.isDotActive === void 0 && $$bindings.isDotActive && isDotActive !== void 0)
		$$bindings.isDotActive(isDotActive);
	if ($$props.left === void 0 && $$bindings.left && left !== void 0) $$bindings.left(left);
	if ($$props.right === void 0 && $$bindings.right && right !== void 0) $$bindings.right(right);
	if ($$props.go === void 0 && $$bindings.go && go !== void 0) $$bindings.go(go);
	if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0) $$bindings.pause(pause);
	if ($$props.resume === void 0 && $$bindings.resume && resume !== void 0)
		$$bindings.resume(resume);
	$$result.css.add(css$2);
	pips = [];
	currentPerPage = perPage;
	totalDots = [];
	return `<div class="${'carousel svelte-pi7tss'}"><div class="${'slides'}"${add_attribute(
		'this',
		siema,
		0
	)}>${slots.default ? slots.default({}) : ``}</div>
	${
		controls
			? `<button class="${'left svelte-pi7tss'}" aria-label="${'left'}">${
					slots['left-control'] ? slots['left-control']({}) : ``
			  }</button>
		<button class="${'right svelte-pi7tss'}" aria-label="${'right'}">${
					slots['right-control'] ? slots['right-control']({}) : ``
			  }</button>`
			: ``
	}

	${
		dots
			? `<ul class="${'svelte-pi7tss'}">${each({ length: totalDots }, (_, i) => {
					return `<li class="${
						escape(null_to_empty(isDotActive(currentIndex, i) ? 'active' : ''), true) +
						' svelte-pi7tss'
					}"></li>`;
			  })}</ul>`
			: ``
	}
</div>`;
});
const gallerie01$1 = '/_app/immutable/assets/villa_caraciolla-5a6ad530.jpg';
const gallerie02$1 = '/_app/immutable/assets/drei_orange_sessel-6f841b51.jpg';
const gallerie03$1 = '/_app/immutable/assets/galerie_rheinblick-39c9fb15.jpg';
const Slideshow1_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.slide-content.svelte-1hqvx5w.svelte-1hqvx5w{width:100%;min-height:300px;max-height:60vh}.control.svelte-1hqvx5w svg.svelte-1hqvx5w{width:25px;height:32px}',
	map: null
};
const Slideshow1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);
	return `<div class="${'slideshow relative'}">${validate_component(Carousel, 'Carousel').$$render(
		$$result,
		{
			perPage: '1',
			autoplay: '10000',
			easing: 'ease-in-out'
		},
		{},
		{
			'right-control': () => {
				return `<span class="${'control svelte-1hqvx5w'}" slot="${'right-control'}"><svg xmlns="${'http://www.w3.org/2000/svg'}" class="${'relative w-10 h-10 p-2 text-white rounded-full svelte-1hqvx5w'}" fill="${'none'}" viewBox="${'0 0 24 24'}" stroke="${'currentColor'}"><path stroke-linecap="${'round'}" stroke-linejoin="${'round'}" stroke-width="${'2'}" d="${'M9 5l7 7-7 7'}"></path></svg></span>`;
			},
			'left-control': () => {
				return `<span class="${'control svelte-1hqvx5w'}" slot="${'left-control'}"><svg xmlns="${'http://www.w3.org/2000/svg'}" class="${'relative w-10 h-10 p-2 text-white rounded-full svelte-1hqvx5w'}" fill="${'none'}" viewBox="${'0 0 24 24'}" stroke="${'currentColor'}"><path stroke-linecap="${'round'}" stroke-linejoin="${'round'}" stroke-width="${'2'}" d="${'M15 19l-7-7 7-7'}"></path></svg></span>`;
			},
			default: () => {
				return `
		<div class="${'slide-content relative flex items-center svelte-1hqvx5w'}"><img${add_attribute(
					'src',
					gallerie01$1,
					0
				)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div>
		

		
		<div class="${'slide-content relative flex items-center svelte-1hqvx5w'}"><img${add_attribute(
					'src',
					gallerie02$1,
					0
				)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div>
		

		
		<div class="${'slide-content relative flex items-center svelte-1hqvx5w'}"><img${add_attribute(
					'src',
					gallerie03$1,
					0
				)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div>
		`;
			}
		}
	)}
</div>`;
});
const gallerie01 = '/_app/immutable/assets/grauer_sessel-03c88888.jpg';
const gallerie02 = '/_app/immutable/assets/rhododendron-ddca0c0e.jpg';
const gallerie03 = '/_app/immutable/assets/zwei_rote_sessel-ccf3c56d.jpg';
const Slideshow2_svelte_svelte_type_style_lang = '';
const css = {
	code: '.slide-content.svelte-1hqvx5w.svelte-1hqvx5w{width:100%;min-height:300px;max-height:60vh}.control.svelte-1hqvx5w svg.svelte-1hqvx5w{width:25px;height:32px}',
	map: null
};
const Slideshow2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<div class="${'slideshow relative'}">${validate_component(Carousel, 'Carousel').$$render(
		$$result,
		{
			perPage: '1',
			autoplay: '10000',
			easing: 'ease-in-out'
		},
		{},
		{
			'right-control': () => {
				return `<span class="${'control svelte-1hqvx5w'}" slot="${'right-control'}"><svg xmlns="${'http://www.w3.org/2000/svg'}" class="${'relative w-10 h-10 p-2 text-white rounded-full svelte-1hqvx5w'}" fill="${'none'}" viewBox="${'0 0 24 24'}" stroke="${'currentColor'}"><path stroke-linecap="${'round'}" stroke-linejoin="${'round'}" stroke-width="${'2'}" d="${'M9 5l7 7-7 7'}"></path></svg></span>`;
			},
			'left-control': () => {
				return `<span class="${'control svelte-1hqvx5w'}" slot="${'left-control'}"><svg xmlns="${'http://www.w3.org/2000/svg'}" class="${'relative w-10 h-10 p-2 text-white rounded-full svelte-1hqvx5w'}" fill="${'none'}" viewBox="${'0 0 24 24'}" stroke="${'currentColor'}"><path stroke-linecap="${'round'}" stroke-linejoin="${'round'}" stroke-width="${'2'}" d="${'M15 19l-7-7 7-7'}"></path></svg></span>`;
			},
			default: () => {
				return `
		<div class="${'slide-content relative flex items-center svelte-1hqvx5w'}"><img${add_attribute(
					'src',
					gallerie01,
					0
				)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div>
		

		
		<div class="${'slide-content relative flex items-center svelte-1hqvx5w'}"><img${add_attribute(
					'src',
					gallerie02,
					0
				)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div>
		

		
		<div class="${'slide-content relative flex items-center svelte-1hqvx5w'}"><img${add_attribute(
					'src',
					gallerie03,
					0
				)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div>
		`;
			}
		}
	)}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `${
			(($$result.title = `<title>Fotogalerie - Dr. Bertgen-Giesen</title>`), '')
		}`),
		'')
	}

<div class="${'hero'}"><div class="${'inside'}"><img${add_attribute(
		'src',
		HeroRheinblick,
		0
	)} alt="${'Praxis Dr. Bertgen-Giesen'}"></div></div>

<div id="${'container'}"><aside id="${'left'}"><div class="${'inside'}">${validate_component(
		MenuAsideAboutMe,
		'MenuAsideAboutMe'
	).$$render($$result, {}, {}, {})}
			${validate_component(ContactAside, 'ContactAside').$$render($$result, {}, {}, {})}</div></aside>

	<div id="${'main'}"><div class="${'inside'}"><h2>Praxis Remagen</h2>
			<br>
			${validate_component(Slideshow1, 'Slideshow1').$$render($$result, { slot: 'mounted' }, {}, {})}
			<br><br>
			<hr>
			<br><br>
			<h2>Praxis Bonn</h2>
			<br>
			${validate_component(Slideshow2, 'Slideshow2').$$render(
				$$result,
				{ slot: 'mounted' },
				{},
				{}
			)}</div></div></div>`;
});
export { Page as default };
