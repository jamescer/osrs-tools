import { Item, ItemJson } from '../Item';

const bucketData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A wooden bucket.',
  highAlch: 1,
  id: 1925,
  lowAlch: 0,
  members: false,
  meleeStrength: 0,
  name: 'Bucket',
  iconUrl: '/assets/items/1925.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bucket',
  prayer: 0,
  questItem: false,
  releaseDate: '4 January 2001',
  stackable: false,
  tradeable: true,
  value: 2,
  weight: 1,
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
  rangedStrength: 0,
  magicDamage: 0
};

export const Bucket = Item.fromJson(bucketData);
