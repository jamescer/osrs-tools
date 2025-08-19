import { Item } from '../Item';

const ancientStaffData = {
  id: 4675,
  name: 'Ancient staff',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 80000,
  examine: 'A staff of the ancient magicks.',
  equipable: true,
  weight: 2.267,
  questItem: false,
  // Combat stats
  attackStab: 2,
  attackSlash: -1,
  attackCrush: 10,
  attackMagic: 15,
  attackRanged: 0,
  defenceStab: 2,
  defenceSlash: 3,
  defenceCrush: 2,
  defenceMagic: 15,
  defenceRanged: 0,
  strengthBonus: 0,
  magicDamage: 0,
  prayerBonus: 1,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ancient_staff',
};

export const AncientStaff = Item.fromJson(ancientStaffData);
