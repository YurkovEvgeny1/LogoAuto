let lock = document.querySelector("body");
let nav = document.querySelector(".nav");
let header__list = document.querySelector(".header__list");
let burger = document.querySelector(".burger__menu");

burger.onclick = function () {
	lock.classList.toggle("lock");
	nav.classList.toggle("active");
	burger.classList.toggle("active");
}
header__list.onclick = function () {
	lock.classList.remove("lock");
	nav.classList.remove("active");
	burger.classList.remove("active");
}

// slider

new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		dynamicBullets: true,
		clickable: true,
	},

	slidesPerView: 1,
});