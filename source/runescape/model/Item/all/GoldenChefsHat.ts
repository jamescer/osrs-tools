import { Item, ItemJson } from '../Item';

const goldenChefsHatData: ItemJson = {
  id: 13213,
  name: 'Golden chef\'s hat',
  iconUrl: '/assets/items/13213.png',
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
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const GoldenChefsHat = Item.fromJson(goldenChefsHatData);
