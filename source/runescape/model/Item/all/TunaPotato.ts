import { Item, ItemJson } from '../Item';

const tunaPotatoData: ItemJson = {
  id: 7060,
  name: 'Tuna potato',
  examine: 'A Tuna potato.',
  highAlch: 1,
  lowAlch: 1,
  members: true,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/tuna-potato.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tuna_potato',
};

export const TunaPotato = Item.fromJson(tunaPotatoData);