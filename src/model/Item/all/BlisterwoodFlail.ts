import { Item, ItemJson } from '../Item';

const blisterWoodFlailData: ItemJson = {
  attackCrush: 68,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: -4,
  attackStab: 55,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  defenceSlash: 3,
  defenceStab: 0,
  destroy: 'Drop',
  equipable: true,
  examine: 'A flail made from Blisterwood, effective against higher-level vampyres.',
  highAlch: 42000,
  id: 24699,
  lowAlch: 28000,
  members: true,
  meleeStrength: 66,
  name: 'Blisterwood flail',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blisterwood_flail',
  prayer: 3,
  questItem: false,
  releaseDate: '24 June 2020',
  stackable: false,
  tradeable: false,
  value: 70000,
  weight: 2.721,
};

export const BlisterwoodFlail = Item.fromJson(blisterWoodFlailData);
