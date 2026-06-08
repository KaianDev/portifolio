<script lang="ts">
	interface Props {
		number: string;
		label: string;
	}
	let { number, label }: Props = $props();
</script>

<div class="font-mono text-sm font-medium text-primary">
	<span class="text-muted-foreground">{number}</span>
	{label}
</div>
