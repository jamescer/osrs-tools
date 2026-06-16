import { Item, ItemJson } from '../Item';

const amuletOfMagicTData: ItemJson = {
  id: 2523,
  name: 'Amulet of magic (t)',
  iconUrl: '/assets/items/2523.png',
  examine: 'An amulet of magic (trimmed).',
  value: 12000,
  highAlch: 7200,
  lowAlch: 4800,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2006-12-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_magic_(t)',
  attackMagic: 8,
  defenceMagic: 8,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const AmuletOfMagicT = Item.fromJson(amuletOfMagicTData);
