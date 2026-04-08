import { Item, ItemJson } from '../Item';

const dragonLongswordData: ItemJson = {
  id: 1305,
  name: 'Dragon longsword',
  examine: 'A Dragon longsword.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_longsword',
  iconUrl: '/assets/items/dragon-longsword.png',
};

export const DragonLongsword = Item.fromJson(dragonLongswordData);
