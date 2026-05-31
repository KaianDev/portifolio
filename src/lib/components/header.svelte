<script lang="ts">
	import { resolve } from '$app/paths';
	import ThemeToggle from './theme-toggle.svelte';
	import { buttonVariants } from './ui/button';

	import type { Pathname } from '$app/types';
	import { NAV_LINKS } from '$lib/constants/links';
	import LocaleButtonGroup from './locale-button-group.svelte';
	import MobileMenu from './mobile-menu.svelte';

</script>

<header class="border-b p-4">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<a href="#start" class="font-heading text-lg font-medium"
		>kaian<span class="text-primary">.dev</span></a
	>
	<nav class="flex items-center gap-4">
		<ul class="hidden items-center gap-2 md:flex">
			{#each NAV_LINKS as link (link.href)}
				<li>
					<a class={buttonVariants({ variant: 'link' })} href={resolve(link.href as Pathname)}>{link.label}</a>
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
