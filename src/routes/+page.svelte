<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<main class="flex h-screen flex-col bg-black">
	<Navbar />
	<Hero />
	<div class="flex justify-center">
		<Timeline />
	</div>
</main>
