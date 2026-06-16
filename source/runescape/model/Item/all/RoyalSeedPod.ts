import { Item, ItemJson } from '../Item';

const royalSeedPodData: ItemJson = {
  destroy: 'King Narnode will give you another one.',
  equipable: false,
  examine: 'Can be used to teleport to the Grand Tree.',
  highAlch: 0,
  id: 19564,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Royal seed pod',
  iconUrl: '/assets/items/19564.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Royal_seed_pod',
  questItem: false,
  releaseDate: '7 January 2016',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0,
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
  magicDamage: 0,
  prayer: 0
};

export const RoyalSeedPod = Item.fromJson(royalSeedPodData);
