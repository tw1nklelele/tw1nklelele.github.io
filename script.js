/* Скрипт JavaScript */

// Анимация заголовка
const header = document.querySelector('.header');
header.style.animation = 'fade-in 2s ease-in-out';

// Анимация появления секций
const sections = document.querySelectorAll('.main section');
sections.forEach((section) => {
  section.style.animation = 'fade-in 2s ease-in-out';
});

// Анимация появления элементов внутри секций
const elements = document.querySelectorAll('.main section *');
elements.forEach((element) => {
  element.style.animation = 'fade-in 2s ease-in-out';
});



const slider = document.querySelector('.projects-slider');

let currentSlide = 0;

const slides = document.querySelectorAll('.project-slide');
const slideCount = slides.length;

const nextButton = document.createElement('button');
nextButton.innerHTML = 'Далее';
nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slideCount) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

const prevButton = document.createElement('button');
prevButton.innerHTML = 'Назад';
prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slideCount - 1;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

slider.appendChild(nextButton);
slider.appendChild(prevButton);