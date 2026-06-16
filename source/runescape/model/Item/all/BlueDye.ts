import { Item, ItemJson } from '../Item';

const blueDyeData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A bright blue dye.',
  highAlch: 3,
  id: 1767,
  lowAlch: 2,
  members: false,
  meleeStrength: 0,
  name: 'Blue dye',
  iconUrl: '/assets/items/1767.png',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_dye',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: true,
  value: 5,
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

export const BlueDye = Item.fromJson(blueDyeData);
