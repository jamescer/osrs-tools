import { Item, ItemJson } from '../Item';

const bronzeArrowData: ItemJson = {
  id: 882,
  name: 'Bronze arrow',
  examine: 'A Bronze arrow.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bronze_arrow',
  iconUrl: '/assets/items/bronze-arrow.png',
};

export const BronzeArrow = Item.fromJson(bronzeArrowData);