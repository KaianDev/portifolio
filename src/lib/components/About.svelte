<script>
	import { EXTERNAL_LINKS } from '$lib/constants/links';
	import { m } from '$lib/paraglide/messages';
</script>

<section id="about" class="mx-auto max-w-4xl space-y-3.5 border-t border-border py-17">
	<div class="font-mono text-sm font-medium text-primary">
		<span class="text-muted-foreground">01</span>
		{m['about.label']()}
	</div>
	<div class="space-y-2.5">
		<h2 class="font-heading text-3xl font-bold">{m['about.title']()}</h2>
		<p class="text-foreground/80">
			{m['about.description']()}
			<a
				href={EXTERNAL_LINKS.spawnd}
				target="_blank"
				class="underline transition-colors duration-300 hover:text-primary"
				rel="noopener noreferrer">spawnd</a
			>
		</p>
	</div>
</section>
