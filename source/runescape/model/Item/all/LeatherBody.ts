import { Item, ItemJson } from '../Item';

const leatherBodyData: ItemJson = {
  id: 1129,
  name: 'Leather body',
  examine: 'A Leather body.',
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
  iconUrl: '/assets/items/leather-body.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_body',
};

export const LeatherBody = Item.fromJson(leatherBodyData);