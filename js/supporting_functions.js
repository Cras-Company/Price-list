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

export function jumpSearch() {
  const filterMenuElement = document.querySelector(".tranding-slide-img");

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
