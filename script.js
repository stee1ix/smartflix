// const logo = document.querySelectorAll('#logo path');

// for (let index = 0; index < logo.length; index++) {
// 	const length = logo[index].getTotalLength();
// 	console.log(`${index + 1} is ${length}`);
// }

// const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

// timeline.to('.slider', { y: '-100%', duration: 1.5, delay: 4.7 });

// timeline.to('.intro', { y: '-100%', duration: 1 }, '-=1');

// timeline.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
// timeline.fromTo(
// 	'.big-text-wrapper',
// 	{ opacity: 0 },
// 	{ opacity: 1, duration: 1 },
// 	'-=1'
// );

const desp1 = document.querySelector('#desp1');
const doraemon1 = document.querySelector('#doraemon1');
const interstellar1 = document.querySelector('#interstellar1');
const msec1 = document.querySelector('#msec1');
const ronaldo1 = document.querySelector('#ronaldo1');
const suits1 = document.querySelector('#suits1');
const ucl1 = document.querySelector('#ucl1');
const tot1 = document.querySelector('#tot1');
const mancity1 = document.querySelector('#mancity1');
const batman1 = document.querySelector('#batman1');

desp1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'desp';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="despClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/zzCZ1W_CUoI"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

doraemon1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'doraemon';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="doraemonClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/v9AR_ym9e-w"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

interstellar1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'interstellar';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="interstellarClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/zSWdZVtXT7E"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

msec1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'msec';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="msecClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/VJuGwXBnfVk"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

ronaldo1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'ronaldo';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="ronaldoClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/33gTb1v3wds"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

suits1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'suits';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="suitsClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/bPYnXiOVTvQ"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

ucl1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'ucl';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="uclClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/7zyq3_R1piY"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

tot1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'tot';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="totClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/QBbXGUKkJu8"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

mancity1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'mancity';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="mancityClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/G3CbR_o31sY"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('MOVIES').appendChild(div);
});

batman1.addEventListener('click', () => {
	const div = document.createElement('div');
	div.id = 'batman';
	div.className = 'view';

	div.innerHTML = `
	<img id="close10" onclick="batmanClose()" src="https://img.icons8.com/ios/80/ffffff/delete-sign--v1.png"
	style="position: absolute; top: 0;right: 0;margin: 2rem 7rem;cursor: pointer;" />
<iframe width="1280" height="720" src="https://www.youtube.com/embed/mqqft2x_Aa4"
	title="YouTube video player" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>
	`;

	document.getElementById('HOME').appendChild(div);
});

function batmanClose() {
	document.querySelector('#batman').remove();
}
function mancityClose() {
	document.querySelector('#mancity').remove();
}
function uclClose() {
	document.querySelector('#ucl').remove();
}
function totClose() {
	document.querySelector('#tot').remove();
}
function msecClose() {
	document.querySelector('#msec').remove();
}
function interstellarClose() {
	document.querySelector('#interstellar').remove();
}
function despClose() {
	document.querySelector('#desp').remove();
}
function suitsClose() {
	document.querySelector('#suits').remove();
}
function ronaldoClose() {
	document.querySelector('#ronaldo').remove();
}
function doraemonClose() {
	document.querySelector('#doraemon').remove();
}

function showLogin() {
	const login = document.querySelector('.login');
	login.style.opacity = 1;
	document.querySelector('#login-close').style.display = 'block';
}

function closeLogin() {
	const login = document.querySelector('.login');
	login.style.opacity = 0;
	document.querySelector('#login-close').style.display = 'none';
}
