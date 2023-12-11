import {
  USDTRate,
  createBasketListItemsMarkup,
  createBasketOrderMarkup
} from './markups.js';

// Акция
import { shopLotsSale } from "./array-sale.js";

// Продукты
import { shopLotsNoodles } from "./food/array-noodles.js";
import { shopLotsMacaroni } from "./food/array-macaroni.js";
import { shopLotsSpaghetti } from "./food/array-spaghetti.js";
import { shopLotsTarhona } from "./food/array-tarhona.js";

import { shopLotsCheese } from "./food/array-cheese.js";

import { shopLotsPates } from "./food/array-pates.js";
import { shopLotsSalmon } from "./food/array-salmon.js";
import { shopLotsMackerel } from "./food/array-mackerel.js";
import { shopLotsHerring } from "./food/array-herring.js";
import { shopLotsTuna } from "./food/array-tuna.js";
import { shopLotsCod } from "./food/array-cod.js";
import { shopLotsSprats } from "./food/array-sprats.js";

import { shopLotsPeanuts } from "./food/array-peanuts.js";
import { shopLotsPopcorns } from "./food/array-popcorns.js";
import { shopLotsPistachios } from "./food/array-pistachios.js";
import { shopLotsChips } from "./food/array-chips.js";

import { shopLotsCreamSpreads } from "./food/array-cream-spreads.js";
import { shopLotsCheeseSpreads } from "./food/array-cheese-spreads.js";
import { shopLotsSweetSpreads } from "./food/array-sweet-spreads.js";

import { shopLotsBars } from "./food/array-bars.js";
import { shopLotsWaffles } from "./food/array-waffles.js";

import { shopLotsCoffeeBeans } from "./food/array-coffee_beans.js";
import { shopLotsGroundCoffee } from "./food/array-ground-coffee.js";
import { shopLotsInstantCoffee } from "./food/array-instant-coffee.js";
import { shopLotsCacao } from "./food/array-cacao.js";

import { shopLotsOil } from "./food/array-oil.js";
import { shopLotsOlives } from "./food/array-olives.js";
import { shopLotsOliveOil } from "./food/array-olive-oil.js";

import { shopLotsForBaking } from "./food/array-for-baking.js";
import { shopLotsMustard } from "./food/array-mustard.js";
import { shopLotsSauces } from "./food/array-sauces.js";
import { shopLotsSeasonings } from "./food/array-seasonings.js";

// Средства гигиены
import { shopLotsBabyShampoos } from "./hygiene/array-baby_shampoos.js";
import { shopLotsAdultShampoos } from "./hygiene/array-adult_shampoos.js";

import { shopLotsBabyShowerGels } from "./hygiene/array-baby-shower-gels.js";
import { shopLotsAdultShowerGels } from "./hygiene/array-adult-shower-gels.js";

import { shopLotsMicellarWipes } from "./hygiene/array-micellar_wipes.js";

// Бытовая химия
import { shopLotsMeansHandsWashingDishes } from "./household_chemicals/array-means-hands-washing-dishes.js";
import { shopLotsMeansMechanicalWashingDishes } from "./household_chemicals/array-means-mechanical-washing-dishes.js";

import { shopLotsWashingGels } from "./household_chemicals/array-washing-gels.js";
import { shopLotsPowerCaps } from "./household_chemicals/array-power-caps.js";
import { shopLotsWashingPowders } from "./household_chemicals/array-washing-powders.js";
import { shopLotsBleaches } from "./household_chemicals/array-bleaches.js";
import { shopLotsStainRemovers } from "./household_chemicals/array-stain-removers.js";
import { shopLotsSofteners } from "./household_chemicals/array-softeners.js";

import { shopLotsMeansCleaningUniversal } from "./household_chemicals/array-means-cleaning-universal.js";
import { shopLotsMeansCleaningKitchenBathroom } from "./household_chemicals/array-means-cleaning-kitchen-bathroom.js";
import { shopLotsMeansCleaningDishwashers } from "./household_chemicals/array-means-cleaning-dishwashers.js";

const arrayOfProducts = [
  { items: shopLotsSale, },

  { items: shopLotsNoodles, },
  { items: shopLotsMacaroni, },
  { items: shopLotsSpaghetti, },
  { items: shopLotsTarhona, },

  { items: shopLotsCheese, },

  { items: shopLotsPates, },
  { items: shopLotsSalmon, },
  { items: shopLotsMackerel, },
  { items: shopLotsHerring, },
  { items: shopLotsTuna, },
  { items: shopLotsCod, },
  { items: shopLotsSprats, },

  { items: shopLotsPeanuts, },
  { items: shopLotsPopcorns, },
  { items: shopLotsPistachios,  },
  { items: shopLotsChips, },

  { items: shopLotsCreamSpreads, },
  { items: shopLotsCheeseSpreads, },
  { items: shopLotsSweetSpreads, },

  { items: shopLotsBars, },
  { items: shopLotsWaffles, },

  { items: shopLotsCoffeeBeans, },
  { items: shopLotsGroundCoffee, },
  { items: shopLotsInstantCoffee, },
  { items: shopLotsCacao, },

  { items: shopLotsOil, },
  { items: shopLotsOlives, },
  { items: shopLotsOliveOil, },

  { items: shopLotsForBaking, },
  { items: shopLotsMustard, },
  { items: shopLotsSauces, },
  { items: shopLotsSeasonings, },

  { items: shopLotsBabyShampoos, },
  { items: shopLotsAdultShampoos, },

  { items: shopLotsBabyShowerGels, },
  { items: shopLotsAdultShowerGels, },

  { items: shopLotsMicellarWipes, },

  { items: shopLotsMeansHandsWashingDishes, },
  { items: shopLotsMeansMechanicalWashingDishes, },

  { items: shopLotsWashingGels, },
  { items: shopLotsPowerCaps, },
  { items: shopLotsWashingPowders, },
  { items: shopLotsBleaches, },
  { items: shopLotsStainRemovers, },
  { tems: shopLotsSofteners, },

  { items: shopLotsMeansCleaningUniversal, },
  { items: shopLotsMeansCleaningKitchenBathroom, },
  { items: shopLotsMeansCleaningDishwashers, }
];

// ===========================================================================
// Корзина
// ===========================================================================

const shopListAllLots = document.querySelector(".js-click-for-new-window");

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

    const priceWholesales = document.querySelectorAll(".js-basket-price-wholesale");
    
    if (foundItem.type === "retail") {
      priceWholesales.forEach((priceWholesale) => {
        priceWholesale.style.display = "none";
      })
    }

    basketOrderBox.innerHTML = createBasketOrderMarkup();
    basketCheckboxChanger();
    totalItemsAmount();

    restoreButtonCopy();
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
  const quantityOnStorage = foundItem ? parseInt(foundItem.quantityOnStorage) : 0;
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
    if (currentValue < quantityOnStorage || wholesaleCheckbox) {
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
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  totalItemsAmount();
}

function basketCheckboxChanger() {
  const wholesaleCheckboxes = document.querySelectorAll('.js-basket__wholesale-сheckbox-input');
  const wholesaleCheckboxesArray = [...wholesaleCheckboxes];

  wholesaleCheckboxesArray.forEach(wholesaleCheckbox => {
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
      const marker = foundItem.marker;
      const checkboxesToUpdate = wholesaleCheckboxesArray.filter(checkbox => {
        const item = checkbox.closest('.basket__item');
        const itemMarker = item.getAttribute('data-basket-marker');
        return itemMarker === marker;
      });
      checkboxesToUpdate.forEach((checkbox) => {
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
    totalAmountGRN.textContent = totalGRN;
    totalAmountUSDT.textContent = totalUSDT.toFixed(2);
  }

  if (totalAmount.length > 0) {
    totalAmount[0].totalAmountGRN = totalGRN;
    totalAmount[0].totalAmountUSDT = totalUSDT.toFixed(2);;
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

  if (totalGRN === 0) {
    localStorage.removeItem("totalAmount");
    travolta.style.display = "block";
    basketOrderBox.innerHTML = "";
    localStorage.removeItem("quantityItemsArray");
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
export function restoreIcons() {
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

function restoreButtonCopy() {
  const buttonCopy = document.querySelector(".js-button__copy");

  if (buttonCopy) {
    buttonCopy.addEventListener("click", scaleButton);
    function scaleButton() {
      buttonCopy.style.transform = 'scale(0.8)';
      setTimeout(function () {
        buttonCopy.style.transform = 'scale(1)';
      }, 200);
    }

  buttonCopy.addEventListener("click", function () {

    const quantityItemsJSON = localStorage.getItem('quantityItemsArray');
    const totalAmountDataJSON = localStorage.getItem("totalAmount");
    
    if (totalAmountDataJSON && quantityItemsJSON) {

      const quantityItems = JSON.parse(quantityItemsJSON);
      const totalAmountData = JSON.parse(totalAmountDataJSON);
    
      let textToCopy = "Доброго дня. Хочу оформити замовлення:\n\n";
      quantityItems.forEach((item) => {
        let priceGRN, priceUSDT;

        if ('optPriceGRN' in item) {
          priceGRN = item.optPriceGRN;
          priceUSDT = item.optPriceUSDT;
        } else {
          priceGRN = item.priceGRN;
          priceUSDT = item.priceUSDT;
        }
        textToCopy += `Маркер: ${item.marker}; Кількість: ${item.quantityItem}; Ціна: ${priceGRN} грн. / ${priceUSDT} USDT;\n\n`;
      });

      const { totalAmountGRN, totalAmountUSDT } = totalAmountData[0];
      
      textToCopy += `Загальна сумма замовлення: ${totalAmountGRN} грн. / ${totalAmountUSDT} USDT.`;
      
      // Создаем временный элемент textarea для копирования текста в буфер обмена
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      
      // Выделяем текст в textarea
      textarea.select();
      
      // Копируем выделенный текст в буфер обмена
      document.execCommand("copy");
      
      // Удаляем временный элемент textarea
      document.body.removeChild(textarea);
      
      // Оповещаем пользователя о успешном копировании (можно заменить на свою логику)
      alert("Ваше замовлення збережено! Відправте його нам у Telegram, Instagram або Messenger знизу кошика.");
    }
  });

  }
}

restoreButtonCopy();

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
