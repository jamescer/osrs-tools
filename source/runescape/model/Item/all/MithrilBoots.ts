import { Item } from '../Item';

const mithrilBootsData = {
  id: 4111,
  name: 'Mithril boots',
  iconUrl: '/assets/items/mithril-boots.png',
  examine: 'A pair of mithril boots.',
  value: 213,
  highAlch: 127,
  lowAlch: 84,
  weight: 1.55,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_boots',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 0,
  attackMagic: 0,
  defenceStab: 7,
  defenceSlash: 7,
  defenceCrush: 7,
  defenceRanged: 2,
  defenceMagic: 1,
  prayer: 0,
};

export const MithrilBoots = Item.fromJson(mithrilBootsData);
