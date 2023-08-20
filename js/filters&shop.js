// ===========================================================================
// Динамическая разметка
// ===========================================================================

function createListItemsMarkup(items) {
    return items.map(({ type, url, alt, marker, brand, nameEN, companyName, countryName, volume_weight,
                        priceGRN, priceUSDT, quantity, priceGRNOpt, priceUSDTOpt,
                        description01, description02, description03, description04, description05 }) => {

      return `<li class="cras-block">
        
                <div class="cras-item">

                    <img class="lazyload cras-item__img cras-item--margin" 
                        data-src="${url}"
                        alt="${alt}" 
                        width="310" 
                        height="310"
                    />

                    <div class="cras-item__description cras-item--margin">

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Маркер:</h4>
                            <p class="cras-item__text cras-item__text--margin">${marker};</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Бренд:</h4>
                            <p class="cras-item__text cras-item__text--margin">&#171;${brand}&#187;;</p>
                        </div>

                        <div class="cras-item__name">
                            <h4 class="cras-item__title cras-item__name--margin">Назва продукту:</h4>
                            <p class="cras-item__text">&#171;${nameEN}&#187;;</p>
                        </div>

                        <div class="cras-item__name">
                            <h4 class="cras-item__title cras-item__name--margin">Компанія - виробник:</h4>
                            <p class="cras-item__text">&#171;${companyName}&#187;;</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Країна - виробник:</h4>
                            <p class="cras-item__text cras-item__text--margin">${countryName};</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Об'єм / Вага:</h4>
                            <p class="cras-item__text cras-item__text--margin">${volume_weight};</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Ціна (грн. / USDT):</h4>
                            <p class="cras-item__text cras-item__text--margin">${priceGRN} / ${priceUSDT};</p>
                        </div>

                        ${type === 'retail' ? `
                            <div class="cras-item__element">
                                <h4 class="cras-item__title">Кількість на складі (шт.):</h4>
                                <p class="cras-item__text cras-item__text--margin">${quantity};</p>
                            </div>

                        ` : `

                            <div class="cras-item__element">
                                <h4 class="cras-item__title">Ціна (від 12 шт., грн.):</h4>
                                <p class="cras-item__text cras-item__text--margin">${priceGRNOpt};</p>
                            </div>

                            <div class="cras-item__element">
                                <h4 class="cras-item__title">Ціна (від 12 шт., USDT):</h4>
                                <p class="cras-item__text cras-item__text--margin">${priceUSDTOpt};</p>
                            </div>
                        `}
                    </div>
                </div>

                <div>

                  <div class="price__icon-box js-price__box">
    
                      <svg class="price__icon-close js-price__icon-close" width="40" height="40">
                  
                          <use href="./images/icon/sprite.svg#icon-eye-close"></use>
                      </svg>
                  
                      <svg class="price__icon-open js-price__icon-open" width="40" height="40">
                  
                          <use href="./images/icon/sprite.svg#icon-eye-open"></use>
                      </svg>

                      <h4 class="cras-item__title unselectable">Опис товару:</h4>
                  </div>
        
                  <div class="price__lot-description unselectable cras-item--margin js-price__lot-description">

                      <p class="cras-item__text cras-item__text--margin-sub">${description01}</p>
                      <p class="cras-item__text cras-item__text--margin-sub">${description02}</p>
                      <p class="cras-item__text cras-item__text--margin-sub">${description03}</p>
                      <p class="cras-item__text cras-item__text--margin-sub">${description04}</p>
                      <p class="cras-item__text cras-item__text--margin-sub">${description05}</p>
                  </div>
                </div>
              </li>`;
    }).join("");
}

// ===========================================================================
// Импорт внешних массивов
// ===========================================================================

// Средства гигиены
import { shopLotsBabyShampoos } from "./array-baby_shampoos.js";
import { shopLotsAdultShampoos } from "./array-adult_shampoos.js";

import { shopLotsBabyShowerGels } from "./array-baby-shower-gels.js";
import { shopLotsAdultShowerGels } from "./array-adult-shower-gels.js";

import { shopLotsMicellarWipes } from "./array-micellar_wipes.js";

// Бытовая химия
import { shopLotsMeansHandsWashingDishes } from "./array-means-hands-washing-dishes.js";
import { shopLotsMeansMechanicalWashingDishes } from "./array-means-mechanical-washing-dishes.js";

import { shopLotsWashingGels } from "./array-washing-gels.js";
import { shopLotsPowerCaps } from "./array-power-caps.js";
import { shopLotsWashingPowders } from "./array-washing-powders.js";
import { shopLotsStainRemovers } from "./array-stain-removers.js";
import { shopLotsSofteners } from "./array-softeners.js";

import { shopLotsMeansCleaningUniversal } from "./array-means-cleaning-universal.js";
import { shopLotsMeansCleaningKitchenBathroom } from "./array-means-cleaning-kitchen-bathroom.js";
import { shopLotsMeansCleaningDishwashers } from "./array-means-cleaning-dishwashers.js";

// ===========================================================================
// Создание разметки
// ===========================================================================

// Средства гигиены
const shopListBabyShampoos = document.querySelector(".js-cras__list--baby-shampoos");
const shopListAdultShampoos = document.querySelector(".js-cras__list--adult-shampoos");

const shopListBabyShowerGels = document.querySelector(".js-cras__list--baby-shower-gels");
const shopListAdultShowerGels = document.querySelector(".js-cras__list--adult-shower-gels");

const shopListMicellarWipes = document.querySelector(".js-cras__list--micellar-wipes");

// Бытовая химия
const shopListMeansHandsWashingDishes = document.querySelector(".js-cras__list--means-hands-washing-dishes");
const shopListMeansMechanicalWashingDishes = document.querySelector(".js-cras__list--means-mechanical-washing-dishes");

const shopListWashingGels = document.querySelector(".js-cras__list--washing-gels");
const shopListPowerCaps = document.querySelector(".js-cras__list--power-caps");
const shopListWashingPowders = document.querySelector(".js-cras__list--washing-powder");
const shopListStainRemovers = document.querySelector(".js-cras__list--stain-removers");
const shopListSofteners = document.querySelector(".js-cras__list--softeners");

const shopListMeansCleaningUniversal = document.querySelector(".js-cras__list--universal");
const shopListMeansCleaningKitchenBathroom = document.querySelector(".js-cras__list--kitchen_bathroom");
const shopListMeansCleaningDishwashers = document.querySelector(".js-cras__list--dishwashers");

// ===========================================================================
// Секции и блоки
// ===========================================================================

// Форма поиска
const inputSearch = document.querySelector("#search");
const filterForm = document.querySelector(".js-filter__form");

// Шампуни
const SectionAllShampoos = document.querySelector(".js-section-all-shampoos");
const BlockBabyShampoos = document.querySelector(".js-block-baby-shampoos");
const BlockAdultShampoos = document.querySelector(".js-block-adult-shampoos");

// Гели
const SectionAllShowerGels = document.querySelector(".js-section-all-shower-gels");
const BlockBabyShowerGels = document.querySelector(".js-block-baby-shower-gels");
const BlockAdultShowerGels = document.querySelector(".js-block-adult-shower-gels");

// Салфетки
const SectionAllWipes = document.querySelector(".js-section-all-wipes");
const BlockMicellarWipes = document.querySelector(".js-block-micellar-wipes");

// Средства для мытья
const SectionAllMeansWashing = document.querySelector(".js-section-all-means-washing");
const BlockHandsWashingDishes = document.querySelector(".js-block-hands-washing-dishes");
const BlockMechanicalWashingDishes = document.querySelector(".js-block-mechanical-washing-dishes");

// Средства для стирки
const SectionAllLaundryDetergents = document.querySelector(".js-section-all-laundry-detergents");
const BlockWashingGels = document.querySelector(".js-block-washing-gels");
const BlockPowerCaps = document.querySelector(".js-block-power-caps");
const BlockWashingPowders = document.querySelector(".js-block-washing-powder");
const BlockStainRemovers = document.querySelector(".js-block-stain-removers");
const BlockSofteners = document.querySelector(".js-block-softeners");

// Средства для чистки
const SectionAllMeansCleaning = document.querySelector(".js-section-all-means-cleaning");
const BlockCleaningUniversal = document.querySelector(".js-block-universal");
const BlockCleaningKitchenBathroom = document.querySelector(".js-block-kitchen_bathroom");
const BlockCleaningDishwashers = document.querySelector(".js-block-dishwashers");

// Скрыть секцию
const JSSectionOne = document.querySelectorAll(".js-section-none");

// Нет товара
const outputError = document.querySelector(".js-output-error");

// ===========================================================================
// Массив товаров
// ===========================================================================

const arrayOfProducts = [
  { element: shopListBabyShampoos, items: shopLotsBabyShampoos, block: BlockBabyShampoos, dataTarget: "baby-shampoos" },
  { element: shopListAdultShampoos, items: shopLotsAdultShampoos, block: BlockAdultShampoos, dataTarget: "adult-shampoos" },

  { element: shopListBabyShowerGels, items: shopLotsBabyShowerGels, block: BlockBabyShowerGels, dataTarget: "baby-shower-gels" },
  { element: shopListAdultShowerGels, items: shopLotsAdultShowerGels, block: BlockAdultShowerGels, dataTarget: "adult-shower-gels" },

  { element: shopListMicellarWipes, items: shopLotsMicellarWipes, block: BlockMicellarWipes, dataTarget: "micellar-wipes" },

  { element: shopListMeansHandsWashingDishes, items: shopLotsMeansHandsWashingDishes, block: BlockHandsWashingDishes, dataTarget: "hands_washing_dishes" },
  { element: shopListMeansMechanicalWashingDishes, items: shopLotsMeansMechanicalWashingDishes, block: BlockMechanicalWashingDishes, dataTarget: "mechanical_washing_dishes" },

  { element: shopListWashingGels, items: shopLotsWashingGels, block: BlockWashingGels, dataTarget: "washing_gels" },
  { element: shopListPowerCaps, items: shopLotsPowerCaps, block: BlockPowerCaps, dataTarget: "power_caps" },
  { element: shopListWashingPowders, items: shopLotsWashingPowders, block: BlockWashingPowders, dataTarget: "washing_powders" },
  { element: shopListStainRemovers, items: shopLotsStainRemovers, block: BlockStainRemovers, dataTarget: "stain_removers" },
  { element: shopListSofteners, items: shopLotsSofteners, block: BlockSofteners, dataTarget: "softeners" },

  { element: shopListMeansCleaningUniversal, items: shopLotsMeansCleaningUniversal, block: BlockCleaningUniversal, dataTarget: "means_cleaning_universal" },
  { element: shopListMeansCleaningKitchenBathroom, items: shopLotsMeansCleaningKitchenBathroom, block: BlockCleaningKitchenBathroom, dataTarget: "means_cleaning_kitchen_bathroom" },
  { element: shopListMeansCleaningDishwashers, items: shopLotsMeansCleaningDishwashers, block: BlockCleaningDishwashers, dataTarget: "means_cleaning_dishwashers" }
];

arrayOfProducts.forEach(({ element, items }) => {
  element.innerHTML = createListItemsMarkup(items);
});

// ===========================================================================
// Сброс разметки
// ===========================================================================

function resetMarkup() {
  arrayOfProducts.forEach(product => {
    product.element.style.display = "block";
    product.block.style.display = "block";
  });

  JSSectionOne.forEach(section => {
    section.style.display = "block";
  });
}

// ===========================================================================
// Анимация Lazy-loading
// ===========================================================================

function lazyLoadImagesAnimation() {
  const lazyImages = document.querySelectorAll('img[class="lazyload cras-item__img cras-item--margin"]');

  lazyImages.forEach((image) => {
    image.addEventListener("load", function () {
      image.classList.add("appear");
    });
  });
}

lazyLoadImagesAnimation();

// ===========================================================================
// Анимация иконок в разделе товаров
// ===========================================================================
const filterMenus = document.querySelectorAll(".js-filter__menu");
const filterSecondaryMenus = document.querySelectorAll(".js-filter__secondary-menu");

const filterLists = document.querySelectorAll(".js-filter__list");
const filterSecondaryLists = document.querySelectorAll(".js-filter__secondary-list");

const filterIconsOpen = document.querySelectorAll(".js-filter__icon-open");
const filterIconsClose = document.querySelectorAll(".js-filter__icon-close");

const filterSecondaryIconsOpen = document.querySelectorAll(".js-filter__secondary-icon-open");
const filterSecondaryIconsClose = document.querySelectorAll(".js-filter__secondary-icon-close");

const filterIconHandler = (menuIndex) => {
  const iconClose = filterIconsClose[menuIndex];
  const iconOpen = filterIconsOpen[menuIndex];
  const list = filterLists[menuIndex];

  iconClose.classList.toggle("js-icon-close");
  iconOpen.classList.toggle("js-icon-open");
  list.classList.toggle("js-filter-list-open");
};

const filterSecondaryIconHandler = (menuIndex) => {
  const secondaryIconClose = filterSecondaryIconsClose[menuIndex];
  const secondaryIconOpen = filterSecondaryIconsOpen[menuIndex];
  const secondaryList = filterSecondaryLists[menuIndex];

  secondaryIconClose.classList.toggle("js-icon-close");
  secondaryIconOpen.classList.toggle("js-icon-open");
  secondaryList.classList.toggle("js-filter-list-open");
};

filterMenus.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    filterIconHandler(index);
  });
});

filterSecondaryMenus.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    filterSecondaryIconHandler(index);
  });
});

// ===========================================================================
// Анимация иконки описания товаров
// ===========================================================================

function iconsDescriptionAnimation() {
  const priceDescriptionIconsBlocks = document.querySelectorAll(".js-price__box");

  const priceIconsOpen = document.querySelectorAll(".js-price__icon-open");
  const priceIconsClose = document.querySelectorAll(".js-price__icon-close");

  const priceLotsDescription = document.querySelectorAll(".js-price__lot-description");
  
  priceDescriptionIconsBlocks.forEach((menu, index) => {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
      const iconEyeClose = priceIconsClose[index];
      const iconEyeOpen = priceIconsOpen[index];
      const listEye = priceLotsDescription[index];

      iconEyeClose.classList.toggle("js-icon-close");
      iconEyeOpen.classList.toggle("js-icon-open");
      listEye.classList.toggle("js-price__lot-description-open");
    });
  });
}

iconsDescriptionAnimation();

// ===========================================================================
// Навигация по товарам
// ===========================================================================

[...filterLists, ...filterSecondaryLists].forEach(list => {
  list.addEventListener("click", filterClickHandler);
});

function hideAllSectionsAndProducts() {
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

function showSelectedProducts(dataTarget) {
  arrayOfProducts.forEach(product => {
    if (product.dataTarget === dataTarget) {
      product.element.style.display = "block";
      const section = product.element.closest(".js-section-none");
      if (section) {
        section.style.display = "block";
        product.block.style.display = "block";
      }
    }
  });
}

function hideEmptySections() {
  JSSectionOne.forEach(section => {
    const productsInSection = arrayOfProducts.filter(product =>
      product.element.closest(".js-section-none") === section && product.element.style.display !== "none"
    );

    section.style.display = productsInSection.length === 0 ? "none" : "block";
  });
}

function filterClickHandler(event) {
  const target = event.target;
  if (target.tagName === "LI") {
    const dataTarget = target.getAttribute("data-target");
    
    // Отключаем действие по умолчанию (переход по ссылке)
    event.preventDefault();
    
    // Добавляем параметр dataTarget к URL и выполняем перезагрузку страницы
    const newUrl = window.location.origin + window.location.pathname + "?dataTarget=" + dataTarget;
    window.location.href = newUrl;
  }
}

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const dataTarget = urlParams.get("dataTarget");
  
  if (dataTarget) {
    hideAllSectionsAndProducts();
    showSelectedProducts(dataTarget);
    hideEmptySections();

    // Находим выбранную секцию по dataTarget и прокручиваем к ней
    const selectedSection = document.querySelector(`[data-target="${dataTarget}"]`);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// ===========================================================================
// Поиск в фильтре
// ===========================================================================

inputSearch.value = "";

filterForm.addEventListener("submit", handleFormSubmit);

function universalSearch(items, searchItem) {

    const searchWords = searchItem.split(" ").filter(word => word.trim() !== "");

    if (searchWords.length === 0) {
        return items;
    }

    const filteredItems = items.filter((shopLot) => {
        for (const key in shopLot) {
            if (typeof shopLot[key] === 'string') {
                const lowerCaseValue = shopLot[key].toLowerCase();
                if (searchWords.every(word => lowerCaseValue.includes(word))) {
                    return true;
                }
            }
        }
        return false;
    });

    return filteredItems;
}

function handleFormSubmit(event) {

  event.preventDefault();

  const searchItem = inputSearch.value.trim().toLowerCase();

  resetMarkup();

  inputSearch.value = "";

  if (searchItem === "") {
    return;
  }

  // Средства гигиены
  const filteredBabyShampoos = universalSearch(shopLotsBabyShampoos, searchItem);
  const filteredAdultShampoos = universalSearch(shopLotsAdultShampoos, searchItem);

  const filteredBabyShowerGels = universalSearch(shopLotsBabyShowerGels, searchItem);
  const filteredAdultShowerGels = universalSearch(shopLotsAdultShowerGels, searchItem);
  
  const filteredMicellarWipes = universalSearch(shopLotsMicellarWipes, searchItem);
  
  // Бытовая химия
  const filteredMeansHandsWashingDishes = universalSearch(shopLotsMeansHandsWashingDishes, searchItem);
  const filteredMeansMechanicalWashingDishes = universalSearch(shopLotsMeansMechanicalWashingDishes, searchItem);

  const filteredWashingGels = universalSearch(shopLotsWashingGels, searchItem);
  const filteredPowerCaps = universalSearch(shopLotsPowerCaps, searchItem);
  const filteredWashingPowders = universalSearch(shopLotsWashingPowders, searchItem);
  const filteredStainRemovers = universalSearch(shopLotsStainRemovers, searchItem);
  const filteredSofteners = universalSearch(shopLotsSofteners, searchItem);

  const filteredMeansCleaningUniversal = universalSearch( shopLotsMeansCleaningUniversal, searchItem);
  const filteredMeansCleaningKitchenBathroom = universalSearch(shopLotsMeansCleaningKitchenBathroom, searchItem);
  const filteredMeansCleaningDishwashers = universalSearch(shopLotsMeansCleaningDishwashers, searchItem);

  const allFilteredItems = [
    // Средства гигиены
    ...filteredBabyShampoos,
    ...filteredAdultShampoos,
    ...filteredBabyShowerGels,
    ...filteredAdultShowerGels,
    ...filteredMicellarWipes,
    
    // Бытовая химия
    ...filteredMeansHandsWashingDishes,
    ...filteredMeansMechanicalWashingDishes,

    ...filteredWashingGels,
    ...filteredPowerCaps,
    ...filteredWashingPowders,
    ...filteredStainRemovers,
    ...filteredSofteners,

    ...filteredMeansCleaningUniversal,
    ...filteredMeansCleaningKitchenBathroom,
    ...filteredMeansCleaningDishwashers,];

 if (allFilteredItems.length === 0) {
        outputError.textContent = "Нажаль, такого товару у нас не має :(";
        outputError.style.marginTop = "60px";
        outputError.style.marginBottom = "60px";
        JSSectionOne.forEach((section) => {
            section.style.display = "none";
        });
        return;
    } else {
        outputError.textContent = "";
        outputError.style.marginTop = "0px";
        outputError.style.marginBottom = "0px";
        JSSectionOne.forEach((section) => {
            section.style.display = "block";
        });
      }
  
  if (filteredBabyShampoos.length > 0 || filteredAdultShampoos.length > 0 ) {
      shopListBabyShampoos.innerHTML = createListItemsMarkup(filteredBabyShampoos);
      shopListAdultShampoos.innerHTML = createListItemsMarkup(filteredAdultShampoos);
  } else {
      SectionAllShampoos.style.display = "none";
  }

  if (filteredBabyShowerGels.length > 0 || filteredAdultShowerGels.length > 0 ) {
      shopListBabyShowerGels.innerHTML = createListItemsMarkup(filteredBabyShowerGels);
      shopListAdultShowerGels.innerHTML = createListItemsMarkup(filteredAdultShowerGels);
  } else {
      SectionAllShowerGels.style.display = "none";
  }

    if (filteredMicellarWipes.length > 0 ) {
      shopListMicellarWipes.innerHTML = createListItemsMarkup(filteredMicellarWipes);
  } else {
      SectionAllWipes.style.display = "none";
  }

  // const shopsections = [
  //     { element: shopListMicellarWipes, items: filteredMicellarWipes, section: SectionAllWipes }
  // ];

  // shopsections.forEach(shopsection => {
  //     if (shopsection.items.length > 0) {
  //         shopsection.element.innerHTML = createListItemsMarkup(shopsection.items);
  //     } else {
  //         shopsection.section.style.display = "none";
  //     }
  // });

  if (filteredMeansHandsWashingDishes.length > 0 ||
      filteredMeansMechanicalWashingDishes.length > 0
      ) {
      shopListMeansHandsWashingDishes.innerHTML = createListItemsMarkup(filteredMeansHandsWashingDishes);
      shopListMeansMechanicalWashingDishes.innerHTML = createListItemsMarkup(filteredMeansMechanicalWashingDishes);
    } else {
      SectionAllMeansWashing.style.display = "none";
    }

    if (filteredWashingGels.length > 0 ||
        filteredPowerCaps.length > 0 ||
        filteredWashingPowders.length > 0 ||
        filteredStainRemovers.length > 0 ||
        filteredSofteners.length > 0
        ) {
        shopListWashingGels.innerHTML = createListItemsMarkup(filteredWashingGels);
        shopListPowerCaps.innerHTML = createListItemsMarkup(filteredPowerCaps);
        shopListWashingPowders.innerHTML = createListItemsMarkup(filteredWashingPowders);
        shopListStainRemovers.innerHTML = createListItemsMarkup(filteredStainRemovers);
        shopListSofteners.innerHTML = createListItemsMarkup(filteredSofteners);
    } else {
        SectionAllLaundryDetergents.style.display = "none";
    }

    if (filteredMeansCleaningUniversal.length > 0 ||
        filteredMeansCleaningKitchenBathroom.length > 0 ||
        filteredMeansCleaningDishwashers.length > 0
        ) {
        shopListMeansCleaningUniversal.innerHTML = createListItemsMarkup(filteredMeansCleaningUniversal);
        shopListMeansCleaningKitchenBathroom.innerHTML = createListItemsMarkup(filteredMeansCleaningKitchenBathroom);
        shopListMeansCleaningDishwashers.innerHTML = createListItemsMarkup(filteredMeansCleaningDishwashers);
    } else {
        SectionAllMeansCleaning.style.display = "none";
  }
  
  const shopblocks = [ 
    { element: shopListBabyShampoos, items: filteredBabyShampoos, block: BlockBabyShampoos },
    { element: shopListAdultShampoos, items: filteredAdultShampoos, block: BlockAdultShampoos },
    { element: shopListMicellarWipes, items: filteredMicellarWipes, block: BlockMicellarWipes },
    
    { element: shopListBabyShowerGels, items: filteredBabyShowerGels, block: BlockBabyShowerGels },
    { element: shopListAdultShowerGels, items: filteredAdultShowerGels, block: BlockAdultShowerGels },
    
    { element: shopListMeansHandsWashingDishes, items: filteredMeansHandsWashingDishes, block: BlockHandsWashingDishes },
    { element: shopListMeansMechanicalWashingDishes, items: filteredMeansMechanicalWashingDishes, block: BlockMechanicalWashingDishes },

    { element: shopListWashingGels, items: filteredWashingGels, block: BlockWashingGels },
    { element: shopListPowerCaps, items: filteredPowerCaps, block: BlockPowerCaps },
    { element: shopListWashingPowders, items: filteredWashingPowders, block: BlockWashingPowders },
    { element: shopListStainRemovers, items: filteredStainRemovers, block: BlockStainRemovers },
    { element: shopListSofteners, items: filteredSofteners, block: BlockSofteners },

    { element: shopListMeansCleaningUniversal, items: filteredMeansCleaningUniversal, block: BlockCleaningUniversal },
    { element: shopListMeansCleaningKitchenBathroom, items: filteredMeansCleaningKitchenBathroom, block: BlockCleaningKitchenBathroom },
    { element: shopListMeansCleaningDishwashers, items: filteredMeansCleaningDishwashers, block: BlockCleaningDishwashers },
  ];

  shopblocks.forEach(shopblock => {
    if (shopblock.items.length > 0) {
        shopblock.element.innerHTML = createListItemsMarkup(shopblock.items);
    } else {
        shopblock.block.style.display = "none";
    }
  });

  lazyLoadImagesAnimation();
  iconsDescriptionAnimation();
}
