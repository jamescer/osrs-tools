import { Item, ItemJson } from '../Item';

const ancestralRobeTopData: ItemJson = {
  id: 13072,
  name: 'Ancestral robe top',
  iconUrl: '/assets/items/13072.png',
  examine: 'The robe top of a powerful sorceress from a bygone era.',
  value: 72000,
  highAlch: 72000,
  lowAlch: 48000,
  weight: 2.721,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2017-01-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ancestral_robe_top',
  attackMagic: 35,
  attackRanged: -8,
  defenceStab: 42,
  defenceSlash: 31,
  defenceCrush: 51,
  defenceMagic: 28,
  magicDamage: 3,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  prayer: 0
};

export const AncestralRobeTop = Item.fromJson(ancestralRobeTopData);
