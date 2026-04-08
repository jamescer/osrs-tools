import { Item, ItemJson } from '../Item';

const blackChainbodyData: ItemJson = {
  id: 1107,
  name: 'Black chainbody',
  examine: 'A Black chainbody.',
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
  iconUrl: '/assets/items/black-chainbody.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_chainbody',
};

export const BlackChainbody = Item.fromJson(blackChainbodyData);