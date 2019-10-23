initScheme();

function setScheme(scheme) {
    document.documentElement.style.setProperty('--main-light', 'var(--scheme-' + scheme + '-light)');
    document.documentElement.style.setProperty('--main-medium', 'var(--scheme-' + scheme + '-medium)');
    document.documentElement.style.setProperty('--main-dark', 'var(--scheme-' + scheme + '-dark)');
    document.documentElement.style.setProperty('--main-text', 'var(--scheme-' + scheme + '-text)');
    document.documentElement.style.setProperty('--main-text-saturated', 'var(--scheme-' + scheme + '-text-saturated)');
    document.documentElement.style.setProperty('--main-text-opposite', 'var(--scheme-' + scheme + '-text-opposite)');
    document.documentElement.style.setProperty('--main-shadow', 'var(--scheme-' + scheme + '-shadow)');

    sessionStorage.setItem('color-scheme', scheme);
}

function toggleScheme() {
    if (getScheme() == 'dark') {
        document.getElementById('toggle-scheme-icon').innerHTML = '&#x263E; Dark Mode';
        setScheme('light');
    } else {
        document.getElementById('toggle-scheme-icon').innerHTML = '&#x2600; Light Mode';
        setScheme('dark');
    }
}

function initScheme() {
    if (getScheme() == null) {
        let isDark = window.matchMedia("(prefers-color-scheme: dark)");
        let deviceScheme = isDark.matches ? 'dark' : 'light';

        sessionStorage.setItem('color-scheme', deviceScheme);
    } else {
        setScheme(sessionStorage.getItem('color-scheme'));
    }

    if (getScheme() == 'dark') {
        document.getElementById('toggle-scheme-icon').innerHTML = '&#x2600; Light Mode';
    } else {
        document.getElementById('toggle-scheme-icon').innerHTML = '&#x263E; Dark Mode';
    }
}

function getScheme() {
    return sessionStorage.getItem('color-scheme');
}
