import { Item, ItemJson } from '../Item';

const ancestralRobeBottomData: ItemJson = {
  id: 13073,
  name: 'Ancestral robe bottom',
  iconUrl: '/assets/items/ancestral-robe-bottom.png',
  examine: 'The robe bottoms of a powerful sorceress from a bygone era.',
  value: 48000,
  highAlch: 48000,
  lowAlch: 32000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2017-01-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ancestral_robe_bottom',
  attackMagic: 26,
  attackRanged: -7,
  defenceStab: 27,
  defenceSlash: 24,
  defenceCrush: 30,
  defenceMagic: 20,
  magicDamage: 3,
};

export const AncestralRobeBottom = Item.fromJson(ancestralRobeBottomData);
