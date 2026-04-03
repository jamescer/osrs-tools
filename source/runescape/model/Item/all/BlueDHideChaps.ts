import { Item } from '../Item';

const blueDHideChapsData = {
  id: 2501,
  name: 'Blue d\'hide chaps',
  iconUrl: '/assets/items/blue-dhide-chaps.png',
  examine: 'Leg armour made from blue dragon hide.',
  value: 1800,
  highAlch: 1080,
  lowAlch: 720,
  weight: 6.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_d\'hide_chaps',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 15,
  attackMagic: -5,
  defenceStab: 8,
  defenceSlash: 8,
  defenceCrush: 6,
  defenceRanged: 20,
  defenceMagic: -3,
  rangedStrength: 3,
};

export const BlueDHideChaps = Item.fromJson(blueDHideChapsData);
