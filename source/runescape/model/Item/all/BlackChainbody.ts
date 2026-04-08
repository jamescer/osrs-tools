import { Item, ItemJson } from '../Item';

const blackChainbodyData: ItemJson = {
  id: 1107,
  name: 'Black chainbody',
  examine: 'A Black chainbody.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_chainbody',
  iconUrl: '/assets/items/black-chainbody.png',
};

export const BlackChainbody = Item.fromJson(blackChainbodyData);