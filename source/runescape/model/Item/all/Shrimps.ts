import { Item, ItemJson } from '../Item';

const shrimpsData: ItemJson = {
  id: 315,
  name: 'Shrimps',
  examine: 'A Shrimps.',
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
  iconUrl: '/assets/items/shrimps.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Shrimps',
};

export const Shrimps = Item.fromJson(shrimpsData);