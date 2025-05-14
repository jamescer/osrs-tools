import { SlayerBuy } from "../../model/slayer/SlayerReward";

const SlayerBuys: SlayerBuy[] = [
  {
    item: 'Slayer ring',
    priceSoldAt: 75,
    notes:
      'An equippable ring that provides all the functions of an Enchanted gem, and provides 8 charges for teleporting to useful Slayer sites.',
  },
  {
    item: 'Broad bolts (x250)',
    priceSoldAt: 35,
    notes:
      'Bolts that can damage Turoths and Kurask. Level 55 Slayer and 61 Ranged, alongside a suitable bow, are required to fire these bolts.',
  },
  {
    item: 'Broad arrows (x250)',
    priceSoldAt: 35,
    notes:
      'Arrows that can damage Turoths and Kurask. Level 55 Slayer and 50 Ranged, alongside a suitable bow, are required to fire these arrows.',
  },
  {
    item: 'Herb sack',
    priceSoldAt: 750,
    notes:
      'Stores up to 30 of each type of grimy herb (for a total of 420 herbs). Level 58 Herblore is required to use it.',
  },
  {
    item: 'Rune pouch',
    priceSoldAt: 750,
    notes:
      'Stores up to 16,000 of three types of runes. Only one can be owned. Can also be obtained by exchanging a rune pouch note at a bank.',
  },
];

export { SlayerBuys, SlayerBuy };

module.exports = exports = { SlayerBuys };
