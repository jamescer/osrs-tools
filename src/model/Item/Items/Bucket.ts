import { Item } from '../Item';

const bucketData = {
  id: 1925,
  name: 'Bucket',
  members: false,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 2,
  examine: 'A wooden bucket.',
  equipable: false,
  weight: 1,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bucket',
};

export const Bucket = Item.fromJson(bucketData);
