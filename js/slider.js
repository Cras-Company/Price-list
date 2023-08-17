let TrandingSlider = new Swiper('.tranding-slider', {
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
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

let sliderContainer = document.querySelector('.tranding-slider');

sliderContainer.addEventListener('mouseenter', function () {
  TrandingSlider.autoplay.stop();
});

sliderContainer.addEventListener('mouseleave', function () {
  TrandingSlider.autoplay.start();
});

sliderContainer.addEventListener('wheel', function (e) {
  e.preventDefault();
  if (e.deltaY > 0) {
    TrandingSlider.slideNext();
  } else {
    TrandingSlider.slidePrev();
  }
});