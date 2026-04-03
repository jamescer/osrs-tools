import { Item, ItemJson } from '../Item';

const willowCompBowData: ItemJson = {
  id: 4675,
  name: 'Willow comp bow',
  iconUrl: '/assets/items/willow-comp-bow.png',
  examine: 'A powerful bow made from willow wood.',
  value: 300,
  highAlch: 180,
  lowAlch: 120,
  weight: 1.8,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2006-12-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Willow_comp_bow',
  attackRanged: 22,
};

export const WillowCompBow = Item.fromJson(willowCompBowData);
