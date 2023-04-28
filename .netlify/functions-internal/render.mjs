import { init } from '../serverless.js';

export const handler = init({
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
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js'),
			() => import('../server/nodes/15.js'),
			() => import('../server/nodes/16.js'),
			() => import('../server/nodes/17.js'),
			() => import('../server/nodes/18.js'),
			() => import('../server/nodes/19.js')
		],
		routes: [],
		matchers: async () => {
			return {};
		}
	}
});
