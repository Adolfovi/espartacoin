// buton menu
let hamburger = document.getElementById('hamburger-menu-button');
let navMenu = document.getElementById('nav-menu-mobile');
let hamburgerSvg = document.getElementById('hamburger-menu-button-svg');



hamburger.addEventListener('click', () => {

    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburgerSvg.classList.toggle('active');

});

// arrays y bucles

let tabs = document.querySelectorAll('.info-merchan-product-tab');
let minuses = document.querySelectorAll('.quantity-minus');
let pluses = document.querySelectorAll('.quantity-plus');
let quantities = document.querySelectorAll('.input-quantity');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });      
        tab.classList.toggle('active');
    });
});









pluses.forEach(plus => {

    plus.addEventListener('click', () => {
        quantities.forEach(quantity => {
            parseInt(quantity.value++);

        });

    });


});

minuses.forEach(minus => {
    minus.addEventListener('click', () => {
        quantities.forEach(quantity => {
            if (quantity.value > 1) {

                parseInt(quantity.value--);
            }
        });

    });


});