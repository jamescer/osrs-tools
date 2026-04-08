import { Item, ItemJson } from '../Item';

const blackSwordData: ItemJson = {
  id: 1289,
  name: 'Black sword',
  examine: 'A Black sword.',
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
  iconUrl: '/assets/items/black-sword.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_sword',
};

export const BlackSword = Item.fromJson(blackSwordData);