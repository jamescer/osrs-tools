import { Item, ItemJson } from '../Item';

const herringData: ItemJson = {
  id: 345,
  name: 'Herring',
  examine: 'A Herring.',
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
  iconUrl: '/assets/items/herring.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Herring',
};

export const Herring = Item.fromJson(herringData);