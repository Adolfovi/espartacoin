export let buttoncheckout = () => {
    let paycontinue = document.querySelector('.pay-continue');

    if (paycontinue) {
        paycontinue.addEventListener('click', () => {

            window.location.replace("index.html");

        });
    }
}