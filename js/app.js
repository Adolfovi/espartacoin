// buton menu
let hamburger = document.getElementById('hamburger-menu-button');
let navMenu = document.getElementById('nav-menu-mobile');
let hamburgerSvg = document.getElementById('hamburger-menu-button-svg');



hamburger.addEventListener('click', () => {

    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburgerSvg.classList.toggle('active');

});

// botón más menos
let minus = document.querySelector('.quantity-minus');
let plus = document.querySelector('.quantity-plus');
let quantity = document.querySelector('.input-quantity');

plus.addEventListener('click', () => {
    parseInt(quantity.value++);
});

minus.addEventListener('click', () => {
    
    if (quantity.value > 1) {
        parseInt(quantity.value--);
    }
});