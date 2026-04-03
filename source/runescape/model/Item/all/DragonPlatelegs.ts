import { Item } from '../Item';

const dragonPlatesData = {
  id: 1729,
  name: 'Dragon platelegs',
  iconUrl: '/assets/items/dragon-platelegs.png',
  examine: 'A suit of dragon leg armour.',
  value: 165000,
  highAlch: 99000,
  lowAlch: 66000,
  weight: 23.75,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-09-21',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_platelegs',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -4,
  attackRanged: -2,
  attackMagic: -25,
  defenceStab: 56,
  defenceSlash: 56,
  defenceCrush: 50,
  defenceRanged: 7,
  defenceMagic: 7,
  prayer: 2,
};

export const DragonPlatelegs = Item.fromJson(dragonPlatesData);
