import { Item } from '../Item';

const fairyRingStaffData = {
  attackCrush: 5,
  attackMagic: 8,
  attackRanged: 0,
  attackSlash: -1,
  // Combat stats
  attackStab: 2,

  defenceCrush: 2,

  defenceMagic: 8,

  defenceRanged: 0,

  defenceSlash: 3,

  defenceStab: 2,

  equipable: true,

  examine: 'A staff made on the Lunar Isle.',

  id: 13431,

  magicDamage: 0,

  members: true,

  name: 'Lunar staff',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Lunar_staff',
  prayerBonus: 1,
  questItem: false,
  stackable: false,
  strengthBonus: 5,
  tradeable: false,
  value: 30000,
  weight: 2.267,
};

export const LunarStaff = Item.fromJson(fairyRingStaffData);
