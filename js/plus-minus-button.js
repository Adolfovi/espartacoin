export let renderPlusMinusButton = () => {

    let minuses = document.querySelectorAll('.quantity-minus');
    let pluses = document.querySelectorAll('.quantity-plus');
    let input = document.querySelector('.input-quantity');
    pluses.forEach(plus => {

        plus.addEventListener('click', () => {
            let fatherofplus = plus.parentNode;
            let firstchildoffatherofplus = fatherofplus.firstElementChild;
            let nextsiblingoffirstchildoffatherofplus = firstchildoffatherofplus.nextElementSibling;
            let firstchildofnextsiblingoffirstchildoffatherofplus = nextsiblingoffirstchildoffatherofplus.firstElementChild;
            let firstchildoffirstchildofnextsiblingoffirstchildoffatherofplus = firstchildofnextsiblingoffirstchildoffatherofplus.firstElementChild;
            console.log(fatherofplus);
            parseInt(firstchildoffirstchildofnextsiblingoffirstchildoffatherofplus.value++);
        });
    });

    minuses.forEach(minus => {
        minus.addEventListener('click', () => {
            let fatherofminus = minus.parentNode;
            let firstchildoffatherofminus = fatherofminus.firstElementChild;
            let nextsiblingoffirstchildoffatherofminus = firstchildoffatherofminus.nextElementSibling;
            let firstchildofnextsiblingoffirstchildoffatherofminus = nextsiblingoffirstchildoffatherofminus.firstElementChild;
            let firstchildoffirstchildofnextsiblingoffirstchildoffatherofminus = firstchildofnextsiblingoffirstchildoffatherofminus.firstElementChild;

            console.log(fatherofminus);

            if (firstchildoffirstchildofnextsiblingoffirstchildoffatherofminus.value > 1) {
                parseInt(firstchildoffirstchildofnextsiblingoffirstchildoffatherofminus.value--);
            }


        });
    });








}