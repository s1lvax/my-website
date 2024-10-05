<script lang="ts">
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms';
	import type { ContactSchema } from '$lib/schemas/contactForm';
	import TextInput from './TextInput.svelte';
	import TextArea from './TextArea.svelte';

	export let data: SuperValidated<Infer<ContactSchema>>;

	const { form, errors, message, enhance, constraints } = superForm(data);
</script>

<form method="POST" use:enhance>
	<div class="mx-auto mt-12 max-w-lg">
		<!-- Card -->
		<div class="flex flex-col rounded-xl border border-neutral-700 p-4 sm:p-6 lg:p-8">
			<h2 class="mb-8 text-xl font-semibold text-white">Fill in the form</h2>

			<div class="grid gap-4 lg:gap-6">
				<!-- Grid -->
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
					<div>
						<TextInput
							name="firstName"
							label="First Name"
							bind:value={$form.firstName}
							errors={$errors.firstName}
							constraints={$constraints.firstName}
						/>
					</div>

					<div>
						<TextInput
							name="lastName"
							label="Last Name"
							bind:value={$form.lastName}
							errors={$errors.lastName}
							constraints={$constraints.lastName}
						/>
					</div>
				</div>
				<!-- End Grid -->

				<!-- Grid -->
				<!--<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">-->
				<div class="grid grid-cols-1 gap-4">
					<div>
						<TextInput
							name="email"
							label="Email"
							bind:value={$form.email}
							errors={$errors.email}
							constraints={$constraints.email}
						/>
					</div>

					<!-- Not needed right now, maybe later
                        <div>
                            <label for="hs-phone-number-1" class="mb-2 block text-sm font-medium text-white">Phone Number</label>
                            <input
                                type="text"
                                name="hs-phone-number-1"
                                id="hs-phone-number-1"
                                class="block w-full rounded-lg border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-blue-500 disabled:pointer-events-none disabled:opacity-50"
                            />
                        </div>
                        -->
				</div>
				<!-- End Grid -->

				<div>
					<TextArea
						name="details"
						label="Details"
						bind:value={$form.details}
						errors={$errors.details}
						constraints={$constraints.details}
					/>
				</div>
			</div>
			<!-- End Grid -->

			<div class="mt-6 grid">
				<button
					type="submit"
					class="inline-flex transform items-center justify-center gap-x-2 rounded-2xl border border-transparent bg-[#FCC237] px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-105 focus:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50"
					>Send inquiry</button
				>
			</div>

			<div class="mt-3 text-center">
				<p class="text-sm text-neutral-500">I'll get back to you in 1-2 business days.</p>
			</div>
			{#if $message}
				<div class="mt-6 text-center">
					<p class="text-lg font-bold text-red-500">{$message}</p>
				</div>
			{/if}
		</div>
		<!-- End Card -->
	</div>
</form>
