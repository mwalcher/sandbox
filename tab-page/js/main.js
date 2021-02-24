window.addEventListener('DOMContentLoaded', (event) => {
    const tabSections = Array.from(document.querySelectorAll('section[id]'));
    const tabNavigation = Array.from(document.querySelectorAll('header nav a[href*="#"]'));

    function toggleSection(e) {
        const selectedLink = e.target;
        const hash = selectedLink.href.substring(selectedLink.href.indexOf('#') + 1);
        const selectedSection = tabSections.find(section => section.id === hash);
        console.log(selectedSection);
    }

    tabNavigation.forEach(navLink => {
        navLink.addEventListener('click', toggleSection);
    });
});