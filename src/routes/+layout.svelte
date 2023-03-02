<script>
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot/>
	</main>
</div>

<style>
	.app {
		min-height: 100vh;
	}

	main {
		max-width: 1920px;
	}
</style>
