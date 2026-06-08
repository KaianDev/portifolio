<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import { Meteors } from '$lib/components/ui/meteors';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m['meta.title']()}</title>
</svelte:head>

<main>
	<Header />
	<div class="relative max-w-4xl mx-auto overflow-hidden">
		<Meteors number={15} />
		<Hero />
	</div>
	<About />
	<Stack />
</main>
