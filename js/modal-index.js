export const refs = {
  openModalMobileSearchBtns: document.querySelectorAll("[data-mobile-search-button]"),
  modalMobileMenuSearch: document.querySelector("[data-modal-search-menu]"),

  mobileSearchBtn: document.querySelector("[data-search-button]"),

  openModalMobileMenuBtn: document.querySelectorAll("[data-modal-mobile-menu-open]"),
  modalMobileMenu: document.querySelector("[data-modal-mobile-menu]"),

  openModalMobileMainMenuBtn: document.querySelector("[data-mobile-main-menu]"),
  modalMobileMainMenu: document.querySelector("[data-modal-main-menu]"),

  openModalLot: document.querySelector("[data-modal-lot]"),
  openModalLotBtn: document.querySelector("[data-modal-lot-open]"),

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
  const header = document.querySelector(".js-header")
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.removeEventListener('keydown', escKeyPressHandler);
  modal.removeEventListener('click', backdropClickHandler);

  document.body.classList.remove('modal-open');
  modal.classList.add("is-hidden");

  html.style.marginRight = "";
  header.style.marginLeft = "0";
}

// Открытие и закрытие модального окна мобилки
refs.openModalMobileSearchBtns.forEach(button => {
  button.addEventListener("click", () => {
    onOpenModal(refs.modalMobileMenuSearch);
    onCloseModal(refs.modalMobileMainMenu);
  });
});

refs.openModalMobileMenuBtn.forEach(button => {
  button.addEventListener("click", () => {
    onOpenModal(refs.modalMobileMenu);
  });
});

refs.openModalMobileMainMenuBtn.addEventListener("click", () => onOpenModal(refs.modalMobileMainMenu));

refs.mobileSearchBtn.addEventListener('click', () => onCloseModal(refs.modalMobileMenuSearch));

refs.closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    onCloseModal(refs.modalMobileMenuSearch);
    onCloseModal(refs.modalMobileMenu);
    onCloseModal(refs.modalMobileMainMenu);
  });
});

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    onCloseModal(refs.modalMobileMenuSearch);
  });
});
