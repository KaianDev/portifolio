<script lang="ts">
	import { STACK } from '$lib/constants/stack';
	import { m } from '$lib/paraglide/messages';
	import SectionLabel from './SectionLabel.svelte';
</script>

<section id="stack" class="mx-auto max-w-4xl space-y-3.5 border-t border-border px-4 py-17">
	<SectionLabel number="02" label={m['stack.label']()} />
	<div class="space-y-2.5">
		<h2 class="font-heading text-3xl font-bold">{m['stack.title']()}</h2>
		<div class="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
			{#each STACK as stack (stack.name)}
				<div
					class="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border p-4 text-center transition-colors duration-300 hover:border-primary"
				>
					<stack.icon
						width={40}
						height={40}
						class="fill-muted-foreground/80 transition-colors duration-300 group-hover:fill-primary"
					/>
					<span class="text-sm font-medium">{stack.name}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
