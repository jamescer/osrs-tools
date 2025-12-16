import { Item, ItemJson } from '../Item';

const bearheadData: ItemJson = {
  attackCrush: 0,
  attackMagic: -3,
  attackRanged: -3,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 5,
  defenceMagic: -1,
  defenceRanged: 4,
  defenceSlash: 4,
  defenceStab: 3,
  destroy: 'Drop',
  equipable: true,
  examine: 'A novelty bear mask.',
  highAlch: 0,
  id: 4181,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Bearhead',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bearhead',
  prayer: 0,
  questItem: true,
  releaseDate: '31 May 2005',
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.907,
};

export const Bearhead = Item.fromJson(bearheadData);
