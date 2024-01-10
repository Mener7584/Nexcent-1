"use strict";

(() => {
	const burger = document.querySelector(".header__burger");
	const menu = document.querySelector(".menu-header");

	if (!(menu instanceof HTMLElement) || !(burger instanceof HTMLButtonElement)) {
		return;
	}

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		document.body.classList.toggle("lock");
	});
})();
