import { Item, ItemJson } from '../Item';

const staffOfEarthData: ItemJson = {
  id: 1385,
  name: 'Staff of earth',
  examine: 'A Staff of earth.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_earth',
  iconUrl: '/assets/items/staff-of-earth.png',
};

export const StaffOfEarth = Item.fromJson(staffOfEarthData);