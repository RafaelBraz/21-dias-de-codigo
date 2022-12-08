if (!!!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  } else {
    console
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }
}