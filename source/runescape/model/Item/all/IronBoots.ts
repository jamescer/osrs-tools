import { Item } from '../Item';

const ironBootsData = {
  id: 4099,
  name: 'Iron boots',
  iconUrl: '/assets/items/iron-boots.png',
  examine: 'A pair of iron boots.',
  value: 19,
  highAlch: 11,
  lowAlch: 7,
  weight: 0.75,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Iron_boots',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 0,
  attackMagic: 0,
  defenceStab: 3,
  defenceSlash: 3,
  defenceCrush: 3,
  defenceRanged: 0,
  defenceMagic: 0,
  prayer: 0,
};

export const IronBoots = Item.fromJson(ironBootsData);
