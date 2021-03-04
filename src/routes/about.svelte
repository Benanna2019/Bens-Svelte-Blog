<script>
	import { fadeIn, fadeOut } from "../animate";
</script>

<style>
	.about-container {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-top: 1rem;
		height: 100vh;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="about-container" in:fadeIn out:fadeOut>
	<h1>About Me</h1>

	<p>
		My name is Ben Patton. I recently made the change into tech as a
		software devleoper. I could ramble on and on about this site and the
		things I love to talk about and write about.
	</p>
	<p>
		I am married to my wonderful wife, Anna. We have been married nearly 2
		years. I love that I get to build sites and brag about her without her
		knowing. She will see this someday but it will be too late then. I win
		😂
	</p>
	<p>
		The transition into tech has taught me that I am very entrepeneurial.
		The only reason that I say that is that I love tech and I want to build
		things and my mind is constantly buzzing with new ideas for tech, or
		services that utilize tech to help others.
	</p>
	<p>
		My story or transition into tech is a story that can be possible for
		anyone who wants to change careers. My background in before tech was in
		ministry so I have a particular place in my heart for those who have
		been working in ministry and are potentially looking to transition out
		of ministry and into another career field.
	</p>
</div>
