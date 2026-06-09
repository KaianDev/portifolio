<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { m } from '$lib/paraglide/messages';
	import { GithubLogoIcon, GlobeIcon } from 'phosphor-svelte';
	import SectionLabel from './SectionLabel.svelte';
	import { Badge } from './ui/badge';
	import { Button } from './ui/button';
</script>

<section id="projects" class="mx-auto max-w-4xl space-y-3.5 border-t border-border px-4 py-17">
	<SectionLabel number="04" label={m['projects.label']()} />
	<div class="space-y-2.5">
		<h2 class="text-2xl font-bold">{m['projects.title']()}</h2>
		<ul class="space-y-4">
			{#each projects as project (project.id)}
				<li
					class="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors duration-300 hover:border-primary"
				>
					<header class="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
						<h3
							class="font-mono text-lg font-medium transition-colors duration-300 group-hover:text-primary"
						>
							{project.title}
						</h3>
						<nav class="flex gap-2">
							{#if project.link.github}
								<Button variant="outline" size="sm" href={project.link.github} target="_blank" rel="noopener noreferrer">
									<GithubLogoIcon />
									{m['projects.github']()}
								</Button>
							{/if}
							{#if project.link.website}
								<Button variant="outline" size="sm" href={project.link.website} target="_blank" rel="noopener noreferrer">
									<GlobeIcon />
									{m['projects.website']()}
								</Button>
							{/if}
						</nav>
					</header>
					<p class="text-sm text-muted-foreground">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.stack as stack (stack)}
							<Badge variant="outline">{stack}</Badge>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
