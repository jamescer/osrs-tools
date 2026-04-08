import { Item, ItemJson } from '../Item';

const blackMaceData: ItemJson = {
  id: 1420,
  name: 'Black mace',
  examine: 'A Black mace.',
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
  iconUrl: '/assets/items/black-mace.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_mace',
};

export const BlackMace = Item.fromJson(blackMaceData);