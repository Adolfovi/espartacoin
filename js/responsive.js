export let renderingresponsive = function () {
    let mediaquery = window.matchMedia("(max-width: 767px)");

    if (mediaquery.matches) {
        let links = document.querySelectorAll('.link-css');
        links.forEach(link => {
            link.href = 'style/app-mobile.css';
        })
    } else {
        let links = document.querySelectorAll('.link-css');
        let twocolumns = document.querySelectorAll('.mobile-two-columns');
        let fourcolumns = document.querySelectorAll('.mobile-four-columns');
        let columnsaside = document.querySelectorAll('.mobile-two-columns-aside');
        links.forEach(link => {
            link.href = 'style/app.css';
        })
        fourcolumns.forEach(column => {
            column.classList.remove('mobile-four-columns');
            column.classList.add('desktop-four-columns');
        })
        columnsaside.forEach(column => {
            column.classList.remove('mobile-two-columns-aside');
            column.classList.add('desktop-two-columns-aside');
        })
        twocolumns.forEach(column => {
            column.classList.remove('mobile-two-columns');
            column.classList.add('desktop-two-columns');
        })

    }





}