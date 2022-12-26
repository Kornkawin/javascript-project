const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

const darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleIcon.children[0].textContent = 'Night Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    imageSwitchMode('dark');
}

const lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    imageSwitchMode('light');
}

const imageSwitchMode = (mode) => {
    image1.src = `img/money_tracker_${mode}.svg`;
    image2.src = `img/currency_${mode}.svg`;
    image3.src = `img/game_${mode}.svg`;
}

const switchMode = (e) => {
    if (e.target.checked) darkMode();
    else lightMode();
}

switchToggle.addEventListener('change', switchMode);