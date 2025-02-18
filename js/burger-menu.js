import { jumpBurger } from './supporting_functions.js'

const burgerIconsClose = document.querySelectorAll(".js-burger__icon-close");
const burgerIconsOpen = document.querySelectorAll(".js-burger__icon-open");

const burgerSecondaryIconsClose = document.querySelectorAll(".js-burger__main-icon-close");
const burgerSecondaryIconsOpen = document.querySelectorAll(".js-burger__main-icon-open");

const burgerIconsGear = document.querySelectorAll(".js-burger__gear-button");
const burgerIconsSecondaryGear = document.querySelectorAll(".js-burger__main-gear-button");

const burgerMainLists = document.querySelectorAll(".js-burger__main-list");
const burgerSecondaryLists = document.querySelectorAll(".js-burger__secondary-list");

const burgerItemMainCase = document.querySelectorAll(".js-modal__burger-item__main-case");
const burgerItemSecondaryCase = document.querySelectorAll(".js-modal__burger-item__secondary-case");

const burgerIconHandler = (menuIndex) => {
    const iconClose = burgerIconsClose[menuIndex];
    const iconOpen = burgerIconsOpen[menuIndex];
    const mainList = burgerMainLists[menuIndex];
    const mainCase = burgerItemMainCase[menuIndex];

    iconClose.classList.toggle("js-icon-close");
    iconOpen.classList.toggle("js-icon-open");

    if (!mainList.classList.contains("js-burger-list-open")) {
      mainList.classList.add("js-burger-list-open");
      
      if (mainList.classList.contains("burger__main-list--scroll")) {
        mainCase.style.height = '220px';
      } else {
        mainCase.style.height = mainList.scrollHeight + 'px';
      }
    } else {
      mainList.classList.remove("js-burger-list-open");

      mainCase.style.height = '0px';
    }
};

burgerIconsGear.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    burgerIconHandler(index);
    menu.classList.toggle("rotate");

    // Прокрутка контента к родительскому элементу
    jumpBurger(event); // Передаем событие для определения нажатой иконки
  });
});

burgerIconsSecondaryGear.forEach((secondaryMenu, secondaryIndex) => {
  secondaryMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    
    const secondaryIconClose = burgerSecondaryIconsClose[secondaryIndex];
    const secondaryIconOpen = burgerSecondaryIconsOpen[secondaryIndex];
    const secondaryList = burgerSecondaryLists[secondaryIndex];
    const secondaryCase = burgerItemSecondaryCase[secondaryIndex];
    const mainCase = secondaryMenu.closest('.js-modal__burger-item').querySelector('.js-modal__burger-item__main-case');

    secondaryIconClose.classList.toggle("js-icon-close");
    secondaryIconOpen.classList.toggle("js-icon-open");

    if (!secondaryList.classList.contains("js-burger-list-open")) {
      secondaryList.classList.add("js-burger-list-open");
      
      secondaryCase.style.height = secondaryList.scrollHeight + 'px';
      mainCase.style.height = parseInt(mainCase.style.height) + parseInt(secondaryCase.style.height) + 'px';
    } else {
      secondaryList.classList.remove("js-burger-list-open");
      mainCase.style.height = parseInt(mainCase.style.height) - parseInt(secondaryCase.style.height) + 'px';
      secondaryCase.style.height = '0px';
    }

    secondaryMenu.classList.toggle("secondary-rotate");
  });
});
