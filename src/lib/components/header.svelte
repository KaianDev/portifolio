<script lang="ts">
	import { resolve } from '$app/paths';
	import ThemeToggle from './ThemeToggle.svelte';

	import type { Pathname } from '$app/types';
	import { NAV_LINKS } from '$lib/constants/links';
	import LocaleButtonGroup from './LocaleButtonGroup.svelte';
	import MobileMenu from './MobileMenu.svelte';

	let isScrolled = $state(false);

	$effect(() => {
		function handler() {
			isScrolled = window.scrollY > 0;
		}

		window.addEventListener('scroll', handler);

		return () => {
			window.removeEventListener('scroll', handler);
		};
	});
</script>

<header
	class={[
		'sticky top-0 z-50 h-17 bg-background/50 p-4 backdrop-blur-sm',
		isScrolled && 'border-b border-border'
	]}
>
	<div class="mx-auto flex max-w-4xl items-center justify-between">
		<a href="#start" class="font-heading text-lg font-medium"
			>kaian<span class="text-primary">.dev</span></a
		>
		<nav class="flex items-center gap-6">
			<ul class="hidden items-center gap-4 md:flex">
				{#each NAV_LINKS as link (link.href)}
					<li>
						<a
							class="relative py-1.5 text-sm font-medium transition-[color] duration-300 after:absolute after:right-full after:left-0 after:block after:h-0.5 after:bg-primary after:transition-[right] after:duration-300 after:ease-in-out after:content-[''] hover:text-primary hover:after:right-0"
							href={resolve(link.href as Pathname)}>{link.label}</a
						>
					</li>
				{/each}
			</ul>
			<LocaleButtonGroup />
			<ThemeToggle />
			<div class="md:hidden">
				<MobileMenu />
			</div>
		</nav>
	</div>
</header>
