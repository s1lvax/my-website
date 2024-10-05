<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactIcons from '$lib/components/ContactIcons.svelte';

	export let data;
</script>

<main class="mx-auto flex h-screen max-w-[85rem] flex-col px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-xl">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-white sm:text-4xl">Contact me</h1>
			<p class="mt-1 text-white">I'd love to talk about how I can help you.</p>
		</div>
	</div>

	<ContactForm data={data.form} />
	<ContactIcons />
</main>
