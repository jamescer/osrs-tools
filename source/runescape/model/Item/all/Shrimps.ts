import { Item, ItemJson } from '../Item';

const shrimpsData: ItemJson = {
  id: 315,
  name: 'Shrimps',
  examine: 'A Shrimps.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Shrimps',
  iconUrl: '/assets/items/shrimps.png',
};

export const Shrimps = Item.fromJson(shrimpsData);