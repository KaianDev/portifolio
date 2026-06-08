<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		number?: number;
	}

	type MeteorStyle = {
		top: string;
		left: string;
		animationDelay: string;
		animationDuration: string;
	};

	let { number = 10 }: Props = $props();

	const meteorStyles = $derived<MeteorStyle[]>(
		[...new Array(number)].map(() => ({
			top: Math.random() * 100 + '%',
			left: Math.random() * 100 + '%',
			animationDelay: Math.random() * 1 + 0.2 + 's',
			animationDuration: Math.floor(Math.random() * 8 + 2.9) + 's'
		}))
	);
</script>

<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
	{#each meteorStyles as style, idx (idx)}
		<span
			id="meteor-{idx + 1}"
			class={cn(
				'pointer-events-none absolute size-[2.4px] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]'
			)}
			style="top: {style.top}; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration};"
		>
			<div
				class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-linear-to-r from-primary via-blue-600/30 to-transparent"
			></div>
		</span>
	{/each}
</div>
