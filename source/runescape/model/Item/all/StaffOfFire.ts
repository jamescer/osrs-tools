import { Item, ItemJson } from '../Item';

const staffOfFireData: ItemJson = {
  id: 1387,
  name: 'Staff of fire',
  examine: 'A Staff of fire.',
  highAlch: 1,
  lowAlch: 1,
  members: false,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/staff-of-fire.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_fire',
};

export const StaffOfFire = Item.fromJson(staffOfFireData);