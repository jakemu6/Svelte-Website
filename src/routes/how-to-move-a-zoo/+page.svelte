<script>
	import Multicol from '../../lib/components/Multicol.svelte';
	import Carousel from '../../lib/components/Carousel.svelte';
	const images = [
    {
		path: '../HTMAZ/HTMAZ-JH1.jpg',
		alt: 'How To Move a Zoo',
		id: '01-image',
    },
	{
		path: '../HTMAZ/HTMAZ-JH2.jpg',
		alt: 'How To Move a Zoo',
		id: '02-image',
    },
	{
		path: '../HTMAZ/HTMAZ-JH3.jpg',
		alt: 'How To Move a Zoo',
		id: '03-image',
    },
	{
		path: '../HTMAZ/HTMAZ-JM1.jpg',
		alt: 'How To Move a Zoo',
		id: '04-image',
    },
	{
		path: '../HTMAZ/HTMAZ-JM2.jpg',
		alt: 'How To Move a Zoo',
		id: '05-image',
    },
	{
		path: '../HTMAZ/HTMAZ-JM3.jpg',
		alt: 'How To Move a Zoo',
		id: '06-image',
    }
  ];
</script>

<svelte:head>
	<title>How to Move a Zoo</title>
	<meta name="How to Move a Zoo Case Study" content="interactive exhibit in Museum of Sydney" />
</svelte:head>

<Multicol>
	<div slot="contOne">
		<Carousel {images}/>
	</div>
	
	
	<div slot="contTwo">
		<h2>
            <i>How to Move a Zoo</i>
            <br /><br />
            {'How to Move the Zoo takes visitors on a century old story as the animals of Moore Park Zoo marched, flew and hopped to their new home at Taronga Zoo. Visitors are invited to create their own animal and follow them across the living mural as they make their way through the streets of Sydney.'}
            <br /><br />
            <b>client:</b><br />
            {'Sydney Living Museums | Museum of Sydney'}
            <br /><br />
            <b>role:</b><br />
            {'Experience Designer @ Grumpy Sailor'}
            <br />
            <i>{'– Design Lead'}</i><br />
            <i>{'– Concepting'}</i><br />
            <i>{'– Art Direction'}</i><br />
            <br />
            <b>collaborators:</b><br />
            {'Illustration by Ollie Davis'}
            <br /><br />
            <b>photographs:</b><br />
            {'1-3: James Horan'}<br />
            {'4-6: Jake Mu'}
          </h2>
	</div>
</Multicol>
