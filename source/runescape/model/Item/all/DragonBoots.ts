import { Item } from '../Item';

const dragonBootsData = {
  id: 11734,
  name: 'Dragon boots',
  iconUrl: '/assets/items/dragon-boots.png',
  examine: 'A pair of dragon boots.',
  value: 60000,
  highAlch: 36000,
  lowAlch: 24000,
  weight: 1.2,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-11-17',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_boots',
  defenceStab: 5,
  defenceSlash: 5,
  defenceCrush: 5,
  defenceRanged: 3,
  defenceMagic: 0,
  prayer: 0,
};

export const DragonBoots = Item.fromJson(dragonBootsData);
