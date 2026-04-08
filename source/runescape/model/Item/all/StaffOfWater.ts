import { Item, ItemJson } from '../Item';

const staffOfWaterData: ItemJson = {
  id: 1383,
  name: 'Staff of water',
  examine: 'A Staff of water.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Staff_of_water',
  iconUrl: '/assets/items/staff-of-water.png',
};

export const StaffOfWater = Item.fromJson(staffOfWaterData);