const hamburgerIcon = document.getElementsByClassName('js-hamburger')[0];
const closeIcon = document.getElementsByClassName('js-close')[0];
const mobileNav = document.getElementsByClassName('js-navbar')[0];

hamburgerIcon.addEventListener('click', addClass);
closeIcon.addEventListener('click', removeClass);

function addClass() {
    mobileNav.classList.add("activenavbar");
}

function removeClass() {
    mobileNav.classList.remove('activenavbar')
}