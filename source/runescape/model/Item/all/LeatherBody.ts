import { Item, ItemJson } from '../Item';

const leatherBodyData: ItemJson = {
  id: 1129,
  name: 'Leather body',
  examine: 'A Leather body.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_body',
  iconUrl: '/assets/items/leather-body.png',
};

export const LeatherBody = Item.fromJson(leatherBodyData);