const root = document.querySelector(':root');
const colorSchemeToggle = document.getElementById('color-scheme-toggle');

const dark = '#203062';
const medium = '#ED8A8D';
const light = '#EFEBED';

function isDarkMode() {
    const bgColor = getComputedStyle(root).getPropertyValue('--main-bg-color');
    if (bgColor === dark) return true;
    else return false;
}

function toggleFromDarkMode(isDarkMode) {
    // mode = true is dark mode while mode = false is light mode
    if (isDarkMode) {
        // light mode
        root.style.setProperty('--main-bg-color', light)
        root.style.setProperty('--main-text-color', dark)
        root.style.setProperty('--main-text-accent', medium)
    } else {
        // dark mode
        root.style.setProperty('--main-bg-color', dark)
        root.style.setProperty('--main-text-color', medium)
        root.style.setProperty('--main-text-accent', light)
    }
}

colorSchemeToggle.addEventListener('change', (e) => {
    const currentMode = isDarkMode();
    toggleFromDarkMode(currentMode);
})