// ===========================================================================
// Динамическая разметка на мобилку
// ===========================================================================

export function createMobileListItemsMarkup(items) {    
    const USDTRate = 37.47;

    return items.map(({ url, alt, marker, brand, nameUKR, nameEN, countryName,
                    volumeName, weightName, quantityName, volume, weight, quantity,
                    priceGRN, priceUSDT, priceGRNOpt }) => {

        priceUSDT = (Number(priceGRN) / USDTRate).toFixed(2);

        return `<li class="cras-block">

                    <button class="cras-block__button" type="submit" data-modal-lot-open>

                        <div class="cras-item__element">

                            <h4 class="cras-item__title">Маркер:</h4>

                            <p class="cras-item__text cras-item__text--margin">${marker}</p>
                        </div>

                        <img
                        class="lazyload"
                        loading="lazy"                            
                        data-src="${url}" 
                        alt="${alt}"
                        width="310" 
                        height="310"
                        />

                        ${priceGRN === '--' ? `

                                <div class="cras-item__element">

                                    <h4 class="cras-item__title"><span class="cras-item__action">ТІЛЬКИ ОПТОМ</span></h4>
                                </div>

                            ` : `

                                <div class="cras-item__element">

                                    <h4 class="cras-item__price">${priceGRN} грн. - ${priceUSDT} USDT</h4>
                                </div>
                        `}

                        ${(priceGRNOpt && priceGRN !== '--') ? `

                            <div class="cras-item__element">

                            <h4 class="cras-item__title"><span class="cras-item__action">ОПТОМ ДЕШЕВШЕ</span></h4>
                            </div>

                        ` : ''}

                        ${volumeName ? `

                            <div class="cras-item__element">

                                <h4 class="cras-item__title">${volumeName}:</h4>

                                <p class="cras-item__text cras-item__text--margin">${volume}</p>
                            </div>

                        ` : (weightName ? `

                            <div class="cras-item__element">

                                <h4 class="cras-item__title">${weightName}:</h4>

                                <p class="cras-item__text cras-item__text--margin">${weight}</p>
                            </div>

                        ` : `
                            <div class="cras-item__element">

                                <h4 class="cras-item__title">${quantityName}:</h4>

                                <p class="cras-item__text cras-item__text--margin">${quantity}</p>
                            </div>
                        `)}

                        <div class="cras-item__element">

                            <h4 class="cras-item__title">Країна:</h4>

                            <p class="cras-item__text cras-item__text--margin">${countryName}</p>
                        </div>

                        <div class="cras-item__element cras-item__element--reset">

                            <p class="cras-item__text cras-item__text--position cras-item__text--margin-bot">${nameUKR}</p>

                            <p class="cras-item__text cras-item__text--position">&#171;${brand} - ${nameEN}&#187;</p>
                        </div>
                    </button>

                    <a class="link__button" href="./licence.html"><span class="link__button__text">Замовити</span></a>
                </li>`;
    }).join("");
}

// ===========================================================================
// Динамическая разметка
// ===========================================================================

export function createModalListItemsMarkup(items) {
    const USDTRate = 37.47;

    return items.map(({ type, url, alt, marker, brand, nameEN, nameUKR, companyName, countryName,
                            volumeName, weightName, quantityName, volume, weight, quantity,
                            priceGRN, priceUSDT, quantityOnStorage, priceGRNOpt, priceUSDTOpt,
                            description01, description02, description03, description04, description05 }) => {
        
        priceUSDT = (Number(priceGRN) / USDTRate).toFixed(2);

        priceUSDTOpt = (Number(priceGRNOpt) / USDTRate).toFixed(2);
                
        return `<div class="cras-item">

                    <div class="cras-item__title-box">

                        <h2 class="cras-item__main-title cras-item__main-title--margin">${nameUKR}</h2>

                        <h2 class="cras-item__main-title">&#171;${brand} - ${nameEN}&#187;</h2>
                    </div>

                    <div class="cras-item--flex">

                        <img class="lazyload cras-item__img cras-item__img--lot"
                            loading="lazy"
                            data-src="${url}"
                            alt="${alt}" 
                            width="310" 
                            height="310"
                        />

                        <div class="cras-item__description">

                            <div class="cras-item__element cras-item__element--left">
                                <h4 class="cras-item__title cras-mobile-font">Маркер:</h4>
                                <p class="cras-item__text cras-item__text--margin cras-mobile-font">${marker};</p>
                            </div>

                            <div class="cras-item__element cras-item__element--left">
                                <h4 class="cras-item__title cras-mobile-font">Бренд:</h4>
                                <p class="cras-item__text cras-item__text--margin cras-mobile-font">&#171;${brand}&#187;;</p>
                            </div>

                            <div class="cras-item__name">
                                <h4 class="cras-item__title cras-mobile-font cras-item__name--margin">Назва продукту:</h4>
                                <p class="cras-item__text cras-mobile-font">&#171;${nameEN}&#187;;</p>
                            </div>

                            <div class="cras-item__name">
                                <h4 class="cras-item__title cras-mobile-font cras-item__name--margin">Компанія - виробник:</h4>
                                <p class="cras-item__text cras-mobile-font">&#171;${companyName}&#187;;</p>
                            </div>

                            <div class="cras-item__element cras-item__element--left">
                                <h4 class="cras-item__title cras-mobile-font">Країна - виробник:</h4>
                                <p class="cras-item__text cras-item__text--margin cras-mobile-font">${countryName};</p>
                            </div>

                            ${volumeName ? `

                                <div class="cras-item__element cras-item__element--left">

                                    <h4 class="cras-item__title cras-mobile-font">${volumeName}:</h4>

                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${volume}</p>
                                </div>

                            ` : (weightName ? `

                                <div class="cras-item__element cras-item__element--left">

                                    <h4 class="cras-item__title cras-mobile-font">${weightName}:</h4>

                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${weight}</p>
                                </div>

                            ` : `
                                <div class="cras-item__element cras-item__element--left">

                                    <h4 class="cras-item__title cras-mobile-font">${quantityName}:</h4>

                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${quantity}</p>
                                </div>
                            `)}

                            ${priceGRN !== "--" ? `
                                <div class="cras-item__element cras-item__element--left">
                                    <h4 class="cras-item__title cras-mobile-font">Ціна (грн. / USDT):</h4>
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${priceGRN} / ${priceUSDT};</p>
                                </div>

                            ` : `

                                <div></div>
                            `}

                            ${type === 'retail' ? `
                                <div class="cras-item__element cras-item__element--left">
                                    <h4 class="cras-item__title cras-mobile-font">Кількість на складі (шт.):</h4>
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${quantityOnStorage};</p>
                                </div>

                            ` : `

                                <div class="cras-item__element cras-item__element--left">
                                    <h4 class="cras-item__title cras-mobile-font">Ціна (від 12 шт., грн.):</h4>
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${priceGRNOpt};</p>
                                </div>

                                <div class="cras-item__element cras-item__element--left">
                                    <h4 class="cras-item__title cras-mobile-font">Ціна (від 12 шт., USDT):</h4>
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">${priceUSDTOpt};</p>
                                </div>
                            `}

                            <a class="link__button link__button--mobile" href="./licence.html"><span class="link__button__text">Замовити</span></a>
                        </div>

                    </div>

                    <div class="price__icon-box js-price__box">

                        <svg class="price__icon-close js-price__icon-close" width="40" height="40">
                    
                            <use href="./images/icon/sprite.svg#icon-eye-close"></use>
                        </svg>
                    
                        <svg class="price__icon-open js-price__icon-open" width="40" height="40">
                    
                            <use href="./images/icon/sprite.svg#icon-eye-open"></use>
                        </svg>

                        <h4 class="cras-item__title cras-mobile-font unselectable">Опис товару:</h4>
                    </div>
        
                    <div class="price__lot-description unselectable cras-item--margin js-price__lot-description">

                        <p class="cras-item__text cras-mobile-font cras-item__text--margin-sub">${description01}</p>
                        <p class="cras-item__text cras-mobile-font cras-item__text--margin-sub">${description02}</p>
                        <p class="cras-item__text cras-mobile-font cras-item__text--margin-sub">${description03}</p>
                        <p class="cras-item__text cras-mobile-font cras-item__text--margin-sub">${description04}</p>
                        <p class="cras-item__text cras-mobile-font cras-item__text--margin-sub">${description05}</p>

                        <a class="link__button link__button--mobile" href="./licence.html"><span class="link__button__text">Замовити</span></a>

                    </div>
                </div>`;
    });
}