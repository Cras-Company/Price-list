import { brands } from "./array-brands.js";

let TrandingSlider = new Swiper('.js-swiper', {
  grabCursor: true,
  // centeredSlides: true,
  // loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  freeMode: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  mousewheel: {
    sensivity: 1,
  },
  autoplay: {
    delay: 666,
    disableOnInteraction: false,
  },
  speed: 1666,
  // observer: true,
  // observeParents: true,
  // observeSlideChildren: true,
  virtual: {
    slides: (function () {
      let slide = [];
      for (let i = 0; i < brands.length; i += 1) {
        slide.push(createSliderBrandsMarkup(brands[i]));
      }
      return slide;
    })(),
  },
});

function createSliderBrandsMarkup({ url, alt }) {

    return `<img class="swiper-slide tranding-slide"                       
                src="${url}" 
                alt="${alt}"
                width="300" 
                height="200"
            />`;
}

let sliderContainer = document.querySelector('.js-swiper');

sliderContainer.addEventListener('mouseenter', function () {
  TrandingSlider.autoplay.stop();
}, { passive: true });

sliderContainer.addEventListener('mouseleave', function () {
  TrandingSlider.autoplay.start();
}, { passive: true });

sliderContainer.addEventListener('touchstart', function () {
  TrandingSlider.autoplay.stop();
}, { passive: true });

sliderContainer.addEventListener('touchend', function () {
  TrandingSlider.autoplay.start();
}, { passive: true });