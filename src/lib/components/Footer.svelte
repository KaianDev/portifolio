<script>
	import { GithubLogoIcon, LinkedinLogoIcon } from "phosphor-svelte";
	import { Button } from "./ui/button";
	import { SOCIAL_LINKS } from "$lib/constants/links";
	import { m } from "$lib/paraglide/messages";

</script>
<footer class="border-t border-border">
  <div class="mx-auto max-w-4xl h-17 px-4 flex items-center justify-between">
  <p class="text-sm text-muted-foreground">
    &copy; {m['footer.copyright']({ year: new Date().getFullYear() })}
  </p>
  <nav>
    <Button variant="outline" size="icon" href={SOCIAL_LINKS.github}>
      <GithubLogoIcon />
      <span class="sr-only">Github</span>
    </Button>
    <Button variant="outline" size="icon" href={SOCIAL_LINKS.linkedin}>
      <LinkedinLogoIcon />
      <span class="sr-only">LinkedIn</span>
    </Button>
  </nav>
    
  </div>
</footer>