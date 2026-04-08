import { Item, ItemJson } from '../Item';

const black2hSwordData: ItemJson = {
  id: 1313,
  name: 'Black 2h sword',
  examine: 'A Black 2h sword.',
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
  iconUrl: '/assets/items/black-2h-sword.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_2h_sword',
};

export const Black2hSword = Item.fromJson(black2hSwordData);