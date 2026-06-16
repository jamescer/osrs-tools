import { Item, ItemJson } from '../Item';

const spadeData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A spade for digging things up.',
  highAlch: 2,
  id: 952,
  lowAlch: 1,
  members: false,
  meleeStrength: 0,
  name: 'Spade',
  iconUrl: '/assets/items/952.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Spade',
  prayer: 0,
  questItem: false,
  releaseDate: '11 June 2001',
  stackable: false,
  tradeable: true,
  value: 3,
  weight: 2.267,
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

export const Spade = Item.fromJson(spadeData);
