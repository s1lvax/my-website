<script lang="ts">
	import socials from '$lib/data/socials.json';
</script>

<!-- Socials -->
<div
	class="mb-4 mt-7 grid grid-cols-3 justify-center gap-3 sm:inline-flex sm:grid-cols-none sm:justify-start"
>
	{#each socials as social}
		<a
			class="inline-flex transform items-center justify-center rounded-full border-2 border-[#FCC237] bg-black p-2 transition-transform hover:scale-110 focus:outline-none active:scale-95"
			href={social.url}
			aria-label={social.name}
		>
			<i class={social.logo + ' text-white'}></i>
		</a>
	{/each}
</div>
<!-- End Socials -->
