import { Item, ItemJson } from '../Item';

const skeletalTopData: ItemJson = {
  attackCrush: 0,
  attackMagic: 8,
  attackRanged: -2,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 12,
  defenceMagic: 8,
  defenceRanged: 12,
  defenceSlash: 12,
  defenceStab: 12,
  destroy: 'Drop',
  equipable: true,
  examine: 'Body armour of ancient origin.',
  highAlch: 3000,
  id: 6141,
  lowAlch: 2000,
  members: true,
  meleeStrength: 0,
  name: 'Skeletal top',
  iconUrl: '/assets/items/6141.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Skeletal_top',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 5000,
  weight: 6.803,
  rangedStrength: 0,
  magicDamage: 0
};

export const SkeletalTop = Item.fromJson(skeletalTopData);
