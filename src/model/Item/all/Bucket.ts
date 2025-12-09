import { Item, ItemJson } from '../Item';

const bucketData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A wooden bucket.',
  highAlch: 1,
  id: 1925,
  lowAlch: 0,
  members: false,
  meleeStrength: 0,
  name: 'Bucket',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bucket',
  prayer: 0,
  questItem: false,
  releaseDate: '4 January 2001',
  stackable: false,
  tradeable: true,
  value: 2,
  weight: 1,
};

export const Bucket = Item.fromJson(bucketData);
