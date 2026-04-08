import { Item, ItemJson } from '../Item';

const oakLongbowData: ItemJson = {
  id: 845,
  name: 'Oak longbow',
  examine: 'A Oak longbow.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Oak_longbow',
  iconUrl: '/assets/items/oak-longbow.png',
};

export const OakLongbow = Item.fromJson(oakLongbowData);