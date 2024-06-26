document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close the mobile menu when a link is clicked
            nav.classList.remove('active');
        });
    });

    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            let currentSection = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (mainElement.scrollTop >= (sectionTop - sectionHeight / 3)) {
                    currentSection = section.getAttribute('id');
                }
            });

            if (currentSection) {
                history.replaceState(null, null, `#${currentSection}`);
            }
        });
    }
});