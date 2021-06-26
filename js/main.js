var navbarMobile = document.querySelector('.navbar__mobile');
var menuBtn = document.querySelector('.menu-btn');
var navbarListContainer = document.querySelector('.navbar__list-container');
var formInputs = document.querySelectorAll('.form-input');
var inputContainer = document.querySelectorAll('.input-container');


for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('focusin', () => inputFocusIn(i) );
    formInputs[i].addEventListener('focusout', () => inputFocusOut(i) );
}

window.addEventListener('scroll', () => scrollPage());

function scrollPage() {
    if (window.scrollY > 0) {
        navbarMobile.classList.add('scrollingPage');
        menuBtn.classList.add('scrollingPage');
    } else {
        navbarMobile.classList.remove('scrollingPage');
        menuBtn.classList.remove('scrollingPage');
    }
}

function openMenuMobile() {
    navbarListContainer.classList.add('active');
}

function closeMenuMobile() {
    navbarListContainer.classList.remove('active');
}

function inputFocusIn(index) {
    inputContainer[index].classList.add('focused');
}

function inputFocusOut(index) {
    if (formInputs[index].textLength <= 0) {
        inputContainer[index].classList.remove('focused');
    }
}



