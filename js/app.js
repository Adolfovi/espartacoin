let hamburger = document.getElementById('hamburger-menu-button');
let hamburgerSvg = document.getElementById('hamburger-menu-button-svg');
let navMenu = document.getElementById('nav-menu-mobile');



hamburger.addEventListener('click', () => {

navMenu.classList.toggle('active');
hamburgerSvg.classList.toggle('active');

});