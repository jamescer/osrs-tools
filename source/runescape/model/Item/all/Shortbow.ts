import { Item, ItemJson } from '../Item';

const shortbowData: ItemJson = {
  id: 841,
  name: 'Shortbow',
  examine: 'A Shortbow.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Shortbow',
  iconUrl: '/assets/items/shortbow.png',
};

export const Shortbow = Item.fromJson(shortbowData);