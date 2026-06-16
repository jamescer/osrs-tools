import { Item, ItemJson } from '../Item';

const masterScrollBookEmptyData: ItemJson = {
  id: 16644,
  name: 'Master scroll book (empty)',
  iconUrl: '/assets/items/16644.png',
  examine: 'A blank book for storing the pages of treasure trail rewards.',
  value: 65000,
  highAlch: 39000,
  lowAlch: 26000,
  weight: 0.227,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2019-08-01',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Master_scroll_book_(empty)',
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
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const MasterScrollBookEmpty = Item.fromJson(masterScrollBookEmptyData);
