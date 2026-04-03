import { Item, ItemJson } from '../Item';

const treasonousRingData: ItemJson = {
  id: 22549,
  name: 'Treasonous ring',
  iconUrl: '/assets/items/treasonous-ring.png',
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
};

export const TreasonousRing = Item.fromJson(treasonousRingData);
