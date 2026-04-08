import { Item, ItemJson } from '../Item';

const hardleatherBodyData: ItemJson = {
  id: 1131,
  name: 'Hardleather body',
  examine: 'A Hardleather body.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Hardleather_body',
  iconUrl: '/assets/items/hardleather-body.png',
};

export const HardleatherBody = Item.fromJson(hardleatherBodyData);