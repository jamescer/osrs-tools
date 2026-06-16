import { Item, ItemJson } from '../Item';

const bonesData: ItemJson = {
  id: 20,
  name: 'Bones',
  iconUrl: '/assets/items/20.png',
  examine: 'Just some regular bones.',
  members: false,
  stackable: false,
  value: 4,
  lowAlch: 3,
  highAlch: 4,
  weight: 0.1,
  tradeable: true,
  equipable: false,
  destroy: 'Drop',
  questItem: false,
  releaseDate: '2001-01-04',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bones',
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

export const Bones = Item.fromJson(bonesData);
