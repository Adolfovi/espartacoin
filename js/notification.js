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
            setTimeout(() => {
                notification.classList.remove('active-hidden');
            }, 1000);
        } else {
            notification.classList.remove('active-error');
            notification.classList.add('active-error-hidden');
            setTimeout(() => {
                notification.classList.remove('active-error-hidden');
            }, 1000);
        }
    }, 4000);
}