<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m['meta.title']()}</title>
</svelte:head>

<main>
	<Header />
	<Hero />
</main>
