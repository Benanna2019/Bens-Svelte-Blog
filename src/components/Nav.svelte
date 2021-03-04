<script>
	export let segment;
</script>

<style>
	nav {
		/* border-bottom: 1px solid rgba(255, 62, 0, 0.1); */
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-weight: 300;
		padding: 0.5em 0em;
		width: 100%;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		justify-self: end;
		font-size: 1.25rem;
	}

	/* clearfix */
	ul::after {
		content: "";
		display: block;
		clear: both;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(90% - 1em);
		height: 2px;
		display: block;
		bottom: -1px;
	}

	a,
	li {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1em;
		background: none;
		border: 0;
		cursor: pointer;
	}
	@media (max-width: 700px) {
		a,
		li {
			font-size: 10px;
			padding: 0 10px;
		}
	}
	a::before,
	li::before {
		content: "";
		width: 2px;
		background: linear-gradient(#e76e6e, #a020f5);
		height: 100%;
		left: 0;
		position: absolute;
		transform: skew(-20deg);
		top: 0;
		bottom: 0;
	}
	a::after,
	li::after {
		height: 2px;
		content: "";
		width: 0;
		position: absolute;
		transform: translateX(-50%);
		transition: width 0.4s;
		transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
		left: 50%;
		margin-top: 2rem;
	}
	a:hover,
	li:hover,
	a:focus,
	li:focus {
		outline: none;
		text-decoration: none;
	}
	a:after,
	li:after {
		width: calc(100% - 60px);
	}
	@media (max-width: 700px) {
		a,
		li {
			width: calc(100% - 10px);
		}
	}
	@media (max-width: 1300px) {
		ul {
			border-top: 1px solid #e1e1e1;
			width: 90%;
			justify-content: center;
			font-size: 1.5rem;
		}
	}
</style>

<nav>
	<ul>
		<li>
			<a
				aria-current={segment === undefined ? 'page' : undefined}
				href=".">home</a>
		</li>
		<li>
			<a
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about">about</a>
		</li>
		<li>
			<a
				aria-current={segment === 'contact' ? 'page' : undefined}
				href="contact">contact</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">blog</a>
		</li>
	</ul>
</nav>
