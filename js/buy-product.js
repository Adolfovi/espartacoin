export let buyproduct = () => {
    let buyproduct = document.querySelector('.buy-product');
    let notification = document.querySelector('.notification');

    if (buyproduct) {

        buyproduct.addEventListener('click', () => {
            notification.classList.add('active');
            setTimeout(() => {
                notification.classList.remove('active');
            }, 2500);
            setTimeout(() => {
                window.location.replace('index.html');
            }, 4000);
        });

    }

}