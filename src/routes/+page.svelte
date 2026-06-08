<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m['meta.title']()}</title>
</svelte:head>

<main>
	<Header />
	<Hero />
	<About />
	<Stack />
</main>
