import { Item } from '../Item';

const runeMediumHelmData = {
  id: 1739,
  name: 'Rune medium helm',
  iconUrl: '/assets/items/rune-medium-helm.png',
  examine: 'A medium rune helmet.',
  value: 5460,
  highAlch: 3276,
  lowAlch: 2184,
  weight: 3.6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-01-21',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_medium_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -13,
  attackRanged: 0,
  attackMagic: -12,
  defenceStab: 28,
  defenceSlash: 30,
  defenceCrush: 26,
  defenceRanged: 3,
  defenceMagic: 8,
  prayer: 0,
};

export const RuneMediumHelm = Item.fromJson(runeMediumHelmData);
