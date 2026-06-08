<script lang="ts">
	import { CAREER_ENTRIES } from '$lib/constants/career';
	import { m } from '$lib/paraglide/messages';
	import SectionLabel from './SectionLabel.svelte';
</script>

<section id="career" class="mx-auto max-w-4xl space-y-3.5 border-t border-border px-4 py-17">
	<SectionLabel number="03" label={m['career.label']()} />
	<div class="space-y-2.5">
		<h2 class="font-heading text-3xl font-bold">{m['career.title']()}</h2>

		<div class="relative ml-3 space-y-12 border-l border-border pl-8">
			{#each CAREER_ENTRIES as entry (entry.id)}
				<div>
					<div class="relative flex flex-wrap items-center gap-2.5">
						<span
							class={[
								'absolute top-1/2 -left-[calc(2rem+5px)] size-2.5 -translate-y-1/2 rounded-full border-2',
								entry.current
									? 'border-primary bg-primary'
									: 'border-muted-foreground bg-background'
							]}
							aria-hidden="true"
						></span>
						<span class="font-mono text-sm text-primary">{entry.date}</span>
						{#if entry.current}
							<div class="relative inline-flex overflow-hidden rounded-full p-px">
								<span
									class="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,transparent_50%,var(--primary)_100%)] motion-reduce:animate-none"
									aria-hidden="true"
								></span>
								<span
									class="relative inline-flex items-center justify-center rounded-full bg-background px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-primary uppercase"
								>
									{m['career.badge_now']()}
								</span>
							</div>
						{/if}
					</div>

					<p class="font-heading text-base font-semibold">
						{entry.role} · {entry.company}
					</p>

					<p class="text-sm leading-relaxed text-muted-foreground">{entry.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
