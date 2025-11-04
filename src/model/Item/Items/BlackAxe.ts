import { Item } from '../Item';

const blackAxeData = {
  attackCrush: 3,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 4,
  // Combat stats
  attackStab: -2,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 1,

  defenceStab: 0,

  equipable: true,

  examine: 'A sinister looking axe.',

  id: 1361,

  members: true,

  name: 'Black axe',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_axe',
  questItem: false,
  stackable: false,
  strengthBonus: 5,
  tradeable: true,
  value: 180,
  weight: 1.814,
};

export const BlackAxe = Item.fromJson(blackAxeData);
