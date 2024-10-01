import type { PageLoad } from './$types';
import projects from '$lib/data/projects.json';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;

	// Find the project by its slug
	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return {
			status: 404,
			error: new Error('Project not found')
		};
	}

	return {
		project // Ensure project is passed to the component
	};
};
