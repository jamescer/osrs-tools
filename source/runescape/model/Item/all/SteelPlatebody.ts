import { Item } from '../Item';

const steelPlatebodyData = {
  id: 1595,
  name: 'Steel platebody',
  iconUrl: '/assets/items/steel-platebody.png',
  examine: 'A suit of steel body armour.',
  value: 312,
  highAlch: 187,
  lowAlch: 124,
  weight: 15.25,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -3,
  attackRanged: -2,
  attackMagic: -15,
  defenceStab: 30,
  defenceSlash: 30,
  defenceCrush: 26,
  defenceRanged: 4,
  defenceMagic: 4,
  prayer: 0,
};

export const SteelPlatebody = Item.fromJson(steelPlatebodyData);
