<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import RecentProjects from '$lib/components/RecentProjects.svelte';
</script>

<main class="flex h-screen flex-col">
	<Navbar />
	<Hero />
	<div class="mx-5 mt-10 flex justify-center">
		<RecentProjects />
	</div>
</main>
