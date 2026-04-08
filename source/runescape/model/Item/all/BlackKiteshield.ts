import { Item, ItemJson } from '../Item';

const blackKiteshieldData: ItemJson = {
  id: 1195,
  name: 'Black kiteshield',
  examine: 'A Black kiteshield.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_kiteshield',
  iconUrl: '/assets/items/black-kiteshield.png',
};

export const BlackKiteshield = Item.fromJson(blackKiteshieldData);