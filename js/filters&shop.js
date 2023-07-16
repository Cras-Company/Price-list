// ===========================================================================
// Фильтр на мобилку
// ===========================================================================

// const mobileSearchBtn = document.querySelector('[data-mobile-search-button]');
// const mobileSearchMenu = document.querySelector('[data-filter-menu]')

// mobileSearchBtn.addEventListener('click', () => {
//   const expanded = mobileSearchBtn.getAttribute('aria-expanded') === 'true' || 'false'

//   mobileSearchBtn.classList.toggle('is-open');

//   mobileSearchBtn.setAttribute('aria-expanded', !expanded);

//   mobileSearchMenu.classList.toggle('is-open');
// })

// ===========================================================================
// Динамическая разметка
// ===========================================================================

// import { shopLots } from "./test-array01.js";

// const shopList = document.querySelector(".js-shop__list");

// function createListItemsMarkup(items) {
//   return items
//     .map(
//       ({ url, alt, priceGRN, priceUSDT, nameUKR, nameEN }) =>
//         `<li class="shop-list__item">
//           <div class="shop-list__position">
//             <a class="work-list-item__link" href="">
//               <img
//                 class="lazyload work-list-item__img"
//                 data-src="${url}"
//                 alt="${alt}"
//                 width="200"
//                 height="256"
//               />

//               <h2 class="work-list-item__title">
//                 ${priceGRN} ГРН – ${priceUSDT} USDT
//               </h2>

//               <p class="work-list-item__text">
//                 ${nameUKR} &#171;${nameEN}&#187;
//               </p>
//             </a>

//             <button class="reg-login__button work-list__button--position" type="submit">
//               <span class="reg-login__button__text">У кошик</span>
//             </button>
//           </div>
//         </li>`
//     )
//     .join("");
// }

// const listItemMarkup = createListItemsMarkup(shopLots);

// shopList.innerHTML = listItemMarkup;

// ===========================================================================
// Анимация Lazy-loading
// ===========================================================================

// const lazyImages = document.querySelectorAll(
//   'img[class="lazyload work-list-item__img"]'
// );

// lazyImages.forEach((image) => {
//   image.addEventListener("load", function () {
//     image.classList.add("appear");
//   });
// });

// ===========================================================================
// Поиск в фильтре
// ===========================================================================
// const inputSearch = document.querySelector("#search");

// const outputError = document.querySelector(".js-output-error");

// inputSearch.value = "";

// inputSearch.addEventListener("input", _.debounce(searchChangeHandler, 1500));

// function searchChangeHandler(event) {
//   const searchItem = event.target.value.trim().toLowerCase();

//   const filteredIitems = shopLots.filter(
//     (shopLot) =>
//       shopLot.nameEN.toLowerCase().includes(searchItem) ||
//       shopLot.nameUKR.toLowerCase().includes(searchItem)
//   );

//   if (filteredIitems.length === 0) {
//     outputError.textContent = "Нажаль, такого товару у нас не має :(";
//     outputError.style.marginTop = "90px";
//     shopList.innerHTML = "";
//     return;
//   } else {
//     outputError.textContent = "";
//     outputError.style.marginTop = "0px";
//   }

//   const listItemsMarkup = createListItemsMarkup(filteredIitems);

//   shopList.innerHTML = listItemsMarkup;

//   // ===========================================================================
//   // Анимация отфильтрованых изборажений
//   // ===========================================================================

//   const lazyImagesFiltered = document.querySelectorAll(
//     'img[class="lazyload work-list-item__img"]'
//   );

//   lazyImagesFiltered.forEach((image) => {
//     image.addEventListener("load", function () {
//       image.classList.add("appear");
//     });
//   });
// }

// ===========================================================================
// Продукти харчування
// ===========================================================================
// const filterMenuFood = document.querySelector(".js-filter__menu-food");
// const filterSecondaryMenuFood = document.querySelector(
//   ".js-filter__secondary-menu-food"
// );

// const filterFoodList = document.querySelector(".js-filter__food-list");
// const filterFoodSecondaryList = document.querySelector(
//   ".js-filter__food-secondary-list"
// );

// const filterIconFoodClose = document.querySelector(
//   ".js-filter__icon-food-close"
// );
// const filterIconFoodOpen = document.querySelector(".js-filter__icon-food-open");

// const filterSecondaryIconFoodOpen = document.querySelector(
//   ".js-filter__secondary-icon-food-open"
// );
// const filterSecondaryIconFoodClose = document.querySelector(
//   ".js-filter__secondary-icon-food-close"
// );

// const filterIconFoodHandler = () => {
//   filterIconFoodClose.classList.toggle("js-icon-close");
//   filterIconFoodOpen.classList.toggle("js-icon-open");
//   filterFoodList.classList.toggle("js-filter-list-open");
// };

// const filterSecondaryIconFoodHandler = () => {
//   filterSecondaryIconFoodClose.classList.toggle("js-icon-close");
//   filterSecondaryIconFoodOpen.classList.toggle("js-icon-open");
//   filterFoodSecondaryList.classList.toggle("js-filter-list-open");
// };

// filterMenuFood.addEventListener("click", filterIconFoodHandler);
// filterSecondaryMenuFood.addEventListener(
//   "click",
//   filterSecondaryIconFoodHandler
// );

// ===========================================================================
// Побутова хімія
// ===========================================================================
// const filterMenuChemical = document.querySelector(".js-filter__menu-chemical");
// const filterSecondaryMenuChemical = document.querySelector(
//   ".js-filter__secondary-menu-chemical"
// );

// const filterChemicalList = document.querySelector(".js-filter__chemical-list");
// const filterChemicalSecondaryList = document.querySelector(
//   ".js-filter__chemical-secondary-list"
// );

// const filterIconChemicalClose = document.querySelector(
//   ".js-filter__icon-chemical-close"
// );
// const filterIconChemicalOpen = document.querySelector(
//   ".js-filter__icon-chemical-open"
// );

// const filterSecondaryIconChemicalOpen = document.querySelector(
//   ".js-filter__secondary-icon-chemical-open"
// );
// const filterSecondaryIconChemicalClose = document.querySelector(
//   ".js-filter__secondary-icon-chemical-close"
// );

// const filterIconChemicalHandler = () => {
//   filterIconChemicalClose.classList.toggle("js-icon-close");
//   filterIconChemicalOpen.classList.toggle("js-icon-open");
//   filterChemicalList.classList.toggle("js-filter-list-open");
// };

// const filterSecondaryIconChemicalHandler = () => {
//   filterSecondaryIconChemicalClose.classList.toggle("js-icon-close");
//   filterSecondaryIconChemicalOpen.classList.toggle("js-icon-open");
//   filterChemicalSecondaryList.classList.toggle("js-filter-list-open");
// };

// filterMenuChemical.addEventListener("click", filterIconChemicalHandler);
// filterSecondaryMenuChemical.addEventListener(
//   "click",
//   filterSecondaryIconChemicalHandler
// );

// ===========================================================================
// Засоби гігієни
// ===========================================================================
// const filterMenuGigiena = document.querySelector(".js-filter__menu-gigiena");
// const filterGigienaList = document.querySelector(".js-filter__gigiena-list");

// const filterIconGigienaClose = document.querySelector(
//   ".js-filter__icon-gigiena-close"
// );

// const filterIconGigienaOpen = document.querySelector(
//   ".js-filter__icon-gigiena-open"
// );

// const filterIconGigienaHandler = () => {
//   filterIconGigienaClose.classList.toggle("js-icon-close");
//   filterIconGigienaOpen.classList.toggle("js-icon-open");
//   filterGigienaList.classList.toggle("js-filter-list-open");
// };

// filterMenuGigiena.addEventListener("click", filterIconGigienaHandler);

// ===========================================================================
// Медицина
// ===========================================================================
// const filterMenuMedicine = document.querySelector(".js-filter__menu-medicine");
// const filterMedicineList = document.querySelector(".js-filter__medicine-list");

// const filterIconMedicineClose = document.querySelector(
//   ".js-filter__icon-medicine-close"
// );

// const filterIconMedicineOpen = document.querySelector(
//   ".js-filter__icon-medicine-open"
// );

// const filterIconMedicineHandler = () => {
//   filterIconMedicineClose.classList.toggle("js-icon-close");
//   filterIconMedicineOpen.classList.toggle("js-icon-open");
//   filterMedicineList.classList.toggle("js-filter-list-open");
// };

// filterMenuMedicine.addEventListener("click", filterIconMedicineHandler);
