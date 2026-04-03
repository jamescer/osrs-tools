import { Item } from '../Item';

const dragonPlatebodyData = {
  id: 1727,
  name: 'Dragon platebody',
  iconUrl: '/assets/items/dragon-platebody.png',
  examine: 'A suit of dragon body armour.',
  value: 165000,
  highAlch: 99000,
  lowAlch: 66000,
  weight: 39.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-09-21',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_platebody',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -8,
  attackRanged: -5,
  attackMagic: -50,
  defenceStab: 80,
  defenceSlash: 80,
  defenceCrush: 75,
  defenceRanged: 10,
  defenceMagic: 10,
  prayer: 3,
};

export const DragonPlatebody = Item.fromJson(dragonPlatebodyData);
