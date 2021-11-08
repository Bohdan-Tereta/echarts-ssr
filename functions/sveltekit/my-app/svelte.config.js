import preprocess from 'svelte-preprocess';
import adapter  from './adapter/index.js'
import adapter2 from '@nikso/adapter-serverless';

import serverless from '@yarbsemaj/adapter-lambda';

import vercel from '@sveltejs/adapter-vercel' ;

import netlify from '@sveltejs/adapter-netlify'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    adapter:  vercel(),
    ssr: true,
    paths: {
      // base: '/dev/sveltekit',
      // assets: 'http://127.0.0.1:5500/functions/sveltekit/my-app/.vercel_build_output/static'
      //assets: 'http://127.0.0.1:5500/functions/sveltekit/my-app/adapter/content/static' // vercel
      //assets: 'http://127.0.0.1:5500/functions/sveltekit/my-app/.svelte-kit/output/client'
    }
	},
  vite: {
     // base: '/dev/sveltekit',
  }
};

export default config;
