import { Item, ItemJson } from '../Item';

const mithrilSeedsData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'Plant these to create pretty flowers.',
  highAlch: 235,
  id: 299,
  lowAlch: 157,
  members: true,
  meleeStrength: 0,
  name: 'Mithril seeds',
  iconUrl: '/assets/items/299.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_seeds',
  prayer: 0,
  questItem: false,
  releaseDate: '6 May 2003',
  stackable: true,
  tradeable: true,
  value: 392,
  weight: 0.002,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  rangedStrength: 0,
  magicDamage: 0
};

export const MithrilSeeds = Item.fromJson(mithrilSeedsData);
