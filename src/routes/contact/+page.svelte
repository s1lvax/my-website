<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactIcons from '$lib/components/ContactIcons.svelte';
	import SuperDebug from 'sveltekit-superforms';

	export let data;
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-xl">
		<div class="text-center">
			<h1 class="text-3xl font-bold text-white sm:text-4xl">Contact me</h1>
			<p class="mt-1 text-white">I'd love to talk about how I can help you.</p>
		</div>
	</div>

	<ContactForm data={data.form} />
	<ContactIcons />
</div>
