// =========================================================разметки==================
// Импорт внешних источников
// ===========================================================================
import {
  createMobileListItemsMarkup,
  createModalListItemsMarkup,
} from './markups.js';

import { restoreIcons, lotBasketHandler, restoreStoregeIcons } from './basket.js';

import { refs, onOpenModal } from './modal-index.js';

import { lazyLoadImagesAnimation, jumpSearch, iconsDescriptionAnimation } from './supporting_functions.js'

// Акция
import { shopLotsSale } from "./array-sale.js";

// Продукты
import { shopLotsNoodles } from "./food/array-noodles.js";
import { shopLotsMacaroni } from "./food/array-macaroni.js";
import { shopLotsSpaghetti } from "./food/array-spaghetti.js";
import { shopLotsTarhona } from "./food/array-tarhona.js";

import { shopLotsCheese } from "./food/array-cheese.js";

import { shopLotsPates } from "./food/array-pates.js";
import { shopLotsSalmon } from "./food/array-salmon.js";
import { shopLotsMackerel } from "./food/array-mackerel.js";
import { shopLotsHerring } from "./food/array-herring.js";
import { shopLotsTuna } from "./food/array-tuna.js";
import { shopLotsCod } from "./food/array-cod.js";
import { shopLotsSprats } from "./food/array-sprats.js";

import { shopLotsPeanuts } from "./food/array-peanuts.js";
import { shopLotsPopcorns } from "./food/array-popcorns.js";
import { shopLotsPistachios } from "./food/array-pistachios.js";
import { shopLotsChips } from "./food/array-chips.js";

// import { shopLotsCreamSpreads } from "./food/array-cream-spreads.js";
// import { shopLotsCheeseSpreads } from "./food/array-cheese-spreads.js";
import { shopLotsSweetSpreads } from "./food/array-sweet-spreads.js";

// import { shopLotsBars } from "./food/array-bars.js";
import { shopLotsWaffles } from "./food/array-waffles.js";
import { shopLotsChocolate } from "./food/array-chocolate.js";

import { shopLotsHotChocolate } from "./food/array-hot-chocolate.js";
import { shopLotsCoffeeBeans } from "./food/array-coffee_beans.js";
import { shopLotsGroundCoffee } from "./food/array-ground-coffee.js";
import { shopLotsInstantCoffee } from "./food/array-instant-coffee.js";
import { shopLotsCacao } from "./food/array-cacao.js";
import { shopLotsCappuccino } from "./food/array-cappuccino.js";

import { shopLotsOil } from "./food/array-oil.js";
import { shopLotsOlives } from "./food/array-olives.js";
import { shopLotsOliveOil } from "./food/array-olive-oil.js";

// import { shopLotsForBaking } from "./food/array-for-baking.js";
import { shopLotsMustard } from "./food/array-mustard.js";
import { shopLotsSauces } from "./food/array-sauces.js";
import { shopLotsSeasonings } from "./food/array-seasonings.js";

// Средства гигиены
import { shopLotsChildrenShampoos } from "./hygiene/array-children-shampoos.js";
import { shopLotsChildrenShowerGels } from "./hygiene/array-children-shower-gels.js";
import { shopLotsChildrenToothpastes } from "./hygiene/array-children-toothpastes.js";
import { shopLotsChildrenDiapers } from "./hygiene/array-children-diapers.js";

import { shopLotsAdultShampoos } from "./hygiene/array-adult_shampoos.js";
import { shopLotsHairConditioners } from "./hygiene/array-hair-conditioners.js";
import { shopLotsHairMasks } from "./hygiene/array-hair-masks.js";

import { shopLotsAdultShowerGels } from "./hygiene/array-adult-shower-gels.js";

import { shopLotsLiquidSoap } from "./hygiene/array-liquid-soap.js";
import { shopLotsSolidSoap } from "./hygiene/array-solid-soap.js";

import { shopLotsHandCremes } from "./hygiene/array-hand-cremes.js";

import { shopLotsToothpastesAdult } from "./hygiene/array-toothpastes-adult.js";
import { shopLotsToothpastesNoFluoride } from "./hygiene/array-toothpastes-no-fluoride.js";

import { shopLotsMicellarWipes } from "./hygiene/array-micellar_wipes.js";

import { shopLotsIntimHygiene } from "./hygiene/array-intim-hygiene.js";
import { shopLotsPantyliner } from "./hygiene/array-pantyliner.js";

import { shopLotsTPThreeLayer } from "./hygiene/array-tp-three-layer.js";

// Бытовая химия
import { shopLotsMeansHandsWashingDishes } from "./household_chemicals/array-means-hands-washing-dishes.js";
import { shopLotsMeansMechanicalWashingDishes } from "./household_chemicals/array-means-mechanical-washing-dishes.js";

import { shopLotsWashingGels } from "./household_chemicals/array-washing-gels.js";
import { shopLotsPowerCaps } from "./household_chemicals/array-power-caps.js";
import { shopLotsWashingPowders } from "./household_chemicals/array-washing-powders.js";
import { shopLotsLaundrySheets } from "./household_chemicals/array-laundry-sheets.js";
import { shopLotsBleaches } from "./household_chemicals/array-bleaches.js";
import { shopLotsStainRemovers } from "./household_chemicals/array-stain-removers.js";
import { shopLotsSofteners } from "./household_chemicals/array-softeners.js";
import { shopLotsScentBoosterGranuls } from "./household_chemicals/array-scent-booster-granuls.js";

import { shopLotsForWindows } from "./household_chemicals/array-for-windows.js";
import { shopLotsForFurniture } from "./household_chemicals/array-for-furniture.js";
import { shopLotsForFloor } from "./household_chemicals/array-for-floor.js";
import { shopLotsMeansCleaningUniversal } from "./household_chemicals/array-means-cleaning-universal.js";
import { shopLotsMeansCleaningKitchenBathroom } from "./household_chemicals/array-means-cleaning-kitchen-bathroom.js";
import { shopLotsForWC } from "./household_chemicals/array-for-wc.js";
import { shopLotsMeansCleaningDishwashers } from "./household_chemicals/array-means-cleaning-dishwashers.js";
import { shopLotsCleaningWipes } from "./household_chemicals/array-cleaning-wipes.js";

// ===========================================================================
// Создание разметки
// ===========================================================================

// Акция
const shopListSale = document.querySelector(".js-cras__list--sale");

// Продукты питания
const shopListMacaroni = document.querySelector(".js-cras__list--macaroni");
const shopListSpaghetti = document.querySelector(".js-cras__list--spaghetti");
const shopListTarhona = document.querySelector(".js-cras__list--tarhona");

const shopListNoodles = document.querySelector(".js-cras__list--noodles");

const shopListCheese = document.querySelector(".js-cras__list--cheese");

const shopListPates = document.querySelector(".js-cras__list--pates");
const shopListSalmon = document.querySelector(".js-cras__list--salmon");
const shopListMackerel = document.querySelector(".js-cras__list--mackerel");
const shopListHerring = document.querySelector(".js-cras__list--herring");
const shopListTuna = document.querySelector(".js-cras__list--tuna");
const shopListCod = document.querySelector(".js-cras__list--cod");
const shopListSprats = document.querySelector(".js-cras__list--sprats");

const shopListPeanuts = document.querySelector(".js-cras__list--peanuts");
const shopListPopcorn = document.querySelector(".js-cras__list--popcorn");
const shopListPistachios = document.querySelector(".js-cras__list--pistachios");
const shopListChips = document.querySelector(".js-cras__list--chips");

// const shopListCreamSpreads = document.querySelector(".js-cras__list--cream-spreads");
// const shopListCheeseSpreads = document.querySelector(".js-cras__list--cheese-spreads");
const shopListSweetSpreads = document.querySelector(".js-cras__list--sweet-spreads");

// const shopListBars = document.querySelector(".js-cras__list--bars");
const shopListWaffles = document.querySelector(".js-cras__list--waffles");
const shopListChocolate = document.querySelector(".js-cras__list--chocolate");

const shopListHotChocolate = document.querySelector(".js-cras__list--hot-chocolate");
const shopListCoffeeBeans = document.querySelector(".js-cras__list--coffee-beans");
const shopListGroundCoffee = document.querySelector(".js-cras__list--ground-coffee");
const shopListInstantCoffee = document.querySelector(".js-cras__list--instant-coffee");
const shopListCacao = document.querySelector(".js-cras__list--cacao");
const shopListCappuccino = document.querySelector(".js-cras__list--cappuccino");

const shopListOil = document.querySelector(".js-cras__list--oil");
const shopListOlives = document.querySelector(".js-cras__list--olives");
const shopListOliveOil = document.querySelector(".js-cras__list--olive-oil");

// const shopListForBaking = document.querySelector(".js-cras__list--for-baking");
const shopListMustard = document.querySelector(".js-cras__list--mustard");
const shopListSauces = document.querySelector(".js-cras__list--sauces");
const shopListSeasonings = document.querySelector(".js-cras__list--seasonings");

// Средства гигиены
const shopListChildrenShampoos = document.querySelector(".js-cras__list--children-shampoos");
const shopListChildrenShowerGels = document.querySelector(".js-cras__list--children-shower-gels");
const shopListChildrenToothpastes = document.querySelector(".js-cras__list--children-toothpaste");
const shopListChildrenDiapers = document.querySelector(".js-cras__list--children-diapers");

const shopListBabyShampoos = document.querySelector(".js-cras__list--baby-shampoos");
const shopListAdultShampoos = document.querySelector(".js-cras__list--adult-shampoos");
const shopListHairConditioners = document.querySelector(".js-cras__list--hair-conditioners");
const shopListHairMasks = document.querySelector(".js-cras__list--hair-masks");

const shopListBabyShowerGels = document.querySelector(".js-cras__list--baby-shower-gels");
const shopListAdultShowerGels = document.querySelector(".js-cras__list--adult-shower-gels");

const shopListLiquidSoap = document.querySelector(".js-cras__list--liquid-soap");
const shopListSolidSoap = document.querySelector(".js-cras__list--solid-soap");

const shopListHandCremes = document.querySelector(".js-cras__list--hand-cremes");

const shopListToothpastesChildren = document.querySelector(".js-cras__list--toothpastes-children");
const shopListToothpastesAdult = document.querySelector(".js-cras__list--toothpastes-adult");
const shopListToothpastesNoFluoride = document.querySelector(".js-cras__list--toothpastes-no-fluoride");

const shopListMicellarWipes = document.querySelector(".js-cras__list--micellar-wipes");

const shopListIntimHygiene = document.querySelector(".js-cras__list--intim-hygiene");
const shopListPantyliner = document.querySelector(".js-cras__list--pantyliner");

const shopListTPThreeLayer = document.querySelector(".js-cras__list--tp-three-layer");

// Бытовая химия
const shopListMeansHandsWashingDishes = document.querySelector(".js-cras__list--means-hands-washing-dishes");
const shopListMeansMechanicalWashingDishes = document.querySelector(".js-cras__list--means-mechanical-washing-dishes");

const shopListWashingGels = document.querySelector(".js-cras__list--washing-gels");
const shopListPowerCaps = document.querySelector(".js-cras__list--power-caps");
const shopListWashingPowders = document.querySelector(".js-cras__list--washing-powder");
const shopListLaundrySheets = document.querySelector(".js-cras__list--laundry-sheets");
const shopListBleaches = document.querySelector(".js-cras__list--bleaches");
const shopListStainRemovers = document.querySelector(".js-cras__list--stain-removers");
const shopListSofteners = document.querySelector(".js-cras__list--softeners");
const shopListScentBoosterGranuls = document.querySelector(".js-cras__list--scent-booster-granuls");

const shopListForWindows = document.querySelector(".js-cras__list--for_windows");
const shopListForFurniture = document.querySelector(".js-cras__list--for_furniture");
const shopListForFloor = document.querySelector(".js-cras__list--for_floor");
const shopListMeansCleaningUniversal = document.querySelector(".js-cras__list--universal");
const shopListMeansCleaningKitchenBathroom = document.querySelector(".js-cras__list--kitchen_bathroom");
const shopListForWC = document.querySelector(".js-cras__list--for_wc");
const shopListMeansCleaningDishwashers = document.querySelector(".js-cras__list--dishwashers");
const shopListCleaningWipes = document.querySelector(".js-cras__list--cleaning_wipes");

// ===========================================================================
// Секции и блоки
// ===========================================================================

// Форма поиска
const inputSearchMobile = document.querySelector("#search-mobile");
const filterFormMobile = document.querySelector(".js-filter__form-mobile");

const inputSearch = document.querySelector("#search");
const filterForm = document.querySelector(".js-filter__form");

// Акция
const SectionAllSale = document.querySelector(".js-section-all-sales");
const BlockSale = document.querySelector(".js-block-sale");

// Макаронные изделия
const SectionAllPasta = document.querySelector(".js-section-all-pasta");
const BlockNoodles = document.querySelector(".js-block-noodles");
const BlockMacaroni = document.querySelector(".js-block-macaroni");
const BlockSpaghetti = document.querySelector(".js-block-spaghetti");
const BlockTarhona = document.querySelector(".js-block-tarhona");

// Молочные продукты
const SectionAllDairy = document.querySelector(".js-section-all-dairy");
const BlockCheese = document.querySelector(".js-block-cheese");

// Консервация
const SectionAllCannedFood = document.querySelector(".js-section-all-canned-food");
const BlockPates = document.querySelector(".js-block-pates");
const BlockSalmon = document.querySelector(".js-block-salmon");
const BlockMackerel = document.querySelector(".js-block-mackerel");
const BlockHerring = document.querySelector(".js-block-herring");
const BlockTuna = document.querySelector(".js-block-tuna");
const BlockCod = document.querySelector(".js-block-cod");
const BlockSprats = document.querySelector(".js-block-sprats");

// Закуски
const SectionAllSnacks = document.querySelector(".js-section-all-snacks");
const BlockPeanuts = document.querySelector(".js-block-peanuts");
const BlockPopcorn = document.querySelector(".js-block-popcorn");
const BlockPistachios = document.querySelector(".js-block-pistachios");
const BlockChips = document.querySelector(".js-block-chips");

// Помазанки
const SectionAllBreadSpreads = document.querySelector(".js-section-all-bread-spreads");
// const BlockCreamSpreads = document.querySelector(".js-block-cream-spreads");
// const BlockCheeseSpreads = document.querySelector(".js-block-cheese-spreads");
const BlockSweetSpreads = document.querySelector(".js-block-sweet-spreads");

// Сладости
const SectionAllSweets = document.querySelector(".js-section-all-sweets");
// const BlockBars = document.querySelector(".js-block-bars");
const BlockWaffles = document.querySelector(".js-block-waffles");
const BlockChocolate = document.querySelector(".js-block-chocolate");

// Напитки
const SectionAllDrinks = document.querySelector(".js-section-all-drinks");
const BlockHotChocolate = document.querySelector(".js-block-hot-chocolate");
const BlockCoffeeBeans = document.querySelector(".js-block-coffee-beans");
const BlockGroundCoffee = document.querySelector(".js-block-ground-coffee");
const BlockInstantCoffee = document.querySelector(".js-block-instant-coffee");
const BlockCacao = document.querySelector(".js-block-cacao");
const BlockCappuccino = document.querySelector(".js-block-cappuccino");

// Оливки и масло
const SectionAllOlivesOil = document.querySelector(".js-section-all-olives-oil");
const BlockOil = document.querySelector(".js-block-oil");
const BlockOlives = document.querySelector(".js-block-olives");
const BlockOliveOil = document.querySelector(".js-block-olive-oil");

// Модификаторы вкуса
const SectionAllTasteModifiers = document.querySelector(".js-section-all-taste-modifiers");
// const BlockForBaking = document.querySelector(".js-block-for-baking");
const BlockMustard = document.querySelector(".js-block-mustard");
const BlockSauces = document.querySelector(".js-block-sauces");
const BlockSeasonings = document.querySelector(".js-block-seasonings");

// Детская гигиена
const SectionAllForChildren = document.querySelector(".js-section-all-for-children");
const BlockChildrenShampoos = document.querySelector(".js-block-children-shampoos");
const BlockChildrenShowerGels = document.querySelector(".js-block-children-shower-gels");
const BlockChildrenToothpastes = document.querySelector(".js-block-children-toothpaste");
const BlockChildrenDiapers = document.querySelector(".js-block-children-diapers");

// Уход за волосами
const SectionAllHairCare = document.querySelector(".js-section-all-hair-care");
const BlockBabyShampoos = document.querySelector(".js-block-baby-shampoos");
const BlockAdultShampoos = document.querySelector(".js-block-adult-shampoos");
const BlockHairConditioners = document.querySelector(".js-block-hair-conditioners");
const BlockHairMasks = document.querySelector(".js-block-hair-masks");

// Гели
const SectionAllShowerGels = document.querySelector(".js-section-all-shower-gels");
const BlockBabyShowerGels = document.querySelector(".js-block-baby-shower-gels");
const BlockAdultShowerGels = document.querySelector(".js-block-adult-shower-gels");

// Мыло
const SectionAllSoap = document.querySelector(".js-section-all-soap");
const BlockLiquidSoap = document.querySelector(".js-block-liquid-soap");
const BlockSolidSoap = document.querySelector(".js-block-solid-soap");

// Уход за руками
const SectionAllHandCare = document.querySelector(".js-section-all-hand-care");
const BlockHandCremes = document.querySelector(".js-block-hand-cremes");

// Зубные пасты
const SectionAllToothpastes = document.querySelector(".js-section-all-toothpastes");
const BlockToothpastesChildren = document.querySelector(".js-block-toothpastes-children");
const BlockToothpastesAdult = document.querySelector(".js-block-toothpastes-adult");
const BlockToothpastesNoFluoride = document.querySelector(".js-block-toothpastes-no-fluoride");

// Салфетки
const SectionAllWipes = document.querySelector(".js-section-all-wipes");
const BlockMicellarWipes = document.querySelector(".js-block-micellar-wipes");

// Женская гигиена
const SectionAllFeminieHygiene = document.querySelector(".js-section-all-feminine-hygiene");
const BlockIntimHygiene = document.querySelector(".js-block-intim-hygiene");
const BlockPantyliner = document.querySelector(".js-block-pantyliner");

// Туалетная бумага
const SectionAllToiletPaper = document.querySelector(".js-section-all-toilet-paper");
const BlockTPThreeLayer = document.querySelector(".js-block-tp-three-layer");

// Средства для мытья
const SectionAllMeansWashing = document.querySelector(".js-section-all-means-washing");
const BlockHandsWashingDishes = document.querySelector(".js-block-hands-washing-dishes");
const BlockMechanicalWashingDishes = document.querySelector(".js-block-mechanical-washing-dishes");

// Средства для стирки
const SectionAllLaundryDetergents = document.querySelector(".js-section-all-laundry-detergents");
const BlockWashingGels = document.querySelector(".js-block-washing-gels");
const BlockPowerCaps = document.querySelector(".js-block-power-caps");
const BlockWashingPowders = document.querySelector(".js-block-washing-powder");
const BlockLaundrySheets = document.querySelector(".js-block-laundry-sheets");
const BlockBleaches = document.querySelector(".js-block-bleaches");
const BlockStainRemovers = document.querySelector(".js-block-stain-removers");
const BlockSofteners = document.querySelector(".js-block-softeners");
const BlockScentBoosterGranuls = document.querySelector(".js-block-scent-booster-granuls");

// Средства для чистки
const BlockForWindows = document.querySelector(".js-block-for_windows");
const BlockForFurniture = document.querySelector(".js-block-for_furniture");
const BlockForFloor = document.querySelector(".js-block-for_floor");
const SectionAllMeansCleaning = document.querySelector(".js-section-all-means-cleaning");
const BlockCleaningUniversal = document.querySelector(".js-block-universal");
const BlockCleaningKitchenBathroom = document.querySelector(".js-block-kitchen_bathroom");
const BlockForWC = document.querySelector(".js-block-for_wc");
const BlockCleaningDishwashers = document.querySelector(".js-block-dishwashers");
const BlockCleaningWipes = document.querySelector(".js-block-cleaning_wipes");

// Скрыть секцию
const JSSectionOne = document.querySelectorAll(".js-section-none");

// Нет товара
const outputError = document.querySelector(".js-output-error");

// ===========================================================================
// Массив товаров
// ===========================================================================

const arrayOfProducts = [
  { element: shopListSale, items: shopLotsSale, block: BlockSale, dataTarget: "sale" },

  { element: shopListNoodles, items: shopLotsNoodles, block: BlockNoodles, dataTarget: "noodles" },
  { element: shopListMacaroni, items: shopLotsMacaroni, block: BlockMacaroni, dataTarget: "macaroni" },
  { element: shopListSpaghetti, items: shopLotsSpaghetti, block: BlockSpaghetti, dataTarget: "spaghetti" },
  { element: shopListTarhona, items: shopLotsTarhona, block: BlockTarhona, dataTarget: "tarhona" },

  { element: shopListCheese, items: shopLotsCheese, block: BlockCheese, dataTarget: "cheese" },

  { element: shopListPates, items: shopLotsPates, block: BlockPates, dataTarget: "pates" },
  { element: shopListSalmon, items: shopLotsSalmon, block: BlockSalmon, dataTarget: "salmon" },
  { element: shopListMackerel, items: shopLotsMackerel, block: BlockMackerel, dataTarget: "mackerel" },
  { element: shopListHerring, items: shopLotsHerring, block: BlockHerring, dataTarget: "herring" },
  { element: shopListTuna, items: shopLotsTuna, block: BlockTuna, dataTarget: "tuna" },
  { element: shopListCod, items: shopLotsCod, block: BlockCod, dataTarget: "cod" },
  { element: shopListSprats, items: shopLotsSprats, block: BlockSprats, dataTarget: "sprats" },

  { element: shopListPeanuts, items: shopLotsPeanuts, block: BlockPeanuts, dataTarget: "peanuts" },
  { element: shopListPopcorn, items: shopLotsPopcorns, block: BlockPopcorn, dataTarget: "popcorn" },
  { element: shopListPistachios, items: shopLotsPistachios, block: BlockPistachios, dataTarget: "pistachios" },
  { element: shopListChips, items: shopLotsChips, block: BlockChips, dataTarget: "chips" },

  // { element: shopListCreamSpreads, items: shopLotsCreamSpreads, block: BlockCreamSpreads, dataTarget: "cream-spreads" },
  // { element: shopListCheeseSpreads, items: shopLotsCheeseSpreads, block: BlockCheeseSpreads, dataTarget: "cheese-spreads" },
  { element: shopListSweetSpreads, items: shopLotsSweetSpreads, block: BlockSweetSpreads, dataTarget: "sweet-spreads" },

  // { element: shopListBars, items: shopLotsBars, block: BlockBars, dataTarget: "bars" },
  { element: shopListWaffles, items: shopLotsWaffles, block: BlockWaffles, dataTarget: "waffles" },
  { element: shopListChocolate, items: shopLotsChocolate, block: BlockChocolate, dataTarget: "chocolate" },

  { element: shopListHotChocolate, items: shopLotsHotChocolate, block: BlockHotChocolate, dataTarget: "hot-chocolate" },
  { element: shopListCoffeeBeans, items: shopLotsCoffeeBeans, block: BlockCoffeeBeans, dataTarget: "coffee-beans" },
  { element: shopListGroundCoffee, items: shopLotsGroundCoffee, block: BlockGroundCoffee, dataTarget: "ground-coffee" },
  { element: shopListInstantCoffee, items: shopLotsInstantCoffee, block: BlockInstantCoffee, dataTarget: "instant-coffee" },
  { element: shopListCacao, items: shopLotsCacao, block: BlockCacao, dataTarget: "cacao" },
  { element: shopListCappuccino, items: shopLotsCappuccino, block: BlockCappuccino, dataTarget: "cappuccino" },

  { element: shopListOil, items: shopLotsOil, block: BlockOil, dataTarget: "oil" },
  { element: shopListOlives, items: shopLotsOlives, block: BlockOlives, dataTarget: "olives" },
  { element: shopListOliveOil, items: shopLotsOliveOil, block: BlockOliveOil, dataTarget: "olive-oil" },

  // { element: shopListForBaking, items: shopLotsForBaking, block: BlockForBaking, dataTarget: "for-baking" },
  { element: shopListMustard, items: shopLotsMustard, block: BlockMustard, dataTarget: "mustard" },
  { element: shopListSauces, items: shopLotsSauces, block: BlockSauces, dataTarget: "sauces" },
  { element: shopListSeasonings, items: shopLotsSeasonings, block: BlockSeasonings, dataTarget: "seasonings" },

  { element: shopListChildrenShampoos, items: shopLotsChildrenShampoos, block: BlockChildrenShampoos, dataTarget: "children-shampoos" },
  { element: shopListChildrenShowerGels, items: shopLotsChildrenShowerGels, block: BlockChildrenShowerGels, dataTarget: "children-shower-gels" },
  { element: shopListChildrenToothpastes, items: shopLotsChildrenToothpastes, block: BlockChildrenToothpastes, dataTarget: "children-toothpaste" },
  { element: shopListChildrenDiapers, items: shopLotsChildrenDiapers, block: BlockChildrenDiapers, dataTarget: "children-diaper" },

  { element: shopListBabyShampoos, items: shopLotsChildrenShampoos, block: BlockBabyShampoos, dataTarget: "baby-shampoos" },
  { element: shopListAdultShampoos, items: shopLotsAdultShampoos, block: BlockAdultShampoos, dataTarget: "adult-shampoos" },
  { element: shopListHairConditioners, items: shopLotsHairConditioners, block: BlockHairConditioners, dataTarget: "hair-conditioners" },
  { element: shopListHairMasks, items: shopLotsHairMasks, block: BlockHairMasks, dataTarget: "hair-masks" },

  { element: shopListBabyShowerGels, items: shopLotsChildrenShowerGels, block: BlockBabyShowerGels, dataTarget: "baby-shower-gels" },
  { element: shopListAdultShowerGels, items: shopLotsAdultShowerGels, block: BlockAdultShowerGels, dataTarget: "adult-shower-gels" },

  { element: shopListLiquidSoap, items: shopLotsLiquidSoap, block: BlockLiquidSoap, dataTarget: "liquid-soap" },
  { element: shopListSolidSoap, items: shopLotsSolidSoap, block: BlockSolidSoap, dataTarget: "solid-soap" },

  { element: shopListHandCremes, items: shopLotsHandCremes, block: BlockHandCremes, dataTarget: "handcreme" },

  { element: shopListToothpastesChildren, items: shopLotsChildrenToothpastes, block: BlockToothpastesChildren, dataTarget: "toothpastes-children" },
  { element: shopListToothpastesAdult, items: shopLotsToothpastesAdult, block: BlockToothpastesAdult, dataTarget: "toothpastes-adult" },
  { element: shopListToothpastesNoFluoride, items: shopLotsToothpastesNoFluoride, block: BlockToothpastesNoFluoride, dataTarget: "toothpastes-no_fluoride" },

  { element: shopListMicellarWipes, items: shopLotsMicellarWipes, block: BlockMicellarWipes, dataTarget: "micellar-wipes" },

  { element: shopListIntimHygiene, items: shopLotsIntimHygiene, block: BlockIntimHygiene, dataTarget: "intim-hygiene" },
  { element: shopListPantyliner, items: shopLotsPantyliner, block: BlockPantyliner, dataTarget: "pantyliner" },

  { element: shopListTPThreeLayer, items: shopLotsTPThreeLayer, block: BlockTPThreeLayer, dataTarget: "tp-three-layer" },

  { element: shopListMeansHandsWashingDishes, items: shopLotsMeansHandsWashingDishes, block: BlockHandsWashingDishes, dataTarget: "hands_washing_dishes" },
  { element: shopListMeansMechanicalWashingDishes, items: shopLotsMeansMechanicalWashingDishes, block: BlockMechanicalWashingDishes, dataTarget: "mechanical_washing_dishes" },

  { element: shopListWashingGels, items: shopLotsWashingGels, block: BlockWashingGels, dataTarget: "washing_gels" },
  { element: shopListPowerCaps, items: shopLotsPowerCaps, block: BlockPowerCaps, dataTarget: "power_caps" },
  { element: shopListWashingPowders, items: shopLotsWashingPowders, block: BlockWashingPowders, dataTarget: "washing_powders" },
  { element: shopListLaundrySheets, items: shopLotsLaundrySheets, block: BlockLaundrySheets, dataTarget: "laundry_sheets" },
  { element: shopListBleaches, items: shopLotsBleaches, block: BlockBleaches, dataTarget: "bleaches" },
  { element: shopListStainRemovers, items: shopLotsStainRemovers, block: BlockStainRemovers, dataTarget: "stain_removers" },
  { element: shopListSofteners, items: shopLotsSofteners, block: BlockSofteners, dataTarget: "softeners" },
  { element: shopListScentBoosterGranuls, items: shopLotsScentBoosterGranuls, block: BlockScentBoosterGranuls, dataTarget: "scent-booster-granuls" },

  { element: shopListForWindows, items: shopLotsForWindows, block: BlockForWindows, dataTarget: "for_windows" },
  { element: shopListForFurniture, items: shopLotsForFurniture, block: BlockForFurniture, dataTarget: "for_furniture" },
  { element: shopListForFloor, items: shopLotsForFloor, block: BlockForFloor, dataTarget: "for_floor" },
  { element: shopListMeansCleaningUniversal, items: shopLotsMeansCleaningUniversal, block: BlockCleaningUniversal, dataTarget: "means_cleaning_universal" },
  { element: shopListMeansCleaningKitchenBathroom, items: shopLotsMeansCleaningKitchenBathroom, block: BlockCleaningKitchenBathroom, dataTarget: "means_cleaning_kitchen_bathroom" },
  { element: shopListForWC, items: shopLotsForWC, block: BlockForWC, dataTarget: "for_wc" },
  { element: shopListMeansCleaningDishwashers, items: shopLotsMeansCleaningDishwashers, block: BlockCleaningDishwashers, dataTarget: "means_cleaning_dishwashers" },
  { element: shopListCleaningWipes, items: shopLotsCleaningWipes, block: BlockCleaningWipes, dataTarget: "cleaning_wipes" },
];

// arrayOfProducts.forEach(({ element, items }) => {
//   element.innerHTML = createMobileListItemsMarkup(items);
// });

// lazyLoadImagesAnimation();

const initialLoadCount = 1;
const loadCountOnScroll = 5;
let itemsLoaded = 0;
let isFirstLoad = true;

function loadItems() {
  const countToLoad = isFirstLoad ? initialLoadCount : loadCountOnScroll;
  const visibleItems = arrayOfProducts.slice(itemsLoaded, itemsLoaded + countToLoad);

  visibleItems.forEach(({ element, items, block }) => {
    element.style.display = "flex";

    const section = element.closest(".js-section-none");

    if (section) {
      section.style.display = "block";
    }

    if (block) {
      block.style.display = "block";
      element.innerHTML = createMobileListItemsMarkup(items);
      lazyLoadImagesAnimation();
    }
  });

  itemsLoaded += countToLoad;
  isFirstLoad = false;
}

hideAllSectionsAndProducts();
loadItems();

function handleScroll() {
  const contentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= contentHeight - 500) {
    loadItems();
  }
  restoreIcons();
}

window.addEventListener('scroll', handleScroll);

// ===========================================================================
// Анимация иконок в разделе товаров
// ===========================================================================
const filterMenus = document.querySelectorAll(".js-filter__menu");
const filterSecondaryMenus = document.querySelectorAll(".js-filter__secondary-menu");

const filterLists = document.querySelectorAll(".js-filter__list");
const filterSecondaryLists = document.querySelectorAll(".js-filter__secondary-list");

const filterIconsOpen = document.querySelectorAll(".js-filter__icon-open");
const filterIconsClose = document.querySelectorAll(".js-filter__icon-close");

const filterSecondaryIconsOpen = document.querySelectorAll(".js-filter__secondary-icon-open");
const filterSecondaryIconsClose = document.querySelectorAll(".js-filter__secondary-icon-close");

const filterIconHandler = (menuIndex) => {
  const iconClose = filterIconsClose[menuIndex];
  const iconOpen = filterIconsOpen[menuIndex];
  const list = filterLists[menuIndex];

  iconClose.classList.toggle("js-icon-close");
  iconOpen.classList.toggle("js-icon-open");
  list.classList.toggle("js-filter-list-open");
};

const filterSecondaryIconHandler = (menuIndex) => {
  const secondaryIconClose = filterSecondaryIconsClose[menuIndex];
  const secondaryIconOpen = filterSecondaryIconsOpen[menuIndex];
  const secondaryList = filterSecondaryLists[menuIndex];

  secondaryIconClose.classList.toggle("js-icon-close");
  secondaryIconOpen.classList.toggle("js-icon-open");
  secondaryList.classList.toggle("js-filter-list-open");
};

filterMenus.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    filterIconHandler(index);
  });
});

filterSecondaryMenus.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    filterSecondaryIconHandler(index);
  });
});

// ===========================================================================
// Сброс разметки
// ===========================================================================

function resetMarkup() {
  arrayOfProducts.forEach(product => {
    product.element.style.display = "block";
    product.block.style.display = "block";
  });

  JSSectionOne.forEach(section => {
    section.style.display = "block";
  });
}

// ===========================================================================
// Поиск в фильтре
// ===========================================================================

inputSearchMobile.value = "";
inputSearch.value = "";

filterFormMobile.addEventListener("submit", handleFormSubmit);
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

  const searchItem = event.target === filterForm ? inputSearch.value.trim().toLowerCase() : inputSearchMobile.value.trim().toLowerCase();

  resetMarkup();

  if (event.target === filterForm) {
    inputSearch.value = "";
  } else if (event.target === filterFormMobile) {
    inputSearchMobile.value = "";
  }

  // Акция
  const filteredSale = universalSearch(shopLotsSale, searchItem);

  // Продукты питания
  const filteredNoodles = universalSearch(shopLotsNoodles, searchItem);
  const filteredMacaroni = universalSearch(shopLotsMacaroni, searchItem);
  const filteredSpaghetti = universalSearch(shopLotsSpaghetti, searchItem);
  const filteredTarhona = universalSearch(shopLotsTarhona, searchItem);

  const filteredCheese = universalSearch(shopLotsCheese, searchItem);

  const filteredPates = universalSearch(shopLotsPates, searchItem);
  const filteredSalmon = universalSearch(shopLotsSalmon, searchItem);
  const filteredMackerel = universalSearch(shopLotsMackerel, searchItem);
  const filteredHerring = universalSearch(shopLotsHerring, searchItem);
  const filteredTuna = universalSearch(shopLotsTuna, searchItem);
  const filteredCod = universalSearch(shopLotsCod, searchItem);
  const filteredSprats = universalSearch(shopLotsSprats, searchItem);

  const filteredPeanuts = universalSearch(shopLotsPeanuts, searchItem);
  const filteredPopcorns = universalSearch(shopLotsPopcorns, searchItem);
  const filteredPistachios = universalSearch(shopLotsPistachios, searchItem);
  const filteredChips = universalSearch(shopLotsChips, searchItem);

  // const filteredCreamSpreads = universalSearch(shopLotsCreamSpreads, searchItem);
  // const filteredCheeseSpreads = universalSearch(shopLotsCheeseSpreads, searchItem);
  const filteredSweetSpreads = universalSearch(shopLotsSweetSpreads, searchItem);

  // const filteredBars = universalSearch(shopLotsBars, searchItem);
  const filteredWaffles = universalSearch(shopLotsWaffles, searchItem);
  const filteredChocolate = universalSearch(shopLotsChocolate, searchItem);

  const filteredHotChocolate = universalSearch(shopLotsHotChocolate, searchItem);
  const filteredCoffeeBeans = universalSearch(shopLotsCoffeeBeans, searchItem);
  const filteredGroundCoffee = universalSearch(shopLotsGroundCoffee, searchItem);
  const filteredInstantCoffee = universalSearch(shopLotsInstantCoffee, searchItem);
  const filteredCacao = universalSearch(shopLotsCacao, searchItem);
  const filteredCappuccino = universalSearch(shopLotsCappuccino, searchItem);

  const filteredOil = universalSearch(shopLotsOil, searchItem);
  const filteredOlives = universalSearch(shopLotsOlives, searchItem);
  const filteredOliveOil = universalSearch(shopLotsOliveOil, searchItem);

  // const filteredForBaking = universalSearch(shopLotsForBaking, searchItem);
  const filteredMustard = universalSearch(shopLotsMustard, searchItem);
  const filteredSauces = universalSearch(shopLotsSauces, searchItem);
  const filteredSeasonings = universalSearch(shopLotsSeasonings, searchItem);

  // Гигиена
  const filteredChildrenShampoos = universalSearch(shopLotsChildrenShampoos, searchItem);
  const filteredChildrenShowerGels = universalSearch(shopLotsChildrenShowerGels, searchItem);
  const filteredChildrenToothpastes = universalSearch(shopLotsChildrenToothpastes, searchItem);
  const filteredChildrenDiapers = universalSearch(shopLotsChildrenDiapers, searchItem);

  const filteredAdultShampoos = universalSearch(shopLotsAdultShampoos, searchItem);
  const filteredHairConditioners = universalSearch(shopLotsHairConditioners, searchItem);
  const filteredHairMasks = universalSearch(shopLotsHairMasks, searchItem);

  const filteredAdultShowerGels = universalSearch(shopLotsAdultShowerGels, searchItem);
  
  const filteredLiquidSoap = universalSearch(shopLotsLiquidSoap, searchItem);
  const filteredSolidSoap = universalSearch(shopLotsSolidSoap, searchItem);

  const filteredHandCremes = universalSearch(shopLotsHandCremes, searchItem);

  const filteredToothpastesAdult = universalSearch(shopLotsToothpastesAdult, searchItem);
  const filteredToothpastesNoFluoride = universalSearch(shopLotsToothpastesNoFluoride, searchItem);

  const filteredMicellarWipes = universalSearch(shopLotsMicellarWipes, searchItem);

  const filteredIntimHygiene = universalSearch(shopLotsIntimHygiene, searchItem);
  const filteredPantyliner = universalSearch(shopLotsPantyliner, searchItem);
  
  const filteredTPThreeLayer = universalSearch(shopLotsTPThreeLayer, searchItem);

  // Бытовая химия
  const filteredMeansHandsWashingDishes = universalSearch(shopLotsMeansHandsWashingDishes, searchItem);
  const filteredMeansMechanicalWashingDishes = universalSearch(shopLotsMeansMechanicalWashingDishes, searchItem);

  const filteredWashingGels = universalSearch(shopLotsWashingGels, searchItem);
  const filteredPowerCaps = universalSearch(shopLotsPowerCaps, searchItem);
  const filteredWashingPowders = universalSearch(shopLotsWashingPowders, searchItem);
  const filteredLaundrySheets = universalSearch(shopLotsLaundrySheets, searchItem);
  const filteredBleaches = universalSearch(shopLotsBleaches, searchItem);
  const filteredStainRemovers = universalSearch(shopLotsStainRemovers, searchItem);
  const filteredSofteners = universalSearch(shopLotsSofteners, searchItem);
  const filteredScentBoosterGranuls = universalSearch(shopLotsScentBoosterGranuls, searchItem);

  const filteredForWindows = universalSearch(shopLotsForWindows, searchItem);
  const filteredForFurniture = universalSearch(shopLotsForFurniture, searchItem);
  const filteredForFloor = universalSearch(shopLotsForFloor, searchItem);
  const filteredMeansCleaningUniversal = universalSearch( shopLotsMeansCleaningUniversal, searchItem);
  const filteredMeansCleaningKitchenBathroom = universalSearch(shopLotsMeansCleaningKitchenBathroom, searchItem);
  const filteredForWC = universalSearch(shopLotsForWC, searchItem);
  const filteredMeansCleaningDishwashers = universalSearch(shopLotsMeansCleaningDishwashers, searchItem);
  const filteredCleaningWipes = universalSearch(shopLotsCleaningWipes, searchItem);

  const allFilteredItems = [
    // Акция
    ...filteredSale,

    // Продукты питания
    ...filteredNoodles,
    ...filteredMacaroni,
    ...filteredSpaghetti,
    ...filteredTarhona,

    ...filteredCheese,

    ...filteredPates,
    ...filteredSalmon,
    ...filteredMackerel,
    ...filteredHerring,
    ...filteredTuna,
    ...filteredCod,
    ...filteredSprats,

    ...filteredPeanuts,
    ...filteredPopcorns,
    ...filteredPistachios,
    ...filteredChips,

    // ...filteredCreamSpreads,
    // ...filteredCheeseSpreads,
    ...filteredSweetSpreads,

    // ...filteredBars,
    ...filteredWaffles,
    ...filteredChocolate,

    ...filteredHotChocolate,
    ...filteredCoffeeBeans,
    ...filteredGroundCoffee,
    ...filteredInstantCoffee,
    ...filteredCacao,
    ...filteredCappuccino,

    ...filteredOil,
    ...filteredOlives,
    ...filteredOliveOil,

    // ...filteredForBaking,
    ...filteredMustard,
    ...filteredSauces,
    ...filteredSeasonings,

    // Средства гигиены
    ...filteredChildrenShampoos,
    ...filteredChildrenShowerGels,
    ...filteredChildrenToothpastes,
    ...filteredChildrenDiapers,

    ...filteredAdultShampoos,
    ...filteredHairConditioners,
    ...filteredHairMasks,

    ...filteredAdultShowerGels,
    
    ...filteredLiquidSoap,
    ...filteredSolidSoap,

    ...filteredHandCremes,

    ...filteredToothpastesAdult,
    ...filteredToothpastesNoFluoride,

    ...filteredMicellarWipes,

    ...filteredIntimHygiene,
    ...filteredPantyliner,

    ...filteredTPThreeLayer,
    
    // Бытовая химия
    ...filteredMeansHandsWashingDishes,
    ...filteredMeansMechanicalWashingDishes,

    ...filteredWashingGels,
    ...filteredPowerCaps,
    ...filteredWashingPowders,
    ...filteredLaundrySheets,
    ...filteredBleaches,
    ...filteredStainRemovers,
    ...filteredSofteners,
    ...filteredScentBoosterGranuls,

    ...filteredForWindows,
    ...filteredForFurniture,
    ...filteredForFloor,
    ...filteredMeansCleaningUniversal,
    ...filteredMeansCleaningKitchenBathroom,
    ...filteredForWC,
    ...filteredMeansCleaningDishwashers,
    ...filteredCleaningWipes,
  ];

  if (allFilteredItems.length === 0) {
        outputError.textContent = "Нажаль, такого товару у нас не має :(";
        outputError.style.marginTop = "60px";
        outputError.style.marginBottom = "60px";
        JSSectionOne.forEach((section) => {
          section.style.display = "none";
          window.removeEventListener('scroll', handleScroll);
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

  if (filteredSale.length > 0) {
    shopListSale.innerHTML = createMobileListItemsMarkup(filteredSale);
  } else {
    SectionAllSale.style.display = "none";
  }

  if (filteredNoodles.length > 0 ||
    filteredMacaroni.length > 0 ||
    filteredSpaghetti.length > 0 ||
    filteredTarhona.length > 0) {
    shopListNoodles.innerHTML = createMobileListItemsMarkup(filteredNoodles);
    shopListMacaroni.innerHTML = createMobileListItemsMarkup(filteredMacaroni);
    shopListSpaghetti.innerHTML = createMobileListItemsMarkup(filteredSpaghetti);
    shopListTarhona.innerHTML = createMobileListItemsMarkup(filteredTarhona);
  } else {
    SectionAllPasta.style.display = "none";
  }

  if (filteredCheese.length > 0) {
    shopListCheese.innerHTML = createMobileListItemsMarkup(filteredCheese);
  } else {
    SectionAllDairy.style.display = "none";
  }

  if (filteredPates.length > 0 ||
    filteredSalmon.length > 0 ||
    filteredMackerel.length > 0 ||
    filteredHerring.length > 0 ||
    filteredTuna.length > 0 ||
    filteredCod.length > 0 ||
    filteredSprats.length > 0) {
    shopListPates.innerHTML = createMobileListItemsMarkup(filteredPates);
    shopListSalmon.innerHTML = createMobileListItemsMarkup(filteredSalmon);
    shopListMackerel.innerHTML = createMobileListItemsMarkup(filteredMackerel);
    shopListHerring.innerHTML = createMobileListItemsMarkup(filteredHerring);
    shopListTuna.innerHTML = createMobileListItemsMarkup(filteredTuna);
    shopListCod.innerHTML = createMobileListItemsMarkup(filteredCod);
    shopListSprats.innerHTML = createMobileListItemsMarkup(filteredSprats);
  } else {
    SectionAllCannedFood.style.display = "none";
  }

  if (filteredPeanuts.length > 0 ||
    filteredPopcorns.length > 0 ||
    filteredPistachios.length > 0 ||
    filteredChips.length > 0) {
    shopListPeanuts.innerHTML = createMobileListItemsMarkup(filteredPeanuts);
    shopListPopcorn.innerHTML = createMobileListItemsMarkup(filteredPopcorns);
    shopListPistachios.innerHTML = createMobileListItemsMarkup(filteredPistachios);
    shopListChips.innerHTML = createMobileListItemsMarkup(filteredChips);
  } else {
    SectionAllSnacks.style.display = "none";
  }

  if (
    // filteredCreamSpreads.length > 0 ||
    // filteredCheeseSpreads.length > 0 ||
    filteredSweetSpreads.length > 0) {
    // shopListCreamSpreads.innerHTML = createMobileListItemsMarkup(filteredCreamSpreads);
    // shopListCheeseSpreads.innerHTML = createMobileListItemsMarkup(filteredCheeseSpreads);
    shopListSweetSpreads.innerHTML = createMobileListItemsMarkup(filteredSweetSpreads);
  } else {
    SectionAllBreadSpreads.style.display = "none";
  }

  if (
    // filteredBars.length > 0 ||
    filteredWaffles.length > 0 ||
    filteredChocolate.length > 0) {
    // shopListBars.innerHTML = createMobileListItemsMarkup(filteredBars);
    shopListWaffles.innerHTML = createMobileListItemsMarkup(filteredWaffles);
    shopListChocolate.innerHTML = createMobileListItemsMarkup(filteredChocolate);
  } else {
    SectionAllSweets.style.display = "none";
  }
  
  if (filteredHotChocolate.length > 0 ||
    filteredCoffeeBeans.length > 0 ||
    filteredGroundCoffee.length > 0 ||
    filteredInstantCoffee.length > 0 ||
    filteredCacao.length > 0 ||
    filteredCappuccino.length > 0) {
    shopListHotChocolate.innerHTML = createMobileListItemsMarkup(filteredHotChocolate);
    shopListCoffeeBeans.innerHTML = createMobileListItemsMarkup(filteredCoffeeBeans);
    shopListGroundCoffee.innerHTML = createMobileListItemsMarkup(filteredGroundCoffee);
    shopListInstantCoffee.innerHTML = createMobileListItemsMarkup(filteredInstantCoffee);
    shopListCacao.innerHTML = createMobileListItemsMarkup(filteredCacao);
    shopListCappuccino.innerHTML = createMobileListItemsMarkup(filteredCappuccino);
  } else {
    SectionAllDrinks.style.display = "none";
  }

  if (filteredOil.length > 0 ||
    filteredOlives.length > 0 ||
    filteredOliveOil.length > 0) {
    shopListOil.innerHTML = createMobileListItemsMarkup(filteredOil);
    shopListOlives.innerHTML = createMobileListItemsMarkup(filteredOlives);
    shopListOliveOil.innerHTML = createMobileListItemsMarkup(filteredOliveOil);
  } else {
    SectionAllOlivesOil.style.display = "none";
  }

  if (
    // filteredForBaking.length > 0 ||
    filteredMustard.length > 0 ||
    filteredSauces.length > 0 ||
    filteredSeasonings.length > 0) {
    // shopListForBaking.innerHTML = createMobileListItemsMarkup(filteredForBaking);
    shopListMustard.innerHTML = createMobileListItemsMarkup(filteredMustard);
    shopListSauces.innerHTML = createMobileListItemsMarkup(filteredSauces);
    shopListSeasonings.innerHTML = createMobileListItemsMarkup(filteredSeasonings);
  } else {
    SectionAllTasteModifiers.style.display = "none";
  }

  if (filteredChildrenShampoos.length > 0 ||
    filteredChildrenShowerGels.length > 0 ||
    filteredChildrenToothpastes.length > 0 ||
    filteredChildrenDiapers.length > 0 ) {
    shopListChildrenShampoos.innerHTML = createMobileListItemsMarkup(filteredChildrenShampoos);
    shopListChildrenShowerGels.innerHTML = createMobileListItemsMarkup(filteredChildrenShowerGels);
    shopListChildrenToothpastes.innerHTML = createMobileListItemsMarkup(filteredChildrenToothpastes);
    shopListChildrenDiapers.innerHTML = createMobileListItemsMarkup(filteredChildrenDiapers);
  } else {
    SectionAllForChildren.style.display = "none";
  }
  
  if (filteredChildrenShampoos.length > 0 ||
    filteredAdultShampoos.length > 0 ||
    filteredHairConditioners.length > 0 ||
    filteredHairMasks.length > 0)  {
    shopListBabyShampoos.innerHTML = createMobileListItemsMarkup(filteredChildrenShampoos);
    shopListAdultShampoos.innerHTML = createMobileListItemsMarkup(filteredAdultShampoos);
    shopListHairConditioners.innerHTML = createMobileListItemsMarkup(filteredHairConditioners);
    shopListHairMasks.innerHTML = createMobileListItemsMarkup(filteredHairMasks);
  } else {
    SectionAllHairCare.style.display = "none";
  }

  if (filteredChildrenShowerGels.length > 0 ||
    filteredAdultShowerGels.length > 0) {
    shopListBabyShowerGels.innerHTML = createMobileListItemsMarkup(filteredChildrenShowerGels);
    shopListAdultShowerGels.innerHTML = createMobileListItemsMarkup(filteredAdultShowerGels);
  } else {
    SectionAllShowerGels.style.display = "none";
  }

  if (filteredLiquidSoap.length > 0 ||
    filteredSolidSoap.length > 0
   ) {
    shopListLiquidSoap.innerHTML = createMobileListItemsMarkup(filteredLiquidSoap);
    shopListSolidSoap.innerHTML = createMobileListItemsMarkup(filteredSolidSoap);
  } else {
    SectionAllSoap.style.display = "none";
  }

  if (filteredHandCremes.length > 0) {
    shopListHandCremes.innerHTML = createMobileListItemsMarkup(filteredHandCremes);
  } else {
    SectionAllHandCare.style.display = "none";
  }

  if (filteredChildrenToothpastes.length > 0 ||
    filteredToothpastesAdult.length > 0 ||
    filteredToothpastesNoFluoride.length > 0
   ) {
    shopListToothpastesChildren.innerHTML = createMobileListItemsMarkup(filteredChildrenToothpastes);
    shopListToothpastesAdult.innerHTML = createMobileListItemsMarkup(filteredToothpastesAdult);
    shopListToothpastesNoFluoride.innerHTML = createMobileListItemsMarkup(filteredToothpastesNoFluoride);
  } else {
    SectionAllToothpastes.style.display = "none";
  }

  if (filteredMicellarWipes.length > 0 ) {
    shopListMicellarWipes.innerHTML = createMobileListItemsMarkup(filteredMicellarWipes);
  } else {
    SectionAllWipes.style.display = "none";
  }

  if (filteredIntimHygiene.length > 0 ||
    filteredPantyliner.length > 0
   ) {
    shopListIntimHygiene.innerHTML = createMobileListItemsMarkup(filteredIntimHygiene);
    shopListPantyliner.innerHTML = createMobileListItemsMarkup(filteredPantyliner);
  } else {
    SectionAllFeminieHygiene.style.display = "none";
  }

  if (filteredTPThreeLayer.length > 0 ) {
    shopListTPThreeLayer.innerHTML = createMobileListItemsMarkup(filteredTPThreeLayer);
  } else {
    SectionAllToiletPaper.style.display = "none";
  }

  // const shopsections = [
  //     { element: shopListMicellarWipes, items: filteredMicellarWipes, section: SectionAllWipes }
  // ];

  // shopsections.forEach(shopsection => {
  //     if (shopsection.items.length > 0) {
  //         shopsection.element.innerHTML = createMobileListItemsMarkup(shopsection.items);
  //     } else {
  //         shopsection.section.style.display = "none";
  //     }
  // });

  if (filteredMeansHandsWashingDishes.length > 0 ||
    filteredMeansMechanicalWashingDishes.length > 0) {
    shopListMeansHandsWashingDishes.innerHTML = createMobileListItemsMarkup(filteredMeansHandsWashingDishes);
    shopListMeansMechanicalWashingDishes.innerHTML = createMobileListItemsMarkup(filteredMeansMechanicalWashingDishes);
  } else {
    SectionAllMeansWashing.style.display = "none";
  }

  if (filteredWashingGels.length > 0 ||
    filteredPowerCaps.length > 0 ||
    filteredWashingPowders.length > 0 ||
    filteredLaundrySheets.length > 0 ||
    filteredBleaches.length > 0 ||
    filteredStainRemovers.length > 0 ||
    filteredSofteners.length > 0 ||
    filteredScentBoosterGranuls.length > 0) {
    shopListWashingGels.innerHTML = createMobileListItemsMarkup(filteredWashingGels);
    shopListPowerCaps.innerHTML = createMobileListItemsMarkup(filteredPowerCaps);
    shopListWashingPowders.innerHTML = createMobileListItemsMarkup(filteredWashingPowders);
    shopListLaundrySheets.innerHTML = createMobileListItemsMarkup(filteredLaundrySheets);
    shopListBleaches.innerHTML = createMobileListItemsMarkup(filteredBleaches);
    shopListStainRemovers.innerHTML = createMobileListItemsMarkup(filteredStainRemovers);
    shopListSofteners.innerHTML = createMobileListItemsMarkup(filteredSofteners);
    shopListScentBoosterGranuls.innerHTML = createMobileListItemsMarkup(filteredScentBoosterGranuls);
  } else {
    SectionAllLaundryDetergents.style.display = "none";
  }

  if (filteredForWindows.length > 0 ||
    filteredForFurniture.length > 0 ||
    filteredForFloor.length > 0 ||
    filteredMeansCleaningUniversal.length > 0 ||
    filteredMeansCleaningKitchenBathroom.length > 0 ||
    filteredForWC.length > 0 ||
    filteredMeansCleaningDishwashers.length > 0 ||
    filteredCleaningWipes.length > 0 ) {
    shopListForWindows.innerHTML = createMobileListItemsMarkup(filteredForWindows);
    shopListForFurniture.innerHTML = createMobileListItemsMarkup(filteredForFurniture);
    shopListForFloor.innerHTML = createMobileListItemsMarkup(filteredForFloor);
    shopListMeansCleaningUniversal.innerHTML = createMobileListItemsMarkup(filteredMeansCleaningUniversal);
    shopListMeansCleaningKitchenBathroom.innerHTML = createMobileListItemsMarkup(filteredMeansCleaningKitchenBathroom);
    shopListForWC.innerHTML = createMobileListItemsMarkup(filteredForWC);
    shopListMeansCleaningDishwashers.innerHTML = createMobileListItemsMarkup(filteredMeansCleaningDishwashers);
    shopListCleaningWipes.innerHTML = createMobileListItemsMarkup(filteredCleaningWipes);
  } else {
    SectionAllMeansCleaning.style.display = "none";
  }
  
  const shopblocks = [
    { element: shopListSale, items: filteredSale, block: BlockSale },
  
    { element: shopListNoodles, items: filteredNoodles, block: BlockNoodles },
    { element: shopListMacaroni, items: filteredMacaroni, block: BlockMacaroni },
    { element: shopListSpaghetti, items: filteredSpaghetti, block: BlockSpaghetti },
    { element: shopListTarhona, items: filteredTarhona, block: BlockTarhona },
  
    { element: shopListCheese, items: filteredCheese, block: BlockCheese },

    { element: shopListPates, items: filteredPates, block: BlockPates },
    { element: shopListSalmon, items: filteredSalmon, block: BlockSalmon },
    { element: shopListMackerel, items: filteredMackerel, block: BlockMackerel },
    { element: shopListHerring, items: filteredHerring, block: BlockHerring },
    { element: shopListTuna, items: filteredTuna, block: BlockTuna },
    { element: shopListCod, items: filteredCod, block: BlockCod },
    { element: shopListSprats, items: filteredSprats, block: BlockSprats },
    
    { element: shopListPeanuts, items: filteredPeanuts, block: BlockPeanuts },
    { element: shopListPopcorn, items: filteredPopcorns, block: BlockPopcorn },
    { element: shopListPistachios, items: filteredPistachios, block: BlockPistachios },
    { element: shopListChips, items: filteredChips, block: BlockChips },

    // { element: shopListCreamSpreads, items: filteredCreamSpreads, block: BlockCreamSpreads },
    // { element: shopListCheeseSpreads, items: filteredCheeseSpreads, block: BlockCheeseSpreads },
    { element: shopListSweetSpreads, items: filteredSweetSpreads, block: BlockSweetSpreads },

    // { element: shopListBars, items: filteredBars, block: BlockBars },
    { element: shopListWaffles, items: filteredWaffles, block: BlockWaffles },
    { element: shopListChocolate, items: filteredChocolate, block: BlockChocolate },
    
    { element: shopListHotChocolate, items: filteredHotChocolate, block: BlockHotChocolate },
    { element: shopListCoffeeBeans, items: filteredCoffeeBeans, block: BlockCoffeeBeans },
    { element: shopListGroundCoffee, items: filteredGroundCoffee, block: BlockGroundCoffee },
    { element: shopListInstantCoffee, items: filteredInstantCoffee, block: BlockInstantCoffee },
    { element: shopListCacao, items: filteredCacao, block: BlockCacao },
    { element: shopListCappuccino, items: filteredCappuccino, block: BlockCappuccino },

    { element: shopListOil, items: filteredOil, block: BlockOil },
    { element: shopListOlives, items: filteredOlives, block: BlockOlives },
    { element: shopListOliveOil, items: filteredOliveOil, block: BlockOliveOil },

    // { element: shopListForBaking, items: filteredForBaking, block: BlockForBaking },
    { element: shopListMustard, items: filteredMustard, block: BlockMustard },
    { element: shopListSauces, items: filteredSauces, block: BlockSauces },
    { element: shopListSeasonings, items: filteredSeasonings, block: BlockSeasonings },

    { element: shopListChildrenShampoos, items: filteredChildrenShampoos, block: BlockChildrenShampoos },
    { element: shopListChildrenShowerGels, items: filteredChildrenShowerGels, block: BlockChildrenShowerGels },
    { element: shopListChildrenToothpastes, items: filteredChildrenToothpastes, block: BlockChildrenToothpastes },
    { element: shopListChildrenDiapers, items: filteredChildrenDiapers, block: BlockChildrenDiapers },
  
    { element: shopListBabyShampoos, items: filteredChildrenShampoos, block: BlockBabyShampoos },
    { element: shopListAdultShampoos, items: filteredAdultShampoos, block: BlockAdultShampoos },
    { element: shopListHairConditioners, items: filteredHairConditioners, block: BlockHairConditioners },
    { element: shopListHairMasks, items: filteredHairMasks, block: BlockHairMasks },

    { element: shopListBabyShowerGels, items: filteredChildrenShowerGels, block: BlockBabyShowerGels },
    { element: shopListAdultShowerGels, items: filteredAdultShowerGels, block: BlockAdultShowerGels },

    { element: shopListLiquidSoap, items: filteredLiquidSoap, block: BlockLiquidSoap },
    { element: shopListSolidSoap, items: filteredSolidSoap, block: BlockSolidSoap },

    { element: shopListHandCremes, items: filteredHandCremes, block: BlockHandCremes },

    { element: shopListToothpastesChildren, items: filteredChildrenToothpastes, block: BlockToothpastesChildren },
    { element: shopListToothpastesAdult, items: filteredToothpastesAdult, block: BlockToothpastesAdult },
    { element: shopListToothpastesNoFluoride, items: filteredToothpastesNoFluoride, block: BlockToothpastesNoFluoride },

    { element: shopListMicellarWipes, items: filteredMicellarWipes, block: BlockMicellarWipes },

    { element: shopListIntimHygiene, items: filteredIntimHygiene, block: BlockIntimHygiene },
    { element: shopListPantyliner, items: filteredPantyliner, block: BlockPantyliner },

    { element: shopListTPThreeLayer, items: filteredTPThreeLayer, block: BlockTPThreeLayer },
    
    { element: shopListMeansHandsWashingDishes, items: filteredMeansHandsWashingDishes, block: BlockHandsWashingDishes },
    { element: shopListMeansMechanicalWashingDishes, items: filteredMeansMechanicalWashingDishes, block: BlockMechanicalWashingDishes },

    { element: shopListWashingGels, items: filteredWashingGels, block: BlockWashingGels },
    { element: shopListPowerCaps, items: filteredPowerCaps, block: BlockPowerCaps },
    { element: shopListWashingPowders, items: filteredWashingPowders, block: BlockWashingPowders },
    { element: shopListLaundrySheets, items: filteredLaundrySheets, block: BlockLaundrySheets },
    { element: shopListBleaches, items: filteredBleaches, block: BlockBleaches },
    { element: shopListStainRemovers, items: filteredStainRemovers, block: BlockStainRemovers },
    { element: shopListSofteners, items: filteredSofteners, block: BlockSofteners },
    { element: shopListScentBoosterGranuls, items: filteredScentBoosterGranuls, block: BlockScentBoosterGranuls },

    { element: shopListForWindows, items: filteredForWindows, block: BlockForWindows },
    { element: shopListForFurniture, items: filteredForFurniture, block: BlockForFurniture },
    { element: shopListForFloor, items: filteredForFloor, block: BlockForFloor },
    { element: shopListMeansCleaningUniversal, items: filteredMeansCleaningUniversal, block: BlockCleaningUniversal },
    { element: shopListMeansCleaningKitchenBathroom, items: filteredMeansCleaningKitchenBathroom, block: BlockCleaningKitchenBathroom },
    { element: shopListForWC, items: filteredForWC, block: BlockForWC },
    { element: shopListMeansCleaningDishwashers, items: filteredMeansCleaningDishwashers, block: BlockCleaningDishwashers },
    { element: shopListCleaningWipes, items: filteredCleaningWipes, block: BlockCleaningWipes },
  ];

  if (searchItem === "") {

      shopblocks.forEach(shopblock => {
          
        shopblock.element.style.display = "flex";
      });
    
    lazyLoadImagesAnimation();
    window.removeEventListener('scroll', handleScroll);
        
    return;
  }

  shopblocks.forEach(shopblock => {
    if (shopblock.items.length > 0) {
      shopblock.element.style.display = "flex";
      shopblock.element.innerHTML = createMobileListItemsMarkup(shopblock.items);
    } else {
      shopblock.block.style.display = "none";
    }
  });

  jumpSearch();
  lazyLoadImagesAnimation();
  restoreIcons();
  window.removeEventListener('scroll', handleScroll);
}

// ===========================================================================
// Клик по акции
// ===========================================================================

const filterListSale = document.querySelectorAll('.filter__menu[data-target="sale"]');

filterListSale.forEach(filterItem => {
  filterItem.addEventListener('click', function (event) {
    outputError.textContent = "";
    outputError.style.marginTop = "0px";
    outputError.style.marginBottom = "0px";

    const target = event.currentTarget;

    console.log(target);

    if (target.tagName === "LI") {
      const dataTarget = target.getAttribute("data-target");

      if (dataTarget) {
        hideAllSectionsAndProducts();

        arrayOfProducts.forEach(({ element, dataTarget: productDataTarget, block }) => {
          if (productDataTarget === dataTarget) {
            element.style.display = "flex";

            const section = element.closest(".js-section-none");

            if (section) {
              section.style.display = "block";
            }

            if (block) {
              block.style.display = "block";

              arrayOfProducts.forEach(product => {
                if (productDataTarget === dataTarget) {
                  product.element.innerHTML = createMobileListItemsMarkup(product.items);
                }
              });
            }
          }
        });

        jumpSearch();
        lazyLoadImagesAnimation();
      }
    }
  });
});

// ===========================================================================
// Навигация по товарам
// ===========================================================================

[...filterLists, ...filterSecondaryLists].forEach(list => {
  list.addEventListener("click", filterClickHandler);
});

function hideAllSectionsAndProducts() {
  JSSectionOne.forEach(section => {
    section.style.display = "none";
  });

  arrayOfProducts.forEach(product => {
    product.element.style.display = "none";
    if (product.block) {
      product.block.style.display = "none";
    }
  });

  window.removeEventListener('scroll', handleScroll);
}

function filterClickHandler(event) {
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target;

  if (target.tagName === "LI") {
    const dataTarget = target.getAttribute("data-target");

    if (dataTarget) {
      hideAllSectionsAndProducts();

      arrayOfProducts.forEach(({ element, dataTarget: productDataTarget, block }) => {
        if (productDataTarget === dataTarget) {
          element.style.display = "flex";

          const section = element.closest(".js-section-none");

          if (section) {
            section.style.display = "block";
          }

          if (block) {
            block.style.display = "block";

            arrayOfProducts.forEach(product => {
              if (productDataTarget === dataTarget) {
                product.element.innerHTML = createMobileListItemsMarkup(product.items);
              }
            })
          }
        }
      });

      jumpSearch();
      lazyLoadImagesAnimation();
      restoreIcons();
    }  
  }
}

// ===========================================================================
// Навигация брендам
// ===========================================================================

// Разметка
const crasBrands = document.querySelectorAll('.js-cras__list--brends');

const arrayCrasBrands = new Set();

arrayOfProducts.forEach(product => {
  const brands = product.items.flatMap(item => item.brand);
  
  brands.forEach(brand => {
    arrayCrasBrands.add(brand);
  });
});

const arrayCrasBrandsMarkup = [...arrayCrasBrands];

arrayCrasBrandsMarkup.sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));

function createListCrasBrandsMarkup() {
    return arrayCrasBrandsMarkup.map(brand => {
      return `<li>${brand}</li>`;
    }).join("");
}

crasBrands.forEach(brandList => {
  brandList.innerHTML = createListCrasBrandsMarkup();
  brandList.addEventListener("click", brandClickHandler);
});

function brandClickHandler(event) {
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target;

  if (target.tagName === "LI") {
    const dataBrand = target.textContent;

    if (dataBrand) {
      hideAllSectionsAndProducts();

      arrayOfProducts.forEach(({ element, items, block }) => {
        if (items.some(item => item.brand === dataBrand)) {
          element.style.display = "flex";

          const section = element.closest(".js-section-none");

          if (section) {
            section.style.display = "block";
          }

          if (block) {
            block.style.display = "block";

            arrayOfProducts.forEach(product => {
              const foundItems = product.items.filter(item => item.brand === dataBrand);
              if (foundItems.length > 0) {
                product.element.innerHTML = createMobileListItemsMarkup(foundItems);
              }
            });
          }
        }
      });

      jumpSearch();
      lazyLoadImagesAnimation();
      restoreIcons();
    }
  }
}

// ===========================================================================
// Навигация по странам
// ===========================================================================

// Разметка
const producingCountrys = document.querySelectorAll('.js-cras__list--producing-countrys');

const arrayProducingCountrys = new Set();

arrayOfProducts.forEach(product => {
  const countries = product.items.flatMap(item => item.countryName);
  
  countries.forEach(country => {
    arrayProducingCountrys.add(country);
  });
});

const arrayProducingCountrysMarkup = [...arrayProducingCountrys];

arrayProducingCountrysMarkup.sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));

function createListProducingCountrysMarkup() {
    return arrayProducingCountrysMarkup.map(country => {
      return `<li>${country}</li>`;
    }).join("");
}

producingCountrys.forEach(countryList => {
  countryList.innerHTML = createListProducingCountrysMarkup();
  countryList.addEventListener("click", countryClickHandler);
});

function countryClickHandler(event) {
  outputError.textContent = "";
  outputError.style.marginTop = "0px";
  outputError.style.marginBottom = "0px";
  
  const target = event.target;

  if (target.tagName === "LI") {
    const dataCountry = target.textContent;

    if (dataCountry) {
      hideAllSectionsAndProducts();

        arrayOfProducts.forEach(({ element, items, block }) => {
          if (items.some(item => item.countryName === dataCountry)) {
            element.style.display = "flex";

            const section = element.closest(".js-section-none");
            if (section) {
              section.style.display = "block";
            }

            if (block) {
              block.style.display = "block";

              arrayOfProducts.forEach(product => {
                const foundItems = product.items.filter(item => item.countryName === dataCountry);
                if (foundItems.length > 0) {
                  product.element.innerHTML = createMobileListItemsMarkup(foundItems);
                }
              });
            }
          }
        });

      jumpSearch();
      lazyLoadImagesAnimation();
      restoreIcons();
    }
  }
}

// ===========================================================================
// Открытие модального окна лота
// ===========================================================================

const shopListAllLots = document.querySelector(".js-click-for-new-window");

const shopListMobileLot = document.querySelector('.js-modal-lot');

shopListAllLots.addEventListener('click', lotModalOpenHandler);

function lotModalOpenHandler(event) {
  const targetButton = event.target.closest('button[data-modal-lot-open]');

  if (targetButton) {
    const target = targetButton.closest("li.cras-block");

    if (target) {
      const markerElement = target.querySelector(".js-marker").textContent;

      onOpenModal(refs.openModalLot);

      let foundItem = null;

      arrayOfProducts.forEach(({ items }) => {
        items.forEach(item => {
          if (item.marker === markerElement && !foundItem) {
            foundItem = item;
          }
        });
      });

      if (foundItem) {
        shopListMobileLot.innerHTML = createModalListItemsMarkup([foundItem]);

        const swiperLotButtons = document.querySelector(".js-swiper-lot-buttons");
        const arrayLengthImages = Object.keys(foundItem).filter(key => key.startsWith('url')).length;

        initializeSlider(foundItem, arrayLengthImages);

        if (arrayLengthImages === 2) {
          
          swiperLotButtons.style.display = 'none';
        }
      }
    }

    function initializeSlider(foundItem, arrayLengthImages) {

      const lotButtonNext = document.querySelector(".js-swiper-lot-button-next");
      const lotButtonPrev = document.querySelector(".js-swiper-lot-button-prev");

      lotButtonNext.addEventListener("click", scaleButtonNext);
      lotButtonPrev.addEventListener("click", scaleButtonPrev);

      function scaleButtonNext() {
        lotButtonNext.style.transform = 'scale(0.8)';
        setTimeout(function () {
          lotButtonNext.style.transform = 'scale(1)';
        }, 200);
      }

      function scaleButtonPrev() {
        lotButtonPrev.style.transform = 'scale(0.8)';
        setTimeout(function () {
          lotButtonPrev.style.transform = 'scale(1)';
        }, 200);
      }

      new Swiper('.js-swiper-modal-lot', {
        slidesPerView: 1,
        mousewheel: {
          sensitivity: 1,
        },
        navigation: {
          nextEl: '.swiper-lot-button-next',
          prevEl: '.swiper-lot-button-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        zoom: {
          maxRatio: 5,
          minRatio: 1,
        },
        virtual: {
          slides: (function () {
            let lotImages = [];

            for (let i = 1; i < arrayLengthImages; i++) {
              lotImages.push(`
                <div class="swiper-zoom-container"
                  <div class="swiper-slide">
                    <img class="cras-item__img"
                      src="${foundItem[`url${i}`]}"
                      alt="${foundItem[`alt${i}`]}" 
                      width="310" 
                      height="310"
                    />
                  </div>
                </div>
              `);
            }

            return lotImages;
          })(),
        },
      });
    }

    // Убираем предыдущий слушатель события click, если он был
    const crasItems = document.querySelectorAll(".js-cras-item");
    crasItems.forEach((crasItem) => {
      crasItem.removeEventListener('click', lotBasketHandler);
    });

    lazyLoadImagesAnimation();
    iconsDescriptionAnimation();

    // Добавляем новый слушатель события click
    crasItems.forEach((crasItem) => {
      crasItem.addEventListener('click', (event) => {
        lotBasketHandler(event);
        restoreIcons();
      });
    });

    // Обновляем иконки в модальном окне
    const lotModalElements = document.querySelectorAll(".js-cras-item");
    restoreStoregeIcons(lotModalElements); // Добавили вызов сюда
  }
}
