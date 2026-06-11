const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const navClose = document.getElementById('navClose');
const navLinks = document.querySelectorAll('.nav__link');

// Открыть меню
burger.addEventListener('click', () => {
    nav.classList.add('active');
});

// Закрыть меню
navClose.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Закрыть меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

