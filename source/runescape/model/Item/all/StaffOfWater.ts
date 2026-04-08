import { Item, ItemJson } from '../Item';

const staffOfWaterData: ItemJson = {
  id: 1383,
  name: 'Staff of water',
  examine: 'A Staff of water.',
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
  iconUrl: '/assets/items/staff-of-water.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_water',
};

export const StaffOfWater = Item.fromJson(staffOfWaterData);