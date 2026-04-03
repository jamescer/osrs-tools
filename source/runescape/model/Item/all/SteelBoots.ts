import { Item } from '../Item';

const steelBootsData = {
  id: 4105,
  name: 'Steel boots',
  iconUrl: '/assets/items/steel-boots.png',
  examine: 'A pair of steel boots.',
  value: 64,
  highAlch: 38,
  lowAlch: 25,
  weight: 1.15,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_boots',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 0,
  attackMagic: 0,
  defenceStab: 5,
  defenceSlash: 5,
  defenceCrush: 5,
  defenceRanged: 1,
  defenceMagic: 0,
  prayer: 0,
};

export const SteelBoots = Item.fromJson(steelBootsData);
