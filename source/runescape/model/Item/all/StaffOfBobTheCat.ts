import { Item } from '../Item';

const staffOfBobTheCatData = {
  id: 9616,
  name: 'Staff of bob the cat',
  iconUrl: '/assets/items/staff-of-bob-the-cat.png',
  examine: 'A staff in the shape of a cat.',
  value: 1560,
  highAlch: 936,
  lowAlch: 624,
  weight: 1.5,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2003-09-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_bob_the_cat',
  attackStab: -2,
  attackSlash: -2,
  attackCrush: 35,
  attackRanged: 0,
  attackMagic: 8,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 3,
  defenceRanged: 0,
  defenceMagic: 1,
  prayer: 0,
};

export const StaffOfBobTheCat = Item.fromJson(staffOfBobTheCatData);
