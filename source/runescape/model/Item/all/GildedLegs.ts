import { Item, ItemJson } from '../Item';

const gildedLegsData: ItemJson = {
  id: 3831,
  name: 'Gilded legs',
  iconUrl: '/assets/items/3831.png',
  examine: 'Rune platelegs with gold plate.',
  value: 18000,
  highAlch: 18000,
  lowAlch: 12000,
  weight: 6.804,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-10-26',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Gilded_legs',
  attackMagic: -20,
  attackRanged: -10,
  defenceStab: 50,
  defenceSlash: 48,
  defenceCrush: 43,
  defenceMagic: -4,
  defenceRanged: 50,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const GildedLegs = Item.fromJson(gildedLegsData);
