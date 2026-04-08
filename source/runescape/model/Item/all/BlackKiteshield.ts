import { Item, ItemJson } from '../Item';

const blackKiteshieldData: ItemJson = {
  id: 1195,
  name: 'Black kiteshield',
  examine: 'A Black kiteshield.',
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
  iconUrl: '/assets/items/black-kiteshield.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_kiteshield',
};

export const BlackKiteshield = Item.fromJson(blackKiteshieldData);