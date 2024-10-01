<script lang="ts">
	import Introduction from './Introduction.svelte';
	import IntroductionImage from './IntroductionImage.svelte';
	import Socials from './Socials.svelte';
</script>

<div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
	<div class="order-2 md:order-1">
		<Introduction />
		<Socials />
	</div>

	<div class="relative order-1 ms-4 bg-black md:order-2">
		<IntroductionImage />
	</div>
</div>
