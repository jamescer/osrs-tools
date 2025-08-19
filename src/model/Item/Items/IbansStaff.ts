import { Item } from '../Item';

const ibansStaffData = {
  id: 1409,
  name: "Iban's staff",
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 15000,
  examine: 'The staff of Iban.',
  equipable: true,
  weight: 2.267,
  questItem: false,
  // Combat stats
  attackStab: 10,
  attackSlash: -1,
  attackCrush: 10,
  attackMagic: 10,
  attackRanged: 0,
  defenceStab: 2,
  defenceSlash: 3,
  defenceCrush: 1,
  defenceMagic: 10,
  defenceRanged: 0,
  strengthBonus: 0,
  magicDamage: 0,
  prayerBonus: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iban%27s_staff',
};

export const IbansStaff = Item.fromJson(ibansStaffData);
