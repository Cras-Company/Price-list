export const refs = {
  openModalMobileSearchBtns: document.querySelectorAll("[data-mobile-search-button]"),
  modalMobileMenuSearch: document.querySelector("[data-modal-search-menu]"),

  mobileSearchBtn: document.querySelector("[data-search-button]"),

  openModalMobileMenuBtn: document.querySelector("[data-modal-mobile-menu-open]"),
  modalMobileMenu: document.querySelector("[data-modal-mobile-menu]"),

  openModalBasketBtns: document.querySelectorAll("[data-modal-basket]"),
  modalBasketMenu: document.querySelector("[data-modal-basket-menu]"),

  openModalMobileMainMenuBtn: document.querySelector("[data-mobile-main-menu]"),
  modalMobileMainMenu: document.querySelector("[data-modal-main-menu]"),

  openModalLot: document.querySelector("[data-modal-lot]"),

  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
};

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
  const header = document.querySelector(".js-header")
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.addEventListener('keydown', escKeyPressHandler);
  modal.addEventListener('click', backdropClickHandler);

  document.body.classList.add('modal-open');
  modal.classList.remove("is-hidden");

  if (marginSize) {
    html.style.marginRight = marginSize + "px";
    header.style.marginLeft = -8.5 + "px"
  }
}

export function onCloseModal(modal) {
  const header = document.querySelector(".js-header");
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.removeEventListener('keydown', escKeyPressHandler);
  modal.removeEventListener('click', backdropClickHandler);

  document.body.classList.remove('modal-open');
  modal.classList.add("is-hidden");

  html.style.marginRight = "";
  header.style.marginLeft = "0";
}

// Открытие меню поиска
refs.openModalMobileSearchBtns.forEach(button => {
  button.addEventListener("click", () => {
    if (!refs.modalMobileMainMenu.classList.contains("is-hidden")) {
      onCloseModal(refs.modalMobileMainMenu);

      setTimeout(() => {
        refs.openModalMobileSearchBtns[0].click();
      }, 250);
    } else {
      onOpenModal(refs.modalMobileMenuSearch);
    }
  });
});

// Открытие мобильного меню
refs.openModalMobileMenuBtn.addEventListener("click", () => onOpenModal(refs.modalMobileMenu));

// Открытие корзины
refs.openModalBasketBtns.forEach(button => {
  button.addEventListener("click", () => {
    onOpenModal(refs.modalBasketMenu)
  });
});

// Открытие главного меню
refs.openModalMobileMainMenuBtn.addEventListener("click", () => onOpenModal(refs.modalMobileMainMenu));

// Закрытие окна при клике на "поиск"
refs.mobileSearchBtn.addEventListener('click', () => onCloseModal(refs.modalMobileMenuSearch));

refs.closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    onCloseModal(refs.modalMobileMenuSearch);
    onCloseModal(refs.modalMobileMenu);
    onCloseModal(refs.modalMobileMainMenu);
    onCloseModal(refs.modalBasketMenu);
    onCloseModal(refs.openModalLot);
  });
});

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    onCloseModal(refs.modalMobileMenuSearch);
  });
});
