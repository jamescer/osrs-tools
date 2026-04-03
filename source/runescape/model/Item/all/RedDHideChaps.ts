import { Item } from '../Item';

const redDHideChapsData = {
  id: 2505,
  name: 'Red d\'hide chaps',
  iconUrl: '/assets/items/red-dhide-chaps.png',
  examine: 'Leg armour made from red dragon hide.',
  value: 4500,
  highAlch: 2700,
  lowAlch: 1800,
  weight: 6.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-02-04',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Red_d\'hide_chaps',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 20,
  attackMagic: -5,
  defenceStab: 10,
  defenceSlash: 10,
  defenceCrush: 8,
  defenceRanged: 25,
  defenceMagic: -3,
  rangedStrength: 5,
};

export const RedDHideChaps = Item.fromJson(redDHideChapsData);
