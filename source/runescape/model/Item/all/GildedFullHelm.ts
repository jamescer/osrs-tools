import { Item, ItemJson } from '../Item';

const gildedFullHelmData: ItemJson = {
  id: 3827,
  name: 'Gilded full helm',
  iconUrl: '/assets/items/3827.png',
  examine: 'Rune full helm with gold plate.',
  value: 21000,
  highAlch: 21000,
  lowAlch: 14000,
  weight: 2.268,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2004-10-26',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Gilded_full_helm',
  attackMagic: -8,
  attackRanged: -4,
  defenceStab: 20,
  defenceSlash: 20,
  defenceCrush: 18,
  defenceMagic: -1,
  defenceRanged: 20,
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const GildedFullHelm = Item.fromJson(gildedFullHelmData);
