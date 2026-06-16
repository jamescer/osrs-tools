import { Item, ItemJson } from '../Item';

const catData: ItemJson = {
  destroy: 'Your cat will run away if released. You can get another kitten from Gertrude.',
  equipable: false,
  examine: 'A well loved pet.',
  highAlch: 60,
  id: 1561,
  lowAlch: 40,
  members: true,
  meleeStrength: 0,
  name: 'Cat',
  iconUrl: '/assets/items/1561.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cat',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: false,
  value: 100,
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

export const Cat = Item.fromJson(catData);
