import { Item, ItemJson } from '../Item';

const ironPickaxeData: ItemJson = {
  id: 1267,
  name: 'Iron pickaxe',
  examine: 'A Iron pickaxe.',
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
  iconUrl: '/assets/items/iron-pickaxe.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_pickaxe',
};

export const IronPickaxe = Item.fromJson(ironPickaxeData);