<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import {
		EnvelopeIcon,
		GithubLogoIcon,
		InstagramLogoIcon,
		LinkedinLogoIcon
	} from 'phosphor-svelte';
	import SectionLabel from './SectionLabel.svelte';
	import { SOCIAL_LINKS } from '$lib/constants/links';

	const contacts = [
		{
			label: 'LinkedIn',
			href: SOCIAL_LINKS.linkedin,
			icon: LinkedinLogoIcon
		},
		{
			label: 'GitHub',
			href: SOCIAL_LINKS.github,
			icon: GithubLogoIcon
		},
		{
			label: 'Instagram',
			href: SOCIAL_LINKS.instagram,
			icon: InstagramLogoIcon
		}
	];
</script>

<section id="contact" class="mx-auto max-w-4xl space-y-3.5 border-t border-border px-4 py-17">
	<SectionLabel number="05" label={m['contact.label']()} />
	<div class="space-y-10">
		<div class="space-y-2.5">
			<h2 class="text-2xl font-bold">{m['contact.title']()}</h2>
			<p class="max-w-xl text-lg text-muted-foreground">{m['contact.description']()}</p>
		</div>
		<div
			class="group flex w-fit items-center gap-2 border-b border-border pb-1 transition-colors duration-300 hover:border-primary"
		>
			<EnvelopeIcon class="size-6 text-primary" />
			<a href="mailto:jkaiandev@gmail.com" class="text-2xl font-semibold group-hover:text-primary"
				>jkaiandev@gmail.com</a
			>
		</div>
		<div class="grid grid-cols-3 gap-4">
			{#each contacts as contact (contact.href)}
				<a
					href={contact.href}
					target="_blank"
					rel="noopener noreferrer"
					class="group relative gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-[translate,border] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
				>
					<div class="flex flex-col gap-1">
						<strong class="text-lg font-semibold">{contact.label}</strong>
						<span class="text-sm text-muted-foreground">{contact.href}</span>
					</div>
					<div>
						<contact.icon
							class="absolute top-5 right-4 size-4 transition-transform duration-300 group-hover:scale-150 group-hover:rotate-12 group-hover:text-primary"
						/>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
