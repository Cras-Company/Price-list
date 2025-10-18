import { createCrasoriaKeyMarkup } from './markups.js';
import { refs, onOpenModal, onCloseModal } from './modal.js';
import { crasoriaKeys } from './array-crasoria-keys.js';

const form = document.querySelector('.js-key__form');
const input = document.querySelector('.js-input-key-search');
const box = document.querySelector('.js-modal-crasoria-key');
const outErr = document.querySelector('.js-output-error');
const travolta = document.querySelector('.js-travolta');

function setError(msg = '') {
  if (outErr) {
    outErr.innerHTML = `<h2 class="cras-item__main-title">${msg}</h2>`;
  }
}

function clearError() {
  if (outErr) outErr.innerHTML = '';
}

function renderByQuery(q) {
  const query = String(q || '').trim();
  box.innerHTML = '';
  clearError();

  if (!query) {
    setError('Введіть ключ для пошуку.');
    travolta?.style && (travolta.style.display = 'block');
    return false;
  }

  const found = crasoriaKeys.find(
    (it) => String(it.personal_key).toLowerCase() === query.toLowerCase()
  );

  if (!found) {
    // Если ключ не найден — показать Travolta и сообщение
    setError(`Ключ &#171;${query}&#187; не знайдено`);
    travolta?.style && (travolta.style.display = 'block');
    box.style.display = 'none';
    return false;
  }

  // Если ключ найден — показать данные
  travolta?.style && (travolta.style.display = 'none');
  box.style.display = 'block';
  box.innerHTML = createCrasoriaKeyMarkup([found]);
  clearError();
  return true;
}

// Клик по кнопке
refs.openModalCrasoriaKeyBtn?.addEventListener('click', (e) => {
  renderByQuery(input?.value);
});

// Enter в поле
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const ok = renderByQuery(input?.value);

  if (refs.openModalCrasoriaMenu) onCloseModal(refs.openModalCrasoriaMenu);
  onOpenModal(refs.openModalCrasoriaKey);
});
