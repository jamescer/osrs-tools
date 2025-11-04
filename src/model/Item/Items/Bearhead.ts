import { Item } from '../Item';

const bearheadData = {
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: -3,
  attackSlash: 0,
  // Combat stats
  attackStab: 0,

  defenceCrush: 5,

  defenceMagic: -1,

  defenceRanged: 4,

  defenceSlash: 4,

  defenceStab: 3,

  equipable: true,

  examine: 'A novelty bear mask.',

  id: 4181,

  members: true,

  name: 'Bearhead',

  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bearhead',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.907,
};

export const Bearhead = Item.fromJson(bearheadData);
