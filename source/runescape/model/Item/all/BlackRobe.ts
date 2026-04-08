import { Item, ItemJson } from '../Item';

const blackRobeData: ItemJson = {
  id: 581,
  name: 'Black robe',
  examine: 'A Black robe.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_robe',
  iconUrl: '/assets/items/black-robe.png',
};

export const BlackRobe = Item.fromJson(blackRobeData);