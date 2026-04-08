import { Item, ItemJson } from '../Item';

const leatherVambracesData: ItemJson = {
  id: 1063,
  name: 'Leather vambraces',
  examine: 'A Leather vambraces.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_vambraces',
  iconUrl: '/assets/items/leather-vambraces.png',
};

export const LeatherVambraces = Item.fromJson(leatherVambracesData);