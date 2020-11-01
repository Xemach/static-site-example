"use strict";

function menuHamburger() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', (e) => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

menuHamburger();

function rating() {
    const value = document.querySelectorAll('.benefit__value');
    const line = document.querySelectorAll('.progress__item-under');

    value.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });
}

rating();