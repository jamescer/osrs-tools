import { Item, ItemJson } from '../Item';

const rockCakeData: ItemJson = {
  destroy: "You'll have to get another one from the Feast Hall in Keldagrim.",
  equipable: false,
  examine: 'A very hard rock cake made by dwarves.',
  highAlch: 0,
  id: 7509,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Dwarven rock cake',
  iconUrl: '/assets/items/7509.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dwarven_rock_cake',
  prayer: 0,
  questItem: true,
  releaseDate: '24 July 2006',
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.1,
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
  magicDamage: 0
};

export const DwarvenRockCake = Item.fromJson(rockCakeData);
