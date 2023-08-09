// ===========================================================================
// Динамическая разметка
// ===========================================================================

function createListItemsMarkup(items) {
    return items.map(({ type, url, alt, marker, brand, nameEN, companyName, countryName, volume_weight,
                        priceGRN, priceUSDT, quantity, priceGRNOpt, priceUSDTOpt,
                        description01, description02, description03, description04, description05 }) => {

        return `<li class="cras-item">

                    <img class="cras-item__img cras-item--margin" 
                        src="${url}"
                        alt="${alt}" 
                        width="310" 
                        height="310"
                    />

                    <div class="cras-item__description cras-item--margin">

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Маркер:</h4>
                            <p class="cras-item__text cras-item__text--margin">${marker};</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Бренд:</h4>
                            <p class="cras-item__text cras-item__text--margin">&#171;${brand}&#187;;</p>
                        </div>

                        <div class="cras-item__name">
                            <h4 class="cras-item__title cras-item__name--margin">Назва продукту:</h4>
                            <p class="cras-item__text">&#171;${nameEN}&#187;;</p>
                        </div>

                        <div class="cras-item__name">
                            <h4 class="cras-item__title cras-item__name--margin">Компанія - виробник:</h4>
                            <p class="cras-item__text">&#171;${companyName}&#187;;</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Країна - виробник:</h4>
                            <p class="cras-item__text cras-item__text--margin">${countryName};</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Об'єм / Вага:</h4>
                            <p class="cras-item__text cras-item__text--margin">${volume_weight};</p>
                        </div>

                        <div class="cras-item__element">
                            <h4 class="cras-item__title">Ціна (грн. / USDT):</h4>
                            <p class="cras-item__text cras-item__text--margin">${priceGRN} / ${priceUSDT};</p>
                        </div>

                        ${type === 'retail' ? `
                            <div class="cras-item__element">
                                <h4 class="cras-item__title">Кількість на складі (шт.):</h4>
                                <p class="cras-item__text cras-item__text--margin">${quantity};</p>
                            </div>

                        ` : `

                            <div class="cras-item__element">
                                <h4 class="cras-item__title">Ціна (від 24 шт., грн.):</h4>
                                <p class="cras-item__text cras-item__text--margin">${priceGRNOpt};</p>
                            </div>

                            <div class="cras-item__element">
                                <h4 class="cras-item__title">Ціна (від 24 шт., USDT):</h4>
                                <p class="cras-item__text cras-item__text--margin">${priceUSDTOpt};</p>
                            </div>
                        `}
                    </div>

                    <div class="cras-item--width unselectable cras-item--margin">

                        <h4 class="cras-item__title cras-item__secondary-description">Опис товару:</h4>

                        <p class="cras-item__text cras-item__text--margin-sub">${description01}</p>
                        <p class="cras-item__text cras-item__text--margin-sub">${description02}</p>
                        <p class="cras-item__text cras-item__text--margin-sub">${description03}</p>
                        <p class="cras-item__text cras-item__text--margin-sub">${description04}</p>
                        <p class="cras-item__text cras-item__text--margin-sub">${description05}</p>
                    </div>
                </li>`;
    }).join("");
}

// ===========================================================================
// Импорт массивов
// ===========================================================================
import { shopLotsMeansWashingDishes } from "./array-means-washing-dishes.js";
import { shopLotsWashingGels } from "./array-washing-gels.js";
import { shopLotsPowerCaps } from "./array-power-caps.js";
import { shopLotsWashingPowders } from "./array-washing-powders.js";
import { shopLotsSofteners } from "./array-softeners.js";

import { shopLotsMeansCleaning } from "./array-means-cleaning.js";

import { shopLotsStainRemovers } from "./array-stain-removers.js";

// ===========================================================================
// Создание разметки
// ===========================================================================
const shopListMeansWashingDishes = document.querySelector(".js-cras__list--means-washing-dishes");
const shopListWashingGels = document.querySelector(".js-cras__list--washing-gels");
const shopListPowerCaps = document.querySelector(".js-cras__list--power-caps");
const shopListWashingPowders = document.querySelector(".js-cras__list--washing-powder");
const shopListSofteners = document.querySelector(".js-cras__list--softeners");

const shopListMeansCleaning = document.querySelector(".js-cras__list--means-cleaning");

const shopListStainRemovers = document.querySelector(".js-cras__list--stain-removers");

shopListMeansWashingDishes.innerHTML = createListItemsMarkup(shopLotsMeansWashingDishes);
shopListWashingGels.innerHTML = createListItemsMarkup(shopLotsWashingGels);
shopListPowerCaps.innerHTML = createListItemsMarkup(shopLotsPowerCaps);
shopListWashingPowders.innerHTML = createListItemsMarkup(shopLotsWashingPowders);
shopListSofteners.innerHTML = createListItemsMarkup(shopLotsSofteners);

shopListMeansCleaning.innerHTML = createListItemsMarkup(shopLotsMeansCleaning);

shopListStainRemovers.innerHTML = createListItemsMarkup(shopLotsStainRemovers);

// ===========================================================================
// Поиск в фильтре
// ===========================================================================

// Форма поиска
const inputSearch = document.querySelector("#search");
const filterForm = document.querySelector(".js-filter__form");

// Средства для мытья
const SectionAllMeansWashing = document.querySelector(".js-section-all-means-washing");
const BlockWashingDishes = document.querySelector(".js-block-washing-dishes");
const BlockWashingGels = document.querySelector(".js-block-washing-gels");
const BlockPowerCaps = document.querySelector(".js-block-power-caps");
const BlockWashingPowders = document.querySelector(".js-block-washing-powder");
const BlockSofteners = document.querySelector(".js-block-softeners");

// Средства для чистки
const SectionAllMeansCleaning = document.querySelector(".js-section-all-means-cleaning");

// Пятновыводители
const SectionStainRemovers = document.querySelector(".js-section-stain-removers");

// Скрыть секцию
const JSSectionOne = document.querySelectorAll(".js-section-none");

// Нет товара
const outputError = document.querySelector(".js-output-error");

inputSearch.value = "";

filterForm.addEventListener("submit", handleFormSubmit);

function universalSearch(items, searchItem) {
    const searchWords = searchItem.split(" ").filter(word => word.trim() !== "");

    if (searchWords.length === 0) {
        return items;
    }

    const filteredItems = items.filter((shopLot) => {
        for (const key in shopLot) {
            if (typeof shopLot[key] === 'string') {
                const lowerCaseValue = shopLot[key].toLowerCase();
                if (searchWords.every(word => lowerCaseValue.includes(word))) {
                    return true;
                }
            }
        }
        return false;
    });

    return filteredItems;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const searchItem = inputSearch.value.trim().toLowerCase();

    const filteredMeansWashingDishes = universalSearch(shopLotsMeansWashingDishes, searchItem);
    const filteredWashingGels = universalSearch(shopLotsWashingGels, searchItem);
    const filteredPowerCaps = universalSearch(shopLotsPowerCaps, searchItem);
    const filteredWashingPowders = universalSearch(shopLotsWashingPowders, searchItem);
    const filteredSofteners = universalSearch(shopLotsSofteners, searchItem);

    const filteredMeansCleaning = universalSearch(shopLotsMeansCleaning, searchItem);

    const filteredStainRemovers = universalSearch(shopLotsStainRemovers, searchItem);

    const allFilteredItems = [
        ...filteredMeansWashingDishes,
        ...filteredWashingGels,
        ...filteredPowerCaps,
        ...filteredWashingPowders,
        ...filteredSofteners,
        ...filteredMeansCleaning,
        ...filteredStainRemovers
    ];

    if (allFilteredItems.length === 0) {
        outputError.textContent = "Нажаль, такого товару у нас не має :(";
        outputError.style.marginTop = "60px";
        outputError.style.marginBottom = "60px";
        JSSectionOne.forEach((section) => {
            section.style.display = "none";
        });
        return;
    } else {
        outputError.textContent = "";
        outputError.style.marginTop = "0px";
        outputError.style.marginBottom = "0px";
        JSSectionOne.forEach((section) => {
            section.style.display = "block";
        });
    }

    SectionAllMeansWashing.style.display = "block";
    BlockWashingGels.style.display = "block";
    BlockWashingDishes.style.display = "block";
    BlockPowerCaps.style.display = "block";
    BlockWashingPowders.style.display = "block";
    BlockSofteners.style.display = "block";
 
    if (filteredMeansWashingDishes.length > 0 ||
        filteredWashingGels.length > 0 ||
        filteredPowerCaps.length > 0 ||
        filteredWashingPowders.length > 0 ||
        filteredSofteners.length > 0
        ) {
        shopListMeansWashingDishes.innerHTML = createListItemsMarkup(filteredMeansWashingDishes);
        shopListWashingGels.innerHTML = createListItemsMarkup(filteredWashingGels);
        shopListPowerCaps.innerHTML = createListItemsMarkup(filteredPowerCaps);
        shopListWashingPowders.innerHTML = createListItemsMarkup(filteredWashingPowders);
        shopListSofteners.innerHTML = createListItemsMarkup(filteredSofteners);
    } else {
        SectionAllMeansWashing.style.display = "none";
    }

    const shopblocks = [
        { element: shopListMeansWashingDishes, items: filteredMeansWashingDishes, block: BlockWashingDishes },
        { element: shopListWashingGels, items: filteredWashingGels, block: BlockWashingGels },
        { element: shopListPowerCaps, items: filteredPowerCaps, block: BlockPowerCaps },
        { element: shopListWashingPowders, items: filteredWashingPowders, block: BlockWashingPowders },
        { element: shopListSofteners, items: filteredSofteners, block: BlockSofteners }
    ];

     shopblocks.forEach(shopblock => {
        if (shopblock.items.length > 0) {
            shopblock.element.innerHTML = createListItemsMarkup(shopblock.items);
        } else {
            shopblock.block.style.display = "none";
        }
    });

    const shopsections = [
        { element: shopListStainRemovers, items: filteredStainRemovers, section: SectionStainRemovers },
        { element: shopListMeansCleaning, items: filteredMeansCleaning, section: SectionAllMeansCleaning }
    ];

    shopsections.forEach(shopsection => {
        if (shopsection.items.length > 0) {
            shopsection.element.innerHTML = createListItemsMarkup(shopsection.items);
        } else {
            shopsection.section.style.display = "none";
        }
    });
}
