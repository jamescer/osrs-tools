import { Item, ItemJson } from '../Item';

const clueScrollEliteData: ItemJson = {
  id: 12070,
  name: 'Clue scroll (elite)',
  iconUrl: '/assets/items/12070.png',
  examine: 'A clue for a treasure trail.',
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2018-04-05',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Clue_scroll_(elite)',
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

export const ClueScrollElite = Item.fromJson(clueScrollEliteData);
