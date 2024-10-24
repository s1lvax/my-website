<script lang="ts">
	import recentProjects from '$lib/data/projects.json';
	import { truncateDescription } from '$lib/utils/truncateDescription';

	// Get the last 3 projects
	let lastThreeProjects = recentProjects.slice(-3).reverse();
</script>

<!-- Timeline -->
<div class="mb-10 mt-10 pb-10">
	<h1 class="mb-10 block text-3xl font-bold text-white sm:text-4xl lg:text-4xl lg:leading-tight">
		My Recent Projects
	</h1>

	{#each lastThreeProjects as project}
		<!-- Item -->
		<div class="group relative flex gap-x-5">
			<!-- Icon -->
			<div
				class="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700"
			>
				<a
					href="/project/{project.slug}"
					class="relative z-10 flex size-6 items-center justify-center transition-transform duration-300 hover:scale-110"
				>
					<i
						class="fa-solid fa-folder-open text-white transition-colors duration-300 hover:text-[#FCC237]"
					></i>
				</a>
			</div>
			<!-- End Icon -->

			<!-- Right Content -->
			<div class="grow pb-8 group-last:pb-0">
				<h3 class="mb-1 text-xs text-neutral-400">{project.date}</h3>

				<a
					href="/project/{project.slug}"
					class="text-sm font-semibold text-[#FCC237] transition-colors duration-300 hover:text-gray-800 dark:hover:text-white"
				>
					{project.title}
				</a>

				<p class="mt-1 text-sm text-neutral-400">
					{@html truncateDescription(project.description)}
				</p>
			</div>
			<!-- End Right Content -->
		</div>
		<!-- End Item -->
	{/each}
</div>
<!-- End Timeline -->
