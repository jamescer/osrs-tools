import { Item } from '../Item';

const redDHideBodyData = {
  id: 2503,
  name: 'Red d\'hide body',
  iconUrl: '/assets/items/red-dhide-body.png',
  examine: 'Body armour made from red dragon hide.',
  value: 7500,
  highAlch: 4500,
  lowAlch: 3000,
  weight: 10,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-02-04',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Red_d\'hide_body',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 30,
  attackMagic: -10,
  defenceStab: 12,
  defenceSlash: 12,
  defenceCrush: 10,
  defenceRanged: 40,
  defenceMagic: -5,
  rangedStrength: 8,
};

export const RedDHideBody = Item.fromJson(redDHideBodyData);
