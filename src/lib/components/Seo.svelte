<script lang="ts">
	import { absoluteUrl, OG_IMAGE, SITE_NAME } from '$lib/constants/site';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';

	type OgImage = {
		path: string;
		width: number;
		height: number;
		type: string;
	};

	type Props = {
		title?: string;
		description?: string;
		imageAlt?: string;
		path?: string;
		image?: OgImage;
		type?: 'website' | 'article';
	};

	let {
		title,
		description,
		imageAlt,
		path = '/',
		image = OG_IMAGE,
		type = 'website'
	}: Props = $props();

	const locale = $derived(getLocale());
	const resolvedTitle = $derived(title ?? m['meta.title']());
	const resolvedDescription = $derived(description ?? m['meta.description']());
	const resolvedImageAlt = $derived(imageAlt ?? m['meta.ogImageAlt']());
	const canonicalPath = $derived(localizeHref(path, { locale }));
	const canonicalUrl = $derived(absoluteUrl(canonicalPath));
	const ogImageUrl = $derived(absoluteUrl(image.path));
	const ogLocale = $derived(locale === 'pt' ? 'pt_BR' : 'en_US');
	const ogLocaleAlternate = $derived(locale === 'pt' ? 'en_US' : 'pt_BR');
</script>

<svelte:head>
	<title>{resolvedTitle}</title>
	<meta name="description" content={resolvedDescription} />
	<link rel="canonical" href={canonicalUrl} />

	{#each locales as altLocale (altLocale)}
		<link
			rel="alternate"
			hreflang={altLocale}
			href={absoluteUrl(localizeHref(path, { locale: altLocale }))}
		/>
	{/each}
	<link rel="alternate" hreflang="x-default" href={absoluteUrl(path)} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={resolvedTitle} />
	<meta property="og:description" content={resolvedDescription} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:secure_url" content={ogImageUrl} />
	<meta property="og:image:type" content={image.type} />
	<meta property="og:image:width" content={String(image.width)} />
	<meta property="og:image:height" content={String(image.height)} />
	<meta property="og:image:alt" content={resolvedImageAlt} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:locale:alternate" content={ogLocaleAlternate} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={resolvedTitle} />
	<meta name="twitter:description" content={resolvedDescription} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content={resolvedImageAlt} />
</svelte:head>
