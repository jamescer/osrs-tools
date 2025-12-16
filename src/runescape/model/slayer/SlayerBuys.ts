import { SlayerBuy } from './SlayerReward';

const SlayerBuys: SlayerBuy[] = [
  {
    item: 'Slayer ring',
    notes:
      'An equippable ring that provides all the functions of an Enchanted gem, and provides 8 charges for teleporting to useful Slayer sites.',
    priceSoldAt: 75,
  },
  {
    item: 'Broad bolts (x250)',
    notes:
      'Bolts that can damage Turoths and Kurask. Level 55 Slayer and 61 Ranged, alongside a suitable bow, are required to fire these bolts.',
    priceSoldAt: 35,
  },
  {
    item: 'Broad arrows (x250)',
    notes:
      'Arrows that can damage Turoths and Kurask. Level 55 Slayer and 50 Ranged, alongside a suitable bow, are required to fire these arrows.',
    priceSoldAt: 35,
  },
  {
    item: 'Herb sack',
    notes:
      'Stores up to 30 of each type of grimy herb (for a total of 420 herbs). Level 58 Herblore is required to use it.',
    priceSoldAt: 750,
  },
  {
    item: 'Rune pouch',
    notes:
      'Stores up to 16,000 of three types of runes. Only one can be owned. Can also be obtained by exchanging a rune pouch note at a bank.',
    priceSoldAt: 750,
  },
];

export { SlayerBuy, SlayerBuys };

module.exports = exports = { SlayerBuys };
