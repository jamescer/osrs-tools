import { Item, ItemJson } from '../Item';

const steelDaggerData: ItemJson = {
  id: 1207,
  name: 'Steel dagger',
  examine: 'A Steel dagger.',
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
  iconUrl: '/assets/items/steel-dagger.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_dagger',
};

export const SteelDagger = Item.fromJson(steelDaggerData);