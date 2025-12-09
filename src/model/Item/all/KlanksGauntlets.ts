import { Item, ItemJson } from '../Item';

const klanksGauntletsData: ItemJson = {
  attackCrush: 2,
  attackMagic: -3,
  attackRanged: -3,
  attackSlash: 2,
  attackStab: 2,
  defenceCrush: 4,
  defenceMagic: 0,
  defenceRanged: 0,
  defenceSlash: 4,
  defenceStab: 4,
  destroy: 'Drop',
  equipable: true,
  examine: 'Made by the dwarf smith Klank.',
  highAlch: 114,
  id: 1499,
  lowAlch: 76,
  members: true,
  meleeStrength: 2,
  name: "Klank's gauntlets",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Klank%27s_gauntlets',
  prayer: 0,
  questItem: false,
  releaseDate: '27 February 2002',
  stackable: false,
  tradeable: false,
  value: 190,
  weight: 0.34,
};

export const KlanksGauntlets = Item.fromJson(klanksGauntletsData);
