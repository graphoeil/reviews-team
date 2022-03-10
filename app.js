// Variables
let index = 0;
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Événements
prevBtn.addEventListener('click', () => {
	index--;
	if (index < 0){
		index = reviews.length - 1;
	}
	showPerson();
});
nextBtn.addEventListener('click', () => {
	index++;
	if (index >= reviews.length){
		index = 0;
	}
	showPerson();
});
randomBtn.addEventListener('click', () => {
	index = Math.floor(Math.random() * reviews.length);
	showPerson();
});

// Méthodes
const showPerson = () => {
	const item = reviews[index];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
};

// DOM loaded
window.addEventListener('DOMContentLoaded', () => {
	showPerson();
});