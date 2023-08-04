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

import { shopLotsMeansWashingDishes } from "./array-means-washing-dishes.js";
import { shopLotsWashingPowders } from "./array-washing-powders.js";
import { shopLotsMeansCleaning } from "./array-means-cleaning.js";

const shopListMeansWashingDishes = document.querySelector(".js-cras__list--means-washing-dishes");
const shopListWashingPowders = document.querySelector(".js-cras__list--washing-powder");
const shopListMeansCleaning = document.querySelector(".js-cras__list--means-cleaning");

shopListMeansWashingDishes.innerHTML = createListItemsMarkup(shopLotsMeansWashingDishes);
shopListWashingPowders.innerHTML = createListItemsMarkup(shopLotsWashingPowders);
shopListMeansCleaning.innerHTML = createListItemsMarkup(shopLotsMeansCleaning);
