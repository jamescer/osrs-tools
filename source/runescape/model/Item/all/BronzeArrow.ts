import { Item, ItemJson } from '../Item';

const bronzeArrowData: ItemJson = {
  id: 882,
  name: 'Bronze arrow',
  examine: 'A Bronze arrow.',
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
  iconUrl: '/assets/items/bronze-arrow.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bronze_arrow',
};

export const BronzeArrow = Item.fromJson(bronzeArrowData);