<script context="module" lang="ts">
	import { enhance } from '$lib/form';
	import type { Load } from '@sveltejs/kit';
  import fetch from 'isomorphic-unfetch';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
    const res1 = await fetch('http://localhost:3000/dev/sveltekit/todos.json');
console.log(res1)
		const res = await fetch('http://localhost:3000/dev/sveltekit/sveltekit/todos.json');

		if (res.ok) {
			const todos = await res.json();

			return {
				props: { todos }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

