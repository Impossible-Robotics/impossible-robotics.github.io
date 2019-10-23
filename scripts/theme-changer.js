initTheme();

function setTheme(theme) {
    document.documentElement.style.setProperty('--main-light', 'var(--theme-' + theme + '-light)');
    document.documentElement.style.setProperty('--main-medium', 'var(--theme-' + theme + '-medium)');
    document.documentElement.style.setProperty('--main-dark', 'var(--theme-' + theme + '-dark)');
    document.documentElement.style.setProperty('--main-text', 'var(--theme-' + theme + '-text)');
    document.documentElement.style.setProperty('--main-text-saturated', 'var(--theme-' + theme + '-text-saturated)');
    document.documentElement.style.setProperty('--main-text-opposite', 'var(--theme-' + theme + '-text-opposite)');
    document.documentElement.style.setProperty('--main-shadow', 'var(--theme-' + theme + '-shadow)');

    if (theme == 'dark') {
        document.getElementById('toggle-scheme-icon').classList.replace('fa-moon', 'fa-sun');
    } else {
        document.getElementById('toggle-scheme-icon').classList.replace('fa-sun', 'fa-moon');
    }

    sessionStorage.setItem('color_theme', theme);
}

function toggleTheme() {
    let currentTheme = sessionStorage.getItem('color_theme');

    if (currentTheme == 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

function initTheme() {
    if (sessionStorage.getItem('color_theme') == null) {
        let isDark = window.matchMedia("(prefers-color-scheme: dark)");
        let deviceTheme = isDark.matches ? 'dark' : 'light';

        sessionStorage.setItem('color_theme', deviceTheme);
    } else {
        setTheme(sessionStorage.getItem('color_theme'));
    }
}
