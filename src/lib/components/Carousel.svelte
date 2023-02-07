<script lang="ts">
    export let images: any;
</script>

<div class="carousel">
    {#each images as image (image.id)}
    {#if image.link}
        <a href={image.link}>
            <img
            src={image.path}
            alt={image.alt}
            id={image.id}
            />
        </a>
    {:else}
        <img
        src={image.path}
        alt={image.alt}
        id={image.id}
        />
    {/if}


    {/each}
</div>

<style>
	.carousel {
        max-width: fit-content;
	}
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>