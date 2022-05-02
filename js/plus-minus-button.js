export let renderPlusMinusButton = () => {

    let minuses = document.querySelectorAll('.quantity-minus');
    let pluses = document.querySelectorAll('.quantity-plus');
    let quantities = document.querySelectorAll('.input-quantity');

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

}