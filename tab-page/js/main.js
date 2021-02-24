window.addEventListener('DOMContentLoaded', (event) => {
    const tabSections = Array.from(document.querySelectorAll('section[id]'));
    const tabNavigation = Array.from(document.querySelectorAll('header nav a[href*="#"]'));
    const activeClass = 'active';

    const getHash = (link) => link.hash.substring(link.hash.indexOf('#'));

    function toggleSection(hash) {
        const sectionID = hash.substring(1);
        const selectedLink = tabNavigation.find(link => link.hash === hash);
        const selectedSection = tabSections.find(section => section.id === sectionID);

        if (selectedLink) {
            selectedLink.classList.add(activeClass);
        }

        if (selectedSection) {
            selectedSection.classList.add(activeClass);
        }
    }

    tabNavigation.forEach(navLink => {
        navLink.addEventListener('click', (e) => {
            const hash = getHash(e.target);
            toggleSection(hash);
        });
    });

    window.addEventListener('load', () => {
        const hash = window.location.hash ? window.location.hash : getHash(tabNavigation[0]);
        toggleSection(hash);
    })
});