import { Item } from '../Item';

const runeFullHelmData = {
  id: 1743,
  name: 'Rune full helm',
  iconUrl: '/assets/items/rune-full-helm.png',
  examine: 'A full rune helmet, it fully covers the head.',
  value: 20280,
  highAlch: 12168,
  lowAlch: 8112,
  weight: 4.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_full_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -15,
  attackRanged: 0,
  attackMagic: -15,
  defenceStab: 34,
  defenceSlash: 36,
  defenceCrush: 32,
  defenceRanged: 4,
  defenceMagic: 10,
  prayer: 0,
};

export const RuneFullHelm = Item.fromJson(runeFullHelmData);
