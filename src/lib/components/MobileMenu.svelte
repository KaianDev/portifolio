<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { NAV_LINKS } from '$lib/constants/links';
	import { ListIcon } from 'phosphor-svelte';
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>
		<ListIcon />
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header></Sheet.Header>

		<ul class="flex flex-col gap-2 px-2">
			{#each NAV_LINKS as link (link.href)}
				<li>
					<a
						class={buttonVariants({
							variant: 'link',
							size: 'lg',
							className: 'w-full justify-start'
						})}
						href={resolve(link.href as Pathname)}>{link.label}</a
					>
				</li>
			{/each}
		</ul>

		<Sheet.Footer></Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
