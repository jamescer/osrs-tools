import { Item, ItemJson } from '../Item';

const blackScimitarData: ItemJson = {
  id: 1327,
  name: 'Black scimitar',
  examine: 'A Black scimitar.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_scimitar',
  iconUrl: '/assets/items/black-scimitar.png',
};

export const BlackScimitar = Item.fromJson(blackScimitarData);