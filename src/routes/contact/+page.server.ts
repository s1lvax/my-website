import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from '$lib/schemas/contactForm';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { sendEmail } from '$lib/utils/sendEmail.js';

export const load = async () => {
	const form = await superValidate(zod(contactSchema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// Extract the form data
		const { firstName, lastName, email, details } = form.data;

		//Send email
		try {
			await sendEmail({
				firstName,
				lastName,
				email,
				details
			});
		} catch (error) {
			console.log(error);
			return message(form, 'There was an error sending the email. Please try again later.');
		}

		// Display a success status message
		return message(form, 'Thanks ! I will contact you soon !');
	}
};
