<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import Theme from './theme-dropdown.svelte';
	import { Button, buttonVariants } from './ui/button';
	import * as ButtonGroup from './ui/button-group';

	const links = [
		{
			label: m['header.links.about'](),
			href: resolve('/#about')
		},
		{
			label: m['header.links.stack'](),
			href: resolve('/#stack')
		},
		{
			label: m['header.links.career'](),
			href: resolve('/#career')
		},
		{
			label: m['header.links.projects'](),
			href: resolve('/#projects')
		},
		{
			label: m['header.links.contact'](),
			href: resolve('/#contact')
		}
	];

	const locale = $derived(getLocale());
</script>

<header class="mx-auto flex max-w-7xl items-center justify-between p-4">
	<a href="#inicio" class="font-heading text-lg font-medium"
		>kaian<span class="text-primary">.dev</span></a
	>
	<nav class="flex items-center gap-2">
		{#each links as link (link.href)}
			<a class={buttonVariants({ variant: 'link' })} href={link.href}>{link.label}</a>
		{/each}
		<ButtonGroup.Root aria-label={m['header.language.aria-label']()}>
			<Button
				variant={locale === 'pt' ? 'default' : 'ghost'}
				size="sm"
				onclick={() => setLocale('pt')}
				>PT
				<span class="sr-only">{m['header.language.pt']()}</span>
			</Button>
			<Button
				variant={locale === 'en' ? 'default' : 'ghost'}
				size="sm"
				onclick={() => setLocale('en')}
				>EN
				<span class="sr-only">{m['header.language.en']()}</span>
			</Button>
		</ButtonGroup.Root>
		<Theme />
	</nav>
</header>
