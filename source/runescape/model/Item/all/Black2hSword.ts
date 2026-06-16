import { Item, ItemJson } from '../Item';

const black2hSwordData: ItemJson = {
  id: 1313,
  name: 'Black 2h sword',
  examine: 'A Black 2h sword.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_2h_sword',
  iconUrl: '/assets/items/1313.png',
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

export const Black2hSword = Item.fromJson(black2hSwordData);
