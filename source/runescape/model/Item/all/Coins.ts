import { Item, ItemJson } from '../Item';

const coinsData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'Lovely money!',
  highAlch: 0,
  id: 995,
  lowAlch: 0,
  members: false,
  meleeStrength: 0,
  name: 'Coins',
  iconUrl: '/assets/items/995.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Coins',
  prayer: 0,
  questItem: false,
  releaseDate: '4 January 2001',
  stackable: true,
  tradeable: true,
  value: 1,
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
  magicDamage: 0
};

export const Coins = Item.fromJson(coinsData);
