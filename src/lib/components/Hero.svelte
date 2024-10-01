<script>
	import Introduction from './Introduction.svelte';
	import IntroductionImage from './IntroductionImage.svelte';
	import Socials from './Socials.svelte';
</script>

<div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
	<div>
		<Socials />
		<Introduction />
	</div>

	<div class="relative ms-4 bg-black">
		<IntroductionImage />
	</div>
</div>
