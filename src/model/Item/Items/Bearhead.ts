import { Item } from '../Item';

const bearheadData = {
  id: 4181,
  name: 'Bearhead',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'A novelty bear mask.',
  equipable: true,
  weight: 0.907,
  questItem: true,
  // Combat stats
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: -3,
  defenceStab: 3,
  defenceSlash: 4,
  defenceCrush: 5,
  defenceMagic: -1,
  defenceRanged: 4,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bearhead',
};

export const Bearhead = Item.fromJson(bearheadData);
