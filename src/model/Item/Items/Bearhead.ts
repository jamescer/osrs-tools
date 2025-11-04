import { Item } from '../Item';

const bearheadData = {
  equipable: true,
  examine: 'A novelty bear mask.',
  id: 4181,
  members: true,
  attackSlash: 0,
  name: 'Bearhead',
  attackCrush: 0,
  noted: false,
  attackMagic: -3,
  questItem: true,
  attackRanged: -3,

  stackable: false,

  // Combat stats
attackStab: 0,

  
  tradeable: false,

  defenceCrush: 5,

  value: 1,
  defenceMagic: -1,
  defenceRanged: 4,
  weight: 0.907,
  defenceSlash: 4,
  defenceStab: 3,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bearhead',
};

export const Bearhead = Item.fromJson(bearheadData);
