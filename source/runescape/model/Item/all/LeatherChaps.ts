import { Item } from '../Item';

const leatherChapsData = {
  id: 1095,
  name: "Leather chaps",
  iconUrl: '/assets/items/1095.png',
  examine: "Better than no armour!",
  value: 20,
  highAlch: 12,
  lowAlch: 8,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_chaps',
};

export const LeatherChaps = Item.fromJson(leatherChapsData);
