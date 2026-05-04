// Theme Switcher
(function() {
    const themeSelect = document.getElementById('themeSelect');
    const packIcon = document.getElementById('currentPackIcon');

    const validThemes = ['theme-erroa', 'theme-gwanwyn', 'theme-tonnau'];

    // Map theme class to icon path and alt text
    const packData = {
        'theme-erroa': {
            src: '/assets/icons/erroa.webp',
            alt: 'Erroa Pack'
        },
        'theme-gwanwyn': {
            src: '/assets/icons/gwanwyn.webp',
            alt: 'Gwanwyn Pack'
        },
        'theme-tonnau': {
            src: '/assets/icons/tonnau.webp',
            alt: 'Tonnau Pack'
        }
    };

    function applyTheme(themeClass) {
        document.documentElement.classList.remove(...validThemes);
        if (themeClass && validThemes.includes(themeClass)) {
            document.documentElement.classList.add(themeClass);
        }
        // Update the pack icon if the element exists
        if (packIcon && packData[themeClass]) {
            packIcon.src = packData[themeClass].src;
            packIcon.alt = packData[themeClass].alt;
        }
    }

    // Dropdown change
    themeSelect.addEventListener('change', (e) => {
        const selected = e.target.value;
        applyTheme(selected);
        localStorage.setItem('wolfMoodTheme', selected);
    });

    // On load, restore saved theme or default to Erroa
    window.addEventListener('DOMContentLoaded', () => {
        let saved = localStorage.getItem('wolfMoodTheme');
        if (!saved || !validThemes.includes(saved)) {
            saved = 'theme-erroa'; // default
        }
        themeSelect.value = saved;
        applyTheme(saved);
    });

    // Inside theme.js, after DOMContentLoaded
    const logoImg = document.querySelector('.wolf-logo img');
    if (logoImg) {
        const staticSrc = logoImg.src; // saved original
        const animatedSrc = '/assets/icons/logo.webp';
        logoImg.addEventListener('mouseenter', () => { logoImg.src = animatedSrc; });
        logoImg.addEventListener('mouseleave', () => { logoImg.src = staticSrc; });
    }
})();

