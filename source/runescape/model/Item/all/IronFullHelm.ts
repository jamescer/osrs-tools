import { Item } from '../Item';

const ironFullHelmData = {
  id: 1591,
  name: 'Iron full helm',
  iconUrl: '/assets/items/iron-full-helm.png',
  examine: 'A full iron helmet, it fully covers the head.',
  value: 59,
  highAlch: 35,
  lowAlch: 23,
  weight: 1.5,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_full_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -5,
  attackRanged: 0,
  attackMagic: 0,
  defenceStab: 10,
  defenceSlash: 12,
  defenceCrush: 8,
  defenceRanged: 0,
  defenceMagic: 2,
  prayer: 0,
};

export const IronFullHelm = Item.fromJson(ironFullHelmData);
