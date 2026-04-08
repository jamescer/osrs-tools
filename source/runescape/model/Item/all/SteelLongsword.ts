import { Item, ItemJson } from '../Item';

const steelLongswordData: ItemJson = {
  id: 1295,
  name: 'Steel longsword',
  examine: 'A Steel longsword.',
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
  iconUrl: '/assets/items/steel-longsword.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_longsword',
};

export const SteelLongsword = Item.fromJson(steelLongswordData);