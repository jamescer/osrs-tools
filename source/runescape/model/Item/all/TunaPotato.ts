import { Item, ItemJson } from '../Item';

const tunaPotatoData: ItemJson = {
  id: 7060,
  name: 'Tuna potato',
  examine: 'A Tuna potato.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tuna_potato',
  iconUrl: '/assets/items/tuna-potato.png',
};

export const TunaPotato = Item.fromJson(tunaPotatoData);
