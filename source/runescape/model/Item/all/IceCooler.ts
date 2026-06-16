import { Item, ItemJson } from '../Item';

const iceCoolerData: ItemJson = {
  destroy: 'You can get more ice coolers from the Slayer Master in Canifis.',
  equipable: false,
  examine: 'Used to freeze Desert lizards.',
  highAlch: 0,
  id: 6696,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Ice cooler',
  iconUrl: '/assets/items/6696.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ice_cooler',
  prayer: 0,
  questItem: false,
  releaseDate: '20 January 2005',
  stackable: true,
  tradeable: false,
  value: 1,
  weight: 0.001,
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

export const IceCooler = Item.fromJson(iceCoolerData);
