import { Item, ItemJson } from '../Item';

const oakLongbowData: ItemJson = {
  id: 845,
  name: 'Oak longbow',
  examine: 'A Oak longbow.',
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
  iconUrl: '/assets/items/oak-longbow.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Oak_longbow',
};

export const OakLongbow = Item.fromJson(oakLongbowData);