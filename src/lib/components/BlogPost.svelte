<script lang="ts">
	export let title: string;
	export let content: string;
	export let date: string;
	export let image1: string;
	export let imageLabel1: string;
	export let authorName: string = 'Cesario Silva'; // Default author name
	export let authorAvatar: string = '/developer.webp'; // Default author avatar

	// Calculate reading time (200 words per minute)
	const wordsPerMinute = 200;
	let readTime = Math.ceil(content.split(' ').length / wordsPerMinute);
</script>

<div class="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
	<div class="max-w-2xl">
		<div class="mb-6 flex items-center justify-between">
			<div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
				<div class="shrink-0">
					<img class="size-12 rounded-full" src={authorAvatar} alt="Avatar" />
				</div>
				<div class="grow">
					<div class="flex items-center justify-between gap-x-2">
						<div>
							<span class="font-semibold text-neutral-200">
								{authorName}
							</span>
							<ul class="text-xs text-neutral-500">
								<li
									class="relative inline-block pe-6 text-neutral-400 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:before:bg-neutral-600"
								>
									{date}
								</li>
								<li
									class="relative inline-block pe-6 text-neutral-400 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:before:bg-neutral-600"
								>
									{readTime} min read
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-5 md:space-y-8">
			<div class="space-y-3">
				<h2 class="text-2xl font-bold text-white md:text-3xl">{title}</h2>
				<p class="text-lg text-neutral-200">
					{@html content}
				</p>
			</div>

			<figure>
				<img class="w-full rounded-xl object-cover" src={image1} alt={imageLabel1} />
				<figcaption class="mt-3 text-center text-sm text-neutral-500">
					{imageLabel1}
				</figcaption>
			</figure>
		</div>
	</div>
</div>
