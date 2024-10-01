<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import RecentProjects from '$lib/components/RecentProjects.svelte';
</script>

<main class="mx-auto flex h-screen max-w-[85rem] flex-col px-4 sm:px-6 lg:px-8">
	<Navbar />
	<Hero />
	<RecentProjects />
</main>
