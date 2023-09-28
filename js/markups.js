// ===========================================================================
// Динамическая разметка на мобилку
// ===========================================================================

// Курс USDT
export const USDTRate = 37.47;

export function createMobileListItemsMarkup(items) {    

    return items.map(({ url, alt, marker, brand, nameUKR, nameEN, countryName,
                    volumeName, weightName, quantityName, volume, weight, quantity,
                    priceGRN, priceUSDT, priceGRNOpt }) => {

        priceUSDT = (Number(priceGRN) / USDTRate).toFixed(2);

        return `<li class="cras-block" data-basket-marker="${marker}">

                    <button class="cras-block__button" type="submit" data-modal-lot-open>

                        <div class="cras-item__element">

                            <h4 class="cras-item__title">Маркер:</h4>

                            <p class="cras-item__text cras-item__text--margin js-marker">${marker}</p>
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

                                    <h4 class="cras-item__price">
                                    <span class="cinzel">${priceGRN}</span> грн. - 
                                    <span class="cinzel">${priceUSDT}</span> USDT</h4>
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
                    
                    <div class="cras-block__order">

                        <a class="link__button" href="./licence.html"><span class="link__button__text">Замовити</span></a>

                        <button class="cras-block__button-busket" type="button" data-lot-basket>
        
                            <svg class="basket__icon-in js-basket__icon-in" width="40" height="40">
        
                                <use href="./images/icon/sprite.svg#basket-in"></use>
                            </svg>
        
                            <svg class="basket__icon-out js-basket__icon-out" width="40" height="40">
        
                                <use href="./images/icon/sprite.svg#basket-out"></use>
                            </svg>
                        </button>
                    </div>
                </li>`;
    }).join("");
}

// ===========================================================================
// Динамическая разметка
// ===========================================================================

export function createModalListItemsMarkup(items) {

    return items.map(({ type, url, alt, marker, brand, nameEN, nameUKR, companyName, countryName,
                            volumeName, weightName, quantityName, volume, weight, quantity,
                            priceGRN, priceUSDT, quantityOnStorage, priceGRNOpt, priceUSDTOpt,
                            description01, description02, description03, description04, description05 }) => {
        
        priceUSDT = (Number(priceGRN) / USDTRate).toFixed(2);

        priceUSDTOpt = (Number(priceGRNOpt) / USDTRate).toFixed(2);
                
        return `<div class="cras-item js-cras-item" data-basket-marker="${marker}">

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
                                <p class="cras-item__text cras-item__text--margin cras-mobile-font js-marker">${marker};</p>
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
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">
                                    <span class="cinzel">${priceGRN}</span> / <span class="cinzel">${priceUSDT}</span>;</p>
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
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">
                                    <span class="cinzel">${priceGRNOpt}</span>;</p>
                                </div>

                                <div class="cras-item__element cras-item__element--left">
                                    <h4 class="cras-item__title cras-mobile-font">Ціна (від 12 шт., USDT):</h4>
                                    <p class="cras-item__text cras-item__text--margin cras-mobile-font">
                                    <span class="cinzel">${priceUSDTOpt}</span>;</p>
                                </div>
                            `}

                            <div class="cras-block__order">

                                <a class="link__button link__button--mobile" href="./licence.html"><span class="link__button__text">Замовити</span></a>

                                <button class="cras-block__button-busket cras-block__button-busket--reset" type="button" data-lot-basket>
                
                                    <svg class="basket__icon-in js-basket__icon-in" width="40" height="40">
                
                                        <use href="./images/icon/sprite.svg#basket-in"></use>
                                    </svg>
                
                                    <svg class="basket__icon-out js-basket__icon-out" width="40" height="40">
                
                                        <use href="./images/icon/sprite.svg#basket-out"></use>
                                    </svg>
                                </button>
                            </div>
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

                        <a class="link__button link__button--description" href="./licence.html"><span class="link__button__text">Замовити</span></a>

                    </div>
                </div>`;
    });
}

// ===========================================================================
// Динамическая разметка на корзину
// ===========================================================================

export function createBasketListItemsMarkup(items) {    

    return items.map(({ type, url, alt, marker, brand, nameUKR, nameEN,
                    priceGRN, priceUSDT, priceGRNOpt, priceUSDTOpt}) => {

        priceUSDT = (Number(priceGRN) / USDTRate).toFixed(2);

        priceUSDTOpt = (Number(priceGRNOpt) / USDTRate).toFixed(2);

        return `<li class="basket__item" data-basket-marker="${marker}">

                    <div class="basket__case">

                        <img
                            class="lazyload basket__img"
                            loading="lazy"                            
                            data-src="${url}" 
                            alt="${alt}"
                            width="310" 
                            height="310"
                        />

                        <div class="cras-item__basket-description">

                            <div class="cras-item__busket-element">
                            
                                <h4 class="cras-item__busket-title">Маркер:</h4>
                            
                                <p class="cras-item__busket-text cras-item__text--margin js-marker">${marker}</p>
                            </div>
                        
                            <div class="cras-item__element cras-item__element--reset cras-item__busket-element-reset">
                        
                                <p class="cras-item__busket-text cras-item__text--position cras-item__text--margin-bot">${nameUKR}</p>
                        
                                <p class="cras-item__busket-text cras-item__text--position">&#171;${brand} - ${nameEN}&#187;</p>
                            </div>

                            ${type === 'retail' ? `

                                <div></div>
                            
                             ` : `

                                <div class="basket__wholesale-сheckbox unselectable">

                                    <label class="basket__wholesale-label" for="${marker}">

                                        <input id="${marker}" 
                                            class="basket__wholesale-сheckbox-input js-basket__wholesale-сheckbox-input" 
                                            type="checkbox" 
                                            name="wholesale-input" 
                                            value="basket__wholesale-сheckbox-input">

                                        <svg class="basket__wholesale-icon" width="20" height="20">
                                        
                                            <use class="basket__icon-unchecked" href="./images/icon/sprite.svg#icon-basket-uncheked"></use>

                                            <use class="basket__icon-checked" href="./images/icon/sprite.svg#icon-basket-cheked"></use>
                                        </svg>

                                        <div class="basket__wholesale-text">

                                            <p>Купити оптом</p>

                                            <p class="cras-item__busket-title--position">
                                                <span class="cinzel">${priceGRNOpt}</span> / 
                                                <span class="cinzel">${priceUSDTOpt}</span>
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            `}
                        </div>
                    </div>

                    <div class="basket__footer">

                        <div class="basket__footer-price">


                            <div class="cras-item__element cras-item__element--basket js-basket-price-retail">
                            
                                <h4 class="basket__price">
                                    <span class="cinzel basket__price--wight js-priceGRN">${priceGRN}</span> грн. / 
                                    <span class="cinzel basket__price--wight js-priceUSDT">${priceUSDT}</span> USDT
                                </h4>
                            </div>

                            <div class="cras-item__element cras-item__element--basket js-basket-price-wholesale">
                            
                                <h4 class="basket__price">
                                    <span class="cinzel basket__price--wight js-priceOptGRN"></span> грн. / 
                                    <span class="cinzel basket__price--wight js-priceOptUSDT"></span> USDT
                                </h4>
                            </div>

                            <div class="busket__price-change">

                                <button class="price-arrow" type="button" data-price-down>

                                    <svg width="30" height="30">
                                        <use href="./images/icon/sprite.svg#icon-price-arrow"></use>
                                    </svg>
                                </button>

                                <div class="box-quantity">

                                    <span class="item-quantity js-item-quantity">1</span>
                                </div>

                                <button class="price-arrow price-arrow--rotate" type="button" data-price-up>
                                    
                                    <svg width="30" height="30">
                                        <use href="./images/icon/sprite.svg#icon-price-arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <button class="basket-remove" type="button" data-modal-remove-item>
                        
                            <svg width="50" height="50">
                        
                                <use href="./images/icon/sprite.svg#basket-biohazard"></use>
                            </svg>
                        </button>
                    </div>
                </li>`;
    }).join("");
}

// ===========================================================================
// Динамическая разметка на корзину, футер
// ===========================================================================

export function createBasketOrderMarkup() {

    return `<h2 class="basket__order-title"><span class="basket__order-title--color">До сплати:</span> 

                    <span class="basket__price-gnr js-basket__price-gnr">
                    <span class="cinzel js-total-priceGRN"></span></span> грн. /

                    <span class="basket__price-usdt js-basket__price-usdt">
                    <span class="cinzel js-total-priceUSDT"></span></span> USDT</h2>

                <button class="button__copy" type="button">

                    <p class="basket__copy-markers">Скопіювати всі маркери</p>
                    
                    <svg width="15" height="15">
                    
                        <use href="./images/icon/sprite.svg#copy"></use>
                    </svg>
                </button>

                <a class="link__button link__button--description" href="./licence.html">
                
                    <span class="link__button__text">Замовити</span>
                </a>`;
};
