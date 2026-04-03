import { Item, ItemJson } from '../Item';

const goldenChefsHatData: ItemJson = {
  id: 13213,
  name: 'Golden chef\'s hat',
  iconUrl: '/assets/items/golden-chefs-hat.png',
  examine: 'What a perfectly reasonable hat.',
  value: 366692,
  highAlch: 1,
  lowAlch: 0,
  weight: 0.907,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2016-07-06',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Golden_chef%27s_hat',
};

export const GoldenChefsHat = Item.fromJson(goldenChefsHatData);
