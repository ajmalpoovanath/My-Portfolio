const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to set theme
const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

// Check for saved theme or system preference
const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

setTheme(currentTheme);

// Toggle event listener
themeToggle.addEventListener('click', () => {
    const activeTheme = htmlElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
