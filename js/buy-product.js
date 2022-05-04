export let buyproduct = () => {
    let buyproduct = document.querySelector('.buy-product');
    let notification = document.querySelector('.notification');

    if (buyproduct) {

        buyproduct.addEventListener('click', () => {
            notification.classList.add('active');
            setTimeout(() => {
                notification.classList.remove('active');
            }, 4000);
            setTimeout(() => {
                alert('Serás redirigido a la página principal');
                window.location.replace('index.html');
            }, 5000);
        });

    }

}