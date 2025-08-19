import { Item } from '../Item';

const blackAxeData = {
  id: 1361,
  name: 'Black axe',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 180,
  examine: 'A sinister looking axe.',
  equipable: true,
  weight: 1.814,
  questItem: false,
  // Combat stats
  attackStab: -2,
  attackSlash: 4,
  attackCrush: 3,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 1,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  strengthBonus: 5,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_axe',
};

export const BlackAxe = Item.fromJson(blackAxeData);
