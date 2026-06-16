import { Item, ItemJson } from '../Item';

const willowCompBowData: ItemJson = {
  id: 4675,
  name: 'Willow comp bow',
  iconUrl: '/assets/items/4675.png',
  examine: 'A powerful bow made from willow wood.',
  value: 300,
  highAlch: 180,
  lowAlch: 120,
  weight: 1.8,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '2006-12-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Willow_comp_bow',
  attackRanged: 22,
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
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const WillowCompBow = Item.fromJson(willowCompBowData);
