import { Item, ItemJson } from '../Item';

const summerPieData: ItemJson = {
  id: 7218,
  name: 'Summer pie',
  examine: 'A Summer pie.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Summer_pie',
  iconUrl: '/assets/items/7218.png',
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

export const SummerPie = Item.fromJson(summerPieData);
