import { Item } from '../Item';

const mithrilFullHelmData = {
  id: 1603,
  name: 'Mithril full helm',
  iconUrl: '/assets/items/mithril-full-helm.png',
  examine: 'A full mithril helmet, it fully covers the head.',
  value: 447,
  highAlch: 268,
  lowAlch: 178,
  weight: 3.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_full_helm',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: -11,
  attackRanged: 0,
  attackMagic: -10,
  defenceStab: 22,
  defenceSlash: 24,
  defenceCrush: 20,
  defenceRanged: 2,
  defenceMagic: 6,
  prayer: 0,
};

export const MithrilFullHelm = Item.fromJson(mithrilFullHelmData);
