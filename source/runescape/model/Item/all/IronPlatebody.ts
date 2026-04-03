import { Item } from '../Item';

const ironPlatebodyData = {
  id: 1589,
  name: 'Iron platebody',
  iconUrl: '/assets/items/iron-platebody.png',
  examine: 'A suit of iron body armour.',
  value: 104,
  highAlch: 62,
  lowAlch: 41,
  weight: 10,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -2,
  attackRanged: -1,
  attackMagic: -10,
  defenceStab: 20,
  defenceSlash: 20,
  defenceCrush: 18,
  defenceRanged: 2,
  defenceMagic: 2,
  prayer: 0,
};

export const IronPlatebody = Item.fromJson(ironPlatebodyData);
