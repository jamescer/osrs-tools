import { Item, ItemJson } from '../Item';

const blackWarhammerData: ItemJson = {
  id: 1331,
  name: 'Black warhammer',
  examine: 'A Black warhammer.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_warhammer',
  iconUrl: '/assets/items/black-warhammer.png',
};

export const BlackWarhammer = Item.fromJson(blackWarhammerData);