<script lang="ts">
	import projects from '$lib/data/projects.json';
	import PortfolioItem from '$lib/components/PortfolioItem.svelte';
</script>

<div class="flex justify-center">
	<div class="mb-10 mt-10 w-full max-w-4xl pb-10">
		<h1
			class="mb-10 block text-center text-3xl font-bold text-white sm:text-4xl lg:text-4xl lg:leading-tight"
		>
			My Portfolio
		</h1>

		{#each projects as project}
			<PortfolioItem {project} />
		{/each}
	</div>
</div>
