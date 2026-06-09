<script lang="ts">
	import './layout.css';
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { OG_IMAGE } from '$lib/constants/site';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={OG_IMAGE.path} type={OG_IMAGE.type} />
	<link rel="apple-touch-icon" href={OG_IMAGE.path} />
</svelte:head>
<ModeWatcher />
{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
