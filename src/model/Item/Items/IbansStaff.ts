import { Item } from '../Item';

const ibansStaffData = {
  equipable: true,
  examine: 'The staff of Iban.',
  id: 1409,
  members: true,
  attackSlash: -1,
  name: "Iban's staff",
  attackCrush: 10,
  noted: false,
  attackMagic: 10,
  questItem: false,
  attackRanged: 0,

  stackable: false,

  // Combat stats
attackStab: 10,

  
  tradeable: false,

  defenceCrush: 1,

  value: 15000,
  defenceMagic: 10,
  defenceRanged: 0,
  weight: 2.267,
  defenceSlash: 3,
  defenceStab: 2,
  magicDamage: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iban%27s_staff',
  prayerBonus: 0,
  strengthBonus: 0,
};

export const IbansStaff = Item.fromJson(ibansStaffData);
