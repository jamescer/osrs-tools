import { Item, ItemJson } from '../Item';

const mythicalCapeData: ItemJson = {
  attackCrush: 1,
  attackMagic: 3,
  attackRanged: 0,
  attackSlash: 1,
  attackStab: 1,
  defenceCrush: 3,
  defenceMagic: 3,
  defenceRanged: 3,
  defenceSlash: 3,
  defenceStab: 3,
  destroy: 'You can get another cape from Alec Kincade.',
  equipable: true,
  examine: 'A cape awarded for completing Dragon Slayer II.',
  highAlch: 30000,
  id: 21295,
  lowAlch: 20000,
  members: true,
  meleeStrength: 1,
  name: 'Mythical cape',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mythical_cape',
  prayer: 1,
  questItem: false,
  releaseDate: '4 January 2018',
  stackable: false,
  tradeable: false,
  value: 50000,
  weight: 0.453,
};

export const MythicalCape = Item.fromJson(mythicalCapeData);
