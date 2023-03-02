<script>
	import { fly } from 'svelte/transition';
	import {cubicInOut } from 'svelte/easing';

	let headerClass = "show";
	let y = 0;
	let lastY = 0;

	/**
	 * @param {number} y
	 * @param {number} dy
	 */

	function deriveClass(y, dy) {
		if (y < 20) {
			return "show";
		}
    if (dy > 10) {
      return "show";
    }
    return "hide";
  }

  /**
	 * @param {number} y
	 */
  function updateClass(y) {
    const dy = lastY - y;
    lastY = y;
    return deriveClass(y, dy);
  }
  $: headerClass = updateClass(y);
</script>

<svelte:window bind:scrollY={y} />

<header>
	{#if headerClass == "show"}
		<div class="header" transition:fly={{ y: 200, easing: cubicInOut }}>
			<h2> jake </h2>
		</div>
	{/if}
</header>

<style>
	header {
        position: fixed;
        z-index: 100;
        bottom: 2rem;
        left: 2rem;
        width: 100%;
				color: black;
			  /* background-color: white; */
				opacity: 0.9;
	}
</style>
