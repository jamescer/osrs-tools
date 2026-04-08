import { Item, ItemJson } from '../Item';

const staffOfEarthData: ItemJson = {
  id: 1385,
  name: 'Staff of earth',
  examine: 'A Staff of earth.',
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
  iconUrl: '/assets/items/staff-of-earth.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_earth',
};

export const StaffOfEarth = Item.fromJson(staffOfEarthData);