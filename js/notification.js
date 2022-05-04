export let notification = (message, type) => {

    let notification = document.querySelector('.notification');
    if (type == "success") {
        notification.innerHTML = message;
        notification.classList.add('active');
    } else {
        notification.innerHTML = "ERROR";
        notification.classList.add('active-error');
    }
    setTimeout(() => {
        if (type == "success") {
            notification.classList.remove('active');
            notification.classList.add('active-hidden');
        } else {
            notification.classList.remove('active-error');
            notification.classList.add('active-error-hidden');
        }
    }, 4000);
}