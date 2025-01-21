const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentActiveIndex = 0;

prevBtn.addEventListener('click', () => {
  carouselItems[currentActiveIndex].classList.remove('active');
  currentActiveIndex = (currentActiveIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentActiveIndex].classList.add('active');
});

nextBtn.addEventListener('click', () => {
  carouselItems[currentActiveIndex].classList.remove('active');
  currentActiveIndex = (currentActiveIndex + 1) % carouselItems.length;
  carouselItems[currentActiveIndex].classList.add('active');
});