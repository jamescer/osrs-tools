import { Item, ItemJson } from '../Item';

const blackWarhammerData: ItemJson = {
  id: 1331,
  name: 'Black warhammer',
  examine: 'A Black warhammer.',
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
  iconUrl: '/assets/items/black-warhammer.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_warhammer',
};

export const BlackWarhammer = Item.fromJson(blackWarhammerData);