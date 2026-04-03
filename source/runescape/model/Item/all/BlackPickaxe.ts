import { Item } from '../Item';

const blackPickaxeData = {
  id: 1543,
  name: 'Black pickaxe',
  iconUrl: '/assets/items/black-pickaxe.png',
  examine: 'A black pickaxe is a tool for mining.',
  value: 682,
  highAlch: 409,
  lowAlch: 272,
  weight: 13,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_pickaxe',
};

export const BlackPickaxe = Item.fromJson(blackPickaxeData);
