const refs = {
  openModalMobileMenuBtn: document.querySelector("[data-modal-mobile-menu-open]"),
  
  // Модальное окно мобилки
  modalMobileMenu: document.querySelector("[data-modal-mobile-menu]"),
  
  // Кнопки закрытия
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
    onCloseModal(modal)
  }
}

function onOpenModal(modal) {
  const marginSize = window.innerWidth - html.clientWidth;
  
  window.addEventListener('keydown', (event) => onEscKeyPress(event, modal));

  modal.addEventListener('click', (event) => onBackdropClick(event, modal));
  
  document.body.classList.add('modal-open');
  modal.classList.remove("is-hidden");

  if (marginSize) {
    html.style.marginRight = marginSize + "px";
  }
}

function onCloseModal(modal) {
  window.removeEventListener('keydown', (event) => onEscKeyPress(event, modal));
  modal.removeEventListener('click', (event) => onBackdropClick(event, modal));

  document.body.classList.remove('modal-open');
  modal.classList.add("is-hidden");

  html.style.marginRight = "";
}

// ===========================================================================
// Отрытие и закрытие модального окна мобилки
// ===========================================================================
  refs.openModalMobileMenuBtn.addEventListener("click", () => onOpenModal(refs.modalMobileMenu));
  refs.closeModalBtn.forEach((btn) => btn.addEventListener("click", () => onCloseModal(refs.modalMobileMenu)));

  function addClickHandler(openModalMobileBtn, modalMobileMenu, modalWindow) {
    openModalMobileBtn.addEventListener("click", () => {
      onCloseModal(modalMobileMenu);
      onOpenModal(modalWindow);
    });
  }

  addClickHandler(refs.openModalEnterBtn[1], refs.modalMobileMenu, refs.modalEnter);
