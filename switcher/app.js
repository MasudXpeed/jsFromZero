
const button = document.querySelector('.theme-switcher');
button.addEventListener('click', function (e) {
    button.classList.toggle('clicked');
    if (button.classList.contains('clicked')) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});



