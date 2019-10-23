initTheme();
setIcon();

function setTheme(theme) {
    document.documentElement.style.setProperty('--main-light', 'var(--theme-' + theme + '-light)');
    document.documentElement.style.setProperty('--main-medium', 'var(--theme-' + theme + '-medium)');
    document.documentElement.style.setProperty('--main-dark', 'var(--theme-' + theme + '-dark)');
    document.documentElement.style.setProperty('--main-text', 'var(--theme-' + theme + '-text)');
    document.documentElement.style.setProperty('--main-text-saturated', 'var(--theme-' + theme + '-text-saturated)');
    document.documentElement.style.setProperty('--main-text-opposite', 'var(--theme-' + theme + '-text-opposite)');
    document.documentElement.style.setProperty('--main-shadow', 'var(--theme-' + theme + '-shadow)');

    sessionStorage.setItem('color_scheme', theme);
}

function toggleTheme() {
    let currentTheme = sessionStorage.getItem('color_scheme');

    if (currentTheme == 'dark') {
        setTheme('light');
        document.getElementById('toggle-scheme-icon').classList.replace('fa-sun', 'fa-moon');

    } else {
        setTheme('dark');
        document.getElementById('toggle-scheme-icon').classList.replace('fa-moon', 'fa-sun');
    }
}

function initTheme() {
    if (sessionStorage.getItem('color_scheme') == null) {
        let isDark = window.matchMedia("(prefers-color-scheme: dark)");
        let deviceTheme = isDark.matches ? 'dark' : 'light';

        sessionStorage.setItem('color_scheme', deviceTheme);
    } else {
        setTheme(sessionStorage.getItem('color_scheme'));
    }

    if (sessionStorage.getItem('color_scheme') == 'dark') {
        document.getElementById('toggle-scheme-icon').classList.replace('fa-moon', 'fa-sun');
    } else {
        document.getElementById('toggle-scheme-icon').classList.replace('fa-sun', 'fa-moon');
    }
}

function setIcon() {
    console.log(sessionStorage.getItem('color_scheme'));
}
