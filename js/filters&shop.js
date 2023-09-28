// ===========================================================================
// Импорт внешних источников
// ===========================================================================
import {
  USDTRate,
  createMobileListItemsMarkup,
  createModalListItemsMarkup,
  createBasketListItemsMarkup,
  createBasketOrderMarkup
} from './markups.js';

import { refs, onOpenModal } from './modal-index.js';

import {lazyLoadImagesAnimation, jumpSearch, iconsDescriptionAnimation} from './supporting_functions.js'

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
const inputSearchMobile = document.querySelector("#search-mobile");
const filterFormMobile = document.querySelector(".js-filter__form-mobile");

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
  element.innerHTML = createMobileListItemsMarkup(items);
});

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
// Поиск в фильтре
// ===========================================================================

inputSearchMobile.value = "";
inputSearch.value = "";

filterFormMobile.addEventListener("submit", handleFormSubmit);
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

  const searchItem = event.target === filterForm ? inputSearch.value.trim().toLowerCase() : inputSearchMobile.value.trim().toLowerCase();

  resetMarkup();

  if (event.target === filterForm) {
    inputSearch.value = "";
  } else if (event.target === filterFormMobile) {
    inputSearchMobile.value = "";
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
      shopListBabyShampoos.innerHTML = createMobileListItemsMarkup(filteredBabyShampoos);
      shopListAdultShampoos.innerHTML = createMobileListItemsMarkup(filteredAdultShampoos);
  } else {
      SectionAllShampoos.style.display = "none";
  }

  if (filteredBabyShowerGels.length > 0 || filteredAdultShowerGels.length > 0 ) {
      shopListBabyShowerGels.innerHTML = createMobileListItemsMarkup(filteredBabyShowerGels);
      shopListAdultShowerGels.innerHTML = createMobileListItemsMarkup(filteredAdultShowerGels);
  } else {
      SectionAllShowerGels.style.display = "none";
  }

    if (filteredMicellarWipes.length > 0 ) {
      shopListMicellarWipes.innerHTML = createMobileListItemsMarkup(filteredMicellarWipes);
  } else {
      SectionAllWipes.style.display = "none";
  }

  // const shopsections = [
  //     { element: shopListMicellarWipes, items: filteredMicellarWipes, section: SectionAllWipes }
  // ];

  // shopsections.forEach(shopsection => {
  //     if (shopsection.items.length > 0) {
  //         shopsection.element.innerHTML = createMobileListItemsMarkup(shopsection.items);
  //     } else {
  //         shopsection.section.style.display = "none";
  //     }
  // });

  if (filteredMeansHandsWashingDishes.length > 0 ||
      filteredMeansMechanicalWashingDishes.length > 0
      ) {
      shopListMeansHandsWashingDishes.innerHTML = createMobileListItemsMarkup(filteredMeansHandsWashingDishes);
      shopListMeansMechanicalWashingDishes.innerHTML = createMobileListItemsMarkup(filteredMeansMechanicalWashingDishes);
    } else {
      SectionAllMeansWashing.style.display = "none";
    }

    if (filteredWashingGels.length > 0 ||
        filteredPowerCaps.length > 0 ||
        filteredWashingPowders.length > 0 ||
        filteredStainRemovers.length > 0 ||
        filteredSofteners.length > 0
        ) {
        shopListWashingGels.innerHTML = createMobileListItemsMarkup(filteredWashingGels);
        shopListPowerCaps.innerHTML = createMobileListItemsMarkup(filteredPowerCaps);
        shopListWashingPowders.innerHTML = createMobileListItemsMarkup(filteredWashingPowders);
        shopListStainRemovers.innerHTML = createMobileListItemsMarkup(filteredStainRemovers);
        shopListSofteners.innerHTML = createMobileListItemsMarkup(filteredSofteners);
    } else {
        SectionAllLaundryDetergents.style.display = "none";
    }

    if (filteredMeansCleaningUniversal.length > 0 ||
        filteredMeansCleaningKitchenBathroom.length > 0 ||
        filteredMeansCleaningDishwashers.length > 0
        ) {
        shopListMeansCleaningUniversal.innerHTML = createMobileListItemsMarkup(filteredMeansCleaningUniversal);
        shopListMeansCleaningKitchenBathroom.innerHTML = createMobileListItemsMarkup(filteredMeansCleaningKitchenBathroom);
        shopListMeansCleaningDishwashers.innerHTML = createMobileListItemsMarkup(filteredMeansCleaningDishwashers);
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

  if (searchItem === "") {

      shopblocks.forEach(shopblock => {
          
        shopblock.element.style.display = "flex";
      });
    
    lazyLoadImagesAnimation();
        
    return;
  }

  shopblocks.forEach(shopblock => {
    if (shopblock.items.length > 0) {
      shopblock.element.style.display = "flex";
      shopblock.element.innerHTML = createMobileListItemsMarkup(shopblock.items);
    } else {
      shopblock.block.style.display = "none";
    }
  });

  jumpSearch();
  lazyLoadImagesAnimation();
  restoreLotStates();
}

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

function filterClickHandler(event) {
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target;

  if (target.tagName === "LI") {
    const dataTarget = target.getAttribute("data-target");

    if (dataTarget) {
      hideAllSectionsAndProducts();

      arrayOfProducts.forEach(({ element, dataTarget: productDataTarget, block }) => {
        if (productDataTarget === dataTarget) {
          element.style.display = "flex";

          const section = element.closest(".js-section-none");

          if (section) {
            section.style.display = "block";
          }

          if (block) {
            block.style.display = "block";

            arrayOfProducts.forEach(product => {
              if (productDataTarget === dataTarget) {
                product.element.innerHTML = createMobileListItemsMarkup(product.items);
              }
            })
          }
        }
      });

      jumpSearch();
      lazyLoadImagesAnimation();
      restoreLotStates();
    }  
  }
}

// ===========================================================================
// Навигация брендам
// ===========================================================================

// Разметка
const crasBrands = document.querySelectorAll('.js-cras__list--brends');

const arrayCrasBrands = new Set();

arrayOfProducts.forEach(product => {
  const brands = product.items.flatMap(item => item.brand);
  
  brands.forEach(brand => {
    arrayCrasBrands.add(brand);
  });
});

const arrayCrasBrandsMarkup = [...arrayCrasBrands];

arrayCrasBrandsMarkup.sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));

function createListCrasBrandsMarkup() {
    return arrayCrasBrandsMarkup.map(brand => {
      return `<li>${brand}</li>`;
    }).join("");
}

crasBrands.forEach(brandList => {
  brandList.innerHTML = createListCrasBrandsMarkup();
  brandList.addEventListener("click", brandClickHandler);
});

function brandClickHandler(event) {
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target;

  if (target.tagName === "LI") {
    const dataBrand = target.textContent;

    if (dataBrand) {
      hideAllSectionsAndProducts();

      arrayOfProducts.forEach(({ element, items, block }) => {
        if (items.some(item => item.brand === dataBrand)) {
          element.style.display = "flex";

          const section = element.closest(".js-section-none");

          if (section) {
            section.style.display = "block";
          }

          if (block) {
            block.style.display = "block";

            arrayOfProducts.forEach(product => {
              const foundItems = product.items.filter(item => item.brand === dataBrand);
              if (foundItems.length > 0) {
                product.element.innerHTML = createMobileListItemsMarkup(foundItems);
              }
            });
          }
        }
      });

      jumpSearch();
      lazyLoadImagesAnimation();
      restoreLotStates();
    }
  }
}

// ===========================================================================
// Навигация по странам
// ===========================================================================

// Разметка
const producingCountrys = document.querySelectorAll('.js-cras__list--producing-countrys');

const arrayProducingCountrys = new Set();

arrayOfProducts.forEach(product => {
  const countries = product.items.flatMap(item => item.countryName);
  
  countries.forEach(country => {
    arrayProducingCountrys.add(country);
  });
});

const arrayProducingCountrysMarkup = [...arrayProducingCountrys];

arrayProducingCountrysMarkup.sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));

function createListProducingCountrysMarkup() {
    return arrayProducingCountrysMarkup.map(country => {
      return `<li>${country}</li>`;
    }).join("");
}

producingCountrys.forEach(countryList => {
  countryList.innerHTML = createListProducingCountrysMarkup();
  countryList.addEventListener("click", countryClickHandler);
});

function countryClickHandler(event) {
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target;

  if (target.tagName === "LI") {
    const dataCountry = target.textContent;

    if (dataCountry) {
      hideAllSectionsAndProducts();

        arrayOfProducts.forEach(({ element, items, block }) => {
          if (items.some(item => item.countryName === dataCountry)) {
            element.style.display = "flex";

            const section = element.closest(".js-section-none");
            if (section) {
              section.style.display = "block";
            }

            if (block) {
              block.style.display = "block";

              arrayOfProducts.forEach(product => {
                const foundItems = product.items.filter(item => item.countryName === dataCountry);
                if (foundItems.length > 0) {
                  product.element.innerHTML = createMobileListItemsMarkup(foundItems);
                }
              });
            }
          }
        });

      jumpSearch();
      lazyLoadImagesAnimation();
      restoreLotStates();
    }
  }
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
      }
    }

    // Убираем предыдущий слушатель события click, если он был
    const crasItems = document.querySelectorAll(".js-cras-item");
    crasItems.forEach((crasItem) => {
      crasItem.removeEventListener('click', lotBasketHandler);
    });

    lazyLoadImagesAnimation();
    iconsDescriptionAnimation();

    // Добавляем новый слушатель события click
    crasItems.forEach((crasItem) => {
      crasItem.addEventListener('click', (event) => {
        lotBasketHandler(event);
        restoreIcons();
      });
    });

    // Обновляем иконки в модальном окне
    const lotModalElements = document.querySelectorAll(".js-cras-item");
    restoreStoregeIcons(lotModalElements); // Добавили вызов сюда
  }
}

// ===========================================================================
// Корзина
// ===========================================================================

const headerBasketNumbers = document.querySelectorAll(".js-header__basket-number");
const basketListLots = document.querySelector(".js-modal-basket");
const clearBasketButton = document.querySelector("[data-modal-busket-clear]");
const basketOrderBox = document.querySelector(".js-basket__order-box");

const travolta = document.querySelector(".js-travolta");

let basketfoundItemsArray = [];
let iconsArray = [];
let itemsArrayChecked = [];
let quantityItemsArray = [];
let totalAmount = [];

shopListAllLots.addEventListener('click', lotBasketHandler);

function lotBasketHandler(event) {
  const targetButton = event.target.closest('button[data-lot-basket]');

  if (targetButton) {

    let target;
    let marker;
    let basketInIcon;
    let basketOutIcon;
    let currentValue = 1;

    if (event.target.closest(".cras-block")) {
      target = targetButton.closest(".cras-block");
      marker = target.getAttribute('data-basket-marker');
      basketInIcon = target.querySelector(".js-basket__icon-in");
      basketOutIcon = target.querySelector(".js-basket__icon-out");
    } else if (event.target.closest(".js-cras-item")) {
      target = targetButton.closest(".js-cras-item");
      marker = target.getAttribute('data-basket-marker');
      basketInIcon = target.querySelector(".js-basket__icon-in");
      basketOutIcon = target.querySelector(".js-basket__icon-out");
    }

    const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
    const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
    const priceUSDT = (priceGRN / USDTRate).toFixed(2);

    function toggleItemInBasket(marker) {

      const itemIndex = basketfoundItemsArray.findIndex((item) => item.marker === marker);

      if (itemIndex !== -1) {

        basketfoundItemsArray.splice(itemIndex, 1);

        const itemToRemove = basketListLots.querySelector(`[data-basket-marker="${marker}"]`);
        
        if (itemToRemove) {

          itemToRemove.remove();
        }

        // Удаление сохраненной разметки из локального хранилища
        const savedBasketMarkup = localStorage.getItem('basketMarkup');

        if (savedBasketMarkup) {

          const parser = new DOMParser();

          const doc = parser.parseFromString(savedBasketMarkup, 'text/html');

          const itemToRemoveInStorage = doc.querySelector(`[data-basket-marker="${marker}"]`);

          if (itemToRemoveInStorage) {

            itemToRemoveInStorage.remove();
          }
          
          if (doc.body.innerHTML.trim() === '') {
            localStorage.removeItem('basketMarkup');
          } else {
            localStorage.setItem('basketMarkup', doc.body.innerHTML);
          }
        }
      } else {

        if (foundItem) {

          basketfoundItemsArray.push(foundItem);

          const basketMarkup = createBasketListItemsMarkup([foundItem]);

          if (basketMarkup) {

            basketListLots.insertAdjacentHTML("beforeend", basketMarkup);
            
            localStorage.setItem('basketMarkup', basketListLots.innerHTML);
          }
        }
      }

      if (basketfoundItemsArray.length === 0) {
        localStorage.removeItem('basketfoundItemsArray');
      } else {
        localStorage.setItem('basketfoundItemsArray', JSON.stringify(basketfoundItemsArray));
      }
    }

    toggleItemInBasket(marker);
    
    const decreaseButtons = document.querySelectorAll('[data-price-down]');
    const increaseButtons = document.querySelectorAll('[data-price-up]');

    decreaseButtons.forEach(function (button) {
      button.addEventListener('click', handleQuantityDecrease);
    });

    increaseButtons.forEach(function (button) {
      button.addEventListener('click', handleQuantityIncrease);
    });

    const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
    const quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];

    let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

    if (existingItemIndex !== -1) {
      quantityItemsArray.splice(existingItemIndex, 1);
    } else {
      quantityItemsArray.push({
        marker: marker,
        quantityItem: currentValue,
        priceGRN: priceGRN,
        priceUSDT: priceUSDT,
      });
    }

    if (quantityItemsArray.length === 0) {
      localStorage.removeItem("quantityItemsArray");
    } else {
      localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
    }

    // Количество товаров в корзине
    headerBasketNumbers.forEach((headerBasketNumber) => {
      if (basketfoundItemsArray.length > 0) {
        headerBasketNumber.textContent = basketfoundItemsArray.length;
        localStorage.setItem('headerBasketNumberValue', headerBasketNumber.textContent);
      } else {
        headerBasketNumber.textContent = "";
        localStorage.removeItem('headerBasketNumberValue');
      }
    });

    // Обработка иконок
    basketInIcon.classList.toggle("js-icon-close");
    basketOutIcon.classList.toggle("js-icon-open");

    const iconsArrayJSON = localStorage.getItem("iconsArray");
    const iconsArray = JSON.parse(iconsArrayJSON) || [];

    let existingIndex = iconsArray.findIndex(item => item.marker === marker);

    if (existingIndex !== -1) {
      iconsArray.splice(existingIndex, 1);
    } else {
      iconsArray.push({
        marker: marker,
        addedInBasket: true,
      });
    }

    if (iconsArray.length === 0) {
      localStorage.removeItem("iconsArray");
    } else {
      localStorage.setItem("iconsArray", JSON.stringify(iconsArray));
    }

    // Удаление товара на кнопку "Удалить"
    const removeButtons = document.querySelectorAll("[data-modal-remove-item]");
    removeButtons.forEach((button) => {
      button.addEventListener("click", removeBasketItem);
    });

    // Полная очистка корзины
    if (clearBasketButton) {
      clearBasketButton.addEventListener("click", clearBasket);
    }

    const wholesaleCheckboxes = document.querySelectorAll('.js-basket__wholesale-сheckbox-input');
    const priceRetails = document.querySelectorAll('.js-basket-price-retail');
    const priceWholesales = document.querySelectorAll(".js-basket-price-wholesale");
    
    if (foundItem.type === "retail") {
      priceWholesales.forEach((priceWholesale) => {
        priceWholesale.style.display = "none";
      })
    }

    basketOrderBox.innerHTML = createBasketOrderMarkup();
    basketCheckboxChanger();
    totalItemsAmount();
  }
}

// Удаление лота из корзины
function removeBasketItem(event) {
  const basketItem = event.target.closest(".basket__item");
  if (!basketItem) return;

  const marker = basketItem.getAttribute('data-basket-marker');

  // Удаляем разметку товара из корзины
  basketItem.remove();

  // Удаляем разметку из локального хранилища
  const savedBasketMarkup = localStorage.getItem('basketMarkup');

  if (savedBasketMarkup) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(savedBasketMarkup, 'text/html');
    const itemToRemoveInStorage = doc.querySelector(`[data-basket-marker="${marker}"]`);

    if (itemToRemoveInStorage) {
      itemToRemoveInStorage.remove();

      if (doc.body.innerHTML.trim() === '') {

        localStorage.removeItem('basketMarkup');
      } else {

        localStorage.setItem('basketMarkup', doc.body.innerHTML);
      }
    }
  }

  // Удаляем элемент массива из локального хранилища
  const itemIndex = basketfoundItemsArray.findIndex((item) => item.marker === marker);
  if (itemIndex !== -1) {
    basketfoundItemsArray.splice(itemIndex, 1);
  }

  headerBasketNumbers.forEach((headerBasketNumber) => {
    if (basketfoundItemsArray.length > 0) {
      headerBasketNumber.textContent = basketfoundItemsArray.length;
      localStorage.setItem('headerBasketNumberValue', headerBasketNumber.textContent);
    } else {
      headerBasketNumber.textContent = "";
      localStorage.removeItem('headerBasketNumberValue');
    }
  });

  const basketfoundItemsArrayInStorage = JSON.parse(localStorage.getItem('basketfoundItemsArray'));
  if (Array.isArray(basketfoundItemsArrayInStorage)) {
    const updatedBasketfoundItemsArray = basketfoundItemsArrayInStorage.filter((item) => item.marker !== marker);
    localStorage.setItem('basketfoundItemsArray', JSON.stringify(updatedBasketfoundItemsArray));
    if (basketfoundItemsArray.length === 0) {
      localStorage.removeItem('basketfoundItemsArray');
    }
  }

  // Удаляем элемент массива числа товаров из локального хранилища
  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  const quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];

  if (itemIndex !== -1) {
    quantityItemsArray.splice(itemIndex, 1);
    localStorage.setItem('quantityItemsArray', JSON.stringify(quantityItemsArray));
  }

  if (quantityItemsArray.length === 0) {
    localStorage.removeItem("quantityItemsArray");
    localStorage.removeItem("totalAmount");
    basketOrderBox.innerHTML = "";
    travolta.style.display = "block";
  }

  // Удаляем элемент массива состаяния чекбокса из локального хранилища
  const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
  const itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];

  if (itemIndex !== -1) {
    itemsArrayChecked.splice(itemIndex, 1);
    localStorage.setItem('itemsArrayChecked', JSON.stringify(itemsArrayChecked));
  }

  if (itemsArrayChecked.length === 0) {
    localStorage.removeItem("itemsArrayChecked");
  }

  // Убираем классы с иконок и удаляем с массива
  const iconsArrayJSON = localStorage.getItem("iconsArray");
  const iconsArray = JSON.parse(iconsArrayJSON) || [];

  if (itemIndex !== -1) {
    iconsArray.splice(itemIndex, 1);
    localStorage.setItem('iconsArray', JSON.stringify(iconsArray));
  }

  if (iconsArray.length === 0) {
    localStorage.removeItem("iconsArray");
  }

  restoreIcons();
  totalItemsAmount();
}

// Полная очистка корзины
function clearBasket() {
  // Удаление разметки корзины
  basketListLots.innerHTML = "";
  basketOrderBox.innerHTML = "";
  travolta.style.display = "block";

  // Удаление данных из локального хранилища, связанные с корзиной
  const keysToRemove = Object.keys(localStorage).filter((key) =>
    key.startsWith("basketMarkup") ||
    key === "basketfoundItemsArray" ||
    key === "quantityItemsArray" ||
    key === "itemsArrayChecked" ||
    key === "totalAmount" ||
    key === "iconsArray" ||
    key === "basketNumber"
  );

  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });

  // Обновляем массивы из localStorage
  basketfoundItemsArray = JSON.parse(localStorage.getItem('basketfoundItemsArray')) || [];
  quantityItemsArray = JSON.parse(localStorage.getItem('quantityItemsArray')) || [];
  itemsArrayChecked = JSON.parse(localStorage.getItem('itemsArrayChecked')) || [];
  totalAmount = JSON.parse(localStorage.getItem('totalAmount')) || [];
  iconsArray = JSON.parse(localStorage.getItem("iconsArray")) || [];

  // Удаление счётчка товара в корзине
  headerBasketNumbers.forEach((headerBasketNumber) => {
    headerBasketNumber.textContent = "";
    localStorage.removeItem('headerBasketNumberValue');
  });

  // Удаление классов у иконок
  const basketInElements = document.querySelectorAll(".js-icon-close");
  const basketOutElements = document.querySelectorAll(".js-icon-open");
  basketInElements.forEach((element) => {
    element.classList.remove("js-icon-close");
  });
  basketOutElements.forEach((element) => {
    element.classList.remove("js-icon-open");
  });
}

function handleQuantityDecrease(event) {
  const targetButton = event.target.closest('button[data-price-down]');

  if (!targetButton) return;

  const item = targetButton.closest('.basket__item');
  if (!item) return;
  
  const marker = item.getAttribute('data-basket-marker');
  const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
  const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
  const priceOptGRN = foundItem ? parseFloat(foundItem.priceGRNOpt) : 0;
  const priceOptUSDT = (priceOptGRN / USDTRate).toFixed(2);

  const itemQuantity = item.querySelector('.js-item-quantity');
  const priceGRNElement = item.querySelector('.js-priceGRN'); 
  const priceOptGRNElement = item.querySelector('.js-priceOptGRN');
  const priceUSDTElement = item.querySelector('.js-priceUSDT');
  const priceOptUSDTElement = item.querySelector('.js-priceOptUSDT');

  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  const quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];

  let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

  let priceGRNItem = 0;
  let priceUSDTItem = 0;
  let priceOptGRNItem = 0;
  let priceUSDTOptItem = 0;
  let currentValue = parseInt(itemQuantity.textContent);

  if (!itemQuantity || !priceGRNElement || !priceUSDTElement || !priceOptGRNElement || !priceOptUSDTElement) return;

  const wholesaleCheckbox = item.querySelector('.js-basket__wholesale-сheckbox-input');

  if (wholesaleCheckbox && wholesaleCheckbox.checked) {
    currentValue = Math.max(currentValue - 1, 12);
    itemQuantity.textContent = currentValue;
    priceOptGRNItem = priceOptGRN * currentValue;
    priceOptGRNElement.textContent = priceOptGRNItem;
    priceUSDTOptItem = (priceOptUSDT * currentValue).toFixed(2);;
    priceOptUSDTElement.textContent = priceUSDTOptItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRNItem;
    quantityItemsArray[existingItemIndex].optPriceUSDT = priceUSDTOptItem;
  } else {
    currentValue = Math.max(currentValue - 1, 1);
    itemQuantity.textContent = currentValue;
    priceGRNItem = priceGRN * currentValue;
    priceGRNElement.textContent = priceGRNItem;
    priceUSDTItem = (priceGRNItem / USDTRate).toFixed(2);
    priceUSDTElement.textContent = priceUSDTItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].priceGRN = priceGRNItem;
    quantityItemsArray[existingItemIndex].priceUSDT = priceUSDTItem;
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  totalItemsAmount();
}

function handleQuantityIncrease(event) {
  const targetButton = event.target.closest('button[data-price-up]');

  if (!targetButton) return;

  const item = targetButton.closest('.basket__item');
  if (!item) return;
  
  const marker = item.getAttribute('data-basket-marker');
  const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
  const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
  const priceOptGRN = foundItem ? parseFloat(foundItem.priceGRNOpt) : 0;
  const priceOptUSDT = (priceOptGRN / USDTRate).toFixed(2);

  const itemQuantity = item.querySelector('.js-item-quantity');
  const priceGRNElement = item.querySelector('.js-priceGRN'); 
  const priceOptGRNElement = item.querySelector('.js-priceOptGRN');
  const priceUSDTElement = item.querySelector('.js-priceUSDT');
  const priceOptUSDTElement = item.querySelector('.js-priceOptUSDT');

  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  const quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];

  let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

  let priceGRNItem = 0;
  let priceUSDTItem = 0;
  let priceOptGRNItem = 0;
  let priceUSDTOptItem = 0;
  let currentValue = parseInt(itemQuantity.textContent);

  if (!itemQuantity || !priceGRNElement || !priceUSDTElement || !priceOptGRNElement || !priceOptUSDTElement) return;

  const wholesaleCheckbox = item.querySelector('.js-basket__wholesale-сheckbox-input');

  if (wholesaleCheckbox && wholesaleCheckbox.checked) {
    currentValue += 1;
    itemQuantity.textContent = currentValue;
    priceOptGRNItem = priceOptGRN * currentValue;
    priceOptGRNElement.textContent = priceOptGRNItem;
    priceUSDTOptItem = (priceOptUSDT * currentValue).toFixed(2);;
    priceOptUSDTElement.textContent = priceUSDTOptItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRNItem;
    quantityItemsArray[existingItemIndex].optPriceUSDT = priceUSDTOptItem;
  } else {
    currentValue += 1;
    itemQuantity.textContent = currentValue;
    priceGRNItem = priceGRN * currentValue;
    priceGRNElement.textContent = priceGRNItem;
    priceUSDTItem = (priceGRNItem / USDTRate).toFixed(2);
    priceUSDTElement.textContent = priceUSDTItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].priceGRN = priceGRNItem;
    quantityItemsArray[existingItemIndex].priceUSDT = priceUSDTItem;
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  totalItemsAmount();
}

function basketCheckboxChanger() {
  const wholesaleCheckboxes = document.querySelectorAll('.js-basket__wholesale-сheckbox-input');

  wholesaleCheckboxes.forEach(wholesaleCheckbox => {
    const item = wholesaleCheckbox.closest('.basket__item');
    if (!item) {
      return;
    }

    const priceRetail = item.querySelector('.js-basket-price-retail');
    const priceWholesale = item.querySelector('.js-basket-price-wholesale');

    const marker = item.getAttribute('data-basket-marker');
    const itemQuantity = item.querySelector('.js-item-quantity');
    const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);

    const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
    const priceUSDT = (priceGRN / USDTRate).toFixed(2);
    const priceOptGRN = foundItem ? parseFloat(foundItem.priceGRNOpt) : 0;
    const priceOptUSDT = (priceOptGRN / USDTRate).toFixed(2);

    const priceGRNElement = item.querySelector('.js-priceGRN');
    const priceUSDTElement = item.querySelector('.js-priceUSDT');
    const priceOptGRNElement = item.querySelector('.js-priceOptGRN');
    const priceOptUSDTElement = item.querySelector('.js-priceOptUSDT');

    if (!wholesaleCheckbox || !wholesaleCheckbox.checked) {
      priceRetail.style.display = 'block';
      priceWholesale.style.display = 'none';
    } else {
      itemQuantity.textContent = '12';
    }

    if (foundItem.type === "only-wholesale") {
      wholesaleCheckboxes.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = true;
      
        priceRetail.style.display = 'none';
        priceWholesale.style.display = 'block';
        itemQuantity.textContent = '12';

        const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
        let quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];
        const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
        let itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];
        let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

        priceRetail.style.display = 'none';
        priceWholesale.style.display = 'block';

        priceOptGRNElement.textContent = priceOptGRN * 12;
        priceOptUSDTElement.textContent = (priceOptUSDT * 12).toFixed(2);
        itemQuantity.textContent = '12';

        delete quantityItemsArray[existingItemIndex].priceGRN;
        delete quantityItemsArray[existingItemIndex].priceUSDT;
        quantityItemsArray[existingItemIndex].quantityItem = 12;
        quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRN * 12;
        quantityItemsArray[existingItemIndex].optPriceUSDT = (priceOptUSDT * 12).toFixed(2);

        const itemIndex = itemsArrayChecked.findIndex(item => item.marker === marker);
        const isChecked = checkbox.checked;
        if (isChecked && itemIndex === -1) {
          // Чекбокс был отмечен и записи в массиве не существует, добавляем запись
          itemsArrayChecked.push({ marker, isChecked: true });
        } else if (!isChecked && itemIndex !== -1) {
          // Чекбокс был снят и запись существует, удаляем её из массива
          itemsArrayChecked.splice(itemIndex, 1);
        }

        localStorage.setItem("itemsArrayChecked", JSON.stringify(itemsArrayChecked));
        localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
      });
    }

    // Назначаем обработчик события на чекбокс
    wholesaleCheckbox.addEventListener('change', function () {
      const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
      let quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];
      const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
      let itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];
      let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

      if (this.checked) {
        priceRetail.style.display = 'none';
        priceWholesale.style.display = 'block';

        priceOptGRNElement.textContent = priceOptGRN * 12;
        priceOptUSDTElement.textContent = (priceOptUSDT * 12).toFixed(2);
        itemQuantity.textContent = '12';

        delete quantityItemsArray[existingItemIndex].priceGRN;
        delete quantityItemsArray[existingItemIndex].priceUSDT;
        quantityItemsArray[existingItemIndex].quantityItem = 12;
        quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRN * 12;
        quantityItemsArray[existingItemIndex].optPriceUSDT = (priceOptUSDT * 12).toFixed(2);
      } else {
        priceRetail.style.display = 'block';
        priceWholesale.style.display = 'none';

        priceGRNElement.textContent = priceGRN;
        priceUSDTElement.textContent = priceUSDT;
        itemQuantity.textContent = '1';

        delete quantityItemsArray[existingItemIndex].optPriceGRN;
        delete quantityItemsArray[existingItemIndex].optPriceUSDT;
        quantityItemsArray[existingItemIndex].quantityItem = 1;
        quantityItemsArray[existingItemIndex].priceGRN = priceGRN;
        quantityItemsArray[existingItemIndex].priceUSDT = priceUSDT;
      }

      const isChecked = this.checked;
      const itemIndex = itemsArrayChecked.findIndex(item => item.marker === marker);
      
      if (isChecked && itemIndex === -1) {
        // Чекбокс был отмечен и записи в массиве не существует, добавляем запись
        itemsArrayChecked.push({ marker, isChecked: true });
      } else if (!isChecked && itemIndex !== -1) {
        // Чекбокс был снят и запись существует, удаляем её из массива
        itemsArrayChecked.splice(itemIndex, 1);
      }
      
      localStorage.setItem("itemsArrayChecked", JSON.stringify(itemsArrayChecked));
      localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));

      if (itemsArrayChecked.length === 0) {
        localStorage.removeItem("itemsArrayChecked");
      }

      totalItemsAmount();
    });
  });
}

function totalItemsAmount() {
  const totalAmountGRN = document.querySelector(".js-total-priceGRN");
  const totalAmountUSDT = document.querySelector(".js-total-priceUSDT");

  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  let quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];
  const totalAmountJSON = localStorage.getItem("totalAmount");
  let totalAmount = JSON.parse(totalAmountJSON) || [];

  // Инициализируем переменные для хранения общей суммы
  let totalGRN = 0;
  let totalUSDT = 0;

  quantityItemsArray.forEach(item => {
    totalGRN += (item.priceGRN || item.optPriceGRN || 0);
    totalUSDT += parseFloat(item.priceUSDT || item.optPriceUSDT || 0);
  });

  // Записываем общие суммы в соответствующие элементы на странице
  if (totalAmountGRN && totalAmountUSDT) {
    totalAmountGRN.textContent = totalGRN.toFixed(2);
    totalAmountUSDT.textContent = totalUSDT.toFixed(2);
  }

  if (totalAmount.length > 0) {
    totalAmount[0].totalAmountGRN = totalGRN;
    totalAmount[0].totalAmountUSDT = totalUSDT;
  } else {
    totalAmount.push({
      totalAmountGRN: totalGRN,
      totalAmountUSDT: totalUSDT,
    });
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));

  if (totalGRN > 0 && totalUSDT > 0) {
    travolta.style.display = "none";
  }
}

// --------------------------------
// Фунции восстановления корзины
// --------------------------------

// Состояние иконок из хранилища
function restoreStoregeIcons(lotElements) {
  const iconsArrayJSON = localStorage.getItem("iconsArray");
  const iconsArray = iconsArrayJSON ? JSON.parse(iconsArrayJSON) : [];

  lotElements.forEach((element) => {
    const marker = element.getAttribute("data-basket-marker");
    const basketInIcon = element.querySelector(".js-basket__icon-in");
    const basketOutIcon = element.querySelector(".js-basket__icon-out");

    // Находим соответствующий элемент в iconsArray
    const item = iconsArray.find((item) => item.marker === marker);

    if (item) {
      basketInIcon.classList.add("js-icon-close");
      basketOutIcon.classList.add("js-icon-open");
    } else {
      basketInIcon.classList.remove("js-icon-close");
      basketOutIcon.classList.remove("js-icon-open");
    }
  });
}

// Общее восстановление иконок
function restoreIcons() {
  const lotElements = document.querySelectorAll(".cras-block");
    
  restoreStoregeIcons(lotElements);

  const removeButtons = document.querySelectorAll("[data-modal-remove-item]");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeBasketItem);
  });

  clearBasketButton.addEventListener("click", clearBasket);
}

restoreIcons();

// Восстановление числа товаров в корзине
function restoreBasketAmount() {
  const basketAmount = localStorage.getItem('headerBasketNumberValue');
  if (basketAmount) {
    headerBasketNumbers.forEach((headerBasketNumber) => {
      headerBasketNumber.textContent = basketAmount;
    });
  }

  const removeButtons = document.querySelectorAll("[data-modal-remove-item]");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeBasketItem);
  });

  clearBasketButton.addEventListener("click", clearBasket);
}

restoreBasketAmount();

// Восстановление массива товаров и разметки
function restoreBasketItemsArrayMarkup() {
  const storedBasketItemsArray = localStorage.getItem('basketfoundItemsArray');

  if (storedBasketItemsArray) {
    basketfoundItemsArray = JSON.parse(storedBasketItemsArray);
  }

  const savedBasketMarkup = localStorage.getItem('basketMarkup');

  basketListLots.innerHTML = "";

  if (savedBasketMarkup && basketListLots) {
    basketListLots.innerHTML = savedBasketMarkup;
  }

  // Удаление товара на кнопку "Удалить"
  const removeButtons = document.querySelectorAll("[data-modal-remove-item]");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeBasketItem);
  });
}

restoreBasketItemsArrayMarkup();

// Восстановление суммы и количества товаров
function restoreBasketItemsAmount() {
  const quantityItemsJSON = localStorage.getItem('quantityItemsArray');
  const totalAmountJSON = localStorage.getItem("totalAmount");

  if (quantityItemsJSON) {
    const quantityItems = JSON.parse(quantityItemsJSON);

    // Проходим по массиву и обновляем элементы на странице
    quantityItems.forEach(item => {
      const marker = item.marker;
      const quantityItem = item.quantityItem;
      const priceGRN = item.priceGRN;
      const priceUSDT = item.priceUSDT;
      const optPriceGRNiceGRN = item.optPriceGRN;
      const optPriceUSDTpriceUSDT = item.optPriceUSDT;

      // Находим товар на странице по маркеру
      const itemElement = document.querySelector(`[data-basket-marker="${marker}"]`);
      
      if (itemElement) {
        // Находим элемент с количеством товара
        const itemQuantityElement = itemElement.querySelector('.js-item-quantity');
        const priceGRNElement = itemElement.querySelector('.js-priceGRN'); 
        const priceOptGRNElement = itemElement.querySelector('.js-priceOptGRN');
        const priceUSDTElement = itemElement.querySelector('.js-priceUSDT');
        const priceOptUSDTElement = itemElement.querySelector('.js-priceOptUSDT');

        itemQuantityElement.textContent = quantityItem;
        priceGRNElement.textContent = priceGRN;
        priceUSDTElement.textContent = priceUSDT;
        priceOptGRNElement.textContent = optPriceGRNiceGRN;
        priceOptUSDTElement.textContent = optPriceUSDTpriceUSDT;
      }

    const decreaseButtons = document.querySelectorAll('[data-price-down]');
    const increaseButtons = document.querySelectorAll('[data-price-up]');
      
    decreaseButtons.forEach(function (button) {
      button.addEventListener('click', handleQuantityDecrease);
    });

    increaseButtons.forEach(function (button) {
      button.addEventListener('click', handleQuantityIncrease);
    });
  });

    basketCheckboxChanger();
  }

  if (totalAmountJSON) {
    const totalAmount = JSON.parse(totalAmountJSON);
    const totalAmountGRN = document.querySelector(".js-total-priceGRN");
    const totalAmountUSDT = document.querySelector(".js-total-priceUSDT");

    if (totalAmountGRN && totalAmountUSDT) {
      totalAmountGRN.textContent = totalAmount.totalGRN.toFixed(2);
      totalAmountUSDT.textContent = totalAmount.totalUSDT.toFixed(2);
    }

    basketOrderBox.innerHTML = createBasketOrderMarkup();
    totalItemsAmount();
  }
}

restoreBasketItemsAmount();

// Восстановление разметки не активного блока
document.addEventListener('DOMContentLoaded', function() {
  const priceWholesales = document.querySelectorAll(".js-basket-price-wholesale");

  priceWholesales.forEach((priceWholesale) => {
    const item = priceWholesale.closest(".basket__item");
    if (item) {
      const marker = item.getAttribute('data-basket-marker');
      const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
      
      if (foundItem && foundItem.type === "retail") {
        priceWholesale.style.display = "none";
      }
    }
  });

  const wholesaleCheckboxes = document.querySelectorAll('.js-basket__wholesale-сheckbox-input');
  const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
  itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];

  wholesaleCheckboxes.forEach(wholesaleCheckbox => {

    if (wholesaleCheckbox) {

      const itemElement = wholesaleCheckbox.closest('.basket__item');
      const marker = wholesaleCheckbox.closest('.basket__item').getAttribute('data-basket-marker');
      const itemState = itemsArrayChecked.find(item => item.marker === marker);
      const priceRetail = itemElement.querySelector(".js-basket-price-retail")
      const priceWholesale = itemElement.querySelector('.js-basket-price-wholesale');

      if (itemState) {
        wholesaleCheckbox.checked = itemState.isChecked;
          priceRetail.style.display = 'none';
          priceWholesale.style.display = 'block';
      }
    }
  });
});
 