import { Item } from '../Item';

const BucketOfWaterData = {
  id: 1929,
  name: 'Bucket of water',
  examine: 'A bucket filled with water.',
  destroy: 'Drop',
  equipable: false,
  noted: false,
  members: false,
  stackable: false,
  tradeable: true,
  value: 3,
  weight: 1,
  highAlch: 2,
  lowAlch: 1,
  meleeStrength: 0,
  prayer: 0,
  questItem: false,
  releaseDate: '4 January 2001',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bucket_of_water',

};


export const BucketOfWater = Item.fromJson(BucketOfWaterData);
