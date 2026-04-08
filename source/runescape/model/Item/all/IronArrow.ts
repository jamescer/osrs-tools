import { Item, ItemJson } from '../Item';

const ironArrowData: ItemJson = {
  id: 884,
  name: 'Iron arrow',
  examine: 'A Iron arrow.',
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
  iconUrl: '/assets/items/iron-arrow.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_arrow',
};

export const IronArrow = Item.fromJson(ironArrowData);