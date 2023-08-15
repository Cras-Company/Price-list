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
const filterMenus = document.querySelectorAll(".js-filter__menu");
const filterSecondaryMenus = document.querySelectorAll(".js-filter__secondary-menu");

const filterLists = document.querySelectorAll(".js-filter__list");
const filterSecondaryLists = document.querySelectorAll(".js-filter__secondary-list");

const filterIconsOpen = document.querySelectorAll(".js-filter__icon-open");
const filterIconsClose = document.querySelectorAll(".js-filter__icon-close");

const filterSecondaryIconsOpen = document.querySelectorAll(".js-filter__secondary-icon-open");
const filterSecondaryIconsClose = document.querySelectorAll(".js-filter__secondary-icon-close");

// const filterIconHandler = () => {
//   filterIconClose.classList.toggle("js-icon-close");
//   filterIconOpen.classList.toggle("js-icon-open");
//   filterList.classList.toggle("js-filter-list-open");
// };

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

// filterMenu.addEventListener("click", filterIconHandler);

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
