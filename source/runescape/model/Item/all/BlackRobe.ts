import { Item, ItemJson } from '../Item';

const blackRobeData: ItemJson = {
  id: 581,
  name: 'Black robe',
  examine: 'A Black robe.',
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
  iconUrl: '/assets/items/black-robe.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_robe',
};

export const BlackRobe = Item.fromJson(blackRobeData);