import { Item } from '../Item';

const ancientStaffData = {
  attackCrush: 10,
  attackMagic: 15,
  attackRanged: 0,
  attackSlash: -1,
  // Combat stats
  attackStab: 2,

  defenceCrush: 2,

  defenceMagic: 15,

  defenceRanged: 0,

  defenceSlash: 3,

  defenceStab: 2,

  equipable: true,

  examine: 'A staff of the ancient magicks.',

  id: 4675,

  magicDamage: 0,

  members: true,

  name: 'Ancient staff',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ancient_staff',
  prayerBonus: 1,
  questItem: false,
  stackable: false,
  strengthBonus: 0,
  tradeable: true,
  value: 80000,
  weight: 2.267,
};

export const AncientStaff = Item.fromJson(ancientStaffData);
