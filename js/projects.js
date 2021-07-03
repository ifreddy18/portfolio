var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');

var currentSlide = 0;
var nextSlide;

selectSlide(currentSlide);

const interval = setInterval(() => {

    nextSlide = currentSlide + 1;

    if (nextSlide >= slides.length) {
        nextSlide = 0;
    }

    selectSlide(nextSlide);

}, 4000);

function selectSlide(slideIndex) {

    // Se agrega la clase toRight o toLeft segun sea necesario
    // y por medida de seguridad se remueve la clase opuesta
    // si es que la llegara a tener. Para evitar conflictos cuando
    // se seleccionen slide de manera aleatoria
    for(let i = 0; i < slides.length; i++) {
        if (slideIndex > i) {
            slides[i].classList.add('toLeft');
            slides[i].classList.remove('toRight');
        } else if (slideIndex < i) {
            slides[i].classList.add('toRight');
            slides[i].classList.remove('toLeft');
        } else {
            slides[slideIndex].classList.remove('toRight');
            slides[slideIndex].classList.remove('toLeft');
        }

    }

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
}

function changeSlide(number) {
    nextSlide = currentSlide + number;

    if (nextSlide >= slides.length) {
        nextSlide = 0;
    }

    if (nextSlide < 0) {
        nextSlide = slides.length - 1;
    }

    selectSlide(nextSlide);
}

