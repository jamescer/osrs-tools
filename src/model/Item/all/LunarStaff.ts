import { Item, ItemJson } from '../Item';

const lunarStaffData: ItemJson = {
  attackCrush: 5,
  attackMagic: 8,
  attackRanged: 0,
  attackSlash: -1,
  attackStab: 2,
  defenceCrush: 2,
  defenceMagic: 8,
  defenceRanged: 0,
  defenceSlash: 3,
  defenceStab: 2,
  destroy: 'Drop',
  equipable: true,
  examine: 'A staff made on the Lunar Isle.',
  highAlch: 18000,
  id: 13431,
  lowAlch: 12000,
  members: true,
  meleeStrength: 5,
  name: 'Lunar staff',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Lunar_staff',
  prayer: 1,
  questItem: false,
  releaseDate: '24 July 2007',
  stackable: false,
  tradeable: false,
  value: 30000,
  weight: 2.267,
};

export const LunarStaff = Item.fromJson(lunarStaffData);
