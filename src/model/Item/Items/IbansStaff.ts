import { Item } from '../Item';

const ibansStaffData = {
  attackCrush: 10,
  attackMagic: 10,
  attackRanged: 0,
  attackSlash: -1,
  // Combat stats
  attackStab: 10,

  defenceCrush: 1,

  defenceMagic: 10,

  defenceRanged: 0,

  defenceSlash: 3,

  defenceStab: 2,

  equipable: true,

  examine: 'The staff of Iban.',

  id: 1409,

  magicDamage: 0,

  members: true,

  name: "Iban's staff",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iban%27s_staff',
  prayerBonus: 0,
  questItem: false,
  stackable: false,
  strengthBonus: 0,
  tradeable: false,
  value: 15000,
  weight: 2.267,
};

export const IbansStaff = Item.fromJson(ibansStaffData);
