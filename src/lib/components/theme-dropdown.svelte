<script lang="ts">
  import { SunIcon } from "phosphor-svelte";
  import { MoonIcon } from "phosphor-svelte";
  
  import { resetMode, setMode } from "mode-watcher";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { m } from "$lib/paraglide/messages";
 </script>
  
 <DropdownMenu.Root>
  <DropdownMenu.Trigger
   class={buttonVariants({ variant: "outline", size: "icon" })}
  >
   <SunIcon
    class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
   />
   <MoonIcon
    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
   />
   <span class="sr-only">{m["header.theme.toggle"]()}</span>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
   <DropdownMenu.Item onclick={() => setMode("light")}>{m["header.theme.light"]()}</DropdownMenu.Item
   >
   <DropdownMenu.Item onclick={() => setMode("dark")}>{m["header.theme.dark"]()}</DropdownMenu.Item>
   <DropdownMenu.Item onclick={() => resetMode()}>{m["header.theme.system"]()}</DropdownMenu.Item>
  </DropdownMenu.Content>
 </DropdownMenu.Root>