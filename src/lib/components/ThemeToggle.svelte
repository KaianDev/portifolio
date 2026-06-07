<script lang="ts">
  import { MoonIcon, SunIcon } from "phosphor-svelte";
  import { m } from "$lib/paraglide/messages";
  import { toggleMode } from "mode-watcher";
  import Button from "./ui/button/button.svelte";
 </script>
  
 <Button onclick={toggleMode} variant="outline" size="icon">
  <MoonIcon
    aria-label={m["header.theme.light"]()}
    class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90"
  />
  <SunIcon
    aria-label={m["header.theme.dark"]()}
    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0"
  />
  <span class="sr-only">{m["header.theme.toggle"]()}</span>
</Button>

