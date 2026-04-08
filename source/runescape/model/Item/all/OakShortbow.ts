import { Item, ItemJson } from '../Item';

const oakShortbowData: ItemJson = {
  id: 843,
  name: 'Oak shortbow',
  examine: 'A Oak shortbow.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Oak_shortbow',
  iconUrl: '/assets/items/oak-shortbow.png',
};

export const OakShortbow = Item.fromJson(oakShortbowData);