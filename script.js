// const logo = document.querySelectorAll('#logo path');

// for (let index = 0; index < logo.length; index++) {
// 	const length = logo[index].getTotalLength();
//  console.log(`${index + 1} is ${length}`);
// }

const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeline.to('.slider', { y: '-100%', duration: 1.5, delay: 4.7 });

timeline.to('.intro', { y: '-100%', duration: 1 }, '-=1');

timeline.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo(
	'.big-text',
	{ opacity: 0 },
	{ opacity: 1, duration: 1 },
	'-=1'
);
