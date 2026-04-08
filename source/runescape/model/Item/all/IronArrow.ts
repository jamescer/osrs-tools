import { Item, ItemJson } from '../Item';

const ironArrowData: ItemJson = {
  id: 884,
  name: 'Iron arrow',
  examine: 'A Iron arrow.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_arrow',
  iconUrl: '/assets/items/iron-arrow.png',
};

export const IronArrow = Item.fromJson(ironArrowData);