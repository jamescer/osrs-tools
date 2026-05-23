import { Item } from '../Item';

const holySandalsData = {
  id: 12598,
  name: "Holy sandals",
  iconUrl: '/assets/items/12598.png',
  examine: "Holy footwear!",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Holy_sandals',
};

export const HolySandals = Item.fromJson(holySandalsData);
