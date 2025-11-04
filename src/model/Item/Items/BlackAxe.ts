import { Item } from '../Item';

const blackAxeData = {
  equipable: true,
  examine: 'A sinister looking axe.',
  id: 1361,
  members: true,
  attackSlash: 4,
  name: 'Black axe',
  attackCrush: 3,
  noted: false,
  attackMagic: 0,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: -2,

  
  tradeable: true,

  defenceCrush: 0,

  value: 180,
  defenceMagic: 0,
  defenceRanged: 0,
  weight: 1.814,
  defenceSlash: 1,
  defenceStab: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_axe',
  strengthBonus: 5,
};

export const BlackAxe = Item.fromJson(blackAxeData);
