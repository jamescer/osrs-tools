import { Item, ItemJson } from '../Item';

const herringData: ItemJson = {
  id: 345,
  name: 'Herring',
  examine: 'A Herring.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Herring',
  iconUrl: '/assets/items/herring.png',
};

export const Herring = Item.fromJson(herringData);