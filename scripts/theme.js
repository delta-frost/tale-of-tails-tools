// Theme Switcher
(function() {
    const themeSelect = document.getElementById('themeSelect');
    const packIcon = document.getElementById('currentPackIcon');

    // Use the globally defined base path (set in layout)
    const base = window.siteBase || '/';

    const validThemes = ['theme-erroa', 'theme-gwanwyn', 'theme-tonnau'];

    const packData = {
        'theme-erroa': {
            src: base + 'assets/icons/erroa.webp',
            alt: 'Erroa Pack'
        },
        'theme-gwanwyn': {
            src: base + 'assets/icons/gwanwyn.webp',
            alt: 'Gwanwyn Pack'
        },
        'theme-tonnau': {
            src: base + 'assets/icons/tonnau.webp',
            alt: 'Tonnau Pack'
        }
    };

    function applyTheme(themeClass) {
        document.documentElement.classList.remove(...validThemes);
        if (themeClass && validThemes.includes(themeClass)) {
            document.documentElement.classList.add(themeClass);
        }
        if (packIcon && packData[themeClass]) {
            packIcon.src = packData[themeClass].src;
            packIcon.alt = packData[themeClass].alt;
        }
    }

    themeSelect.addEventListener('change', (e) => {
        const selected = e.target.value;
        applyTheme(selected);
        localStorage.setItem('wolfMoodTheme', selected);
    });

    window.addEventListener('DOMContentLoaded', () => {
        let saved = localStorage.getItem('wolfMoodTheme');
        if (!saved || !validThemes.includes(saved)) {
            saved = 'theme-erroa';
        }
        themeSelect.value = saved;
        applyTheme(saved);

        // Animated logo hover
        const logoImg = document.querySelector('.wolf-logo img');
        if (logoImg) {
            const staticSrc = logoImg.src;
            const animatedSrc = base + 'assets/icons/logo.webp';
            logoImg.addEventListener('mouseenter', () => { logoImg.src = animatedSrc; });
            logoImg.addEventListener('mouseleave', () => { logoImg.src = staticSrc; });
        }
    });
})();
