import { Item, ItemJson } from '../Item';

const shortbowData: ItemJson = {
  id: 841,
  name: 'Shortbow',
  examine: 'A Shortbow.',
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
  iconUrl: '/assets/items/shortbow.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Shortbow',
};

export const Shortbow = Item.fromJson(shortbowData);