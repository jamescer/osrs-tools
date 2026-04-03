import { Item, ItemJson } from '../Item';

const rangerGlovesData: ItemJson = {
  id: 7662,
  name: 'Ranger gloves',
  iconUrl: '/assets/items/ranger-gloves.png',
  examine: 'Lightweight gloves ideal for rangers.',
  value: 2040,
  highAlch: 2040,
  lowAlch: 1360,
  weight: 0.226,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2016-07-06',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ranger_gloves',
  attackRanged: 11,
  attackMagic: -10,
  defenceStab: 1,
  defenceSlash: 2,
  defenceCrush: 1,
  defenceMagic: 2,
};

export const RangerGloves = Item.fromJson(rangerGlovesData);
