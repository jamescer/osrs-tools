import { Item } from '../Item';

const steelFullHelmData = {
  id: 1597,
  name: 'Steel full helm',
  iconUrl: '/assets/items/steel-full-helm.png',
  examine: 'A full steel helmet, it fully covers the head.',
  value: 152,
  highAlch: 91,
  lowAlch: 60,
  weight: 2.3,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Steel_full_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -8,
  attackRanged: 0,
  attackMagic: -5,
  defenceStab: 16,
  defenceSlash: 18,
  defenceCrush: 14,
  defenceRanged: 1,
  defenceMagic: 4,
  prayer: 0,
};

export const SteelFullHelm = Item.fromJson(steelFullHelmData);
