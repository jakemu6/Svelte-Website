<script>
	import Multicol from '../lib/components/Multicol.svelte';
	import Carousel from '../lib/components/Carousel.svelte';
	const images = [
    {
		path: '../home/HTMAZ.jpg',
		alt: 'How to Move a Zoo',
		id: '01-image',
		link: '/how-to-move-a-zoo/'
    },
	{
		path: '../home/DifferentWorlds.png',
		alt: 'Different Worlds',
		id: '02-image',
		link: '/different-worlds/'
    },
	{
		path: '../home/layeredHorizons.jpg',
		alt: 'Layered Horizons',
		id: '03-image',
		link: '/layered-horizons/'
    }
  ];
</script>

<svelte:head>
	<title>Jake Mu | Experience Designer & Creative Technologist</title>
	<meta name="Jake Mu Portfolio" content="Experience Design, Graphic Design, Creative Code, Data Visualisation, UI/UX, Front End Development, Artist" />
</svelte:head>

<Multicol>
	<div slot="contOne">
		<Carousel {images}/>
	</div>	
	<div slot="contTwo">
		<h2>
		  	Jake Mu is an experience designer & creative technologist. A navigator through design and development, he brings an eclectic mix of skills to realise ideas from beginning to end. 
		  	<br /><br /> 
		  	Most recently, Jake has been crafting immersive and digital projects at Grumpy Sailor. Previously, he has been across the scope of design and development picking up experiences that have taken him from developing VR projects to designing for the media publication, Hypebeast in New York City. 
		  	<br /><br />
		  	Currently, Jake is a freelance designer and creative technologist aspiring to create beautiful and meaningful experiences.   
				<br /><br />
				Experience Design  || Graphic Design  ||  Creative Code  ||  Data Visualisation  ||  UI/UX  ||  Front End Development  ||  Artist
				<br /><br />

				<a href="jake-mu_resume.pdf" class="links">Resume</a>

				<br /><br />

				<div class='flexContainer'>
					<div class='flex'>
						<a href="mailto:jakemu6@gmail.com">
							Email
						</a>
						<br /><br />
						<a href="https://github.com/jakemu6">
							GitHub
						</a>
					</div>
					<div class='flex'>
						<a href="https://www.instagram.com/jakes_makery/">
							Instagram
						</a>
						<br /><br />
						<a href="https://www.linkedin.com/in/jakemu6/">
							LinkedIn
						</a>
					</div>
				</div>
		</h2>
	</div>
</Multicol>

<style>
.flexContainer {
	display: flex;
	flex-wrap: wrap;
	margin: auto;
}
.flex {
	flex: 50%;
}
</style>
