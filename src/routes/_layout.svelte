<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	header {
		position: sticky;
		position: -webkit-sticky;
		top: 0;
		background: #1f364d;
		margin-top: 0.5em;
		color: #34d1e6;
	}

	main {
		min-height: 80vh;
		background-color: #0e2439;
		box-sizing: border-box;
		color: white;
		font-size: 1.25rem;
		display: flex;
		justify-content: center;
	}
</style>

<header>
	<Nav {segment} />
</header>

<main>
	<slot />
</main>
