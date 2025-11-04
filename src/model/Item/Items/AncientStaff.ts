import { Item } from '../Item';

const ancientStaffData = {
  equipable: true,
  examine: 'A staff of the ancient magicks.',
  id: 4675,
  members: true,
  attackSlash: -1,
  name: 'Ancient staff',
  attackCrush: 10,
  noted: false,
  attackMagic: 15,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 2,

  
  tradeable: true,

  defenceCrush: 2,

  value: 80000,
  defenceMagic: 15,
  defenceRanged: 0,
  weight: 2.267,
  defenceSlash: 3,
  defenceStab: 2,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ancient_staff',
  prayerBonus: 1,
  strengthBonus: 0,
};

export const AncientStaff = Item.fromJson(ancientStaffData);
