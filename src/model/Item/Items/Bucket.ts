import { Item } from '../Item';

const bucketData = {
  equipable: false,
  examine: 'A wooden bucket.',
  id: 1925,
  members: false,
  name: 'Bucket',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bucket',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 2,
  weight: 1,
};

export const Bucket = Item.fromJson(bucketData);
