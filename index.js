const root = document.querySelector(':root');
const themeToggle = document.getElementById('theme-toggle');

const darkBg = '#203062';
const darkText = '#F89DA0';
const darkAccent = '#EFEBED';

const lightBg = '#FFFFFF';
const lightText = '#FF4D6A';
const lightAccent = '#4962ac';

function isDarkMode() {
    const bgColor = getComputedStyle(root).getPropertyValue('--bg-color');
    if (bgColor === darkBg) return true;
    else return false;
}

function toggleFromDarkMode(isDarkMode) {
    if (isDarkMode) {
        // light mode
        root.style.setProperty('--bg-color', lightBg)
        root.style.setProperty('--text-color', lightText)
        root.style.setProperty('--accent-color', lightAccent)
    } else {
        // dark mode
        root.style.setProperty('--bg-color', darkBg)
        root.style.setProperty('--text-color', darkText)
        root.style.setProperty('--accent-color', darkAccent)
    }
}

themeToggle.addEventListener('change', (e) => {
    const currentMode = isDarkMode();
    toggleFromDarkMode(currentMode);
})