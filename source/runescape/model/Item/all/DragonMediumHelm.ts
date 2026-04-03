import { Item } from '../Item';

const dragonMediumHelmData = {
  id: 1597,
  name: 'Dragon medium helm',
  iconUrl: '/assets/items/dragon-medium-helm.png',
  examine: 'A medium dragon helmet.',
  value: 34500,
  highAlch: 20700,
  lowAlch: 13800,
  weight: 8.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-21',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_medium_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -10,
  attackRanged: 0,
  attackMagic: 0,
  defenceStab: 20,
  defenceSlash: 22,
  defenceCrush: 18,
  defenceRanged: 2,
  defenceMagic: 2,
  prayer: 1,
};

export const DragonMediumHelm = Item.fromJson(dragonMediumHelmData);
