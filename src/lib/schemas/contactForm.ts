import { z } from 'zod';

export const contactSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	email: z.string().email(),
	details: z.string().min(10).max(500)
});

export type ContactSchema = typeof contactSchema;
