const refs = {
  openModalMobileMenuBtn: document.querySelector("[data-modal-mobile-menu-open]"),
  modalMobileMenu: document.querySelector("[data-modal-mobile-menu]"),
  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
};

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

function onOpenModal(modal) {
  const marginSize = window.innerWidth - html.clientWidth;
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.addEventListener('keydown', escKeyPressHandler);
  modal.addEventListener('click', backdropClickHandler);

  document.body.classList.add('modal-open');
  modal.classList.remove("is-hidden");

  if (marginSize) {
    html.style.marginRight = marginSize + "px";
  }
}

function onCloseModal(modal) {
  const escKeyPressHandler = (event) => onEscKeyPress(event, modal);
  const backdropClickHandler = (event) => onBackdropClick(event, modal);

  window.removeEventListener('keydown', escKeyPressHandler);
  modal.removeEventListener('click', backdropClickHandler);

  document.body.classList.remove('modal-open');
  modal.classList.add("is-hidden");

  html.style.marginRight = "";
}

// Открытие и закрытие модального окна мобилки
refs.openModalMobileMenuBtn.addEventListener("click", () => onOpenModal(refs.modalMobileMenu));
refs.closeModalBtn.forEach((btn) => btn.addEventListener("click", () => onCloseModal(refs.modalMobileMenu)));

// Добавьте слушатель события для открытия модального окна
refs.openModalMobileMenuBtn.addEventListener("click", () => {
  onOpenModal(refs.modalMobileMenu);
});

// Добавьте слушатель события для закрытия модального окна
refs.closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    onCloseModal(refs.modalMobileMenu);
  });
});
