import { Item, ItemJson } from '../Item';

const ropeData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A sturdy rope with many uses.',
  highAlch: 0,
  id: 954,
  lowAlch: 0,
  members: false,
  meleeStrength: 0,
  name: 'Rope',
  iconUrl: '/assets/items/954.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rope',
  questItem: false,
  releaseDate: '11 June 2001',
  stackable: false,
  tradeable: true,
  value: 15,
  weight: 0.3,
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
  magicDamage: 0,
  prayer: 0
};

export const Rope = Item.fromJson(ropeData);
