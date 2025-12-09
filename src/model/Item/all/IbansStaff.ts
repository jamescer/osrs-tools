import { Item, ItemJson } from '../Item';

const ibansStaffData: ItemJson = {
  attackCrush: 10,
  attackMagic: 10,
  attackRanged: 0,
  attackSlash: -1,
  attackStab: 10,
  defenceCrush: 1,
  defenceMagic: 10,
  defenceRanged: 0,
  defenceSlash: 3,
  defenceStab: 2,
  destroy: 'Drop',
  equipable: true,
  examine: 'The staff of Iban.',
  highAlch: 9000,
  id: 1409,
  lowAlch: 6000,
  members: true,
  meleeStrength: 0,
  name: "Iban's staff",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iban%27s_staff',
  prayer: 0,
  questItem: false,
  releaseDate: '27 February 2002',
  stackable: false,
  tradeable: false,
  value: 15000,
  weight: 2.267,
};

export const IbansStaff = Item.fromJson(ibansStaffData);
