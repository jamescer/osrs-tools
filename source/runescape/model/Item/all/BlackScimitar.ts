import { Item, ItemJson } from '../Item';

const blackScimitarData: ItemJson = {
  id: 1327,
  name: 'Black scimitar',
  examine: 'A Black scimitar.',
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
  iconUrl: '/assets/items/black-scimitar.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_scimitar',
};

export const BlackScimitar = Item.fromJson(blackScimitarData);