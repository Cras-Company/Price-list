// ===========================================================================
// Импорт внешних источников
// ===========================================================================
import { createMobileListItemsMarkup, createModalListItemsMarkup } from './markups.js';

import { onOpenModal, onCloseModal, refs } from './modal-index.js';

import {lazyLoadImagesAnimation, iconsDescriptionAnimation} from './supporting_functions.js'

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

  lazyLoadImagesAnimation();
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

      const filterMenuElement = document.querySelector('[data-filter-menu]');

      if (filterMenuElement) {
        filterMenuElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      lazyLoadImagesAnimation();
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

      const filterMenuElement = document.querySelector('[data-filter-menu]');
    
      if (filterMenuElement) {
        filterMenuElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      lazyLoadImagesAnimation();
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

      const filterMenuElement = document.querySelector('[data-filter-menu]');
    
      if (filterMenuElement) {
        filterMenuElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      lazyLoadImagesAnimation();
    }
  }
}

// ===========================================================================
// Открытие модального окна лота
// ===========================================================================

const shopListAllLots = document.querySelector(".js-click-for-new-window");

const shopListMobileLot = document.querySelector('.js-modal-lot');

shopListAllLots.addEventListener('click', lotModalOpenHandler);

refs.closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    onCloseModal(refs.openModalLot);
  });
});

function lotModalOpenHandler(event) {
    const target = event.target.closest("li.cras-block");

  if (target) {
    const markerElement = target.querySelector(".cras-item__text.cras-item__text--margin").textContent;
    
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

  lazyLoadImagesAnimation();
  iconsDescriptionAnimation();
}
