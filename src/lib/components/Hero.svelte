<script lang="ts">
  import KaianImage from '$lib/assets/kaian.jpg?url';
	import { SOCIAL_LINKS } from '$lib/constants/links';
	import { GithubLogoIcon, LinkedinLogoIcon } from 'phosphor-svelte';
	import { Button } from './ui/button';
	import { m } from '$lib/paraglide/messages';
</script>

<section id="start" class="max-w-4xl mx-auto py-17 space-y-6">
  <img src={KaianImage} alt="Kaian" class="size-24 rounded-2xl" />
	<div class="space-y-2.5">
    <div class="flex items-center gap-2 text-muted-foreground">
      <span class="size-2 animate-pulse rounded-full bg-primary"></span>
      {m['hero.location']()}
    </div>
    <h1 class="font-heading text-7xl font-bold">Kaian Vasconcelos</h1>
    <div class="text-xl font-mono font-semibold text-primary">{m['hero.developer']()}</div>
  </div>
  <p class="text-lg max-w-56">{m['hero.description']()}</p>
  <div class="flex items-center gap-4 mt-4">
    <Button href={SOCIAL_LINKS.github} target="_blank" size="lg">
      <GithubLogoIcon />
      Github
    </Button>
    <Button href={SOCIAL_LINKS.linkedin} target="_blank" variant="outline" size="lg">
      <LinkedinLogoIcon />
      Linkedin
    </Button>
  </div>
</section>
