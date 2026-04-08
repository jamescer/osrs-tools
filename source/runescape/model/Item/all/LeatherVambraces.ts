import { Item, ItemJson } from '../Item';

const leatherVambracesData: ItemJson = {
  id: 1063,
  name: 'Leather vambraces',
  examine: 'A Leather vambraces.',
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
  iconUrl: '/assets/items/leather-vambraces.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_vambraces',
};

export const LeatherVambraces = Item.fromJson(leatherVambracesData);