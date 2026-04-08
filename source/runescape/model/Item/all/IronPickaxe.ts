import { Item, ItemJson } from '../Item';

const ironPickaxeData: ItemJson = {
  id: 1267,
  name: 'Iron pickaxe',
  examine: 'A Iron pickaxe.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_pickaxe',
  iconUrl: '/assets/items/iron-pickaxe.png',
};

export const IronPickaxe = Item.fromJson(ironPickaxeData);