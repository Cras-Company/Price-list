import { arrayOfProducts } from './array-products_&_search_2026_02_05_v01.js';

import {
  createMobileListItemsMarkup,
  createModalListItemsMarkup,
} from './markups.js';

import {
  hideAllSectionsAndProducts,
  lazyLoadImagesAnimation,
  jumpOnMainPage,
} from './supporting_functions.js'

import { refs, onOpenModal, onCloseModal } from './modal.js';

const outputError = document.querySelector(".js-output-error");

const loadMoreButton = document.querySelector('.js-button-next');

// ===========================================================================
// Обработчик кликов для фильтров
// ===========================================================================

function handleFilterClick(filterList, targetType) {
  filterList.forEach(filterItem => {
    filterItem.addEventListener('click', function (event) {
      event.preventDefault();

      outputError.textContent = "";
      outputError.style.marginTop = "0px";
      outputError.style.marginBottom = "0px";

      const target = event.currentTarget;

      if (target.tagName === "LI") {
        const dataTarget = target.getAttribute("data-target");

        if (dataTarget) {
          hideAllSectionsAndProducts();

          loadMoreButton.style.display = 'none';

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
                });
              }
            }
          });

          jumpOnMainPage();
          lazyLoadImagesAnimation();
          onCloseModal(refs.openModalBurgerMenu);
        }
      }
    });
  });
}

// ===========================================================================
// Инициализация обработчиков
// ===========================================================================

const filterListNewItems = document.querySelectorAll('.modal__burger-item[data-target="new-items"]');
const filterListSale = document.querySelectorAll('.modal__burger-item[data-target="sale"]');

handleFilterClick(filterListNewItems, "new-items");
handleFilterClick(filterListSale, "sale");

// ===========================================================================
// Навигация по брендам и странам
// ===========================================================================

function extractUniqueSortedValues(key) {
  const uniqueValues = new Set();
  arrayOfProducts.forEach(product => {
    product.items.forEach(item => uniqueValues.add(item[key]));
  });
  return [...uniqueValues].sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));
}

function createListMarkup(dataArray, dataAttr) {
  return dataArray.map(value => 
    `<li class="burger__secondary-item" data-${dataAttr}="${value}">
      <a href="#">${value}</a>
    </li>`
  ).join("");
}

function initializeList(elements, dataArray, dataAttr, clickHandler) {
  elements.forEach(list => {
    list.innerHTML = createListMarkup(dataArray, dataAttr);
    list.addEventListener("click", clickHandler);
  });
}

const crasBrands = document.querySelectorAll('.js-cras__list--brends');
const producingCountries = document.querySelectorAll('.js-cras__list--producing-countries');

const arrayCrasBrandsMarkup = extractUniqueSortedValues("brand");
const arrayProducingCountriesMarkup = extractUniqueSortedValues("countryName");

initializeList(crasBrands, arrayCrasBrandsMarkup, "brand", brandClickHandler);
initializeList(producingCountries, arrayProducingCountriesMarkup, "country", countryClickHandler);

function handleClick(event, attribute, filterKey) {
  event.preventDefault();

  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";

  loadMoreButton.style.display = 'none';

  const target = event.target.closest("li");
  if (!target) return;

  const dataValue = target.getAttribute(attribute);
  if (!dataValue) return;

  hideAllSectionsAndProducts();

  let foundProducts = [];

  arrayOfProducts.forEach(({ element, items, block }) => {
    const foundItems = items.filter(item => item[filterKey] === dataValue);
    if (foundItems.length > 0) {
      element.style.display = "flex";

      const section = element.closest(".js-section-none");
      if (section) section.style.display = "block";

      if (block) {
        block.style.display = "block";
        element.innerHTML = createMobileListItemsMarkup(foundItems);
      }

      foundProducts.push(...foundItems);
    }
  });

  jumpOnMainPage();
  lazyLoadImagesAnimation();
  onCloseModal(refs.openModalBurgerMenu);
}

function brandClickHandler(event) {
  handleClick(event, "data-brand", "brand");
}

function countryClickHandler(event) {
  handleClick(event, "data-country", "countryName");
}

function burgerHandleClickMainCategory(event, attribute, filterKey) {
  event.preventDefault();

  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";

  loadMoreButton.style.display = 'none';

  const target = event.target.closest("li");
  if (!target) return;

  const dataValue = target.getAttribute(attribute);
  if (!dataValue) return;

  hideAllSectionsAndProducts();

  let foundProducts = [];

  arrayOfProducts.forEach(({ element, items, block, dataTarget }) => {
    const foundItems = items.filter(item => {
      const subcategories = item.subcategory ? item.subcategory.split(" ") : [];
      return item[filterKey] === dataValue || 
             item.mainCategory === dataValue || 
             subcategories.includes(dataValue);
    });

    if (foundItems.length > 0) {
      element.style.display = "flex";

      const section = element.closest(".js-section-none");
      if (section) section.style.display = "block";

      if (block) {
        block.style.display = "block";
        element.innerHTML = createMobileListItemsMarkup(foundItems);
      }

      foundProducts.push(...foundItems);
    }
  });

  jumpOnMainPage();
  lazyLoadImagesAnimation();
  onCloseModal(refs.openModalBurgerMenu);
}

["foodstuffs", "hygiene-products", "household-chemicals", "household-products"].forEach(target => {
  const element = document.querySelector(`.js-modal__burger-item[data-target="${target}"]`);
  if (element) {
    element.addEventListener("click", event => burgerHandleClickMainCategory(event, "data-target", "mainCategory"));
  }
});

[
  "pasta", "dairy-products", "conservation", "snacks", "spreads", "sweets", "drinks", "olives-oils", "taste-modifiers",

  "for-children", "hair-care", "shower-gels", "soap", "limbs-care", "deo-anti", "shining-smile", "wipes", "feminine-hygiene", "toilet-papers",

  "dishwashing-detergents", "detergents", "cleaning-care-products", "world-of-fragrances",

  "cleaning-wipes",

  "sponges", "towels",
].forEach(target => {
  const element = document.querySelector(`.js-modal__burger-subcategory[data-target="${target}"], .burger__secondary-item[data-target="${target}"]`);
  if (element) {
    element.addEventListener("click", event => burgerHandleClickMainCategory(event, "data-target", "subcategory"));
  }
});

// ===========================================================================
// Клик по категориям
// ===========================================================================

const filterSecondaryLists = document.querySelectorAll(".js-burger__secondary-list");

[...filterSecondaryLists].forEach(list => {
  list.addEventListener("click", filterClickHandler);
});

function filterClickHandler(event) {
  
  event.preventDefault();
  
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target.closest("li");

  if (target) {
    const dataTarget = target.getAttribute("data-target");

    if (dataTarget) {
      event.stopPropagation();
      
      hideAllSectionsAndProducts();

      loadMoreButton.style.display = 'none';

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

      jumpOnMainPage();
      lazyLoadImagesAnimation();
      onCloseModal(refs.openModalBurgerMenu);
    }  
  }
}