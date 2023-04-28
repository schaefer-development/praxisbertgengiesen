export const manifest = {
	appDir: '_app',
	assets: new Set(['.DS_Store', 'favicon.png', 'mapmarker.png']),
	mimeTypes: { '.png': 'image/png' },
	_: {
		entry: {
			file: '_app/immutable/start-cb8a97a7.js',
			imports: [
				'_app/immutable/start-cb8a97a7.js',
				'_app/immutable/chunks/preload-helper-aa6bc0ce.js',
				'_app/immutable/chunks/paths-18c1a41e.js',
				'_app/immutable/chunks/singletons-cb0be988.js'
			],
			stylesheets: []
		},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js')
		],
		routes: [
			{
				id: '',
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: 'allgemeines',
				pattern: /^\/allgemeines\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: 'beihilfen',
				pattern: /^\/beihilfen\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: 'beratung',
				pattern: /^\/beratung\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: 'coaching_mit_system',
				pattern: /^\/coaching_mit_system\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: 'cognitive_coaching',
				pattern: /^\/cognitive_coaching\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: 'datenschutz',
				pattern: /^\/datenschutz\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: 'fotogalerie',
				pattern: /^\/fotogalerie\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: 'gesetzliche_krankenkassen',
				pattern: /^\/gesetzliche_krankenkassen\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: 'impressum',
				pattern: /^\/impressum\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: 'kontakt',
				pattern: /^\/kontakt\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: 'lebenslauf',
				pattern: /^\/lebenslauf\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: 'privatkassen',
				pattern: /^\/privatkassen\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: 'qualifikation',
				pattern: /^\/qualifikation\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: 'schwerpunkte',
				pattern: /^\/schwerpunkte\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: 'selbstzahler',
				pattern: /^\/selbstzahler\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: 'sitemap',
				pattern: /^\/sitemap\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: 'supervision',
				pattern: /^\/supervision\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			}
		],
		matchers: async () => {
			return {};
		}
	}
};
