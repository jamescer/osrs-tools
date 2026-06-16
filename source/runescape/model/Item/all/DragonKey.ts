import { Item, ItemJson } from '../Item';

const dragonKeyData: ItemJson = {
  destroy: "You'll need to collect the three key pieces again.",
  equipable: false,
  examine: 'A key made from three separate pieces.',
  highAlch: 0,
  id: 21042,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Dragon key',
  iconUrl: '/assets/items/21042.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_key',
  prayer: 0,
  questItem: true,
  releaseDate: '5 January 2017',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.013,
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

export const DragonKey = Item.fromJson(dragonKeyData);
