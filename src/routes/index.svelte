<script>
	import Study from "../../static/color-study.png";
	import { goto } from "@sapper/app";
	import { fadeIn, fadeOut } from "../animate";

	function doThing() {
		console.log("doing the thing");
		goto("/blog");
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 50%;
		height: 30rem;
		/* max-width: 400px;
		margin: 0 0 1em 0; */
	}

	figcaption {
		width: 40%;
		margin-top: 1em;
		text-align: center;
	}

	p {
		margin: 1em auto;
		width: 40%;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Ben Patton</title>
</svelte:head>

<div class="container" in:fadeIn out:fadeOut>
	<h1>Welcome!</h1>

	<figure>
		<img alt="The Study" src={Study} />
		<figcaption>
			I've always imagined having an old rustic study where I do my work
			while being surrounded by books shelves, like in Beauty and the
			Beast, while having a pipe lit for the awesome smell of piped
			tobacco.
		</figcaption>
	</figure>

	<p>
		I am happy you are here and my hope is that this site, where I muse
		about software, amongst other things, will be a restful/encouraging
		place for you.
	</p>
</div>
