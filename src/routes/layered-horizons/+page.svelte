<script>
	import Multicol from '../../lib/components/Multicol.svelte';
	import Carousel from '../../lib/components/Carousel.svelte';
	const images = [
    {
		path: '../layeredHorizons/layeredHorizons-1.png',
		alt: 'How To Move a Zoo',
		id: '01-image',
    },
	{
		path: '../layeredHorizons/layeredHorizons-2.png',
		alt: 'How To Move a Zoo',
		id: '02-image',
    },
	{
		path: '../layeredHorizons/layeredHorizons-3.png',
		alt: 'How To Move a Zoo',
		id: '03-image',
    },
	{
		path: '../layeredHorizons/layeredHorizons-4.png',
		alt: 'How To Move a Zoo',
		id: '04-image',
    },
	{
		path: '../layeredHorizons/layeredHorizons-5.png',
		alt: 'How To Move a Zoo',
		id: '05-image',
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
			<i>Layered Horizons</i>
			<br /><br />
			{'Layered Horizons is an ongoing research project conducted at the University of Technology Sydney in partnership with Western Sydney University as part of a 4 year research project conducted by Andrew Burrell and Rachel Hendry.'}
			<br /><br />
			{'Using Unity, we created a VR environment in which researchers could input location-based datasets such as spoken languages or the introduction of yams, which would then appear in VR as geographical layers. The project forced us to think about different interpretations of data in different contexts to provide a tool that was accessible and intuitive when exploring immersive research and what these new perspectives might create.'}
			<br /><br />
			<b>role:</b><br />
			<i>{'– Concepting'}</i><br />
			<i>{'– Design'}</i><br />
			<i>{'– Development'}</i><br />
			<br />
			<b>tech & skills:</b><br />
			<i>{'– Unity VR development'}</i><br />
			<i>{'– Designing for 3D virtual environments'}</i><br />
			<i>{'– Data Visualisation'}</i><br />
		  </h2>
	</div>
</Multicol>
