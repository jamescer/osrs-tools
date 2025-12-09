import { Item, ItemJson } from '../Item';

const blackAxeData: ItemJson = {
  attackCrush: 3,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 4,
  attackStab: -2,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  defenceSlash: 1,
  defenceStab: 0,
  destroy: 'Drop',
  equipable: true,
  examine: 'A sinister looking axe.',
  highAlch: 108,
  id: 1361,
  lowAlch: 72,
  members: true,
  meleeStrength: 5,
  name: 'Black axe',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_axe',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: true,
  value: 180,
  weight: 1.814,
};

export const BlackAxe = Item.fromJson(blackAxeData);
