import { Item, ItemJson } from '../Item';

const black2hSwordData: ItemJson = {
  id: 1313,
  name: 'Black 2h sword',
  examine: 'A Black 2h sword.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_2h_sword',
  iconUrl: '/assets/items/black-2h-sword.png',
};

export const Black2hSword = Item.fromJson(black2hSwordData);