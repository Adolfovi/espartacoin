export let renderTabs = () => {
    
    let tabs = document.querySelectorAll(".tab");
    let tabsRelated = document.querySelectorAll(".tab-related");

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {
    
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            tab.classList.add('active');

            tabsRelated.forEach(tabRelated => {
                tabRelated.classList.remove('active');

                if (tab.dataset.elementtype == tabRelated.dataset.elementtype) {
                    tabRelated.classList.add('active');
                }
            });
        });
    });

}