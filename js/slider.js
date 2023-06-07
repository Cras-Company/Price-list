// const carousel = document.querySelector('.carousel');
// const slides = carousel.querySelectorAll('.carousel__img');
// const prevBtn = document.querySelector('.carousel__prev-btn');
// const nextBtn = document.querySelector('.carousel__next-btn');

// const slideWidth = slides[0].clientWidth;
// const visibleSlidesCount = 5;
// let currentSlide = visibleSlidesCount;

// function updateSlidesOrder() {
//   for (let i = 0; i < slides.length; i++) {
//     let slideOrder = i - currentSlide;
//     if (slideOrder < 0) {
//       slideOrder += slides.length;
//     }
//     slides[i].style.order = slideOrder;
//   }
// }

// function nextSlide() {
//   currentSlide++;
//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
//   updateSlidesOrder();
// }

// function prevSlide() {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = slides.length - 1;
//   }
//   updateSlidesOrder();
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});