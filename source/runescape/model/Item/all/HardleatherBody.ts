import { Item, ItemJson } from '../Item';

const hardleatherBodyData: ItemJson = {
  id: 1131,
  name: 'Hardleather body',
  examine: 'A Hardleather body.',
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
  iconUrl: '/assets/items/hardleather-body.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Hardleather_body',
};

export const HardleatherBody = Item.fromJson(hardleatherBodyData);