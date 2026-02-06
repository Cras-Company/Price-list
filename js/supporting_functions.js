import { arrayOfProducts } from './array-products_search_2026_02_06_v01.js';

import {
  createMobileListItemsMarkup,
  createModalListItemsMarkup,
} from './markups.js';

import { refs, onOpenModal, onCloseModal } from './modal.js';

// ===========================================================================
// Кнопка ДАЛЕЕ
// ===========================================================================

const JSSectionOne = document.querySelectorAll(".js-section-none");

const initialLoadCount = 2;
const loadCountOnScroll = 5;
let itemsLoaded = 0;
let isFirstLoad = true;

export function loadItems() {
  const countToLoad = isFirstLoad ? initialLoadCount : loadCountOnScroll;
  const visibleItems = arrayOfProducts.slice(itemsLoaded, itemsLoaded + countToLoad);

  visibleItems.forEach(({ element, items, block }) => {
    element.style.display = "flex";

    const section = element.closest(".js-section-none");

    if (section) {
      section.style.display = "block";
    }

    if (block) {
      block.style.display = "block";
      element.innerHTML = createMobileListItemsMarkup(items);
      lazyLoadImagesAnimation();
    }
  });

  itemsLoaded += countToLoad;
  isFirstLoad = false;
}

export const loadMoreButton = document.querySelector('.js-button-next');

loadMoreButton.addEventListener('click', () => {
  loadMoreButton.disabled = true; // Блокируем кнопку на время выполнения
  loadItems();

  // Проверяем, есть ли ещё элементы для загрузки
  if (itemsLoaded >= arrayOfProducts.length) {
    loadMoreButton.style.display = 'none'; // Скрываем кнопку, если все элементы загружены
  } else {
    setTimeout(() => {
      loadMoreButton.disabled = false; // Возвращаем кнопку в исходное состояние
    }, 250); // Задержка для визуального эффекта
  }
});

// ===========================================================================
// Сброс разметки
// ===========================================================================

export function resetMarkup() {
  arrayOfProducts.forEach(product => {
    product.element.style.display = "block";
    product.block.style.display = "block";
  });

  JSSectionOne.forEach(section => {
    section.style.display = "block";
  });
}

export function hideAllSectionsAndProducts() {
  JSSectionOne.forEach(section => {
    section.style.display = "none";
  });

  arrayOfProducts.forEach(product => {
    product.element.style.display = "none";
    if (product.block) {
      product.block.style.display = "none";
    }
  });
}

// ===========================================================================
// Анимация Lazy-loading
// ===========================================================================

// if ('loading' in HTMLImageElement.prototype) {
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
//   lazyImages.forEach(img => {
//     img.src = img.dataset.src;
//   });
// } else {
//   const script = document.createElement('script');

//   script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
//   script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
//   script.crossOrigin = "anonymous";
//   script.referrerpolicy = "no-referrer"

//   document.body.appendChild(script);
// }

export function lazyLoadImagesAnimation() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(image => {image.addEventListener(
    "load",
    function () { image.classList.add("appear") },
    { once: true });
  });
}

// ===========================================================================
// Прокрутка при поиске
// ===========================================================================

export function jumpBurger(event) {

  const iconElement = event.currentTarget; 
  const parentBlock = iconElement.closest('.js-modal__burger-item');
  const modalContent = document.querySelector(".modal-content"); 

  setTimeout(() => {
    const offsetTop = parentBlock.offsetTop - modalContent.offsetTop;
    
    modalContent.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }, 500);
}

export function jumpOnMainPage() {
  const filterMenuElement = document.querySelector(".js-swiper");

  if (filterMenuElement) {
    filterMenuElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ===========================================================================
// Анимация иконки описания товаров
// ===========================================================================

export function iconsDescriptionAnimation() {
  const crasItems = document.querySelectorAll('.cras-item');

  crasItems.forEach((crasItem) => {
    const priceDescriptionIconsBlocks = crasItem.querySelectorAll(".js-price__box");
    const priceIconsOpen = crasItem.querySelectorAll(".js-price__icon-open");
    const priceIconsClose = crasItem.querySelectorAll(".js-price__icon-close");
    const priceLotsDescription = crasItem.querySelectorAll(".js-price__lot-description");

    priceDescriptionIconsBlocks.forEach((menu, index) => {
      menu.addEventListener("click", (event) => {
        event.stopPropagation();
        const iconEyeClose = priceIconsClose[index];
        const iconEyeOpen = priceIconsOpen[index];
        const listEye = priceLotsDescription[index];

        iconEyeClose.classList.toggle("js-icon-close");
        iconEyeOpen.classList.toggle("js-icon-open");
        listEye.classList.toggle("js-price__lot-description-open");

        const scrollAmount = 300;
        const duration = 1000;
        const startScrollTop = crasItem.scrollTop;
        const startTime = performance.now();

        function scrollStep(timestamp) {
          const currentTime = timestamp - startTime;
          const scrollProgress = currentTime / duration;

          if (scrollProgress < 1) {
            const newScrollTop = startScrollTop + scrollAmount * scrollProgress;
            crasItem.scrollTop = newScrollTop;
            requestAnimationFrame(scrollStep);
          } else {
            crasItem.scrollTop = startScrollTop + scrollAmount;
          }
        }

        requestAnimationFrame(scrollStep);
      });
    });
  });
}

// ===========================================================================
// Открытие модального окна лота
// ===========================================================================

const shopListAllLots = document.querySelector(".js-click-for-new-window");

const shopListMobileLot = document.querySelector('.js-modal-lot');

shopListAllLots.addEventListener('click', lotModalOpenHandler);

function lotModalOpenHandler(event) {
  const targetButton = event.target.closest('button[data-modal-lot-open]');

  if (targetButton) {
    const target = targetButton.closest("li.cras-block");

    if (target) {
      const markerElement = target.querySelector(".js-marker").textContent;

      onOpenModal(refs.openModalLot);

      let foundItem = null;

      arrayOfProducts.forEach(({ items }) => {
        items.forEach(item => {
          if (item.marker === markerElement && !foundItem) {
            foundItem = item;
          }
        });
      });

      if (foundItem) {
        shopListMobileLot.innerHTML = createModalListItemsMarkup([foundItem]);

        const swiperLotButtons = document.querySelector(".js-swiper-lot-buttons");
        const arrayLengthImages = Object.keys(foundItem).filter(key => key.startsWith('url')).length;

        initializeSlider(foundItem, arrayLengthImages);

        if (arrayLengthImages === 2) {
          
          swiperLotButtons.style.display = 'none';
        }
      }
    }

    function initializeSlider(foundItem, arrayLengthImages) {

      const lotButtonNext = document.querySelector(".js-swiper-lot-button-next");
      const lotButtonPrev = document.querySelector(".js-swiper-lot-button-prev");

      lotButtonNext.addEventListener("click", scaleButtonNext);
      lotButtonPrev.addEventListener("click", scaleButtonPrev);

      function scaleButtonNext() {
        lotButtonNext.style.transform = 'scale(0.8)';
        setTimeout(function () {
          lotButtonNext.style.transform = 'scale(1)';
        }, 200);
      }

      function scaleButtonPrev() {
        lotButtonPrev.style.transform = 'scale(0.8)';
        setTimeout(function () {
          lotButtonPrev.style.transform = 'scale(1)';
        }, 200);
      }

      new Swiper('.js-swiper-modal-lot', {
        slidesPerView: 1,
        mousewheel: {
          sensitivity: 1,
        },
        navigation: {
          nextEl: '.swiper-lot-button-next',
          prevEl: '.swiper-lot-button-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        zoom: {
          maxRatio: 5,
          minRatio: 1,
        },
        virtual: {
          slides: (function () {
            let lotImages = [];

            for (let i = 1; i < arrayLengthImages; i++) {
              lotImages.push(`
                <div class="swiper-zoom-container"
                  <div class="swiper-slide">
                    <img class="cras-item__img"
                      src="${foundItem[`url${i}`]}"
                      alt="${foundItem[`alt${i}`]}" 
                      width="310" 
                      height="310"
                    />
                  </div>
                </div>
              `);
            }

            return lotImages;
          })(),
        },
      });
    }

    // Убираем предыдущий слушатель события click, если он был
    // const crasItems = document.querySelectorAll(".js-cras-item");
    // crasItems.forEach((crasItem) => {
    //   crasItem.removeEventListener('click', lotBasketHandler);
    // });

    // lazyLoadImagesAnimation();
    // iconsDescriptionAnimation();

    // // Добавляем новый слушатель события click
    // crasItems.forEach((crasItem) => {
    //   crasItem.addEventListener('click', (event) => {
    //     lotBasketHandler(event);
    //     restoreIcons();
    //   });
    // });

    // Обновляем иконки в модальном окне
    // const lotModalElements = document.querySelectorAll(".js-cras-item");
    // restoreStoregeIcons(lotModalElements);
  }
}