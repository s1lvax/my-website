<script lang="ts">
	import { page } from '$app/stores';
	import projects from '$lib/data/projects.json';
	import BlogPost from '$lib/components/BlogPost.svelte';

	let project;

	// Subscribe to the current URL and extract the slug
	$: slug = $page.params.slug;

	alert(slug);

	// Ensure the project data exists before rendering
	$: {
		if (slug) {
			project = projects.find((p) => p.slug === slug);
		}
	}

	if (!project) {
		throw new Error('Project not found');
	}

	// Calculate reading time based on word count
	const wordsPerMinute = 200;
	const readTime = Math.ceil(project.content.split(' ').length / wordsPerMinute);
</script>

{#if project}
	<!-- Use the BlogPost component to render the project -->
	<BlogPost
		title={project.title}
		content={project.content}
		date={project.date}
		image1={project.image1}
		imageLabel1={project.imageLabel1}
		authorName="Cesario Silva"
	/>
{:else}
	<p>Loading...</p>
{/if}
