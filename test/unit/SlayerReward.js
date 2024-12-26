import {
  SlayerUnlock,
  SlayerReward,
  SlayerExtend,
  SlayerBuy,
} from '../../lib/model/slayer/SlayerReward';

var testUnlock = {
  name: 'Task Storage',
  cost: 1000,
  description:
    'Gain the ability to store your task for 50 points, allowing you to take it at a later time.',
};

var testExtend = {
  name: 'To dust you shall return',
  cost: 100,
  notes: 'Number of dust devils assigned is increased to 200-250.',
};
var testBuy = {
  item: 'Rune pouch',
  priceSoldAt: 750,
  notes:
    'Stores up to 16,000 of three types of runes. Only one can be owned. Can also be obtained by exchanging a rune pouch note at a bank.',
};

var unlock = new SlayerUnlock(testUnlock);
var extend = new SlayerExtend(testExtend);
var buy = new SlayerBuy(testBuy);
console.log(unlock);
console.log(extend);
console.log(buy);
