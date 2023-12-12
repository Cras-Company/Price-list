let TrandingSlider = new Swiper('.tranding-slider', {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
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
    delay: 500,
    disableOnInteraction: false,
  },
  speed: 1666,
  // spaceBetween: 30,
  // slidesPerGroup: 3,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

let sliderContainer = document.querySelector('.tranding-slider');

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

// const sliderBrandsList = document.querySelector(".js-swiper--wrapper");

// function createSliderBrandsMarkup(items) {
//   return items.map(({ url, alt }) => {
//     return `<div class="swiper-slide tranding-slide">
//               <div class="tranding-slide-img">
//                 <img
//                     class="lazyload"
//                     loading="lazy"                            
//                     data-src="${url}" 
//                     alt="${alt}"
//                     width="300" 
//                     height="200"
//                 />
//               </div>
//             </div>`;
//   }).join("");
// }

// const brands = [
//   {
//     url: "./images/carusel/ace.jpg",
//     alt: "ace",
//   },
//   {
//     url: "./images/carusel/albo.jpg",
//     alt: "albo",
//   },
//   {
//     url: "./images/carusel/alesto.jpg",
//     alt: "alesto",
//   },
//   {
//     url: "./images/carusel/alio.jpg",
//     alt: "alio",
//   },
//   {
//     url: "./images/carusel/ambassador.jpg",
//     alt: "ambassador",
//   },
//   {
//     url: "./images/carusel/ariel.jpg",
//     alt: "ariel",
//   },
//   {
//     url: "./images/carusel/aro.jpg",
//     alt: "aro",
//   },
//   {
//     url: "./images/carusel/asia_gold.jpg",
//     alt: "asia_gold",
//   },
//   {
//     url: "./images/carusel/at_home_clean.jpg",
//     alt: "at_home_clean",
//   },
//   {
//     url: "./images/carusel/backmit.jpg",
//     alt: "backmit",
//   },
//   {
//     url: "./images/carusel/baresa.jpg",
//     alt: "baresa",
//   },
//   {
//     url: "./images/carusel/barilla.jpg",
//     alt: "barilla",
//   },
//   {
//     url: "./images/carusel/bellarom.jpg",
//     alt: "bellarom",
//   },
//   {
//     url: "./images/carusel/bio_presto.jpg",
//     alt: "bio_presto",
//   },
//   {
//     url: "./images/carusel/bold.jpg",
//     alt: "bold",
//   },
//   {
//     url: "./images/carusel/bubchen.jpg",
//     alt: "bubchen",
//   },
//   {
//     url: "./images/carusel/cafe_d'or.jpg",
//     alt: "cafe_d'or",
//   },
//   {
//     url: "./images/carusel/caneo.jpg",
//     alt: "caneo",
//   },
//   {
//     url: "./images/carusel/chocofini.jpg",
//     alt: "chocofini",
//   },
//   {
//     url: "./images/carusel/clinair.jpg",
//     alt: "clinair",
//   },
//   {
//     url: "./images/carusel/combino.jpg",
//     alt: "combino",
//   },
//   {
//     url: "./images/carusel/corbi.jpg",
//     alt: "corbi",
//   },
//   {
//     url: "./images/carusel/cynosure.jpg",
//     alt: "cynosure",
//   },
//   {
//     url: "./images/carusel/denkmit.jpg",
//     alt: "denkmit",
//   },
//   {
//     url: "./images/carusel/der_general.jpg",
//     alt: "der_general",
//   },
//   {
//     url: "./images/carusel/dermomed.jpg",
//     alt: "dermomed",
//   },
//   {
//     url: "./images/carusel/dr.oetker.jpg",
//     alt: "dr.oetker",
//   },
//   {
//     url: "./images/carusel/el_toro_rojo.jpg",
//     alt: "el_toro_rojo",
//   },
//   {
//     url: "./images/carusel/ensa.jpg",
//     alt: "ensa",
//   },
//   {
//     url: "./images/carusel/evrafish.jpg",
//     alt: "evrafish",
//   },
//   {
//     url: "./images/carusel/fairy.jpg",
//     alt: "fairy",
//   },
//   {
//     url: "./images/carusel/finish.jpg",
//     alt: "finish",
//   },
//   {
//     url: "./images/carusel/fit.jpg",
//     alt: "fit",
//   },
//   {
//     url: "./images/carusel/fresh.jpg",
//     alt: "fresh",
//   },
//   {
//     url: "./images/carusel/freshona.jpg",
//     alt: "freshona",
//   },
//   {
//     url: "./images/carusel/gallus.jpg",
//     alt: "gallus",
//   },
//   {
//     url: "./images/carusel/giana.jpg",
//     alt: "giana",
//   },
//   {
//     url: "./images/carusel/gut_gunstig.jpg",
//     alt: "gut_gunstig",
//   },
//   {
//     url: "./images/carusel/hame.jpg",
//     alt: "hame",
//   },
//   {
//     url: "./images/carusel/happy_pasta.jpg",
//     alt: "happy_pasta",
//   },
//   {
//     url: "./images/carusel/hedan_plus.jpg",
//     alt: "hedan_plus",
//   },
//   {
//     url: "./images/carusel/helcom.jpg",
//     alt: "helcom",
//   },
//   {
//     url: "./images/carusel/helio.jpg",
//     alt: "helio",
//   },
//   {
//     url: "./images/carusel/italiamo.jpg",
//     alt: "italiamo",
//   },
//   {
//     url: "./images/carusel/izsaki_haziteszta.jpg",
//     alt: "izsaki_haziteszta",
//   },
//   {
//     url: "./images/carusel/ja.jpg",
//     alt: "ja",
//   },
//   {
//     url: "./images/carusel/jarmi.jpg",
//     alt: "jarmi",
//   },
//   {
//     url: "./images/carusel/k-classic.jpg",
//     alt: "k-classic",
//   },
//   {
//     url: "./images/carusel/king_oscar.jpg",
//     alt: "king_oscar",
//   },
//   {
//     url: "./images/carusel/lenor.jpg",
//     alt: "lenor",
//   },
//   {
//     url: "./images/carusel/lucullus.jpg",
//     alt: "lucullus",
//   },
//   {
//     url: "./images/carusel/m_&_k.jpg",
//     alt: "m_&_k",
//   },
//   {
//     url: "./images/carusel/madero.jpg",
//     alt: "madero",
//   },
//   {
//     url: "./images/carusel/mani_king.jpg",
//     alt: "mani_king",
//   },
//   {
//     url: "./images/carusel/marinero.jpg",
//     alt: "marinero",
//   },
//   {
//     url: "./images/carusel/milbona.jpg",
//     alt: "milbona",
//   },
//   {
//     url: "./images/carusel/mixfix.jpg",
//     alt: "mixfix",
//   },
//   {
//     url: "./images/carusel/mlekovita.jpg",
//     alt: "mlekovita",
//   },
//   {
//     url: "./images/carusel/mlekpol.jpg",
//     alt: "mlekpol",
//   },
//   {
//     url: "./images/carusel/mogyi.jpg",
//     alt: "mogyi",
//   },
//   {
//     url: "./images/carusel/nesquik.jpg",
//     alt: "nesquik",
//   },
//   {
//     url: "./images/carusel/nivea.jpg",
//     alt: "nivea",
//   },
//   {
//     url: "./images/carusel/nordolio.jpg",
//     alt: "nordolio",
//   },
//   {
//     url: "./images/carusel/nutella.jpg",
//     alt: "nutella",
//   },
//   {
//     url: "./images/carusel/ombia.jpg",
//     alt: "ombia",
//   },
//   {
//     url: "./images/carusel/onyx.jpg",
//     alt: "onyx",
//   },
//   {
//     url: "./images/carusel/opavia.jpg",
//     alt: "opavia",
//   },
//   {
//     url: "./images/carusel/pamapol.jpg",
//     alt: "pamapol",
//   },
//   {
//     url: "./images/carusel/parmareggio.jpg",
//     alt: "parmareggio",
//   },
//   {
//     url: "./images/carusel/pasta_reggia.jpg",
//     alt: "pasta_reggia",
//   },
//   {
//     url: "./images/carusel/persil.jpg",
//     alt: "persil",
//   },
//   {
//     url: "./images/carusel/pirat.jpg",
//     alt: "pirat",
//   },
//   {
//     url: "./images/carusel/poseidon.jpg",
//     alt: "poseidon",
//   },
//   {
//     url: "./images/carusel/pottyos.jpg",
//     alt: "pottyos",
//   },
//   {
//     url: "./images/carusel/power_wash.jpg",
//     alt: "power_wash",
//   },
//   {
//     url: "./images/carusel/pril.jpg",
//     alt: "pril",
//   },
//   {
//     url: "./images/carusel/pringles.jpg",
//     alt: "pringles",
//   },
//   {
//     url: "./images/carusel/reinex.jpg",
//     alt: "reinex",
//   },
//   {
//     url: "./images/carusel/respekt.jpg",
//     alt: "respekt",
//   },
//   {
//     url: "./images/carusel/right_guard.jpg",
//     alt: "right_guard",
//   },
//   {
//     url: "./images/carusel/rio_mare.jpg",
//     alt: "rio_mare",
//   },
//   {
//     url: "./images/carusel/rosso_gargano.jpg",
//     alt: "rosso_gargano",
//   },
//   {
//     url: "./images/carusel/san_fabio.jpg",
//     alt: "san_fabio",
//   },
//   {
//     url: "./images/carusel/santa_rosa.jpg",
//     alt: "santa_rosa",
//   },
//   {
//     url: "./images/carusel/schauma.jpg",
//     alt: "schauma",
//   },
//   {
//     url: "./images/carusel/soltino.jpg",
//     alt: "soltino",
//   },
//   {
//     url: "./images/carusel/sovia.jpg",
//     alt: "sovia",
//   },
//   {
//     url: "./images/carusel/spee.jpg",
//     alt: "spee",
//   },
//   {
//     url: "./images/carusel/storck.jpg",
//     alt: "storck",
//   },
//   {
//     url: "./images/carusel/tandil.jpg",
//     alt: "tandil",
//   },
//   {
//     url: "./images/carusel/tasso.jpg",
//     alt: "tasso",
//   },
//   {
//     url: "./images/carusel/tiradell.jpg",
//     alt: "tiradell",
//   },
//   {
//     url: "./images/carusel/univer.jpg",
//     alt: "univer",
//   },
//   {
//     url: "./images/carusel/vesuvio.jpg",
//     alt: "vesuvio",
//   },
//   {
//     url: "./images/carusel/vigora.jpg",
//     alt: "vigora",
//   },
// ];

// sliderBrandsList.innerHTML = createSliderBrandsMarkup(brands);
