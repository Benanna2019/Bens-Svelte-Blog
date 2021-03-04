<script context="module">
	import { parseISO, format } from "date-fns";

	export async function preload() {
		const res = await this.fetch(`blog.json`);
		const posts = await res.json();
		return { posts };
	}

	function date(dateString) {
		const formatDate = parseISO(dateString);
		return format(formatDate, "LLLL d, yyyy");
	}
</script>

<script>
	export let posts;
</script>

<style>
	.index-blog-page {
		height: 100vh;
	}

	.posts-list {
		height: 60vh;
		width: 50vw;
		overflow: scroll;
		font-size: 1.5rem;
		border: 0.2em solid #1f364d;
	}

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="index-blog-page">
	<h1>Posts</h1>

	<div class="posts-list">
		<ul>
			{#each posts as post}
				<li>
					<a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
					<h5>{date(post.date)}</h5>
				</li>
			{/each}
		</ul>
	</div>
</div>
