<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { project } = data;

	if (!project) {
		throw new Error('Project not found');
	}
</script>

<!-- Render the project details using BlogPost component -->
<BlogPost
	title={project.title}
	content={project.description}
	date={project.date}
	image1={project.image}
	imageLabel1={project.title}
/>
