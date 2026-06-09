<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Career from '$lib/components/Career.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { Meteors } from '$lib/components/ui/meteors';
</script>

<Seo />

<main>
	<Header />
	<div class="relative mx-auto max-w-4xl overflow-hidden">
		<Meteors number={15} />
		<Hero />
	</div>
	<About />
	<Stack />
	<Career />
	<Projects />
	<Contact />
	<Footer />
</main>
