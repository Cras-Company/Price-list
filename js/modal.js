export const refs = {
  openModalBurgerMenuBtn: document.querySelector("[data-modal-burger-menu-btn]"),
  openModalBurgerMenu: document.querySelector("[data-modal-burger-menu]"),

  // openModalRegisterBtns: document.querySelectorAll("[data-btn-register-open]"),
  // modalRegisterMenu: document.querySelector("[data-modal-register]"),

  // openModalLoginBtns: document.querySelectorAll("[data-btn-login-open]"),
  // modalLoginMenu: document.querySelector("[data-modal-login]"),

  openModalBasketBtns: document.querySelectorAll("[data-modal-basket]"),
  modalBasketMenu: document.querySelector("[data-modal-basket-menu]"),
  modalBasketOrder: document.querySelector("[data-modal-basket-order]"),

  openModalLot: document.querySelector("[data-modal-lot]"),

  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
};

const filterSale = document.querySelectorAll('.filter__menu[data-target="sale"]');
const categoryItems = document.querySelectorAll(".js-category-items");

const html = document.documentElement;

function onEscKeyPress(event, modal) {
  if (event.code === 'Escape') {
    onCloseModal(modal);
  }
}

function onBackdropClick(event, modal) {
  if (event.target === event.currentTarget) {
    onCloseModal(modal);
  }
}

export function onOpenModal(modal) {
  const marginSize = window.innerWidth - html.clientWidth;
  const header = document.querySelector(".js-header");
  const loginBasket = document.querySelector(".js-header__login-basket");
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.addEventListener('keydown', escKeyPressHandler);
  modal.addEventListener('click', backdropClickHandler);

  document.body.classList.add('modal-open');
  modal.classList.remove("is-hidden");

  if (marginSize) {
    html.style.marginRight = marginSize + "px";

    if (window.innerWidth >= 1280 && window.innerWidth <= 1500) {
      loginBasket.style.marginLeft = 0.5 + "px";
    } else {
      header.style.marginLeft = "-8.5px";
    }
  }
}

export function onCloseModal(modal) {
  const header = document.querySelector(".js-header");
  const loginBasket = document.querySelector(".js-header__login-basket");
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.removeEventListener('keydown', escKeyPressHandler);
  modal.removeEventListener('click', backdropClickHandler);

  document.body.classList.remove('modal-open');
  modal.classList.add("is-hidden");

  html.style.marginRight = "";
  header.style.marginLeft = "0";
  loginBasket.style.marginLeft = "";
}

// Открытие меню регистрации
// refs.openModalRegisterBtns.forEach(button => {
//   button.addEventListener("click", () => {
//     if (!refs.openModalBurgerMenu.classList.contains("is-hidden")) {
//       onCloseModal(refs.openModalBurgerMenu);

//       setTimeout(() => {
//         onOpenModal(refs.modalRegisterMenu);
//       }, 250);
//     } else {
//       onOpenModal(refs.modalRegisterMenu);
//     }
//   });
// });

// Открытие меню логина
// refs.openModalLoginBtns.forEach(button => {
//   button.addEventListener("click", () => {
//     if (!refs.openModalBurgerMenu.classList.contains("is-hidden")) {
//       onCloseModal(refs.openModalBurgerMenu);

//       setTimeout(() => {
//         onOpenModal(refs.modalLoginMenu);
//       }, 250);
//     } else {
//       onOpenModal(refs.modalLoginMenu);
//     }
//   });
// });

// Открытие корзины
refs.openModalBasketBtns.forEach(button => {
  button.addEventListener("click", () => {
    onOpenModal(refs.modalBasketMenu)
  });
});

// Открытие главного бургер-меню
refs.openModalBurgerMenuBtn.addEventListener("click", () => onOpenModal(refs.openModalBurgerMenu));

refs.closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    onCloseModal(refs.openModalBurgerMenu);
    // onCloseModal(refs.modalRegisterMenu);
    // onCloseModal(refs.modalLoginMenu);
    onCloseModal(refs.modalBasketMenu);
    onCloseModal(refs.modalBasketOrder);
    onCloseModal(refs.openModalLot);
  });
});

// filterSale.forEach(item => {
//   item.addEventListener('click', () => {
//     onCloseModal(refs.modalMobileMenuSearch);
//   });
// });

// categoryItems.forEach(item => {
//   item.addEventListener('click', () => {
//     onCloseModal(refs.modalMobileMenuSearch);
//   });
// });
