window.addEventListener('DOMContentLoaded', (event) => {
    const tabNavigation = Array.from(document.querySelectorAll('header nav a[href*="#"]'));
    const tabSections = Array.from(document.querySelectorAll('section[id]'));
    const activeClass = 'active';

    const getHash = (link) => link.hash.substring(link.hash.indexOf('#'));

    function resetActiveSection() {
        tabNavigation.forEach(link => link.classList.remove(activeClass));
        tabSections.forEach(section => section.classList.remove(activeClass));
    }

    function toggleSection(hash) {
        const sectionID = hash.substring(1);
        const selectedLink = tabNavigation.find(link => link.hash === hash);
        const selectedSection = tabSections.find(section => section.id === sectionID);

        resetActiveSection();

        if (selectedLink) {
            selectedLink.classList.add(activeClass);
        }

        if (selectedSection) {
            selectedSection.classList.add(activeClass);
        }
    }

    tabNavigation.forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = getHash(e.target);
            toggleSection(hash);
        });
    });

    window.addEventListener('load', () => {
        const hash = window.location.hash ? window.location.hash : getHash(tabNavigation[0]);
        toggleSection(hash);
    })
});