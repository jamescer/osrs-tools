import { Item, ItemJson } from '../Item';

const dragonLongswordData: ItemJson = {
  id: 1305,
  name: 'Dragon longsword',
  examine: 'A Dragon longsword.',
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
  iconUrl: '/assets/items/dragon-longsword.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_longsword',
};

export const DragonLongsword = Item.fromJson(dragonLongswordData);