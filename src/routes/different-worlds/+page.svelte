<script>
	import Multicol from '../../lib/components/Multicol.svelte';
	import Carousel from '../../lib/components/Carousel.svelte';
	const images = [
    {
		path: '../DifferentWorlds/DF_01.png',
		alt: 'Different Worlds',
		id: '01-image',
    },
	{
		path: '../DifferentWorlds/HDR1.jpeg',
		alt: 'Different Worlds',
		id: '02-image',
    },
	{
		path: '../DifferentWorlds/P1011354.jpeg',
		alt: 'Different Worlds',
		id: '03-image',
    },
	{
		path: '../DifferentWorlds/P1011370.jpeg',
		alt: 'Different Worlds',
		id: '04-image',
    },
	{
		path: '../DifferentWorlds/P1011375.jpeg',
		alt: 'Different Worlds',
		id: '05-image',
    },
	{
		path: '../DifferentWorlds/P1011379.jpeg',
		alt: 'Different Worlds',
		id: '06-image',
    },
	{
		path: '../DifferentWorlds/P1011393.jpeg',
		alt: 'Different Worlds',
		id: '07-image',
    },
	{
		path: '../DifferentWorlds/P1011398.jpeg',
		alt: 'Different Worlds',
		id: '08-image',
    }
  ];
</script>

<svelte:head>
	<title>Different Worlds</title>
	<meta name="Different Worlds Case Study" content="Different Worlds immersive art exhibit in Sydney" />
</svelte:head>

<Multicol>
	<div slot="contOne">
		<Carousel {images}/>
	</div>
	
	
	<div slot="contTwo">
		<h2>
            <i>Different Worlds</i>
            <br /><br />
            {'Different Worlds examines the exacerbating change between human and non-human relationships. As the world develops, alongside the digital age, how will design evolve through time? Different Worlds traverses a divergent mentality behind the technological design, looking towards nature as a catalyst for inspiration. The exhibit features various recreations of nature created through algorithms and simultaneous digital production.'}
            <br /><br />
            <b>Flowers</b><br />
            {'Different Worlds began from simply observing flowers. Like humans, flowers are impermanent. Each imperfection establishes their individual character comparable to humans. This piece recreates flowers and their characteristics to manufacture the emotive sensations released from the simple viewing of flowers.'}
            <br /><br />
            <b>Waves</b><br />
            {'Waves recreates the natural phenomena of the ocean. Rolling white peaks are recreated through depth sensors and projection to simulate the motion of water. A sheet is transformed by wind to recreate the mesmerising, unimpeded motion of waves.'}
            <br /><br />
            <b>role:</b><br />
            {'Design and development'}
            <br /><br />
            <b>tech:</b><br />
            {'OpenFrameworks'}
		</h2>
	</div>
</Multicol>
