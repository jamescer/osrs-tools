import { Item, ItemJson } from '../Item';

const skeletalHelmData: ItemJson = {
  attackCrush: 0,
  attackMagic: 3,
  attackRanged: -2,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 6,
  defenceMagic: 3,
  defenceRanged: 6,
  defenceSlash: 6,
  defenceStab: 6,
  destroy: 'Drop',
  equipable: true,
  examine: 'A helmet of ancient origin.',
  highAlch: 1500,
  id: 6137,
  lowAlch: 1000,
  members: true,
  meleeStrength: 0,
  name: 'Skeletal helm',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Skeletal_helm',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 2500,
  weight: 2.267,
};

export const SkeletalHelm = Item.fromJson(skeletalHelmData);
