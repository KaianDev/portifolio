<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { Button } from './ui/button';
	import * as ButtonGroup from './ui/button-group';

	const locale = $derived(getLocale());
</script>

<ButtonGroup.Root aria-label={m['header.language.aria-label']()}>
	<Button variant={locale === 'pt' ? 'default' : 'ghost'} size="sm" onclick={() => setLocale('pt')}
		>PT
		<span class="sr-only">{m['header.language.pt']()}</span>
	</Button>
	<Button variant={locale === 'en' ? 'default' : 'ghost'} size="sm" onclick={() => setLocale('en')}
		>EN
		<span class="sr-only">{m['header.language.en']()}</span>
	</Button>
</ButtonGroup.Root>
