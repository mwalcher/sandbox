window.addEventListener('DOMContentLoaded', (event) => {
    const tabSections = Array.from(document.querySelectorAll('section[id]'));
    const tabNavigation = Array.from(document.querySelectorAll('header nav a[href*="#"]'));
    const activeClass = 'active';

    function toggleSection(hash) {
        const sectionID = hash.substring(1);
        const selectedLink = tabNavigation.find(link => link.href === hash);
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
            const selectedLink = e.target;
            const hash = selectedLink.href.substring(selectedLink.href.indexOf('#'));
            toggleSection(hash);
        });
    });

    window.addEventListener('load', () => {
        const { hash } = window.location;
        if (hash) {
            toggleSection(hash);
        }
    })
});