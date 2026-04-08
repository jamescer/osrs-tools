import { Item, ItemJson } from '../Item';

const longbowData: ItemJson = {
  id: 839,
  name: 'Longbow',
  examine: 'A Longbow.',
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
  iconUrl: '/assets/items/longbow.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Longbow',
};

export const Longbow = Item.fromJson(longbowData);