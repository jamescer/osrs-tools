import { Item } from '../Item';

const mummysBodyData = {
  id: 20083,
  name: "Mummy's body",
  iconUrl: '/assets/items/mummys-body.png',
  examine: "A mummy's body.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2016-07-06',
  destroy: 'Wear',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mummy%27s_body',
};

export const MummysBody = Item.fromJson(mummysBodyData);
