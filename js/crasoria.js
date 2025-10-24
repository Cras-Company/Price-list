import { createCrasoriaKeyMarkup } from './markups.js';
import { refs, onOpenModal, onCloseModal } from './modal.js';
import { crasoriaKeys } from './array-crasoria-keys.js';

const form     = document.querySelector('.js-key__form');
const keyInput = document.querySelector('.js-input-key-search');
const box      = document.querySelector('.js-modal-crasoria-key');
const outErr   = document.querySelector('.js-output-error');
const travolta = document.querySelector('.js-travolta');

// ==== Хелперы ошибок ====
function setError(msg = '') {
  if (outErr) outErr.innerHTML = `<h2 class="cras-item__main-title">${msg}</h2>`;
}
function clearError() { if (outErr) outErr.innerHTML = ''; }

// ==== Нормализация и ограничение ввода ====
if (keyInput) {
  keyInput.setAttribute('maxlength', '6');
  keyInput.setAttribute('autocomplete', 'off');

  const formatValue = (raw) => {
    raw = String(raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    const letters = raw.match(/^[A-Z]{0,3}/)?.[0] || '';
    const numbers = raw.slice(letters.length).replace(/\D/g, '').slice(0, 3);
    return letters.length === 3 ? (letters + numbers) : letters;
  };

  const applyFormat = (e) => {
    const formatted = formatValue(e.target.value);
    if (e.target.value !== formatted) e.target.value = formatted;
  };

  keyInput.addEventListener('input', applyFormat);

  keyInput.addEventListener('paste', (e) => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text');
    keyInput.value = formatValue(text);
  });
}

// ==== Рендер по запросу ====
function renderByQuery(q) {
  // дополнительно нормализуем то, что пришло
  const raw = String(q || '').toUpperCase();
  const letters = raw.match(/^[A-Z]{0,3}/)?.[0] || '';
  const numbers = raw.slice(letters.length).replace(/\D/g, '').slice(0, 3);
  const finalValue = letters.length === 3 ? (letters + numbers) : letters;

  // отражаем нормализованное значение в поле
  if (keyInput && keyInput.value !== finalValue) keyInput.value = finalValue;

  box.innerHTML = '';
  clearError();

  if (!finalValue) {
    setError('Введіть ключ для пошуку');
    if (travolta?.style) travolta.style.display = 'block';
    box.style.display = 'none';
    return false;
  }

  if (finalValue.length < 6) {
    setError('Введіть повний ключ (3 літери + 3 цифри).');
    if (travolta?.style) travolta.style.display = 'block';
    box.style.display = 'none';
    return false;
  }

  // Поиск по массиву (пример ключа — "mmm003")
  const found = crasoriaKeys.find(
    (it) => String(it.personal_key).toUpperCase() === finalValue
  );

  if (!found) {
    setError(`Ключ &#171;${finalValue}&#187; не знайдено`);
    if (travolta?.style) travolta.style.display = 'block';
    box.style.display = 'none';
    return false;
  }

  // Найден — показываем карточку
  if (travolta?.style) travolta.style.display = 'none';
  box.style.display = 'block';
  box.innerHTML = createCrasoriaKeyMarkup([found]);
  clearError();
  return true;
}

// ==== События: кнопка и submit (Enter) ====
refs.openModalCrasoriaKeyBtn?.addEventListener('click', (e) => {
  e.preventDefault(); // кнопка в форме — не сабмитим
  const ok = renderByQuery(keyInput?.value);
  if (refs.openModalCrasoriaMenu) onCloseModal(refs.openModalCrasoriaMenu);
  onOpenModal(refs.openModalCrasoriaKey);
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = renderByQuery(keyInput?.value);
  if (refs.openModalCrasoriaMenu) onCloseModal(refs.openModalCrasoriaMenu);
  onOpenModal(refs.openModalCrasoriaKey);
});
