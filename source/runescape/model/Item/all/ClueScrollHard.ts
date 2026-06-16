import { Item, ItemJson } from '../Item';

const clueScrollHardData: ItemJson = {
  id: 2777,
  name: 'Clue scroll (hard)',
  iconUrl: '/assets/items/2777.png',
  examine: 'A clue for a treasure trail.',
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2016-07-28',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(hard)',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const ClueScrollHard = Item.fromJson(clueScrollHardData);
