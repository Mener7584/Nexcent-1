"use strict";

function burgerMenu() {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");

    if (!(menu instanceof HTMLElement) || !(burger instanceof HTMLElement)) {
        return;
    }

    const closeSelectors = [".menu-header__link", "main", ".menu-header__button"];

    document.addEventListener("click", ({ target }) => {
        if (!(target instanceof HTMLElement)) return;

        const isTarget = closeSelectors.some((selector) => !!target.closest(selector));

        if (!isTarget) return;

        burger.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("lock");
    });

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
    });
}

burgerMenu();
