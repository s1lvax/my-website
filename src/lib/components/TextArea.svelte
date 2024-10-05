<script lang="ts">
	import type { InputConstraint } from 'sveltekit-superforms';

	export let value: string;
	export let name: string;
	export let label: string | undefined = undefined;
	export let errors: string[] | undefined = undefined;
	export let constraints: InputConstraint | undefined = undefined;
</script>

<label>
	{#if label}
		<label for="hs-firstname-contacts-1" class="mb-2 block text-sm font-medium text-white"
			>{label}</label
		><br />{/if}
	<textarea
		bind:value
		aria-invalid={errors ? 'true' : undefined}
		{name}
		rows="4"
		class="block w-full rounded-lg border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
		{...constraints}
		{...$$restProps}
	/>
</label>
{#if errors}<span class="text-red-500">{errors}</span>{/if}
