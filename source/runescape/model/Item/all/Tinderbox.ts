import { Item, ItemJson } from '../Item';

const tinderboxData: ItemJson = {
  equipable: false,
  examine: 'Useful for lighting fires.',
  id: 590,
  members: false,
  name: 'Tinderbox',
  iconUrl: '/assets/items/590.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tinderbox',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 1,
  weight: 0.1,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: '',
  destroy: '',
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
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const Tinderbox = Item.fromJson(tinderboxData);
