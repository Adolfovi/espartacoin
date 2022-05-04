export let notification = (message, type) => {

    let notification = document.querySelector('.notification');

    notification.innerHTML = message;
    notification.classList.add(type);
    notification.classList.add('active');

    setTimeout(() => {
        notification.classList.remove('active');
    }, 4000);
}