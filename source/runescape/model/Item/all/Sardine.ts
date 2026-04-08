import { Item, ItemJson } from '../Item';

const sardineData: ItemJson = {
  id: 327,
  name: 'Sardine',
  examine: 'A Sardine.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Sardine',
  iconUrl: '/assets/items/sardine.png',
};

export const Sardine = Item.fromJson(sardineData);