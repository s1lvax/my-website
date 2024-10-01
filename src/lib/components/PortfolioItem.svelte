<script lang="ts">
	import type { project } from '$lib/types/project';

	export let project: project;

	import { truncateDescription } from '$lib/utils/truncateDescription';
</script>

<div class="group relative flex gap-x-5">
	<!-- Icon -->
	<div
		class="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700"
	>
		<a
			href={project.slug}
			class="relative z-10 flex size-6 items-center justify-center transition-transform duration-300 hover:scale-110"
		>
			<i
				class="fa-solid fa-folder-open text-white transition-colors duration-300 hover:text-[#FCC237]"
			></i>
		</a>
	</div>

	<!-- Right Content -->
	<div class="grow pb-8 group-last:pb-0">
		<h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">{project.date}</h3>

		<p class="text-sm font-semibold text-[#FCC237]">
			{project.title}
		</p>

		<div class="mt-3">
			<!-- Card -->
			<a
				class="block rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-105 hover:border-[#FCC237] hover:shadow-sm focus:outline-none dark:border-neutral-700"
				href="/project/{project.slug}"
			>
				<div class="relative flex items-center overflow-hidden">
					<img
						class="absolute inset-0 h-full w-32 rounded-s-lg object-cover sm:w-48"
						src={project.image}
						alt={project.title}
					/>

					<div class="ms-32 grow p-4 sm:ms-48">
						<div class="flex min-h-24 flex-col justify-center">
							<h3 class="text-sm font-semibold text-gray-800 dark:text-neutral-300">
								{project.title}
							</h3>
							<p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
								{truncateDescription(project.description)}
							</p>
						</div>
					</div>
				</div>
			</a>
			<!-- End Card -->
		</div>
	</div>
	<!-- End Right Content -->
</div>
