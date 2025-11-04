import { Item, ItemJson } from '../Item';

const skeletalBottomsData: ItemJson = {
  attackCrush: 0,
  attackMagic: 6,
  attackRanged: -2,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 9,
  defenceMagic: 6,
  defenceRanged: 9,
  defenceSlash: 9,
  defenceStab: 9,
  destroy: 'Drop',
  equipable: true,
  examine: 'Leg armour of ancient origin.',
  highAlch: 2400,
  id: 6143,
  lowAlch: 1600,
  members: true,
  meleeStrength: 0,
  name: 'Skeletal bottoms',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Skeletal_bottoms',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 4000,
  weight: 4.535,
};

export const SkeletalBottoms = Item.fromJson(skeletalBottomsData);
