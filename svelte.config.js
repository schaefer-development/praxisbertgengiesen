import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			plugins: [tailwindcss(), autoprefixer()]
		})
	],

	kit: {
		adapter: adapter()
	}
};

export const prerender = false;
export default config;
