import { Item, ItemJson } from '../Item';

const staffOfFireData: ItemJson = {
  id: 1387,
  name: 'Staff of fire',
  examine: 'A Staff of fire.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_fire',
  iconUrl: '/assets/items/staff-of-fire.png',
};

export const StaffOfFire = Item.fromJson(staffOfFireData);