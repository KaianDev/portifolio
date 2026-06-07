<script lang="ts">
	import { resolve } from '$app/paths';
	import ThemeToggle from './ThemeToggle.svelte';

	import type { Pathname } from '$app/types';
	import { NAV_LINKS } from '$lib/constants/links';
	import LocaleButtonGroup from './LocaleButtonGroup.svelte';
	import MobileMenu from './MobileMenu.svelte';
</script>

<header class="p-4">
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
