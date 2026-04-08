import { Item, ItemJson } from '../Item';

const steelLongswordData: ItemJson = {
  id: 1295,
  name: 'Steel longsword',
  examine: 'A Steel longsword.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_longsword',
  iconUrl: '/assets/items/steel-longsword.png',
};

export const SteelLongsword = Item.fromJson(steelLongswordData);