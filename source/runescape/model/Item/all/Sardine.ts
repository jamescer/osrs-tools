import { Item, ItemJson } from '../Item';

const sardineData: ItemJson = {
  id: 327,
  name: 'Sardine',
  examine: 'A Sardine.',
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
  iconUrl: '/assets/items/sardine.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Sardine',
};

export const Sardine = Item.fromJson(sardineData);