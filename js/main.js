 const header = document.querySelector("header");
const burgerMenu = document.getElementById('burgerMenu');
const navCenter = document.querySelector('.nav-center');
const buttons = document.querySelector('.buttons');

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

burgerMenu.addEventListener('click', () => {
    navCenter.classList.toggle('active');
    buttons.classList.toggle('active');
});