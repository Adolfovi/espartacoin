import { notification } from './notification.js';

export let buyproduct = () => {
    let buyproduct = document.querySelector('.buy-product');
    if (buyproduct) {
        buyproduct.addEventListener('click', () => {
            // success o diferente a success
            notification("Has añadido un producto a la cesta", "popo");
        });

    }

}