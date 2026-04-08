import { Item, ItemJson } from '../Item';

const longbowData: ItemJson = {
  id: 839,
  name: 'Longbow',
  examine: 'A Longbow.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Longbow',
  iconUrl: '/assets/items/longbow.png',
};

export const Longbow = Item.fromJson(longbowData);