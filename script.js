alert('Сайт пока-что в разработке. Но вы уже можете посмотреть ассортимент и связатся с нами');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header')
const desItem = document.querySelector('.des-item');

const prevBtn = document.querySelector('img[data-move="prev"]')
const nextBtn = document.querySelector('img[data-move="next"]')
console.log(prevBtn);
console.log(nextBtn);

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	stars.style.left = value * 0.25 + 'px';
	moon.style.top = value * 1.05 + 'px';
	mountains_behind.style.top = value * 0.5 + 'px';
	mountains_front.style.top = value * 0 + 'px';
	text.style.marginRight = value * 4 + 'px';
	text.style.marginTop = value * 1.5 + 'px';
	btn.style.marginTop = value * 1.5 + 'px';
	// header.style.marginTop = value * 0.5 +'px';
})

function imgSlider(anything) {
	document.querySelector('.starbucks').src = anything.img;
	document.querySelector('.item-img img').src = anything.img;
	mountains_front.src = anything.maingBg;
	mountains_behind.src = anything.secondBg;
	stars.src = anything.star;
	moon.src = anything.moonLogo;
	document.querySelector('body').style.background = anything.bgColor;
	text.textContent = anything.nameLiq;
	document.querySelector('.smoke-article').textContent = anything.nameLiq;
	document.querySelector('.sec').style.background = anything.skyColor;
	document.querySelector('.sec').style.boxShadow = anything.transToColor;
	let tr = document.querySelector('.main-block');
	document.querySelector('.item-description p').style.color = anything.colorText;
	document.querySelector('.smoke-article').style.color = anything.colorText;
	document.querySelector('.item-description h3').style.color = anything.colorText;
	document.querySelector('.item-price').style.color = anything.colorText;
	document.querySelector('#foot').style.color = anything.colorText;
	document.querySelector('footer').style.borderTop = anything.colorText;
	document.querySelector('.item-img').style.border = anything.colorBorder;
	document.querySelector('.callback-bt').style.background = anything.colorBut;
	desItem.textContent  = anything.description;
	document.querySelector('.mini-title').textContent  = anything.miniTitle;

	const smoke = document.querySelector('.smoke-article');
	smoke.innerHTML = smoke.textContent.replace(/\S/g, "<span>$&</span>");

	const letters = document.querySelectorAll('span');
	for (let i = 0; i < letters.length; i++) {
		letters[i].addEventListener("mouseover", function () {
			letters[i].classList.add('active');
		})
	}
}
let counter = 0;
nextBtn.addEventListener('click', e => {
	let currentEl = e.currentTarget;
	if (counter === 7) {
		counter = -1;
	}
	counter++;
	imgSlider(obj[counter]);
});
prevBtn.addEventListener('click', e => {
	let currentEl = e.currentTarget;
	if (counter === 0) {
		counter = 6;
	}
	counter--;
	imgSlider(obj[counter]);
});


