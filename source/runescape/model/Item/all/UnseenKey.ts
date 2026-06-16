import { Item, ItemJson } from '../Item';

const unseenKeyData : ItemJson = {
  destroy: 'You can get another from a servant in the Sisterhood Sanctuary.',
  equipable: false,
  examine: 'A mysterious key that allows access to the unseen areas.',
  id: 21089,
  members: true,
  name: 'Unseen key',
  iconUrl: '/assets/items/21089.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Unseen_key',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.006,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: '',
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

export const UnseenKey = Item.fromJson(unseenKeyData);
