import { Item } from '../Item';

const dragonFullHelmData = {
  id: 1731,
  name: 'Dragon full helm',
  iconUrl: '/assets/items/dragon-full-helm.png',
  examine: 'A full dragon helmet, it fully covers the head.',
  value: 123750,
  highAlch: 74250,
  lowAlch: 49500,
  weight: 5.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-09-21',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_full_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -15,
  attackRanged: 0,
  attackMagic: -5,
  defenceStab: 50,
  defenceSlash: 52,
  defenceCrush: 48,
  defenceRanged: 6,
  defenceMagic: 6,
  prayer: 3,
};

export const DragonFullHelm = Item.fromJson(dragonFullHelmData);
