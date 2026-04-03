import { Item } from '../Item';

const blueDHideBodyData = {
  id: 2499,
  name: 'Blue d\'hide body',
  iconUrl: '/assets/items/blue-dhide-body.png',
  examine: 'Body armour made from blue dragon hide.',
  value: 3000,
  highAlch: 1800,
  lowAlch: 1200,
  weight: 10,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_d\'hide_body',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 20,
  attackMagic: -10,
  defenceStab: 10,
  defenceSlash: 10,
  defenceCrush: 8,
  defenceRanged: 30,
  defenceMagic: -5,
  rangedStrength: 5,
};

export const BlueDHideBody = Item.fromJson(blueDHideBodyData);
