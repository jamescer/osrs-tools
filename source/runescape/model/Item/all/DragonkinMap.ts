import { Item, ItemJson } from '../Item';

const dragonkinMapData: ItemJson = {
  destroy: "You'll need to search Dallas Jones' chest again.",
  equipable: false,
  examine: 'An ancient map created by the Dragonkin.',
  highAlch: 0,
  id: 21043,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Dragonkin map',
  iconUrl: '/assets/items/21043.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragonkin_map',
  prayer: 0,
  questItem: true,
  releaseDate: '5 January 2017',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.01,
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

export const DragonkinMap = Item.fromJson(dragonkinMapData);
