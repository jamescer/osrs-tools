import { Item, ItemJson } from '../Item';

const leatherCowlData: ItemJson = {
  id: 1167,
  name: 'Leather cowl',
  examine: 'A Leather cowl.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_cowl',
  iconUrl: '/assets/items/leather-cowl.png',
};

export const LeatherCowl = Item.fromJson(leatherCowlData);