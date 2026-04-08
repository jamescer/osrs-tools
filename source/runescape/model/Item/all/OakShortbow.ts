import { Item, ItemJson } from '../Item';

const oakShortbowData: ItemJson = {
  id: 843,
  name: 'Oak shortbow',
  examine: 'A Oak shortbow.',
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
  iconUrl: '/assets/items/oak-shortbow.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Oak_shortbow',
};

export const OakShortbow = Item.fromJson(oakShortbowData);