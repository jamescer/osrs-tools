import { Item } from '../Item';

const fairyRingStaffData = {
  id: 13431,
  name: 'Lunar staff',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 30000,
  examine: 'A staff made on the Lunar Isle.',
  equipable: true,
  weight: 2.267,
  questItem: false,
  // Combat stats
  attackStab: 2,
  attackSlash: -1,
  attackCrush: 5,
  attackMagic: 8,
  attackRanged: 0,
  defenceStab: 2,
  defenceSlash: 3,
  defenceCrush: 2,
  defenceMagic: 8,
  defenceRanged: 0,
  strengthBonus: 5,
  magicDamage: 0,
  prayerBonus: 1,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Lunar_staff',
};

export const LunarStaff = Item.fromJson(fairyRingStaffData);
