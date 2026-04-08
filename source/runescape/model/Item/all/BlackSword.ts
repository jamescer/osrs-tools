import { Item, ItemJson } from '../Item';

const blackSwordData: ItemJson = {
  id: 1289,
  name: 'Black sword',
  examine: 'A Black sword.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_sword',
  iconUrl: '/assets/items/black-sword.png',
};

export const BlackSword = Item.fromJson(blackSwordData);