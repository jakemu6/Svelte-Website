<script>
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
	import Carousel from "../lib/components/Carousel.svelte";

	const images = [
	{
	path: '././static/home/HTMAZ.jpg',
	alt: 'How to Move a Zoo',
	id: 'image-01'
	}
	];

</script>

<div class="app">
	<Header />

	<main>
		<slot/>
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>
	.app {
		/* display: flex;
		flex-direction: column; */
		min-height: 100vh;
	}

	main {
		/* flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box; */
		max-width: 1920px;
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
