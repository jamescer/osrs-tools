import { Item } from '../Item';

const fairyRingStaffData = {
  equipable: true,
  examine: 'A staff made on the Lunar Isle.',
  id: 13431,
  members: true,
  attackSlash: -1,
  name: 'Lunar staff',
  attackCrush: 5,
  noted: false,
  attackMagic: 8,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 2,

  
  tradeable: false,

  defenceCrush: 2,

  value: 30000,
  defenceMagic: 8,
  defenceRanged: 0,
  weight: 2.267,
  defenceSlash: 3,
  defenceStab: 2,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Lunar_staff',
  prayerBonus: 1,
  strengthBonus: 5,
};

export const LunarStaff = Item.fromJson(fairyRingStaffData);
