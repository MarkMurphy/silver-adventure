let isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches
const setTheme = () => {
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

setTheme();

matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  isDarkMode = e.matches;
  setTheme();
});
