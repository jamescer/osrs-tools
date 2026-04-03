import { Item } from '../Item';

const uncutDiamondData = {
  id: 1617,
  name: 'Uncut diamond',
  iconUrl: '/assets/items/uncut-diamond.png',
  examine: 'An uncut diamond.',
  value: 2144,
  highAlch: 1286,
  lowAlch: 857,
  weight: 0.02,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Uncut_diamond',
};

export const UncutDiamond = Item.fromJson(uncutDiamondData);
