<script>
	import Counter from '../lib/components/Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import Multicol from '../lib/components/Multicol.svelte';
	import Carousel from '../lib/components/Carousel.svelte';
	const images = [
    {
    path: '../static/home/HTMAZ.jpg',
    alt: 'How to Move a Zoo',
    id: 'image-01',
	link: '/about/'
    }
  ];

</script>

<svelte:head>
	<title>Jake</title>
	<meta name="description" content="Jake Mu Portfolio" />
</svelte:head>

<Multicol>
	<div slot="contOne">
		<Carousel {images}/>

		{#each Array(100) as _, i}
		<div class="item">Row {i}</div>
		{/each}


		<div class="item__gallery">
		</div>
	</div>
	
	
	<div slot="contTwo">
		<h2>
		  Jake Mu is an experience designer & creative technologist. A navigator through design and development, he brings an eclectic mix of skills to realise ideas from beginning to end. 
		  <br /><br />
		  Most recently, Jake has been crafting immersive and digital projects at Grumpy Sailor. Previously, he has been across the scope of design and development picking up experiences that have taken him from developing VR projects to designing for the media publication, Hypebeast in New York City. 
		  <br /><br />
		  Currently, Jake is a freelance designer and creative technologist aspiring to create beautiful and meaningful experiences.   
		</h2>
	</div>
</Multicol>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section> -->

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}



	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
