import { Item, ItemJson } from '../Item';

const treasonousRingData: ItemJson = {
  id: 22549,
  name: 'Treasonous ring',
  iconUrl: '/assets/items/22549.png',
  examine: 'A treacherous ring from a darker time.',
  value: 650000,
  highAlch: 390000,
  lowAlch: 260000,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2021-08-02',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Treasonous_ring',
  strengthBonus: 8,
  attackRanged: 4,
  rangedStrength: 4,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const TreasonousRing = Item.fromJson(treasonousRingData);
